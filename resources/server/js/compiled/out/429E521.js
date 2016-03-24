goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21973__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21974__i = 0, G__21974__a = new Array(arguments.length -  0);
while (G__21974__i < G__21974__a.length) {G__21974__a[G__21974__i] = arguments[G__21974__i + 0]; ++G__21974__i;}
  args = new cljs.core.IndexedSeq(G__21974__a,0);
} 
return G__21973__delegate.call(this,args);};
G__21973.cljs$lang$maxFixedArity = 0;
G__21973.cljs$lang$applyTo = (function (arglist__21975){
var args = cljs.core.seq(arglist__21975);
return G__21973__delegate(args);
});
G__21973.cljs$core$IFn$_invoke$arity$variadic = G__21973__delegate;
return G__21973;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21976__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21977__i = 0, G__21977__a = new Array(arguments.length -  0);
while (G__21977__i < G__21977__a.length) {G__21977__a[G__21977__i] = arguments[G__21977__i + 0]; ++G__21977__i;}
  args = new cljs.core.IndexedSeq(G__21977__a,0);
} 
return G__21976__delegate.call(this,args);};
G__21976.cljs$lang$maxFixedArity = 0;
G__21976.cljs$lang$applyTo = (function (arglist__21978){
var args = cljs.core.seq(arglist__21978);
return G__21976__delegate(args);
});
G__21976.cljs$core$IFn$_invoke$arity$variadic = G__21976__delegate;
return G__21976;
})()
;

return null;
});
