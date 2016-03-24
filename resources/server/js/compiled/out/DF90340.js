goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19112__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19113__i = 0, G__19113__a = new Array(arguments.length -  0);
while (G__19113__i < G__19113__a.length) {G__19113__a[G__19113__i] = arguments[G__19113__i + 0]; ++G__19113__i;}
  args = new cljs.core.IndexedSeq(G__19113__a,0);
} 
return G__19112__delegate.call(this,args);};
G__19112.cljs$lang$maxFixedArity = 0;
G__19112.cljs$lang$applyTo = (function (arglist__19114){
var args = cljs.core.seq(arglist__19114);
return G__19112__delegate(args);
});
G__19112.cljs$core$IFn$_invoke$arity$variadic = G__19112__delegate;
return G__19112;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19115__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19116__i = 0, G__19116__a = new Array(arguments.length -  0);
while (G__19116__i < G__19116__a.length) {G__19116__a[G__19116__i] = arguments[G__19116__i + 0]; ++G__19116__i;}
  args = new cljs.core.IndexedSeq(G__19116__a,0);
} 
return G__19115__delegate.call(this,args);};
G__19115.cljs$lang$maxFixedArity = 0;
G__19115.cljs$lang$applyTo = (function (arglist__19117){
var args = cljs.core.seq(arglist__19117);
return G__19115__delegate(args);
});
G__19115.cljs$core$IFn$_invoke$arity$variadic = G__19115__delegate;
return G__19115;
})()
;

return null;
});
