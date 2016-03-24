goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19912__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19912 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19913__i = 0, G__19913__a = new Array(arguments.length -  0);
while (G__19913__i < G__19913__a.length) {G__19913__a[G__19913__i] = arguments[G__19913__i + 0]; ++G__19913__i;}
  args = new cljs.core.IndexedSeq(G__19913__a,0);
} 
return G__19912__delegate.call(this,args);};
G__19912.cljs$lang$maxFixedArity = 0;
G__19912.cljs$lang$applyTo = (function (arglist__19914){
var args = cljs.core.seq(arglist__19914);
return G__19912__delegate(args);
});
G__19912.cljs$core$IFn$_invoke$arity$variadic = G__19912__delegate;
return G__19912;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19915__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19915 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19916__i = 0, G__19916__a = new Array(arguments.length -  0);
while (G__19916__i < G__19916__a.length) {G__19916__a[G__19916__i] = arguments[G__19916__i + 0]; ++G__19916__i;}
  args = new cljs.core.IndexedSeq(G__19916__a,0);
} 
return G__19915__delegate.call(this,args);};
G__19915.cljs$lang$maxFixedArity = 0;
G__19915.cljs$lang$applyTo = (function (arglist__19917){
var args = cljs.core.seq(arglist__19917);
return G__19915__delegate(args);
});
G__19915.cljs$core$IFn$_invoke$arity$variadic = G__19915__delegate;
return G__19915;
})()
;

return null;
});
