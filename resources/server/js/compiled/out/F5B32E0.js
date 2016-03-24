goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20034__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20034 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20035__i = 0, G__20035__a = new Array(arguments.length -  0);
while (G__20035__i < G__20035__a.length) {G__20035__a[G__20035__i] = arguments[G__20035__i + 0]; ++G__20035__i;}
  args = new cljs.core.IndexedSeq(G__20035__a,0);
} 
return G__20034__delegate.call(this,args);};
G__20034.cljs$lang$maxFixedArity = 0;
G__20034.cljs$lang$applyTo = (function (arglist__20036){
var args = cljs.core.seq(arglist__20036);
return G__20034__delegate(args);
});
G__20034.cljs$core$IFn$_invoke$arity$variadic = G__20034__delegate;
return G__20034;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20037__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20037 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20038__i = 0, G__20038__a = new Array(arguments.length -  0);
while (G__20038__i < G__20038__a.length) {G__20038__a[G__20038__i] = arguments[G__20038__i + 0]; ++G__20038__i;}
  args = new cljs.core.IndexedSeq(G__20038__a,0);
} 
return G__20037__delegate.call(this,args);};
G__20037.cljs$lang$maxFixedArity = 0;
G__20037.cljs$lang$applyTo = (function (arglist__20039){
var args = cljs.core.seq(arglist__20039);
return G__20037__delegate(args);
});
G__20037.cljs$core$IFn$_invoke$arity$variadic = G__20037__delegate;
return G__20037;
})()
;

return null;
});
