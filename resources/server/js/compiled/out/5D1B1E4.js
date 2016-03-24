goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22269__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22269 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22270__i = 0, G__22270__a = new Array(arguments.length -  0);
while (G__22270__i < G__22270__a.length) {G__22270__a[G__22270__i] = arguments[G__22270__i + 0]; ++G__22270__i;}
  args = new cljs.core.IndexedSeq(G__22270__a,0);
} 
return G__22269__delegate.call(this,args);};
G__22269.cljs$lang$maxFixedArity = 0;
G__22269.cljs$lang$applyTo = (function (arglist__22271){
var args = cljs.core.seq(arglist__22271);
return G__22269__delegate(args);
});
G__22269.cljs$core$IFn$_invoke$arity$variadic = G__22269__delegate;
return G__22269;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22272__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22273__i = 0, G__22273__a = new Array(arguments.length -  0);
while (G__22273__i < G__22273__a.length) {G__22273__a[G__22273__i] = arguments[G__22273__i + 0]; ++G__22273__i;}
  args = new cljs.core.IndexedSeq(G__22273__a,0);
} 
return G__22272__delegate.call(this,args);};
G__22272.cljs$lang$maxFixedArity = 0;
G__22272.cljs$lang$applyTo = (function (arglist__22274){
var args = cljs.core.seq(arglist__22274);
return G__22272__delegate(args);
});
G__22272.cljs$core$IFn$_invoke$arity$variadic = G__22272__delegate;
return G__22272;
})()
;

return null;
});
