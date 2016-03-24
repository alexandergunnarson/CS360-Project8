goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21793__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21793 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21794__i = 0, G__21794__a = new Array(arguments.length -  0);
while (G__21794__i < G__21794__a.length) {G__21794__a[G__21794__i] = arguments[G__21794__i + 0]; ++G__21794__i;}
  args = new cljs.core.IndexedSeq(G__21794__a,0);
} 
return G__21793__delegate.call(this,args);};
G__21793.cljs$lang$maxFixedArity = 0;
G__21793.cljs$lang$applyTo = (function (arglist__21795){
var args = cljs.core.seq(arglist__21795);
return G__21793__delegate(args);
});
G__21793.cljs$core$IFn$_invoke$arity$variadic = G__21793__delegate;
return G__21793;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21796__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21796 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21797__i = 0, G__21797__a = new Array(arguments.length -  0);
while (G__21797__i < G__21797__a.length) {G__21797__a[G__21797__i] = arguments[G__21797__i + 0]; ++G__21797__i;}
  args = new cljs.core.IndexedSeq(G__21797__a,0);
} 
return G__21796__delegate.call(this,args);};
G__21796.cljs$lang$maxFixedArity = 0;
G__21796.cljs$lang$applyTo = (function (arglist__21798){
var args = cljs.core.seq(arglist__21798);
return G__21796__delegate(args);
});
G__21796.cljs$core$IFn$_invoke$arity$variadic = G__21796__delegate;
return G__21796;
})()
;

return null;
});
