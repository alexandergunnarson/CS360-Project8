goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19828__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19829__i = 0, G__19829__a = new Array(arguments.length -  0);
while (G__19829__i < G__19829__a.length) {G__19829__a[G__19829__i] = arguments[G__19829__i + 0]; ++G__19829__i;}
  args = new cljs.core.IndexedSeq(G__19829__a,0);
} 
return G__19828__delegate.call(this,args);};
G__19828.cljs$lang$maxFixedArity = 0;
G__19828.cljs$lang$applyTo = (function (arglist__19830){
var args = cljs.core.seq(arglist__19830);
return G__19828__delegate(args);
});
G__19828.cljs$core$IFn$_invoke$arity$variadic = G__19828__delegate;
return G__19828;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19831__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19832__i = 0, G__19832__a = new Array(arguments.length -  0);
while (G__19832__i < G__19832__a.length) {G__19832__a[G__19832__i] = arguments[G__19832__i + 0]; ++G__19832__i;}
  args = new cljs.core.IndexedSeq(G__19832__a,0);
} 
return G__19831__delegate.call(this,args);};
G__19831.cljs$lang$maxFixedArity = 0;
G__19831.cljs$lang$applyTo = (function (arglist__19833){
var args = cljs.core.seq(arglist__19833);
return G__19831__delegate(args);
});
G__19831.cljs$core$IFn$_invoke$arity$variadic = G__19831__delegate;
return G__19831;
})()
;

return null;
});
