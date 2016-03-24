goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19239__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19240__i = 0, G__19240__a = new Array(arguments.length -  0);
while (G__19240__i < G__19240__a.length) {G__19240__a[G__19240__i] = arguments[G__19240__i + 0]; ++G__19240__i;}
  args = new cljs.core.IndexedSeq(G__19240__a,0);
} 
return G__19239__delegate.call(this,args);};
G__19239.cljs$lang$maxFixedArity = 0;
G__19239.cljs$lang$applyTo = (function (arglist__19241){
var args = cljs.core.seq(arglist__19241);
return G__19239__delegate(args);
});
G__19239.cljs$core$IFn$_invoke$arity$variadic = G__19239__delegate;
return G__19239;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19242__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19242 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19243__i = 0, G__19243__a = new Array(arguments.length -  0);
while (G__19243__i < G__19243__a.length) {G__19243__a[G__19243__i] = arguments[G__19243__i + 0]; ++G__19243__i;}
  args = new cljs.core.IndexedSeq(G__19243__a,0);
} 
return G__19242__delegate.call(this,args);};
G__19242.cljs$lang$maxFixedArity = 0;
G__19242.cljs$lang$applyTo = (function (arglist__19244){
var args = cljs.core.seq(arglist__19244);
return G__19242__delegate(args);
});
G__19242.cljs$core$IFn$_invoke$arity$variadic = G__19242__delegate;
return G__19242;
})()
;

return null;
});
