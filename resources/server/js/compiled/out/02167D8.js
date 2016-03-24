goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20578__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20579__i = 0, G__20579__a = new Array(arguments.length -  0);
while (G__20579__i < G__20579__a.length) {G__20579__a[G__20579__i] = arguments[G__20579__i + 0]; ++G__20579__i;}
  args = new cljs.core.IndexedSeq(G__20579__a,0);
} 
return G__20578__delegate.call(this,args);};
G__20578.cljs$lang$maxFixedArity = 0;
G__20578.cljs$lang$applyTo = (function (arglist__20580){
var args = cljs.core.seq(arglist__20580);
return G__20578__delegate(args);
});
G__20578.cljs$core$IFn$_invoke$arity$variadic = G__20578__delegate;
return G__20578;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20581__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20582__i = 0, G__20582__a = new Array(arguments.length -  0);
while (G__20582__i < G__20582__a.length) {G__20582__a[G__20582__i] = arguments[G__20582__i + 0]; ++G__20582__i;}
  args = new cljs.core.IndexedSeq(G__20582__a,0);
} 
return G__20581__delegate.call(this,args);};
G__20581.cljs$lang$maxFixedArity = 0;
G__20581.cljs$lang$applyTo = (function (arglist__20583){
var args = cljs.core.seq(arglist__20583);
return G__20581__delegate(args);
});
G__20581.cljs$core$IFn$_invoke$arity$variadic = G__20581__delegate;
return G__20581;
})()
;

return null;
});
