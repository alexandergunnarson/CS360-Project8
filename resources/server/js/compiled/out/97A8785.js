goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19304__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19305__i = 0, G__19305__a = new Array(arguments.length -  0);
while (G__19305__i < G__19305__a.length) {G__19305__a[G__19305__i] = arguments[G__19305__i + 0]; ++G__19305__i;}
  args = new cljs.core.IndexedSeq(G__19305__a,0);
} 
return G__19304__delegate.call(this,args);};
G__19304.cljs$lang$maxFixedArity = 0;
G__19304.cljs$lang$applyTo = (function (arglist__19306){
var args = cljs.core.seq(arglist__19306);
return G__19304__delegate(args);
});
G__19304.cljs$core$IFn$_invoke$arity$variadic = G__19304__delegate;
return G__19304;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19307__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19308__i = 0, G__19308__a = new Array(arguments.length -  0);
while (G__19308__i < G__19308__a.length) {G__19308__a[G__19308__i] = arguments[G__19308__i + 0]; ++G__19308__i;}
  args = new cljs.core.IndexedSeq(G__19308__a,0);
} 
return G__19307__delegate.call(this,args);};
G__19307.cljs$lang$maxFixedArity = 0;
G__19307.cljs$lang$applyTo = (function (arglist__19309){
var args = cljs.core.seq(arglist__19309);
return G__19307__delegate(args);
});
G__19307.cljs$core$IFn$_invoke$arity$variadic = G__19307__delegate;
return G__19307;
})()
;

return null;
});
