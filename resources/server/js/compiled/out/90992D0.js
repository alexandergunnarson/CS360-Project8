goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21322__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21322 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21323__i = 0, G__21323__a = new Array(arguments.length -  0);
while (G__21323__i < G__21323__a.length) {G__21323__a[G__21323__i] = arguments[G__21323__i + 0]; ++G__21323__i;}
  args = new cljs.core.IndexedSeq(G__21323__a,0);
} 
return G__21322__delegate.call(this,args);};
G__21322.cljs$lang$maxFixedArity = 0;
G__21322.cljs$lang$applyTo = (function (arglist__21324){
var args = cljs.core.seq(arglist__21324);
return G__21322__delegate(args);
});
G__21322.cljs$core$IFn$_invoke$arity$variadic = G__21322__delegate;
return G__21322;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21325__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21326__i = 0, G__21326__a = new Array(arguments.length -  0);
while (G__21326__i < G__21326__a.length) {G__21326__a[G__21326__i] = arguments[G__21326__i + 0]; ++G__21326__i;}
  args = new cljs.core.IndexedSeq(G__21326__a,0);
} 
return G__21325__delegate.call(this,args);};
G__21325.cljs$lang$maxFixedArity = 0;
G__21325.cljs$lang$applyTo = (function (arglist__21327){
var args = cljs.core.seq(arglist__21327);
return G__21325__delegate(args);
});
G__21325.cljs$core$IFn$_invoke$arity$variadic = G__21325__delegate;
return G__21325;
})()
;

return null;
});
