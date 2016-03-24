goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22439__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22439 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22440__i = 0, G__22440__a = new Array(arguments.length -  0);
while (G__22440__i < G__22440__a.length) {G__22440__a[G__22440__i] = arguments[G__22440__i + 0]; ++G__22440__i;}
  args = new cljs.core.IndexedSeq(G__22440__a,0);
} 
return G__22439__delegate.call(this,args);};
G__22439.cljs$lang$maxFixedArity = 0;
G__22439.cljs$lang$applyTo = (function (arglist__22441){
var args = cljs.core.seq(arglist__22441);
return G__22439__delegate(args);
});
G__22439.cljs$core$IFn$_invoke$arity$variadic = G__22439__delegate;
return G__22439;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22442__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22442 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22443__i = 0, G__22443__a = new Array(arguments.length -  0);
while (G__22443__i < G__22443__a.length) {G__22443__a[G__22443__i] = arguments[G__22443__i + 0]; ++G__22443__i;}
  args = new cljs.core.IndexedSeq(G__22443__a,0);
} 
return G__22442__delegate.call(this,args);};
G__22442.cljs$lang$maxFixedArity = 0;
G__22442.cljs$lang$applyTo = (function (arglist__22444){
var args = cljs.core.seq(arglist__22444);
return G__22442__delegate(args);
});
G__22442.cljs$core$IFn$_invoke$arity$variadic = G__22442__delegate;
return G__22442;
})()
;

return null;
});
