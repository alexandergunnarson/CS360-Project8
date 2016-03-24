goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20889__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20889 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20890__i = 0, G__20890__a = new Array(arguments.length -  0);
while (G__20890__i < G__20890__a.length) {G__20890__a[G__20890__i] = arguments[G__20890__i + 0]; ++G__20890__i;}
  args = new cljs.core.IndexedSeq(G__20890__a,0);
} 
return G__20889__delegate.call(this,args);};
G__20889.cljs$lang$maxFixedArity = 0;
G__20889.cljs$lang$applyTo = (function (arglist__20891){
var args = cljs.core.seq(arglist__20891);
return G__20889__delegate(args);
});
G__20889.cljs$core$IFn$_invoke$arity$variadic = G__20889__delegate;
return G__20889;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20892__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20892 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20893__i = 0, G__20893__a = new Array(arguments.length -  0);
while (G__20893__i < G__20893__a.length) {G__20893__a[G__20893__i] = arguments[G__20893__i + 0]; ++G__20893__i;}
  args = new cljs.core.IndexedSeq(G__20893__a,0);
} 
return G__20892__delegate.call(this,args);};
G__20892.cljs$lang$maxFixedArity = 0;
G__20892.cljs$lang$applyTo = (function (arglist__20894){
var args = cljs.core.seq(arglist__20894);
return G__20892__delegate(args);
});
G__20892.cljs$core$IFn$_invoke$arity$variadic = G__20892__delegate;
return G__20892;
})()
;

return null;
});
