goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20766__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20766 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20767__i = 0, G__20767__a = new Array(arguments.length -  0);
while (G__20767__i < G__20767__a.length) {G__20767__a[G__20767__i] = arguments[G__20767__i + 0]; ++G__20767__i;}
  args = new cljs.core.IndexedSeq(G__20767__a,0);
} 
return G__20766__delegate.call(this,args);};
G__20766.cljs$lang$maxFixedArity = 0;
G__20766.cljs$lang$applyTo = (function (arglist__20768){
var args = cljs.core.seq(arglist__20768);
return G__20766__delegate(args);
});
G__20766.cljs$core$IFn$_invoke$arity$variadic = G__20766__delegate;
return G__20766;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20769__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20769 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20770__i = 0, G__20770__a = new Array(arguments.length -  0);
while (G__20770__i < G__20770__a.length) {G__20770__a[G__20770__i] = arguments[G__20770__i + 0]; ++G__20770__i;}
  args = new cljs.core.IndexedSeq(G__20770__a,0);
} 
return G__20769__delegate.call(this,args);};
G__20769.cljs$lang$maxFixedArity = 0;
G__20769.cljs$lang$applyTo = (function (arglist__20771){
var args = cljs.core.seq(arglist__20771);
return G__20769__delegate(args);
});
G__20769.cljs$core$IFn$_invoke$arity$variadic = G__20769__delegate;
return G__20769;
})()
;

return null;
});
