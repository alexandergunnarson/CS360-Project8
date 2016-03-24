goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21622__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21622 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21623__i = 0, G__21623__a = new Array(arguments.length -  0);
while (G__21623__i < G__21623__a.length) {G__21623__a[G__21623__i] = arguments[G__21623__i + 0]; ++G__21623__i;}
  args = new cljs.core.IndexedSeq(G__21623__a,0);
} 
return G__21622__delegate.call(this,args);};
G__21622.cljs$lang$maxFixedArity = 0;
G__21622.cljs$lang$applyTo = (function (arglist__21624){
var args = cljs.core.seq(arglist__21624);
return G__21622__delegate(args);
});
G__21622.cljs$core$IFn$_invoke$arity$variadic = G__21622__delegate;
return G__21622;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21625__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21625 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21626__i = 0, G__21626__a = new Array(arguments.length -  0);
while (G__21626__i < G__21626__a.length) {G__21626__a[G__21626__i] = arguments[G__21626__i + 0]; ++G__21626__i;}
  args = new cljs.core.IndexedSeq(G__21626__a,0);
} 
return G__21625__delegate.call(this,args);};
G__21625.cljs$lang$maxFixedArity = 0;
G__21625.cljs$lang$applyTo = (function (arglist__21627){
var args = cljs.core.seq(arglist__21627);
return G__21625__delegate(args);
});
G__21625.cljs$core$IFn$_invoke$arity$variadic = G__21625__delegate;
return G__21625;
})()
;

return null;
});
