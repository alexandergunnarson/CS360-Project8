goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20701__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20702__i = 0, G__20702__a = new Array(arguments.length -  0);
while (G__20702__i < G__20702__a.length) {G__20702__a[G__20702__i] = arguments[G__20702__i + 0]; ++G__20702__i;}
  args = new cljs.core.IndexedSeq(G__20702__a,0);
} 
return G__20701__delegate.call(this,args);};
G__20701.cljs$lang$maxFixedArity = 0;
G__20701.cljs$lang$applyTo = (function (arglist__20703){
var args = cljs.core.seq(arglist__20703);
return G__20701__delegate(args);
});
G__20701.cljs$core$IFn$_invoke$arity$variadic = G__20701__delegate;
return G__20701;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20704__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20705__i = 0, G__20705__a = new Array(arguments.length -  0);
while (G__20705__i < G__20705__a.length) {G__20705__a[G__20705__i] = arguments[G__20705__i + 0]; ++G__20705__i;}
  args = new cljs.core.IndexedSeq(G__20705__a,0);
} 
return G__20704__delegate.call(this,args);};
G__20704.cljs$lang$maxFixedArity = 0;
G__20704.cljs$lang$applyTo = (function (arglist__20706){
var args = cljs.core.seq(arglist__20706);
return G__20704__delegate(args);
});
G__20704.cljs$core$IFn$_invoke$arity$variadic = G__20704__delegate;
return G__20704;
})()
;

return null;
});
