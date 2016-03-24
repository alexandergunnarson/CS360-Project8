goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21262__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21263__i = 0, G__21263__a = new Array(arguments.length -  0);
while (G__21263__i < G__21263__a.length) {G__21263__a[G__21263__i] = arguments[G__21263__i + 0]; ++G__21263__i;}
  args = new cljs.core.IndexedSeq(G__21263__a,0);
} 
return G__21262__delegate.call(this,args);};
G__21262.cljs$lang$maxFixedArity = 0;
G__21262.cljs$lang$applyTo = (function (arglist__21264){
var args = cljs.core.seq(arglist__21264);
return G__21262__delegate(args);
});
G__21262.cljs$core$IFn$_invoke$arity$variadic = G__21262__delegate;
return G__21262;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21265__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21266__i = 0, G__21266__a = new Array(arguments.length -  0);
while (G__21266__i < G__21266__a.length) {G__21266__a[G__21266__i] = arguments[G__21266__i + 0]; ++G__21266__i;}
  args = new cljs.core.IndexedSeq(G__21266__a,0);
} 
return G__21265__delegate.call(this,args);};
G__21265.cljs$lang$maxFixedArity = 0;
G__21265.cljs$lang$applyTo = (function (arglist__21267){
var args = cljs.core.seq(arglist__21267);
return G__21265__delegate(args);
});
G__21265.cljs$core$IFn$_invoke$arity$variadic = G__21265__delegate;
return G__21265;
})()
;

return null;
});
