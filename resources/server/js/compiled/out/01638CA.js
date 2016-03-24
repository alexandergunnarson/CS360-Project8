goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21195__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21195 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21196__i = 0, G__21196__a = new Array(arguments.length -  0);
while (G__21196__i < G__21196__a.length) {G__21196__a[G__21196__i] = arguments[G__21196__i + 0]; ++G__21196__i;}
  args = new cljs.core.IndexedSeq(G__21196__a,0);
} 
return G__21195__delegate.call(this,args);};
G__21195.cljs$lang$maxFixedArity = 0;
G__21195.cljs$lang$applyTo = (function (arglist__21197){
var args = cljs.core.seq(arglist__21197);
return G__21195__delegate(args);
});
G__21195.cljs$core$IFn$_invoke$arity$variadic = G__21195__delegate;
return G__21195;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21198__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21199__i = 0, G__21199__a = new Array(arguments.length -  0);
while (G__21199__i < G__21199__a.length) {G__21199__a[G__21199__i] = arguments[G__21199__i + 0]; ++G__21199__i;}
  args = new cljs.core.IndexedSeq(G__21199__a,0);
} 
return G__21198__delegate.call(this,args);};
G__21198.cljs$lang$maxFixedArity = 0;
G__21198.cljs$lang$applyTo = (function (arglist__21200){
var args = cljs.core.seq(arglist__21200);
return G__21198__delegate(args);
});
G__21198.cljs$core$IFn$_invoke$arity$variadic = G__21198__delegate;
return G__21198;
})()
;

return null;
});
