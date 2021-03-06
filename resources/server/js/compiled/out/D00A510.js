goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19285__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19286__i = 0, G__19286__a = new Array(arguments.length -  0);
while (G__19286__i < G__19286__a.length) {G__19286__a[G__19286__i] = arguments[G__19286__i + 0]; ++G__19286__i;}
  args = new cljs.core.IndexedSeq(G__19286__a,0);
} 
return G__19285__delegate.call(this,args);};
G__19285.cljs$lang$maxFixedArity = 0;
G__19285.cljs$lang$applyTo = (function (arglist__19287){
var args = cljs.core.seq(arglist__19287);
return G__19285__delegate(args);
});
G__19285.cljs$core$IFn$_invoke$arity$variadic = G__19285__delegate;
return G__19285;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19288__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19288 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19289__i = 0, G__19289__a = new Array(arguments.length -  0);
while (G__19289__i < G__19289__a.length) {G__19289__a[G__19289__i] = arguments[G__19289__i + 0]; ++G__19289__i;}
  args = new cljs.core.IndexedSeq(G__19289__a,0);
} 
return G__19288__delegate.call(this,args);};
G__19288.cljs$lang$maxFixedArity = 0;
G__19288.cljs$lang$applyTo = (function (arglist__19290){
var args = cljs.core.seq(arglist__19290);
return G__19288__delegate(args);
});
G__19288.cljs$core$IFn$_invoke$arity$variadic = G__19288__delegate;
return G__19288;
})()
;

return null;
});
