goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22323__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22324__i = 0, G__22324__a = new Array(arguments.length -  0);
while (G__22324__i < G__22324__a.length) {G__22324__a[G__22324__i] = arguments[G__22324__i + 0]; ++G__22324__i;}
  args = new cljs.core.IndexedSeq(G__22324__a,0);
} 
return G__22323__delegate.call(this,args);};
G__22323.cljs$lang$maxFixedArity = 0;
G__22323.cljs$lang$applyTo = (function (arglist__22325){
var args = cljs.core.seq(arglist__22325);
return G__22323__delegate(args);
});
G__22323.cljs$core$IFn$_invoke$arity$variadic = G__22323__delegate;
return G__22323;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22326__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22327__i = 0, G__22327__a = new Array(arguments.length -  0);
while (G__22327__i < G__22327__a.length) {G__22327__a[G__22327__i] = arguments[G__22327__i + 0]; ++G__22327__i;}
  args = new cljs.core.IndexedSeq(G__22327__a,0);
} 
return G__22326__delegate.call(this,args);};
G__22326.cljs$lang$maxFixedArity = 0;
G__22326.cljs$lang$applyTo = (function (arglist__22328){
var args = cljs.core.seq(arglist__22328);
return G__22326__delegate(args);
});
G__22326.cljs$core$IFn$_invoke$arity$variadic = G__22326__delegate;
return G__22326;
})()
;

return null;
});
