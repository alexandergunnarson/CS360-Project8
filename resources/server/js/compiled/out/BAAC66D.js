goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19367__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19368__i = 0, G__19368__a = new Array(arguments.length -  0);
while (G__19368__i < G__19368__a.length) {G__19368__a[G__19368__i] = arguments[G__19368__i + 0]; ++G__19368__i;}
  args = new cljs.core.IndexedSeq(G__19368__a,0);
} 
return G__19367__delegate.call(this,args);};
G__19367.cljs$lang$maxFixedArity = 0;
G__19367.cljs$lang$applyTo = (function (arglist__19369){
var args = cljs.core.seq(arglist__19369);
return G__19367__delegate(args);
});
G__19367.cljs$core$IFn$_invoke$arity$variadic = G__19367__delegate;
return G__19367;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19370__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19370 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19371__i = 0, G__19371__a = new Array(arguments.length -  0);
while (G__19371__i < G__19371__a.length) {G__19371__a[G__19371__i] = arguments[G__19371__i + 0]; ++G__19371__i;}
  args = new cljs.core.IndexedSeq(G__19371__a,0);
} 
return G__19370__delegate.call(this,args);};
G__19370.cljs$lang$maxFixedArity = 0;
G__19370.cljs$lang$applyTo = (function (arglist__19372){
var args = cljs.core.seq(arglist__19372);
return G__19370__delegate(args);
});
G__19370.cljs$core$IFn$_invoke$arity$variadic = G__19370__delegate;
return G__19370;
})()
;

return null;
});
