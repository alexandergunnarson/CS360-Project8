goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21388__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21389__i = 0, G__21389__a = new Array(arguments.length -  0);
while (G__21389__i < G__21389__a.length) {G__21389__a[G__21389__i] = arguments[G__21389__i + 0]; ++G__21389__i;}
  args = new cljs.core.IndexedSeq(G__21389__a,0);
} 
return G__21388__delegate.call(this,args);};
G__21388.cljs$lang$maxFixedArity = 0;
G__21388.cljs$lang$applyTo = (function (arglist__21390){
var args = cljs.core.seq(arglist__21390);
return G__21388__delegate(args);
});
G__21388.cljs$core$IFn$_invoke$arity$variadic = G__21388__delegate;
return G__21388;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21391__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21391 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21392__i = 0, G__21392__a = new Array(arguments.length -  0);
while (G__21392__i < G__21392__a.length) {G__21392__a[G__21392__i] = arguments[G__21392__i + 0]; ++G__21392__i;}
  args = new cljs.core.IndexedSeq(G__21392__a,0);
} 
return G__21391__delegate.call(this,args);};
G__21391.cljs$lang$maxFixedArity = 0;
G__21391.cljs$lang$applyTo = (function (arglist__21393){
var args = cljs.core.seq(arglist__21393);
return G__21391__delegate(args);
});
G__21391.cljs$core$IFn$_invoke$arity$variadic = G__21391__delegate;
return G__21391;
})()
;

return null;
});
