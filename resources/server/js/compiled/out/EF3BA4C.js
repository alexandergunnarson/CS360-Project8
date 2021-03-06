goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19448__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19448 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19449__i = 0, G__19449__a = new Array(arguments.length -  0);
while (G__19449__i < G__19449__a.length) {G__19449__a[G__19449__i] = arguments[G__19449__i + 0]; ++G__19449__i;}
  args = new cljs.core.IndexedSeq(G__19449__a,0);
} 
return G__19448__delegate.call(this,args);};
G__19448.cljs$lang$maxFixedArity = 0;
G__19448.cljs$lang$applyTo = (function (arglist__19450){
var args = cljs.core.seq(arglist__19450);
return G__19448__delegate(args);
});
G__19448.cljs$core$IFn$_invoke$arity$variadic = G__19448__delegate;
return G__19448;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19451__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19452__i = 0, G__19452__a = new Array(arguments.length -  0);
while (G__19452__i < G__19452__a.length) {G__19452__a[G__19452__i] = arguments[G__19452__i + 0]; ++G__19452__i;}
  args = new cljs.core.IndexedSeq(G__19452__a,0);
} 
return G__19451__delegate.call(this,args);};
G__19451.cljs$lang$maxFixedArity = 0;
G__19451.cljs$lang$applyTo = (function (arglist__19453){
var args = cljs.core.seq(arglist__19453);
return G__19451__delegate(args);
});
G__19451.cljs$core$IFn$_invoke$arity$variadic = G__19451__delegate;
return G__19451;
})()
;

return null;
});
