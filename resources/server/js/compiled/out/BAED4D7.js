goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21012__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21013__i = 0, G__21013__a = new Array(arguments.length -  0);
while (G__21013__i < G__21013__a.length) {G__21013__a[G__21013__i] = arguments[G__21013__i + 0]; ++G__21013__i;}
  args = new cljs.core.IndexedSeq(G__21013__a,0);
} 
return G__21012__delegate.call(this,args);};
G__21012.cljs$lang$maxFixedArity = 0;
G__21012.cljs$lang$applyTo = (function (arglist__21014){
var args = cljs.core.seq(arglist__21014);
return G__21012__delegate(args);
});
G__21012.cljs$core$IFn$_invoke$arity$variadic = G__21012__delegate;
return G__21012;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21015__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21016__i = 0, G__21016__a = new Array(arguments.length -  0);
while (G__21016__i < G__21016__a.length) {G__21016__a[G__21016__i] = arguments[G__21016__i + 0]; ++G__21016__i;}
  args = new cljs.core.IndexedSeq(G__21016__a,0);
} 
return G__21015__delegate.call(this,args);};
G__21015.cljs$lang$maxFixedArity = 0;
G__21015.cljs$lang$applyTo = (function (arglist__21017){
var args = cljs.core.seq(arglist__21017);
return G__21015__delegate(args);
});
G__21015.cljs$core$IFn$_invoke$arity$variadic = G__21015__delegate;
return G__21015;
})()
;

return null;
});
