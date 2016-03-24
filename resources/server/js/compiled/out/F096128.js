goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19212__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19212 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19213__i = 0, G__19213__a = new Array(arguments.length -  0);
while (G__19213__i < G__19213__a.length) {G__19213__a[G__19213__i] = arguments[G__19213__i + 0]; ++G__19213__i;}
  args = new cljs.core.IndexedSeq(G__19213__a,0);
} 
return G__19212__delegate.call(this,args);};
G__19212.cljs$lang$maxFixedArity = 0;
G__19212.cljs$lang$applyTo = (function (arglist__19214){
var args = cljs.core.seq(arglist__19214);
return G__19212__delegate(args);
});
G__19212.cljs$core$IFn$_invoke$arity$variadic = G__19212__delegate;
return G__19212;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19215__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19216__i = 0, G__19216__a = new Array(arguments.length -  0);
while (G__19216__i < G__19216__a.length) {G__19216__a[G__19216__i] = arguments[G__19216__i + 0]; ++G__19216__i;}
  args = new cljs.core.IndexedSeq(G__19216__a,0);
} 
return G__19215__delegate.call(this,args);};
G__19215.cljs$lang$maxFixedArity = 0;
G__19215.cljs$lang$applyTo = (function (arglist__19217){
var args = cljs.core.seq(arglist__19217);
return G__19215__delegate(args);
});
G__19215.cljs$core$IFn$_invoke$arity$variadic = G__19215__delegate;
return G__19215;
})()
;

return null;
});
