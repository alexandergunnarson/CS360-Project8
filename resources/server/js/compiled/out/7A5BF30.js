goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21441__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21442__i = 0, G__21442__a = new Array(arguments.length -  0);
while (G__21442__i < G__21442__a.length) {G__21442__a[G__21442__i] = arguments[G__21442__i + 0]; ++G__21442__i;}
  args = new cljs.core.IndexedSeq(G__21442__a,0);
} 
return G__21441__delegate.call(this,args);};
G__21441.cljs$lang$maxFixedArity = 0;
G__21441.cljs$lang$applyTo = (function (arglist__21443){
var args = cljs.core.seq(arglist__21443);
return G__21441__delegate(args);
});
G__21441.cljs$core$IFn$_invoke$arity$variadic = G__21441__delegate;
return G__21441;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21444__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21445__i = 0, G__21445__a = new Array(arguments.length -  0);
while (G__21445__i < G__21445__a.length) {G__21445__a[G__21445__i] = arguments[G__21445__i + 0]; ++G__21445__i;}
  args = new cljs.core.IndexedSeq(G__21445__a,0);
} 
return G__21444__delegate.call(this,args);};
G__21444.cljs$lang$maxFixedArity = 0;
G__21444.cljs$lang$applyTo = (function (arglist__21446){
var args = cljs.core.seq(arglist__21446);
return G__21444__delegate(args);
});
G__21444.cljs$core$IFn$_invoke$arity$variadic = G__21444__delegate;
return G__21444;
})()
;

return null;
});
