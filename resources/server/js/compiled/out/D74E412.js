goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19744__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19745__i = 0, G__19745__a = new Array(arguments.length -  0);
while (G__19745__i < G__19745__a.length) {G__19745__a[G__19745__i] = arguments[G__19745__i + 0]; ++G__19745__i;}
  args = new cljs.core.IndexedSeq(G__19745__a,0);
} 
return G__19744__delegate.call(this,args);};
G__19744.cljs$lang$maxFixedArity = 0;
G__19744.cljs$lang$applyTo = (function (arglist__19746){
var args = cljs.core.seq(arglist__19746);
return G__19744__delegate(args);
});
G__19744.cljs$core$IFn$_invoke$arity$variadic = G__19744__delegate;
return G__19744;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19747__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19748__i = 0, G__19748__a = new Array(arguments.length -  0);
while (G__19748__i < G__19748__a.length) {G__19748__a[G__19748__i] = arguments[G__19748__i + 0]; ++G__19748__i;}
  args = new cljs.core.IndexedSeq(G__19748__a,0);
} 
return G__19747__delegate.call(this,args);};
G__19747.cljs$lang$maxFixedArity = 0;
G__19747.cljs$lang$applyTo = (function (arglist__19749){
var args = cljs.core.seq(arglist__19749);
return G__19747__delegate(args);
});
G__19747.cljs$core$IFn$_invoke$arity$variadic = G__19747__delegate;
return G__19747;
})()
;

return null;
});
