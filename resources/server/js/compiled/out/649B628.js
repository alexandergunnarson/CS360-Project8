goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20349__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20350__i = 0, G__20350__a = new Array(arguments.length -  0);
while (G__20350__i < G__20350__a.length) {G__20350__a[G__20350__i] = arguments[G__20350__i + 0]; ++G__20350__i;}
  args = new cljs.core.IndexedSeq(G__20350__a,0);
} 
return G__20349__delegate.call(this,args);};
G__20349.cljs$lang$maxFixedArity = 0;
G__20349.cljs$lang$applyTo = (function (arglist__20351){
var args = cljs.core.seq(arglist__20351);
return G__20349__delegate(args);
});
G__20349.cljs$core$IFn$_invoke$arity$variadic = G__20349__delegate;
return G__20349;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20352__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20353__i = 0, G__20353__a = new Array(arguments.length -  0);
while (G__20353__i < G__20353__a.length) {G__20353__a[G__20353__i] = arguments[G__20353__i + 0]; ++G__20353__i;}
  args = new cljs.core.IndexedSeq(G__20353__a,0);
} 
return G__20352__delegate.call(this,args);};
G__20352.cljs$lang$maxFixedArity = 0;
G__20352.cljs$lang$applyTo = (function (arglist__20354){
var args = cljs.core.seq(arglist__20354);
return G__20352__delegate(args);
});
G__20352.cljs$core$IFn$_invoke$arity$variadic = G__20352__delegate;
return G__20352;
})()
;

return null;
});
