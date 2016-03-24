goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19493__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19494__i = 0, G__19494__a = new Array(arguments.length -  0);
while (G__19494__i < G__19494__a.length) {G__19494__a[G__19494__i] = arguments[G__19494__i + 0]; ++G__19494__i;}
  args = new cljs.core.IndexedSeq(G__19494__a,0);
} 
return G__19493__delegate.call(this,args);};
G__19493.cljs$lang$maxFixedArity = 0;
G__19493.cljs$lang$applyTo = (function (arglist__19495){
var args = cljs.core.seq(arglist__19495);
return G__19493__delegate(args);
});
G__19493.cljs$core$IFn$_invoke$arity$variadic = G__19493__delegate;
return G__19493;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19496__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19496 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19497__i = 0, G__19497__a = new Array(arguments.length -  0);
while (G__19497__i < G__19497__a.length) {G__19497__a[G__19497__i] = arguments[G__19497__i + 0]; ++G__19497__i;}
  args = new cljs.core.IndexedSeq(G__19497__a,0);
} 
return G__19496__delegate.call(this,args);};
G__19496.cljs$lang$maxFixedArity = 0;
G__19496.cljs$lang$applyTo = (function (arglist__19498){
var args = cljs.core.seq(arglist__19498);
return G__19496__delegate(args);
});
G__19496.cljs$core$IFn$_invoke$arity$variadic = G__19496__delegate;
return G__19496;
})()
;

return null;
});
