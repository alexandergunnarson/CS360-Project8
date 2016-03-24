goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19193__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19194__i = 0, G__19194__a = new Array(arguments.length -  0);
while (G__19194__i < G__19194__a.length) {G__19194__a[G__19194__i] = arguments[G__19194__i + 0]; ++G__19194__i;}
  args = new cljs.core.IndexedSeq(G__19194__a,0);
} 
return G__19193__delegate.call(this,args);};
G__19193.cljs$lang$maxFixedArity = 0;
G__19193.cljs$lang$applyTo = (function (arglist__19195){
var args = cljs.core.seq(arglist__19195);
return G__19193__delegate(args);
});
G__19193.cljs$core$IFn$_invoke$arity$variadic = G__19193__delegate;
return G__19193;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19196__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19197__i = 0, G__19197__a = new Array(arguments.length -  0);
while (G__19197__i < G__19197__a.length) {G__19197__a[G__19197__i] = arguments[G__19197__i + 0]; ++G__19197__i;}
  args = new cljs.core.IndexedSeq(G__19197__a,0);
} 
return G__19196__delegate.call(this,args);};
G__19196.cljs$lang$maxFixedArity = 0;
G__19196.cljs$lang$applyTo = (function (arglist__19198){
var args = cljs.core.seq(arglist__19198);
return G__19196__delegate(args);
});
G__19196.cljs$core$IFn$_invoke$arity$variadic = G__19196__delegate;
return G__19196;
})()
;

return null;
});
