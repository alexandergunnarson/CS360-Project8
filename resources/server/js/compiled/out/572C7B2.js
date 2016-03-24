goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19660__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19661__i = 0, G__19661__a = new Array(arguments.length -  0);
while (G__19661__i < G__19661__a.length) {G__19661__a[G__19661__i] = arguments[G__19661__i + 0]; ++G__19661__i;}
  args = new cljs.core.IndexedSeq(G__19661__a,0);
} 
return G__19660__delegate.call(this,args);};
G__19660.cljs$lang$maxFixedArity = 0;
G__19660.cljs$lang$applyTo = (function (arglist__19662){
var args = cljs.core.seq(arglist__19662);
return G__19660__delegate(args);
});
G__19660.cljs$core$IFn$_invoke$arity$variadic = G__19660__delegate;
return G__19660;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19663__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19664__i = 0, G__19664__a = new Array(arguments.length -  0);
while (G__19664__i < G__19664__a.length) {G__19664__a[G__19664__i] = arguments[G__19664__i + 0]; ++G__19664__i;}
  args = new cljs.core.IndexedSeq(G__19664__a,0);
} 
return G__19663__delegate.call(this,args);};
G__19663.cljs$lang$maxFixedArity = 0;
G__19663.cljs$lang$applyTo = (function (arglist__19665){
var args = cljs.core.seq(arglist__19665);
return G__19663__delegate(args);
});
G__19663.cljs$core$IFn$_invoke$arity$variadic = G__19663__delegate;
return G__19663;
})()
;

return null;
});
