goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22385__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22386__i = 0, G__22386__a = new Array(arguments.length -  0);
while (G__22386__i < G__22386__a.length) {G__22386__a[G__22386__i] = arguments[G__22386__i + 0]; ++G__22386__i;}
  args = new cljs.core.IndexedSeq(G__22386__a,0);
} 
return G__22385__delegate.call(this,args);};
G__22385.cljs$lang$maxFixedArity = 0;
G__22385.cljs$lang$applyTo = (function (arglist__22387){
var args = cljs.core.seq(arglist__22387);
return G__22385__delegate(args);
});
G__22385.cljs$core$IFn$_invoke$arity$variadic = G__22385__delegate;
return G__22385;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22388__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22389__i = 0, G__22389__a = new Array(arguments.length -  0);
while (G__22389__i < G__22389__a.length) {G__22389__a[G__22389__i] = arguments[G__22389__i + 0]; ++G__22389__i;}
  args = new cljs.core.IndexedSeq(G__22389__a,0);
} 
return G__22388__delegate.call(this,args);};
G__22388.cljs$lang$maxFixedArity = 0;
G__22388.cljs$lang$applyTo = (function (arglist__22390){
var args = cljs.core.seq(arglist__22390);
return G__22388__delegate(args);
});
G__22388.cljs$core$IFn$_invoke$arity$variadic = G__22388__delegate;
return G__22388;
})()
;

return null;
});
