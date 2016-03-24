goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19782__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19783__i = 0, G__19783__a = new Array(arguments.length -  0);
while (G__19783__i < G__19783__a.length) {G__19783__a[G__19783__i] = arguments[G__19783__i + 0]; ++G__19783__i;}
  args = new cljs.core.IndexedSeq(G__19783__a,0);
} 
return G__19782__delegate.call(this,args);};
G__19782.cljs$lang$maxFixedArity = 0;
G__19782.cljs$lang$applyTo = (function (arglist__19784){
var args = cljs.core.seq(arglist__19784);
return G__19782__delegate(args);
});
G__19782.cljs$core$IFn$_invoke$arity$variadic = G__19782__delegate;
return G__19782;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19785__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19786__i = 0, G__19786__a = new Array(arguments.length -  0);
while (G__19786__i < G__19786__a.length) {G__19786__a[G__19786__i] = arguments[G__19786__i + 0]; ++G__19786__i;}
  args = new cljs.core.IndexedSeq(G__19786__a,0);
} 
return G__19785__delegate.call(this,args);};
G__19785.cljs$lang$maxFixedArity = 0;
G__19785.cljs$lang$applyTo = (function (arglist__19787){
var args = cljs.core.seq(arglist__19787);
return G__19785__delegate(args);
});
G__19785.cljs$core$IFn$_invoke$arity$variadic = G__19785__delegate;
return G__19785;
})()
;

return null;
});
