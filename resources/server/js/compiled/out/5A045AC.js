goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22090__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22091__i = 0, G__22091__a = new Array(arguments.length -  0);
while (G__22091__i < G__22091__a.length) {G__22091__a[G__22091__i] = arguments[G__22091__i + 0]; ++G__22091__i;}
  args = new cljs.core.IndexedSeq(G__22091__a,0);
} 
return G__22090__delegate.call(this,args);};
G__22090.cljs$lang$maxFixedArity = 0;
G__22090.cljs$lang$applyTo = (function (arglist__22092){
var args = cljs.core.seq(arglist__22092);
return G__22090__delegate(args);
});
G__22090.cljs$core$IFn$_invoke$arity$variadic = G__22090__delegate;
return G__22090;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22093__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22094__i = 0, G__22094__a = new Array(arguments.length -  0);
while (G__22094__i < G__22094__a.length) {G__22094__a[G__22094__i] = arguments[G__22094__i + 0]; ++G__22094__i;}
  args = new cljs.core.IndexedSeq(G__22094__a,0);
} 
return G__22093__delegate.call(this,args);};
G__22093.cljs$lang$maxFixedArity = 0;
G__22093.cljs$lang$applyTo = (function (arglist__22095){
var args = cljs.core.seq(arglist__22095);
return G__22093__delegate(args);
});
G__22093.cljs$core$IFn$_invoke$arity$variadic = G__22093__delegate;
return G__22093;
})()
;

return null;
});
