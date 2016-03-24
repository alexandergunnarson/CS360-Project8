goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20824__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20824 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20825__i = 0, G__20825__a = new Array(arguments.length -  0);
while (G__20825__i < G__20825__a.length) {G__20825__a[G__20825__i] = arguments[G__20825__i + 0]; ++G__20825__i;}
  args = new cljs.core.IndexedSeq(G__20825__a,0);
} 
return G__20824__delegate.call(this,args);};
G__20824.cljs$lang$maxFixedArity = 0;
G__20824.cljs$lang$applyTo = (function (arglist__20826){
var args = cljs.core.seq(arglist__20826);
return G__20824__delegate(args);
});
G__20824.cljs$core$IFn$_invoke$arity$variadic = G__20824__delegate;
return G__20824;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20827__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20827 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20828__i = 0, G__20828__a = new Array(arguments.length -  0);
while (G__20828__i < G__20828__a.length) {G__20828__a[G__20828__i] = arguments[G__20828__i + 0]; ++G__20828__i;}
  args = new cljs.core.IndexedSeq(G__20828__a,0);
} 
return G__20827__delegate.call(this,args);};
G__20827.cljs$lang$maxFixedArity = 0;
G__20827.cljs$lang$applyTo = (function (arglist__20829){
var args = cljs.core.seq(arglist__20829);
return G__20827__delegate(args);
});
G__20827.cljs$core$IFn$_invoke$arity$variadic = G__20827__delegate;
return G__20827;
})()
;

return null;
});
