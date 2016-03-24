goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20170__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20170 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20171__i = 0, G__20171__a = new Array(arguments.length -  0);
while (G__20171__i < G__20171__a.length) {G__20171__a[G__20171__i] = arguments[G__20171__i + 0]; ++G__20171__i;}
  args = new cljs.core.IndexedSeq(G__20171__a,0);
} 
return G__20170__delegate.call(this,args);};
G__20170.cljs$lang$maxFixedArity = 0;
G__20170.cljs$lang$applyTo = (function (arglist__20172){
var args = cljs.core.seq(arglist__20172);
return G__20170__delegate(args);
});
G__20170.cljs$core$IFn$_invoke$arity$variadic = G__20170__delegate;
return G__20170;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20173__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20173 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20174__i = 0, G__20174__a = new Array(arguments.length -  0);
while (G__20174__i < G__20174__a.length) {G__20174__a[G__20174__i] = arguments[G__20174__i + 0]; ++G__20174__i;}
  args = new cljs.core.IndexedSeq(G__20174__a,0);
} 
return G__20173__delegate.call(this,args);};
G__20173.cljs$lang$maxFixedArity = 0;
G__20173.cljs$lang$applyTo = (function (arglist__20175){
var args = cljs.core.seq(arglist__20175);
return G__20173__delegate(args);
});
G__20173.cljs$core$IFn$_invoke$arity$variadic = G__20173__delegate;
return G__20173;
})()
;

return null;
});
