goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21677__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21678__i = 0, G__21678__a = new Array(arguments.length -  0);
while (G__21678__i < G__21678__a.length) {G__21678__a[G__21678__i] = arguments[G__21678__i + 0]; ++G__21678__i;}
  args = new cljs.core.IndexedSeq(G__21678__a,0);
} 
return G__21677__delegate.call(this,args);};
G__21677.cljs$lang$maxFixedArity = 0;
G__21677.cljs$lang$applyTo = (function (arglist__21679){
var args = cljs.core.seq(arglist__21679);
return G__21677__delegate(args);
});
G__21677.cljs$core$IFn$_invoke$arity$variadic = G__21677__delegate;
return G__21677;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21680__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21681__i = 0, G__21681__a = new Array(arguments.length -  0);
while (G__21681__i < G__21681__a.length) {G__21681__a[G__21681__i] = arguments[G__21681__i + 0]; ++G__21681__i;}
  args = new cljs.core.IndexedSeq(G__21681__a,0);
} 
return G__21680__delegate.call(this,args);};
G__21680.cljs$lang$maxFixedArity = 0;
G__21680.cljs$lang$applyTo = (function (arglist__21682){
var args = cljs.core.seq(arglist__21682);
return G__21680__delegate(args);
});
G__21680.cljs$core$IFn$_invoke$arity$variadic = G__21680__delegate;
return G__21680;
})()
;

return null;
});
