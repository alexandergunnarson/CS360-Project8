goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19866__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19867__i = 0, G__19867__a = new Array(arguments.length -  0);
while (G__19867__i < G__19867__a.length) {G__19867__a[G__19867__i] = arguments[G__19867__i + 0]; ++G__19867__i;}
  args = new cljs.core.IndexedSeq(G__19867__a,0);
} 
return G__19866__delegate.call(this,args);};
G__19866.cljs$lang$maxFixedArity = 0;
G__19866.cljs$lang$applyTo = (function (arglist__19868){
var args = cljs.core.seq(arglist__19868);
return G__19866__delegate(args);
});
G__19866.cljs$core$IFn$_invoke$arity$variadic = G__19866__delegate;
return G__19866;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19869__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19869 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19870__i = 0, G__19870__a = new Array(arguments.length -  0);
while (G__19870__i < G__19870__a.length) {G__19870__a[G__19870__i] = arguments[G__19870__i + 0]; ++G__19870__i;}
  args = new cljs.core.IndexedSeq(G__19870__a,0);
} 
return G__19869__delegate.call(this,args);};
G__19869.cljs$lang$maxFixedArity = 0;
G__19869.cljs$lang$applyTo = (function (arglist__19871){
var args = cljs.core.seq(arglist__19871);
return G__19869__delegate(args);
});
G__19869.cljs$core$IFn$_invoke$arity$variadic = G__19869__delegate;
return G__19869;
})()
;

return null;
});
