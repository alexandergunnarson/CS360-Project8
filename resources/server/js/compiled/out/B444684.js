goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21739__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21740__i = 0, G__21740__a = new Array(arguments.length -  0);
while (G__21740__i < G__21740__a.length) {G__21740__a[G__21740__i] = arguments[G__21740__i + 0]; ++G__21740__i;}
  args = new cljs.core.IndexedSeq(G__21740__a,0);
} 
return G__21739__delegate.call(this,args);};
G__21739.cljs$lang$maxFixedArity = 0;
G__21739.cljs$lang$applyTo = (function (arglist__21741){
var args = cljs.core.seq(arglist__21741);
return G__21739__delegate(args);
});
G__21739.cljs$core$IFn$_invoke$arity$variadic = G__21739__delegate;
return G__21739;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21742__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21742 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21743__i = 0, G__21743__a = new Array(arguments.length -  0);
while (G__21743__i < G__21743__a.length) {G__21743__a[G__21743__i] = arguments[G__21743__i + 0]; ++G__21743__i;}
  args = new cljs.core.IndexedSeq(G__21743__a,0);
} 
return G__21742__delegate.call(this,args);};
G__21742.cljs$lang$maxFixedArity = 0;
G__21742.cljs$lang$applyTo = (function (arglist__21744){
var args = cljs.core.seq(arglist__21744);
return G__21742__delegate(args);
});
G__21742.cljs$core$IFn$_invoke$arity$variadic = G__21742__delegate;
return G__21742;
})()
;

return null;
});
