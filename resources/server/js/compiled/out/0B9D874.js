goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22145__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22145 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22146__i = 0, G__22146__a = new Array(arguments.length -  0);
while (G__22146__i < G__22146__a.length) {G__22146__a[G__22146__i] = arguments[G__22146__i + 0]; ++G__22146__i;}
  args = new cljs.core.IndexedSeq(G__22146__a,0);
} 
return G__22145__delegate.call(this,args);};
G__22145.cljs$lang$maxFixedArity = 0;
G__22145.cljs$lang$applyTo = (function (arglist__22147){
var args = cljs.core.seq(arglist__22147);
return G__22145__delegate(args);
});
G__22145.cljs$core$IFn$_invoke$arity$variadic = G__22145__delegate;
return G__22145;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22148__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22148 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22149__i = 0, G__22149__a = new Array(arguments.length -  0);
while (G__22149__i < G__22149__a.length) {G__22149__a[G__22149__i] = arguments[G__22149__i + 0]; ++G__22149__i;}
  args = new cljs.core.IndexedSeq(G__22149__a,0);
} 
return G__22148__delegate.call(this,args);};
G__22148.cljs$lang$maxFixedArity = 0;
G__22148.cljs$lang$applyTo = (function (arglist__22150){
var args = cljs.core.seq(arglist__22150);
return G__22148__delegate(args);
});
G__22148.cljs$core$IFn$_invoke$arity$variadic = G__22148__delegate;
return G__22148;
})()
;

return null;
});
