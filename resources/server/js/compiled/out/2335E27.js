goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19166__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19166 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19167__i = 0, G__19167__a = new Array(arguments.length -  0);
while (G__19167__i < G__19167__a.length) {G__19167__a[G__19167__i] = arguments[G__19167__i + 0]; ++G__19167__i;}
  args = new cljs.core.IndexedSeq(G__19167__a,0);
} 
return G__19166__delegate.call(this,args);};
G__19166.cljs$lang$maxFixedArity = 0;
G__19166.cljs$lang$applyTo = (function (arglist__19168){
var args = cljs.core.seq(arglist__19168);
return G__19166__delegate(args);
});
G__19166.cljs$core$IFn$_invoke$arity$variadic = G__19166__delegate;
return G__19166;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19169__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19170__i = 0, G__19170__a = new Array(arguments.length -  0);
while (G__19170__i < G__19170__a.length) {G__19170__a[G__19170__i] = arguments[G__19170__i + 0]; ++G__19170__i;}
  args = new cljs.core.IndexedSeq(G__19170__a,0);
} 
return G__19169__delegate.call(this,args);};
G__19169.cljs$lang$maxFixedArity = 0;
G__19169.cljs$lang$applyTo = (function (arglist__19171){
var args = cljs.core.seq(arglist__19171);
return G__19169__delegate(args);
});
G__19169.cljs$core$IFn$_invoke$arity$variadic = G__19169__delegate;
return G__19169;
})()
;

return null;
});
