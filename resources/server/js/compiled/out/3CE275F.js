goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20232__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20233__i = 0, G__20233__a = new Array(arguments.length -  0);
while (G__20233__i < G__20233__a.length) {G__20233__a[G__20233__i] = arguments[G__20233__i + 0]; ++G__20233__i;}
  args = new cljs.core.IndexedSeq(G__20233__a,0);
} 
return G__20232__delegate.call(this,args);};
G__20232.cljs$lang$maxFixedArity = 0;
G__20232.cljs$lang$applyTo = (function (arglist__20234){
var args = cljs.core.seq(arglist__20234);
return G__20232__delegate(args);
});
G__20232.cljs$core$IFn$_invoke$arity$variadic = G__20232__delegate;
return G__20232;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20235__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20236__i = 0, G__20236__a = new Array(arguments.length -  0);
while (G__20236__i < G__20236__a.length) {G__20236__a[G__20236__i] = arguments[G__20236__i + 0]; ++G__20236__i;}
  args = new cljs.core.IndexedSeq(G__20236__a,0);
} 
return G__20235__delegate.call(this,args);};
G__20235.cljs$lang$maxFixedArity = 0;
G__20235.cljs$lang$applyTo = (function (arglist__20237){
var args = cljs.core.seq(arglist__20237);
return G__20235__delegate(args);
});
G__20235.cljs$core$IFn$_invoke$arity$variadic = G__20235__delegate;
return G__20235;
})()
;

return null;
});
