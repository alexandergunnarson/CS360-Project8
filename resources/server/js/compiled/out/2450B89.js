goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21910__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21911__i = 0, G__21911__a = new Array(arguments.length -  0);
while (G__21911__i < G__21911__a.length) {G__21911__a[G__21911__i] = arguments[G__21911__i + 0]; ++G__21911__i;}
  args = new cljs.core.IndexedSeq(G__21911__a,0);
} 
return G__21910__delegate.call(this,args);};
G__21910.cljs$lang$maxFixedArity = 0;
G__21910.cljs$lang$applyTo = (function (arglist__21912){
var args = cljs.core.seq(arglist__21912);
return G__21910__delegate(args);
});
G__21910.cljs$core$IFn$_invoke$arity$variadic = G__21910__delegate;
return G__21910;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21913__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21913 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21914__i = 0, G__21914__a = new Array(arguments.length -  0);
while (G__21914__i < G__21914__a.length) {G__21914__a[G__21914__i] = arguments[G__21914__i + 0]; ++G__21914__i;}
  args = new cljs.core.IndexedSeq(G__21914__a,0);
} 
return G__21913__delegate.call(this,args);};
G__21913.cljs$lang$maxFixedArity = 0;
G__21913.cljs$lang$applyTo = (function (arglist__21915){
var args = cljs.core.seq(arglist__21915);
return G__21913__delegate(args);
});
G__21913.cljs$core$IFn$_invoke$arity$variadic = G__21913__delegate;
return G__21913;
})()
;

return null;
});
