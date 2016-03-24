// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs_server.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('figwheel.client');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
cljs_server.core.port = (3000);
if(typeof cljs_server.core.express !== 'undefined'){
} else {
cljs_server.core.express = cljs.nodejs.require.call(null,"express");
}
if(typeof cljs_server.core.serve_static !== 'undefined'){
} else {
cljs_server.core.serve_static = cljs.nodejs.require.call(null,"serve-static");
}
if(typeof cljs_server.core.http !== 'undefined'){
} else {
cljs_server.core.http = cljs.nodejs.require.call(null,"http");
}
if(typeof cljs_server.core.https !== 'undefined'){
} else {
cljs_server.core.https = cljs.nodejs.require.call(null,"https");
}
if(typeof cljs_server.core.mongo_db !== 'undefined'){
} else {
cljs_server.core.mongo_db = cljs.nodejs.require.call(null,"mongodb");
}
if(typeof cljs_server.core.MongoClient !== 'undefined'){
} else {
cljs_server.core.MongoClient = cljs_server.core.mongo_db.MongoClient;
}
if(typeof cljs_server.core.MongoServer !== 'undefined'){
} else {
cljs_server.core.MongoServer = cljs_server.core.mongo_db.Server;
}
if(typeof cljs_server.core.db_client !== 'undefined'){
} else {
cljs_server.core.db_client = (new cljs_server.core.MongoClient((new cljs_server.core.MongoServer("localhost",(27017))),{"native_parser": true}));
}
cljs_server.core.url = "mongodb://localhost:27017/test";
if(typeof cljs_server.core.assertm !== 'undefined'){
} else {
cljs_server.core.assertm = cljs.nodejs.require.call(null,"assert");
}
if(typeof cljs_server.core.StringDecoder !== 'undefined'){
} else {
cljs_server.core.StringDecoder = cljs.nodejs.require.call(null,"string_decoder").StringDecoder;
}
cljs_server.core.app = cljs_server.core.express.call(null);
/**
 * Returns the result of getting the content referred to by |to-url|
 * as the response of |server-resp|.
 * 
 * Essentially a redirect on the part of the client from the server's
 * endpoint to a 3rd party endpoint, but with CORS headers all worked out.
 */
