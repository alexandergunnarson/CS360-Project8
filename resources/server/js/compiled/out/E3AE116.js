goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19996__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19997__i = 0, G__19997__a = new Array(arguments.length -  0);
while (G__19997__i < G__19997__a.length) {G__19997__a[G__19997__i] = arguments[G__19997__i + 0]; ++G__19997__i;}
  args = new cljs.core.IndexedSeq(G__19997__a,0);
} 
return G__19996__delegate.call(this,args);};
G__19996.cljs$lang$maxFixedArity = 0;
G__19996.cljs$lang$applyTo = (function (arglist__19998){
var args = cljs.core.seq(arglist__19998);
return G__19996__delegate(args);
});
G__19996.cljs$core$IFn$_invoke$arity$variadic = G__19996__delegate;
return G__19996;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19999__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20000__i = 0, G__20000__a = new Array(arguments.length -  0);
while (G__20000__i < G__20000__a.length) {G__20000__a[G__20000__i] = arguments[G__20000__i + 0]; ++G__20000__i;}
  args = new cljs.core.IndexedSeq(G__20000__a,0);
} 
return G__19999__delegate.call(this,args);};
G__19999.cljs$lang$maxFixedArity = 0;
G__19999.cljs$lang$applyTo = (function (arglist__20001){
var args = cljs.core.seq(arglist__20001);
return G__19999__delegate(args);
});
G__19999.cljs$core$IFn$_invoke$arity$variadic = G__19999__delegate;
return G__19999;
})()
;

return null;
});
