goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20643__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20643 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20644__i = 0, G__20644__a = new Array(arguments.length -  0);
while (G__20644__i < G__20644__a.length) {G__20644__a[G__20644__i] = arguments[G__20644__i + 0]; ++G__20644__i;}
  args = new cljs.core.IndexedSeq(G__20644__a,0);
} 
return G__20643__delegate.call(this,args);};
G__20643.cljs$lang$maxFixedArity = 0;
G__20643.cljs$lang$applyTo = (function (arglist__20645){
var args = cljs.core.seq(arglist__20645);
return G__20643__delegate(args);
});
G__20643.cljs$core$IFn$_invoke$arity$variadic = G__20643__delegate;
return G__20643;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20646__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20646 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20647__i = 0, G__20647__a = new Array(arguments.length -  0);
while (G__20647__i < G__20647__a.length) {G__20647__a[G__20647__i] = arguments[G__20647__i + 0]; ++G__20647__i;}
  args = new cljs.core.IndexedSeq(G__20647__a,0);
} 
return G__20646__delegate.call(this,args);};
G__20646.cljs$lang$maxFixedArity = 0;
G__20646.cljs$lang$applyTo = (function (arglist__20648){
var args = cljs.core.seq(arglist__20648);
return G__20646__delegate(args);
});
G__20646.cljs$core$IFn$_invoke$arity$variadic = G__20646__delegate;
return G__20646;
})()
;

return null;
});
