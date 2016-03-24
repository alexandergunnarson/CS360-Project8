goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20411__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20411 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20412__i = 0, G__20412__a = new Array(arguments.length -  0);
while (G__20412__i < G__20412__a.length) {G__20412__a[G__20412__i] = arguments[G__20412__i + 0]; ++G__20412__i;}
  args = new cljs.core.IndexedSeq(G__20412__a,0);
} 
return G__20411__delegate.call(this,args);};
G__20411.cljs$lang$maxFixedArity = 0;
G__20411.cljs$lang$applyTo = (function (arglist__20413){
var args = cljs.core.seq(arglist__20413);
return G__20411__delegate(args);
});
G__20411.cljs$core$IFn$_invoke$arity$variadic = G__20411__delegate;
return G__20411;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20414__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20414 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20415__i = 0, G__20415__a = new Array(arguments.length -  0);
while (G__20415__i < G__20415__a.length) {G__20415__a[G__20415__i] = arguments[G__20415__i + 0]; ++G__20415__i;}
  args = new cljs.core.IndexedSeq(G__20415__a,0);
} 
return G__20414__delegate.call(this,args);};
G__20414.cljs$lang$maxFixedArity = 0;
G__20414.cljs$lang$applyTo = (function (arglist__20416){
var args = cljs.core.seq(arglist__20416);
return G__20414__delegate(args);
});
G__20414.cljs$core$IFn$_invoke$arity$variadic = G__20414__delegate;
return G__20414;
})()
;

return null;
});
