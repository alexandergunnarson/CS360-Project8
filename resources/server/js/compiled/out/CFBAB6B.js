goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20464__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20464 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20465__i = 0, G__20465__a = new Array(arguments.length -  0);
while (G__20465__i < G__20465__a.length) {G__20465__a[G__20465__i] = arguments[G__20465__i + 0]; ++G__20465__i;}
  args = new cljs.core.IndexedSeq(G__20465__a,0);
} 
return G__20464__delegate.call(this,args);};
G__20464.cljs$lang$maxFixedArity = 0;
G__20464.cljs$lang$applyTo = (function (arglist__20466){
var args = cljs.core.seq(arglist__20466);
return G__20464__delegate(args);
});
G__20464.cljs$core$IFn$_invoke$arity$variadic = G__20464__delegate;
return G__20464;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20467__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20467 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20468__i = 0, G__20468__a = new Array(arguments.length -  0);
while (G__20468__i < G__20468__a.length) {G__20468__a[G__20468__i] = arguments[G__20468__i + 0]; ++G__20468__i;}
  args = new cljs.core.IndexedSeq(G__20468__a,0);
} 
return G__20467__delegate.call(this,args);};
G__20467.cljs$lang$maxFixedArity = 0;
G__20467.cljs$lang$applyTo = (function (arglist__20469){
var args = cljs.core.seq(arglist__20469);
return G__20467__delegate(args);
});
G__20467.cljs$core$IFn$_invoke$arity$variadic = G__20467__delegate;
return G__20467;
})()
;

return null;
});
