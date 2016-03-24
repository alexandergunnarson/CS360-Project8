goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21070__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21071__i = 0, G__21071__a = new Array(arguments.length -  0);
while (G__21071__i < G__21071__a.length) {G__21071__a[G__21071__i] = arguments[G__21071__i + 0]; ++G__21071__i;}
  args = new cljs.core.IndexedSeq(G__21071__a,0);
} 
return G__21070__delegate.call(this,args);};
G__21070.cljs$lang$maxFixedArity = 0;
G__21070.cljs$lang$applyTo = (function (arglist__21072){
var args = cljs.core.seq(arglist__21072);
return G__21070__delegate(args);
});
G__21070.cljs$core$IFn$_invoke$arity$variadic = G__21070__delegate;
return G__21070;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21073__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21074__i = 0, G__21074__a = new Array(arguments.length -  0);
while (G__21074__i < G__21074__a.length) {G__21074__a[G__21074__i] = arguments[G__21074__i + 0]; ++G__21074__i;}
  args = new cljs.core.IndexedSeq(G__21074__a,0);
} 
return G__21073__delegate.call(this,args);};
G__21073.cljs$lang$maxFixedArity = 0;
G__21073.cljs$lang$applyTo = (function (arglist__21075){
var args = cljs.core.seq(arglist__21075);
return G__21073__delegate(args);
});
G__21073.cljs$core$IFn$_invoke$arity$variadic = G__21073__delegate;
return G__21073;
})()
;

return null;
});
