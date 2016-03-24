goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19614__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19614 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19615__i = 0, G__19615__a = new Array(arguments.length -  0);
while (G__19615__i < G__19615__a.length) {G__19615__a[G__19615__i] = arguments[G__19615__i + 0]; ++G__19615__i;}
  args = new cljs.core.IndexedSeq(G__19615__a,0);
} 
return G__19614__delegate.call(this,args);};
G__19614.cljs$lang$maxFixedArity = 0;
G__19614.cljs$lang$applyTo = (function (arglist__19616){
var args = cljs.core.seq(arglist__19616);
return G__19614__delegate(args);
});
G__19614.cljs$core$IFn$_invoke$arity$variadic = G__19614__delegate;
return G__19614;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19617__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19618__i = 0, G__19618__a = new Array(arguments.length -  0);
while (G__19618__i < G__19618__a.length) {G__19618__a[G__19618__i] = arguments[G__19618__i + 0]; ++G__19618__i;}
  args = new cljs.core.IndexedSeq(G__19618__a,0);
} 
return G__19617__delegate.call(this,args);};
G__19617.cljs$lang$maxFixedArity = 0;
G__19617.cljs$lang$applyTo = (function (arglist__19619){
var args = cljs.core.seq(arglist__19619);
return G__19617__delegate(args);
});
G__19617.cljs$core$IFn$_invoke$arity$variadic = G__19617__delegate;
return G__19617;
})()
;

return null;
});
