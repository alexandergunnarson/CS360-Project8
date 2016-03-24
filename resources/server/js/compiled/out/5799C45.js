goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18921__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18922__i = 0, G__18922__a = new Array(arguments.length -  0);
while (G__18922__i < G__18922__a.length) {G__18922__a[G__18922__i] = arguments[G__18922__i + 0]; ++G__18922__i;}
  args = new cljs.core.IndexedSeq(G__18922__a,0);
} 
return G__18921__delegate.call(this,args);};
G__18921.cljs$lang$maxFixedArity = 0;
G__18921.cljs$lang$applyTo = (function (arglist__18923){
var args = cljs.core.seq(arglist__18923);
return G__18921__delegate(args);
});
G__18921.cljs$core$IFn$_invoke$arity$variadic = G__18921__delegate;
return G__18921;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18924__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18925__i = 0, G__18925__a = new Array(arguments.length -  0);
while (G__18925__i < G__18925__a.length) {G__18925__a[G__18925__i] = arguments[G__18925__i + 0]; ++G__18925__i;}
  args = new cljs.core.IndexedSeq(G__18925__a,0);
} 
return G__18924__delegate.call(this,args);};
G__18924.cljs$lang$maxFixedArity = 0;
G__18924.cljs$lang$applyTo = (function (arglist__18926){
var args = cljs.core.seq(arglist__18926);
return G__18924__delegate(args);
});
G__18924.cljs$core$IFn$_invoke$arity$variadic = G__18924__delegate;
return G__18924;
})()
;

return null;
});
