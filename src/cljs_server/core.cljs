(ns cljs-server.core
  (:require
    [cljs.nodejs     :as nodejs]
    [figwheel.client :as fw    ]
    [cljs.core.async :as async
      :refer [<! >! chan promise-chan put!]])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(nodejs/enable-util-print!)

(def port 3000)
; lein npm install 
(defonce express      (nodejs/require "express"     ))
(defonce serve-static (nodejs/require "serve-static"))
(defonce http         (nodejs/require "http"        ))
(defonce https        (nodejs/require "https"       ))

;(defonce assertjs     (nodejs/require "assert"      ))
(defonce mongo-db     (nodejs/require "mongodb"     ))
(defonce MongoClient  (.-MongoClient mongo-db))
(defonce MongoServer  (.-Server      mongo-db))

; Set up the connection to the local db
(defonce db-client    (MongoClient. (MongoServer. "localhost" 27017), #js {:native_parser true}))

; var Db = require('mongodb').Db,
;     ReplSetServers = require('mongodb').ReplSetServers,
;     ObjectID = require('mongodb').ObjectID,
;     Binary = require('mongodb').Binary,
;     GridStore = require('mongodb').GridStore,
;     Grid = require('mongodb').Grid,
;     Code = require('mongodb').Code,
;     BSON = require('mongodb').pure().BSON,
;     assert = require('assert');


(def url "mongodb://localhost:27017/test")

#_(defonce connect 
  (.connect MongoClient url (fn [err, db]
    (assert (= nil err))
    (println "Connected correctly to database.");
    #_(.close db))))

(defonce assertm      (nodejs/require "assert"      ))

(defonce StringDecoder (.-StringDecoder (nodejs/require "string_decoder")))

(def app (express))

(defn redirect!
  "Returns the result of getting the content referred to by |to-url|
   as the response of |server-resp|.

   Essentially a redirect on the part of the client from the server's
   endpoint to a 3rd party endpoint, but with CORS headers all worked out."
  [to-url server-resp]
  (let [callback (fn [resp]
                   (let [decoder (StringDecoder. "utf8")
                         sb      (array)]
                     (.on resp "data"
                       (fn [chunk]
                         (let [str-chunk (-> decoder (.write chunk))]
                           (.push sb str-chunk))))
                     (.on resp "end"
                       (fn []
                         (.setHeader server-resp "Access-Control-Allow-Origin" "*")
                         (.send server-resp (.join sb ""))))))]
    (if (not= -1 (.indexOf to-url "http://"))
        (.get http  to-url callback)
        (.get https to-url callback))))

(defn stream->str
  [stream]
  (let [decoder (StringDecoder. "utf8")
        sb      (array)
        ret     (promise-chan)]
    (.on stream "data"
      (fn [chunk]
        (let [str-chunk (-> decoder (.write chunk))]
          (.push sb str-chunk))))
    (.on stream "end"
      (fn []
        (put! ret (.join sb ""))))
    ret))

(.post app "/post-comments" 
  (fn [req server-resp]
    (go (let [body    (<! (stream->str req))
              comment (js/JSON.parse body)]
          ; Open the connection to the server
          (try
            (.open db-client
              (fn [err client]
                (assert (nil? err))
                ; Get the first db and do an update document on it
                (let [db (.db client "test")]
                  (-> db
                      (.collection "comments")
                      (.insert comment
                        (fn [err result]
                          (assert (nil? err))
                          (.send server-resp (js/JSON.stringify #js{:success true}))
                          ; Close the connection
                          (.close client)))))))
            (catch js/Error e (println e)))))))

(.get app "/get-comments"
  (fn [req server-resp]
    (try (.open db-client
           (fn [err client]
             (assert (nil? err))
             ; Get the first db and do an update document on it
             (let [db (.db client "test")]
               (-> db
                   (.collection "comments")
                   (.find #js{}
                     (fn [err result]
                      (assert (nil? err))
                      (.toArray result
                        (fn [err arr]
                          (assert (nil? err))
                          ; Close the connection
                          (try (.close client) (catch js/Error e (println e)))
                          (.send server-resp (js/JSON.stringify arr))))))))))
         (catch js/Error e (println e)))))

(.use app (serve-static "resources/public" #js {:index "index.html"}))

(defn test- []
  #_(.post http "http://localhost:3000/post-comments" "HERE IS COMMENT"))

(def -main 
  (fn []
    ; Capture a reference to the |app| function (don't use it directly).
    ; this allows you to change routes and have them hot-loaded as you
    ; code.
    (doto (.createServer http #(app %1 %2))
      (.listen port))))

(set! *main-cli-fn* -main)

; Passoff:

; You should test your server to make sure it works with your jquery script.   Your submission to learningsuite should contain:

; The URL of your jquery script
; The URL of your REST server for comments
; The URL of the github repository with all of your source
; The TAs will need to access the URL of your server, so you need to have it run even after you log out.  Try using nohup to make this happen:

; Grading:

; (30%) The GET interface for your REST service returns the current comments
; (30%) You can pass the POST interface for your REST service a new comment and it correctly inserts it. 
; (25%) Your jquery application displays things properly.
; (15%) Do something creative with your comments application.