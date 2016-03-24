goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24101__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24102__i = 0, G__24102__a = new Array(arguments.length -  0);
while (G__24102__i < G__24102__a.length) {G__24102__a[G__24102__i] = arguments[G__24102__i + 0]; ++G__24102__i;}
  args = new cljs.core.IndexedSeq(G__24102__a,0);
} 
return G__24101__delegate.call(this,args);};
G__24101.cljs$lang$maxFixedArity = 0;
G__24101.cljs$lang$applyTo = (function (arglist__24103){
var args = cljs.core.seq(arglist__24103);
return G__24101__delegate(args);
});
G__24101.cljs$core$IFn$_invoke$arity$variadic = G__24101__delegate;
return G__24101;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24104__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24105__i = 0, G__24105__a = new Array(arguments.length -  0);
while (G__24105__i < G__24105__a.length) {G__24105__a[G__24105__i] = arguments[G__24105__i + 0]; ++G__24105__i;}
  args = new cljs.core.IndexedSeq(G__24105__a,0);
} 
return G__24104__delegate.call(this,args);};
G__24104.cljs$lang$maxFixedArity = 0;
G__24104.cljs$lang$applyTo = (function (arglist__24106){
var args = cljs.core.seq(arglist__24106);
return G__24104__delegate(args);
});
G__24104.cljs$core$IFn$_invoke$arity$variadic = G__24104__delegate;
return G__24104;
})()
;

return null;
});
