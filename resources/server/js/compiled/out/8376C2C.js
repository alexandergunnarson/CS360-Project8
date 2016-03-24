goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21136__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21137__i = 0, G__21137__a = new Array(arguments.length -  0);
while (G__21137__i < G__21137__a.length) {G__21137__a[G__21137__i] = arguments[G__21137__i + 0]; ++G__21137__i;}
  args = new cljs.core.IndexedSeq(G__21137__a,0);
} 
return G__21136__delegate.call(this,args);};
G__21136.cljs$lang$maxFixedArity = 0;
G__21136.cljs$lang$applyTo = (function (arglist__21138){
var args = cljs.core.seq(arglist__21138);
return G__21136__delegate(args);
});
G__21136.cljs$core$IFn$_invoke$arity$variadic = G__21136__delegate;
return G__21136;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21139__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21140__i = 0, G__21140__a = new Array(arguments.length -  0);
while (G__21140__i < G__21140__a.length) {G__21140__a[G__21140__i] = arguments[G__21140__i + 0]; ++G__21140__i;}
  args = new cljs.core.IndexedSeq(G__21140__a,0);
} 
return G__21139__delegate.call(this,args);};
G__21139.cljs$lang$maxFixedArity = 0;
G__21139.cljs$lang$applyTo = (function (arglist__21141){
var args = cljs.core.seq(arglist__21141);
return G__21139__delegate(args);
});
G__21139.cljs$core$IFn$_invoke$arity$variadic = G__21139__delegate;
return G__21139;
})()
;

return null;
});
