goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20082__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20083__i = 0, G__20083__a = new Array(arguments.length -  0);
while (G__20083__i < G__20083__a.length) {G__20083__a[G__20083__i] = arguments[G__20083__i + 0]; ++G__20083__i;}
  args = new cljs.core.IndexedSeq(G__20083__a,0);
} 
return G__20082__delegate.call(this,args);};
G__20082.cljs$lang$maxFixedArity = 0;
G__20082.cljs$lang$applyTo = (function (arglist__20084){
var args = cljs.core.seq(arglist__20084);
return G__20082__delegate(args);
});
G__20082.cljs$core$IFn$_invoke$arity$variadic = G__20082__delegate;
return G__20082;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20085__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20085 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20086__i = 0, G__20086__a = new Array(arguments.length -  0);
while (G__20086__i < G__20086__a.length) {G__20086__a[G__20086__i] = arguments[G__20086__i + 0]; ++G__20086__i;}
  args = new cljs.core.IndexedSeq(G__20086__a,0);
} 
return G__20085__delegate.call(this,args);};
G__20085.cljs$lang$maxFixedArity = 0;
G__20085.cljs$lang$applyTo = (function (arglist__20087){
var args = cljs.core.seq(arglist__20087);
return G__20085__delegate(args);
});
G__20085.cljs$core$IFn$_invoke$arity$variadic = G__20085__delegate;
return G__20085;
})()
;

return null;
});
