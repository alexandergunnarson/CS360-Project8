goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19258__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19258 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19259__i = 0, G__19259__a = new Array(arguments.length -  0);
while (G__19259__i < G__19259__a.length) {G__19259__a[G__19259__i] = arguments[G__19259__i + 0]; ++G__19259__i;}
  args = new cljs.core.IndexedSeq(G__19259__a,0);
} 
return G__19258__delegate.call(this,args);};
G__19258.cljs$lang$maxFixedArity = 0;
G__19258.cljs$lang$applyTo = (function (arglist__19260){
var args = cljs.core.seq(arglist__19260);
return G__19258__delegate(args);
});
G__19258.cljs$core$IFn$_invoke$arity$variadic = G__19258__delegate;
return G__19258;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19261__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19262__i = 0, G__19262__a = new Array(arguments.length -  0);
while (G__19262__i < G__19262__a.length) {G__19262__a[G__19262__i] = arguments[G__19262__i + 0]; ++G__19262__i;}
  args = new cljs.core.IndexedSeq(G__19262__a,0);
} 
return G__19261__delegate.call(this,args);};
G__19261.cljs$lang$maxFixedArity = 0;
G__19261.cljs$lang$applyTo = (function (arglist__19263){
var args = cljs.core.seq(arglist__19263);
return G__19261__delegate(args);
});
G__19261.cljs$core$IFn$_invoke$arity$variadic = G__19261__delegate;
return G__19261;
})()
;

return null;
});
