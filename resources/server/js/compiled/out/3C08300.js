goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21502__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21503__i = 0, G__21503__a = new Array(arguments.length -  0);
while (G__21503__i < G__21503__a.length) {G__21503__a[G__21503__i] = arguments[G__21503__i + 0]; ++G__21503__i;}
  args = new cljs.core.IndexedSeq(G__21503__a,0);
} 
return G__21502__delegate.call(this,args);};
G__21502.cljs$lang$maxFixedArity = 0;
G__21502.cljs$lang$applyTo = (function (arglist__21504){
var args = cljs.core.seq(arglist__21504);
return G__21502__delegate(args);
});
G__21502.cljs$core$IFn$_invoke$arity$variadic = G__21502__delegate;
return G__21502;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21505__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21505 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21506__i = 0, G__21506__a = new Array(arguments.length -  0);
while (G__21506__i < G__21506__a.length) {G__21506__a[G__21506__i] = arguments[G__21506__i + 0]; ++G__21506__i;}
  args = new cljs.core.IndexedSeq(G__21506__a,0);
} 
return G__21505__delegate.call(this,args);};
G__21505.cljs$lang$maxFixedArity = 0;
G__21505.cljs$lang$applyTo = (function (arglist__21507){
var args = cljs.core.seq(arglist__21507);
return G__21505__delegate(args);
});
G__21505.cljs$core$IFn$_invoke$arity$variadic = G__21505__delegate;
return G__21505;
})()
;

return null;
});