cljs_server.core.redirect_BANG_ = (function cljs_server$core$redirect_BANG_(to_url,server_resp){
var callback = (function (resp){
var decoder = (new cljs_server.core.StringDecoder("utf8"));
var sb = [];
resp.on("data",((function (decoder,sb){
return (function (chunk){
var str_chunk = decoder.write(chunk);
return sb.push(str_chunk);
});})(decoder,sb))
);

return resp.on("end",((function (decoder,sb){
return (function (){
server_resp.setHeader("Access-Control-Allow-Origin","*");

return server_resp.send(sb.join(""));
});})(decoder,sb))
);
});
if(cljs.core.not_EQ_.call(null,(-1),to_url.indexOf("http://"))){
return cljs_server.core.http.get(to_url,callback);
} else {
return cljs_server.core.https.get(to_url,callback);
}
});
cljs_server.core.stream__GT_str = (function cljs_server$core$stream__GT_str(stream){
var decoder = (new cljs_server.core.StringDecoder("utf8"));
var sb = [];
var ret = cljs.core.async.promise_chan.call(null);
stream.on("data",((function (decoder,sb,ret){
return (function (chunk){
var str_chunk = decoder.write(chunk);
return sb.push(str_chunk);
});})(decoder,sb,ret))
);

stream.on("end",((function (decoder,sb,ret){
return (function (){
return cljs.core.async.put_BANG_.call(null,ret,sb.join(""));
});})(decoder,sb,ret))
);

return ret;
});
cljs_server.core.app.post("/post-comments",(function (req,server_resp){
var c__18836__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18836__auto__){
return (function (){
var f__18837__auto__ = (function (){var switch__18815__auto__ = ((function (c__18836__auto__){
return (function (state_22410){
var state_val_22411 = (state_22410[(1)]);
if((state_val_22411 === (1))){
var inst_22396 = cljs_server.core.stream__GT_str.call(null,req);
var state_22410__$1 = state_22410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22410__$1,(2),inst_22396);
} else {
if((state_val_22411 === (2))){
var inst_22398 = (state_22410[(7)]);
var inst_22398__$1 = (state_22410[(2)]);
var inst_22399 = JSON.parse(inst_22398__$1);
var state_22410__$1 = (function (){var statearr_22412 = state_22410;
(statearr_22412[(7)] = inst_22398__$1);

(statearr_22412[(8)] = inst_22399);

return statearr_22412;
})();
var statearr_22413_22423 = state_22410__$1;
(statearr_22413_22423[(2)] = null);

(statearr_22413_22423[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22411 === (3))){
var inst_22408 = (state_22410[(2)]);
var state_22410__$1 = state_22410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22410__$1,inst_22408);
} else {
if((state_val_22411 === (4))){
var inst_22400 = (state_22410[(2)]);
var inst_22401 = cljs.core.println.call(null,inst_22400);
var state_22410__$1 = state_22410;
var statearr_22414_22424 = state_22410__$1;
(statearr_22414_22424[(2)] = inst_22401);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22410__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22411 === (5))){
var inst_22398 = (state_22410[(7)]);
var inst_22399 = (state_22410[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22410,(4),Error,null,(3));
var inst_22405 = (function (){var body = inst_22398;
var comment = inst_22399;
return ((function (body,comment,inst_22398,inst_22399,_,state_val_22411,c__18836__auto__){
return (function (err,client){
if((err == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null))))].join('')));
}

var db = client.db("test");
return db.collection("comments").insert(comment,((function (db,body,comment,inst_22398,inst_22399,_,state_val_22411,c__18836__auto__){
return (function (err__$1,result){
if((err__$1 == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null))))].join('')));
}

server_resp.send(JSON.stringify({"success": true}));

return client.close();
});})(db,body,comment,inst_22398,inst_22399,_,state_val_22411,c__18836__auto__))
);
});
;})(body,comment,inst_22398,inst_22399,_,state_val_22411,c__18836__auto__))
})();
var inst_22406 = cljs_server.core.db_client.open(inst_22405);
var state_22410__$1 = state_22410;
var statearr_22415_22425 = state_22410__$1;
(statearr_22415_22425[(2)] = inst_22406);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22410__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__18836__auto__))
;
return ((function (switch__18815__auto__,c__18836__auto__){
return (function() {
var cljs_server$core$state_machine__18816__auto__ = null;
var cljs_server$core$state_machine__18816__auto____0 = (function (){
var statearr_22419 = [null,null,null,null,null,null,null,null,null];
(statearr_22419[(0)] = cljs_server$core$state_machine__18816__auto__);

(statearr_22419[(1)] = (1));

return statearr_22419;
});
var cljs_server$core$state_machine__18816__auto____1 = (function (state_22410){
while(true){
var ret_value__18817__auto__ = (function (){try{while(true){
var result__18818__auto__ = switch__18815__auto__.call(null,state_22410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18818__auto__;
}
break;
}
}catch (e22420){if((e22420 instanceof Object)){
var ex__18819__auto__ = e22420;
var statearr_22421_22426 = state_22410;
(statearr_22421_22426[(5)] = ex__18819__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22427 = state_22410;
state_22410 = G__22427;
continue;
} else {
return ret_value__18817__auto__;
}
break;
}
});
cljs_server$core$state_machine__18816__auto__ = function(state_22410){
switch(arguments.length){
case 0:
return cljs_server$core$state_machine__18816__auto____0.call(this);
case 1:
return cljs_server$core$state_machine__18816__auto____1.call(this,state_22410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_server$core$state_machine__18816__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_server$core$state_machine__18816__auto____0;
cljs_server$core$state_machine__18816__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_server$core$state_machine__18816__auto____1;
return cljs_server$core$state_machine__18816__auto__;
})()
;})(switch__18815__auto__,c__18836__auto__))
})();
var state__18838__auto__ = (function (){var statearr_22422 = f__18837__auto__.call(null);
(statearr_22422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18836__auto__);

return statearr_22422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18838__auto__);
});})(c__18836__auto__))
);

return c__18836__auto__;
}));
cljs_server.core.app.get("/get-comments",(function (req,server_resp){
try{return cljs_server.core.db_client.open((function (err,client){
if((err == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null))))].join('')));
}

var db = client.db("test");
return db.collection("comments").find({},((function (db){
return (function (err__$1,result){
if((err__$1 == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null))))].join('')));
}

return result.toArray(((function (db){
return (function (err__$2,arr){
if((err__$2 == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null))))].join('')));
}

try{client.close();
}catch (e22429){if((e22429 instanceof Error)){
var e_22430 = e22429;
cljs.core.println.call(null,e_22430);
} else {
throw e22429;

}
}
return server_resp.send(JSON.stringify(arr));
});})(db))
);
});})(db))
);
}));
}catch (e22428){if((e22428 instanceof Error)){
var e = e22428;
return cljs.core.println.call(null,e);
} else {
throw e22428;

}
}}));
cljs_server.core.app.use(cljs_server.core.serve_static.call(null,"resources/public",{"index": "index.html"}));
cljs_server.core.test_ = (function cljs_server$core$test_(){
return null;
});
cljs_server.core._main = (function cljs_server$core$_main(){
var G__22434 = cljs_server.core.http.createServer((function (p1__22431_SHARP_,p2__22432_SHARP_){
return cljs_server.core.app.call(null,p1__22431_SHARP_,p2__22432_SHARP_);
}));
G__22434.listen(cljs_server.core.port);

return G__22434;
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_server.core._main;

//# sourceMappingURL=core.js.map?rel=1458836281386