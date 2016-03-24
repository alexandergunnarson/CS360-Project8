goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19066__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19066 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19067__i = 0, G__19067__a = new Array(arguments.length -  0);
while (G__19067__i < G__19067__a.length) {G__19067__a[G__19067__i] = arguments[G__19067__i + 0]; ++G__19067__i;}
  args = new cljs.core.IndexedSeq(G__19067__a,0);
} 
return G__19066__delegate.call(this,args);};
G__19066.cljs$lang$maxFixedArity = 0;
G__19066.cljs$lang$applyTo = (function (arglist__19068){
var args = cljs.core.seq(arglist__19068);
return G__19066__delegate(args);
});
G__19066.cljs$core$IFn$_invoke$arity$variadic = G__19066__delegate;
return G__19066;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19069__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19069 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19070__i = 0, G__19070__a = new Array(arguments.length -  0);
while (G__19070__i < G__19070__a.length) {G__19070__a[G__19070__i] = arguments[G__19070__i + 0]; ++G__19070__i;}
  args = new cljs.core.IndexedSeq(G__19070__a,0);
} 
return G__19069__delegate.call(this,args);};
G__19069.cljs$lang$maxFixedArity = 0;
G__19069.cljs$lang$applyTo = (function (arglist__19071){
var args = cljs.core.seq(arglist__19071);
return G__19069__delegate(args);
});
G__19069.cljs$core$IFn$_invoke$arity$variadic = G__19069__delegate;
return G__19069;
})()
;

return null;
});
