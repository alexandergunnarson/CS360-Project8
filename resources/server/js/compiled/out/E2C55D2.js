goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21855__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21855 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21856__i = 0, G__21856__a = new Array(arguments.length -  0);
while (G__21856__i < G__21856__a.length) {G__21856__a[G__21856__i] = arguments[G__21856__i + 0]; ++G__21856__i;}
  args = new cljs.core.IndexedSeq(G__21856__a,0);
} 
return G__21855__delegate.call(this,args);};
G__21855.cljs$lang$maxFixedArity = 0;
G__21855.cljs$lang$applyTo = (function (arglist__21857){
var args = cljs.core.seq(arglist__21857);
return G__21855__delegate(args);
});
G__21855.cljs$core$IFn$_invoke$arity$variadic = G__21855__delegate;
return G__21855;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21858__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21858 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21859__i = 0, G__21859__a = new Array(arguments.length -  0);
while (G__21859__i < G__21859__a.length) {G__21859__a[G__21859__i] = arguments[G__21859__i + 0]; ++G__21859__i;}
  args = new cljs.core.IndexedSeq(G__21859__a,0);
} 
return G__21858__delegate.call(this,args);};
G__21858.cljs$lang$maxFixedArity = 0;
G__21858.cljs$lang$applyTo = (function (arglist__21860){
var args = cljs.core.seq(arglist__21860);
return G__21858__delegate(args);
});
G__21858.cljs$core$IFn$_invoke$arity$variadic = G__21858__delegate;
return G__21858;
})()
;

return null;
});
