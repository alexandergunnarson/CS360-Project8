goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19093__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19094__i = 0, G__19094__a = new Array(arguments.length -  0);
while (G__19094__i < G__19094__a.length) {G__19094__a[G__19094__i] = arguments[G__19094__i + 0]; ++G__19094__i;}
  args = new cljs.core.IndexedSeq(G__19094__a,0);
} 
return G__19093__delegate.call(this,args);};
G__19093.cljs$lang$maxFixedArity = 0;
G__19093.cljs$lang$applyTo = (function (arglist__19095){
var args = cljs.core.seq(arglist__19095);
return G__19093__delegate(args);
});
G__19093.cljs$core$IFn$_invoke$arity$variadic = G__19093__delegate;
return G__19093;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19096__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19097__i = 0, G__19097__a = new Array(arguments.length -  0);
while (G__19097__i < G__19097__a.length) {G__19097__a[G__19097__i] = arguments[G__19097__i + 0]; ++G__19097__i;}
  args = new cljs.core.IndexedSeq(G__19097__a,0);
} 
return G__19096__delegate.call(this,args);};
G__19096.cljs$lang$maxFixedArity = 0;
G__19096.cljs$lang$applyTo = (function (arglist__19098){
var args = cljs.core.seq(arglist__19098);
return G__19096__delegate(args);
});
G__19096.cljs$core$IFn$_invoke$arity$variadic = G__19096__delegate;
return G__19096;
})()
;

return null;
});
