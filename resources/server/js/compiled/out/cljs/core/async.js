// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19023 = [];
var len__17861__auto___19029 = arguments.length;
var i__17862__auto___19030 = (0);
while(true){
if((i__17862__auto___19030 < len__17861__auto___19029)){
args19023.push((arguments[i__17862__auto___19030]));

var G__19031 = (i__17862__auto___19030 + (1));
i__17862__auto___19030 = G__19031;
continue;
} else {
}
break;
}

var G__19025 = args19023.length;
switch (G__19025) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19023.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19026 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19026 = (function (f,blockable,meta19027){
this.f = f;
this.blockable = blockable;
this.meta19027 = meta19027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19028,meta19027__$1){
var self__ = this;
var _19028__$1 = this;
return (new cljs.core.async.t_cljs$core$async19026(self__.f,self__.blockable,meta19027__$1));
});

cljs.core.async.t_cljs$core$async19026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19028){
var self__ = this;
var _19028__$1 = this;
return self__.meta19027;
});

cljs.core.async.t_cljs$core$async19026.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19026.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19026.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19026.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19027","meta19027",-1888318779,null)], null);
});

cljs.core.async.t_cljs$core$async19026.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19026";

cljs.core.async.t_cljs$core$async19026.cljs$lang$ctorPrWriter = (function (this__17401__auto__,writer__17402__auto__,opt__17403__auto__){
return cljs.core._write.call(null,writer__17402__auto__,"cljs.core.async/t_cljs$core$async19026");
});

cljs.core.async.__GT_t_cljs$core$async19026 = (function cljs$core$async$__GT_t_cljs$core$async19026(f__$1,blockable__$1,meta19027){
return (new cljs.core.async.t_cljs$core$async19026(f__$1,blockable__$1,meta19027));
});

}

return (new cljs.core.async.t_cljs$core$async19026(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19035 = [];
var len__17861__auto___19038 = arguments.length;
var i__17862__auto___19039 = (0);
while(true){
if((i__17862__auto___19039 < len__17861__auto___19038)){
args19035.push((arguments[i__17862__auto___19039]));

var G__19040 = (i__17862__auto___19039 + (1));
i__17862__auto___19039 = G__19040;
continue;
} else {
}
break;
}

var G__19037 = args19035.length;
switch (G__19037) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19035.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19042 = [];
var len__17861__auto___19045 = arguments.length;
var i__17862__auto___19046 = (0);
while(true){
if((i__17862__auto___19046 < len__17861__auto___19045)){
args19042.push((arguments[i__17862__auto___19046]));

var G__19047 = (i__17862__auto___19046 + (1));
i__17862__auto___19046 = G__19047;
continue;
} else {
}
break;
}

var G__19044 = args19042.length;
switch (G__19044) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19042.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19049 = [];
var len__17861__auto___19052 = arguments.length;
var i__17862__auto___19053 = (0);
while(true){
if((i__17862__auto___19053 < len__17861__auto___19052)){
args19049.push((arguments[i__17862__auto___19053]));

var G__19054 = (i__17862__auto___19053 + (1));
i__17862__auto___19053 = G__19054;
continue;
} else {
}
break;
}

var G__19051 = args19049.length;
switch (G__19051) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19049.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19056 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19056);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19056,ret){
return (function (){
return fn1.call(null,val_19056);
});})(val_19056,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19057 = [];
var len__17861__auto___19060 = arguments.length;
var i__17862__auto___19061 = (0);
while(true){
if((i__17862__auto___19061 < len__17861__auto___19060)){
args19057.push((arguments[i__17862__auto___19061]));

var G__19062 = (i__17862__auto___19061 + (1));
i__17862__auto___19061 = G__19062;
continue;
} else {
}
break;
}

var G__19059 = args19057.length;
switch (G__19059) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19057.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17706__auto___19064 = n;
var x_19065 = (0);
while(true){
if((x_19065 < n__17706__auto___19064)){
(a[x_19065] = (0));

var G__19066 = (x_19065 + (1));
x_19065 = G__19066;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19067 = (i + (1));
i = G__19067;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19071 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19071 = (function (alt_flag,flag,meta19072){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19072 = meta19072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19073,meta19072__$1){
var self__ = this;
var _19073__$1 = this;
return (new cljs.core.async.t_cljs$core$async19071(self__.alt_flag,self__.flag,meta19072__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19071.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19073){
var self__ = this;
var _19073__$1 = this;
return self__.meta19072;
});})(flag))
;

cljs.core.async.t_cljs$core$async19071.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19071.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19071.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19072","meta19072",2010548643,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19071.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19071";

cljs.core.async.t_cljs$core$async19071.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17401__auto__,writer__17402__auto__,opt__17403__auto__){
return cljs.core._write.call(null,writer__17402__auto__,"cljs.core.async/t_cljs$core$async19071");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19071 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19071(alt_flag__$1,flag__$1,meta19072){
return (new cljs.core.async.t_cljs$core$async19071(alt_flag__$1,flag__$1,meta19072));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19071(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19077 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19077 = (function (alt_handler,flag,cb,meta19078){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19078 = meta19078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19079,meta19078__$1){
var self__ = this;
var _19079__$1 = this;
return (new cljs.core.async.t_cljs$core$async19077(self__.alt_handler,self__.flag,self__.cb,meta19078__$1));
});

cljs.core.async.t_cljs$core$async19077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19079){
var self__ = this;
var _19079__$1 = this;
return self__.meta19078;
});

cljs.core.async.t_cljs$core$async19077.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19077.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19077.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19077.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19078","meta19078",39383052,null)], null);
});

cljs.core.async.t_cljs$core$async19077.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19077";

cljs.core.async.t_cljs$core$async19077.cljs$lang$ctorPrWriter = (function (this__17401__auto__,writer__17402__auto__,opt__17403__auto__){
return cljs.core._write.call(null,writer__17402__auto__,"cljs.core.async/t_cljs$core$async19077");
});

cljs.core.async.__GT_t_cljs$core$async19077 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19077(alt_handler__$1,flag__$1,cb__$1,meta19078){
return (new cljs.core.async.t_cljs$core$async19077(alt_handler__$1,flag__$1,cb__$1,meta19078));
});

}

return (new cljs.core.async.t_cljs$core$async19077(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19080_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19080_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19081_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19081_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16803__auto__ = wport;
if(cljs.core.truth_(or__16803__auto__)){
return or__16803__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19082 = (i + (1));
i = G__19082;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16803__auto__ = ret;
if(cljs.core.truth_(or__16803__auto__)){
return or__16803__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16791__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16791__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16791__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17868__auto__ = [];
var len__17861__auto___19088 = arguments.length;
var i__17862__auto___19089 = (0);
while(true){
if((i__17862__auto___19089 < len__17861__auto___19088)){
args__17868__auto__.push((arguments[i__17862__auto___19089]));

var G__19090 = (i__17862__auto___19089 + (1));
i__17862__auto___19089 = G__19090;
continue;
} else {
}
break;
}

var argseq__17869__auto__ = ((((1) < args__17868__auto__.length))?(new cljs.core.IndexedSeq(args__17868__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17869__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19085){
var map__19086 = p__19085;
var map__19086__$1 = ((((!((map__19086 == null)))?((((map__19086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19086):map__19086);
var opts = map__19086__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19083){
var G__19084 = cljs.core.first.call(null,seq19083);
var seq19083__$1 = cljs.core.next.call(null,seq19083);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19084,seq19083__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19091 = [];
var len__17861__auto___19141 = arguments.length;
var i__17862__auto___19142 = (0);
while(true){
if((i__17862__auto___19142 < len__17861__auto___19141)){
args19091.push((arguments[i__17862__auto___19142]));

var G__19143 = (i__17862__auto___19142 + (1));
i__17862__auto___19142 = G__19143;
continue;
} else {
}
break;
}

var G__19093 = args19091.length;
switch (G__19093) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19091.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18978__auto___19145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto___19145){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto___19145){
return (function (state_19117){
var state_val_19118 = (state_19117[(1)]);
if((state_val_19118 === (7))){
var inst_19113 = (state_19117[(2)]);
var state_19117__$1 = state_19117;
var statearr_19119_19146 = state_19117__$1;
(statearr_19119_19146[(2)] = inst_19113);

(statearr_19119_19146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19118 === (1))){
var state_19117__$1 = state_19117;
var statearr_19120_19147 = state_19117__$1;
(statearr_19120_19147[(2)] = null);

(statearr_19120_19147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19118 === (4))){
var inst_19096 = (state_19117[(7)]);
var inst_19096__$1 = (state_19117[(2)]);
var inst_19097 = (inst_19096__$1 == null);
var state_19117__$1 = (function (){var statearr_19121 = state_19117;
(statearr_19121[(7)] = inst_19096__$1);

return statearr_19121;
})();
if(cljs.core.truth_(inst_19097)){
var statearr_19122_19148 = state_19117__$1;
(statearr_19122_19148[(1)] = (5));

} else {
var statearr_19123_19149 = state_19117__$1;
(statearr_19123_19149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19118 === (13))){
var state_19117__$1 = state_19117;
var statearr_19124_19150 = state_19117__$1;
(statearr_19124_19150[(2)] = null);

(statearr_19124_19150[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19118 === (6))){
var inst_19096 = (state_19117[(7)]);
var state_19117__$1 = state_19117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19117__$1,(11),to,inst_19096);
} else {
if((state_val_19118 === (3))){
var inst_19115 = (state_19117[(2)]);
var state_19117__$1 = state_19117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19117__$1,inst_19115);
} else {
if((state_val_19118 === (12))){
var state_19117__$1 = state_19117;
var statearr_19125_19151 = state_19117__$1;
(statearr_19125_19151[(2)] = null);

(statearr_19125_19151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19118 === (2))){
var state_19117__$1 = state_19117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19117__$1,(4),from);
} else {
if((state_val_19118 === (11))){
var inst_19106 = (state_19117[(2)]);
var state_19117__$1 = state_19117;
if(cljs.core.truth_(inst_19106)){
var statearr_19126_19152 = state_19117__$1;
(statearr_19126_19152[(1)] = (12));

} else {
var statearr_19127_19153 = state_19117__$1;
(statearr_19127_19153[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19118 === (9))){
var state_19117__$1 = state_19117;
var statearr_19128_19154 = state_19117__$1;
(statearr_19128_19154[(2)] = null);

(statearr_19128_19154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19118 === (5))){
var state_19117__$1 = state_19117;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19129_19155 = state_19117__$1;
(statearr_19129_19155[(1)] = (8));

} else {
var statearr_19130_19156 = state_19117__$1;
(statearr_19130_19156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19118 === (14))){
var inst_19111 = (state_19117[(2)]);
var state_19117__$1 = state_19117;
var statearr_19131_19157 = state_19117__$1;
(statearr_19131_19157[(2)] = inst_19111);

(statearr_19131_19157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19118 === (10))){
var inst_19103 = (state_19117[(2)]);
var state_19117__$1 = state_19117;
var statearr_19132_19158 = state_19117__$1;
(statearr_19132_19158[(2)] = inst_19103);

(statearr_19132_19158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19118 === (8))){
var inst_19100 = cljs.core.async.close_BANG_.call(null,to);
var state_19117__$1 = state_19117;
var statearr_19133_19159 = state_19117__$1;
(statearr_19133_19159[(2)] = inst_19100);

(statearr_19133_19159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18978__auto___19145))
;
return ((function (switch__18866__auto__,c__18978__auto___19145){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_19137 = [null,null,null,null,null,null,null,null];
(statearr_19137[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_19137[(1)] = (1));

return statearr_19137;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_19117){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_19117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e19138){if((e19138 instanceof Object)){
var ex__18870__auto__ = e19138;
var statearr_19139_19160 = state_19117;
(statearr_19139_19160[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19161 = state_19117;
state_19117 = G__19161;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_19117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_19117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto___19145))
})();
var state__18980__auto__ = (function (){var statearr_19140 = f__18979__auto__.call(null);
(statearr_19140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto___19145);

return statearr_19140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto___19145))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19345){
var vec__19346 = p__19345;
var v = cljs.core.nth.call(null,vec__19346,(0),null);
var p = cljs.core.nth.call(null,vec__19346,(1),null);
var job = vec__19346;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18978__auto___19528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto___19528,res,vec__19346,v,p,job,jobs,results){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto___19528,res,vec__19346,v,p,job,jobs,results){
return (function (state_19351){
var state_val_19352 = (state_19351[(1)]);
if((state_val_19352 === (1))){
var state_19351__$1 = state_19351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19351__$1,(2),res,v);
} else {
if((state_val_19352 === (2))){
var inst_19348 = (state_19351[(2)]);
var inst_19349 = cljs.core.async.close_BANG_.call(null,res);
var state_19351__$1 = (function (){var statearr_19353 = state_19351;
(statearr_19353[(7)] = inst_19348);

return statearr_19353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19351__$1,inst_19349);
} else {
return null;
}
}
});})(c__18978__auto___19528,res,vec__19346,v,p,job,jobs,results))
;
return ((function (switch__18866__auto__,c__18978__auto___19528,res,vec__19346,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0 = (function (){
var statearr_19357 = [null,null,null,null,null,null,null,null];
(statearr_19357[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__);

(statearr_19357[(1)] = (1));

return statearr_19357;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1 = (function (state_19351){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_19351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e19358){if((e19358 instanceof Object)){
var ex__18870__auto__ = e19358;
var statearr_19359_19529 = state_19351;
(statearr_19359_19529[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19530 = state_19351;
state_19351 = G__19530;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = function(state_19351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1.call(this,state_19351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto___19528,res,vec__19346,v,p,job,jobs,results))
})();
var state__18980__auto__ = (function (){var statearr_19360 = f__18979__auto__.call(null);
(statearr_19360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto___19528);

return statearr_19360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto___19528,res,vec__19346,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19361){
var vec__19362 = p__19361;
var v = cljs.core.nth.call(null,vec__19362,(0),null);
var p = cljs.core.nth.call(null,vec__19362,(1),null);
var job = vec__19362;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17706__auto___19531 = n;
var __19532 = (0);
while(true){
if((__19532 < n__17706__auto___19531)){
var G__19363_19533 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19363_19533) {
case "compute":
var c__18978__auto___19535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19532,c__18978__auto___19535,G__19363_19533,n__17706__auto___19531,jobs,results,process,async){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (__19532,c__18978__auto___19535,G__19363_19533,n__17706__auto___19531,jobs,results,process,async){
return (function (state_19376){
var state_val_19377 = (state_19376[(1)]);
if((state_val_19377 === (1))){
var state_19376__$1 = state_19376;
var statearr_19378_19536 = state_19376__$1;
(statearr_19378_19536[(2)] = null);

(statearr_19378_19536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19377 === (2))){
var state_19376__$1 = state_19376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19376__$1,(4),jobs);
} else {
if((state_val_19377 === (3))){
var inst_19374 = (state_19376[(2)]);
var state_19376__$1 = state_19376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19376__$1,inst_19374);
} else {
if((state_val_19377 === (4))){
var inst_19366 = (state_19376[(2)]);
var inst_19367 = process.call(null,inst_19366);
var state_19376__$1 = state_19376;
if(cljs.core.truth_(inst_19367)){
var statearr_19379_19537 = state_19376__$1;
(statearr_19379_19537[(1)] = (5));

} else {
var statearr_19380_19538 = state_19376__$1;
(statearr_19380_19538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19377 === (5))){
var state_19376__$1 = state_19376;
var statearr_19381_19539 = state_19376__$1;
(statearr_19381_19539[(2)] = null);

(statearr_19381_19539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19377 === (6))){
var state_19376__$1 = state_19376;
var statearr_19382_19540 = state_19376__$1;
(statearr_19382_19540[(2)] = null);

(statearr_19382_19540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19377 === (7))){
var inst_19372 = (state_19376[(2)]);
var state_19376__$1 = state_19376;
var statearr_19383_19541 = state_19376__$1;
(statearr_19383_19541[(2)] = inst_19372);

(statearr_19383_19541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19532,c__18978__auto___19535,G__19363_19533,n__17706__auto___19531,jobs,results,process,async))
;
return ((function (__19532,switch__18866__auto__,c__18978__auto___19535,G__19363_19533,n__17706__auto___19531,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0 = (function (){
var statearr_19387 = [null,null,null,null,null,null,null];
(statearr_19387[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__);

(statearr_19387[(1)] = (1));

return statearr_19387;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1 = (function (state_19376){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_19376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e19388){if((e19388 instanceof Object)){
var ex__18870__auto__ = e19388;
var statearr_19389_19542 = state_19376;
(statearr_19389_19542[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19543 = state_19376;
state_19376 = G__19543;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = function(state_19376){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1.call(this,state_19376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__;
})()
;})(__19532,switch__18866__auto__,c__18978__auto___19535,G__19363_19533,n__17706__auto___19531,jobs,results,process,async))
})();
var state__18980__auto__ = (function (){var statearr_19390 = f__18979__auto__.call(null);
(statearr_19390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto___19535);

return statearr_19390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(__19532,c__18978__auto___19535,G__19363_19533,n__17706__auto___19531,jobs,results,process,async))
);


break;
case "async":
var c__18978__auto___19544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19532,c__18978__auto___19544,G__19363_19533,n__17706__auto___19531,jobs,results,process,async){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (__19532,c__18978__auto___19544,G__19363_19533,n__17706__auto___19531,jobs,results,process,async){
return (function (state_19403){
var state_val_19404 = (state_19403[(1)]);
if((state_val_19404 === (1))){
var state_19403__$1 = state_19403;
var statearr_19405_19545 = state_19403__$1;
(statearr_19405_19545[(2)] = null);

(statearr_19405_19545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (2))){
var state_19403__$1 = state_19403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19403__$1,(4),jobs);
} else {
if((state_val_19404 === (3))){
var inst_19401 = (state_19403[(2)]);
var state_19403__$1 = state_19403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19403__$1,inst_19401);
} else {
if((state_val_19404 === (4))){
var inst_19393 = (state_19403[(2)]);
var inst_19394 = async.call(null,inst_19393);
var state_19403__$1 = state_19403;
if(cljs.core.truth_(inst_19394)){
var statearr_19406_19546 = state_19403__$1;
(statearr_19406_19546[(1)] = (5));

} else {
var statearr_19407_19547 = state_19403__$1;
(statearr_19407_19547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (5))){
var state_19403__$1 = state_19403;
var statearr_19408_19548 = state_19403__$1;
(statearr_19408_19548[(2)] = null);

(statearr_19408_19548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (6))){
var state_19403__$1 = state_19403;
var statearr_19409_19549 = state_19403__$1;
(statearr_19409_19549[(2)] = null);

(statearr_19409_19549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19404 === (7))){
var inst_19399 = (state_19403[(2)]);
var state_19403__$1 = state_19403;
var statearr_19410_19550 = state_19403__$1;
(statearr_19410_19550[(2)] = inst_19399);

(statearr_19410_19550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19532,c__18978__auto___19544,G__19363_19533,n__17706__auto___19531,jobs,results,process,async))
;
return ((function (__19532,switch__18866__auto__,c__18978__auto___19544,G__19363_19533,n__17706__auto___19531,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0 = (function (){
var statearr_19414 = [null,null,null,null,null,null,null];
(statearr_19414[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__);

(statearr_19414[(1)] = (1));

return statearr_19414;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1 = (function (state_19403){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_19403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e19415){if((e19415 instanceof Object)){
var ex__18870__auto__ = e19415;
var statearr_19416_19551 = state_19403;
(statearr_19416_19551[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19552 = state_19403;
state_19403 = G__19552;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = function(state_19403){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1.call(this,state_19403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__;
})()
;})(__19532,switch__18866__auto__,c__18978__auto___19544,G__19363_19533,n__17706__auto___19531,jobs,results,process,async))
})();
var state__18980__auto__ = (function (){var statearr_19417 = f__18979__auto__.call(null);
(statearr_19417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto___19544);

return statearr_19417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(__19532,c__18978__auto___19544,G__19363_19533,n__17706__auto___19531,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19553 = (__19532 + (1));
__19532 = G__19553;
continue;
} else {
}
break;
}

var c__18978__auto___19554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto___19554,jobs,results,process,async){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto___19554,jobs,results,process,async){
return (function (state_19509){
var state_val_19510 = (state_19509[(1)]);
if((state_val_19510 === (1))){
var state_19509__$1 = state_19509;
var statearr_19511_19555 = state_19509__$1;
(statearr_19511_19555[(2)] = null);

(statearr_19511_19555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19510 === (2))){
var state_19509__$1 = state_19509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19509__$1,(4),from);
} else {
if((state_val_19510 === (3))){
var inst_19507 = (state_19509[(2)]);
var state_19509__$1 = state_19509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19509__$1,inst_19507);
} else {
if((state_val_19510 === (4))){
var inst_19490 = (state_19509[(7)]);
var inst_19490__$1 = (state_19509[(2)]);
var inst_19491 = (inst_19490__$1 == null);
var state_19509__$1 = (function (){var statearr_19512 = state_19509;
(statearr_19512[(7)] = inst_19490__$1);

return statearr_19512;
})();
if(cljs.core.truth_(inst_19491)){
var statearr_19513_19556 = state_19509__$1;
(statearr_19513_19556[(1)] = (5));

} else {
var statearr_19514_19557 = state_19509__$1;
(statearr_19514_19557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19510 === (5))){
var inst_19493 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19509__$1 = state_19509;
var statearr_19515_19558 = state_19509__$1;
(statearr_19515_19558[(2)] = inst_19493);

(statearr_19515_19558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19510 === (6))){
var inst_19495 = (state_19509[(8)]);
var inst_19490 = (state_19509[(7)]);
var inst_19495__$1 = cljs.core.async.chan.call(null,(1));
var inst_19496 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19497 = [inst_19490,inst_19495__$1];
var inst_19498 = (new cljs.core.PersistentVector(null,2,(5),inst_19496,inst_19497,null));
var state_19509__$1 = (function (){var statearr_19516 = state_19509;
(statearr_19516[(8)] = inst_19495__$1);

return statearr_19516;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19509__$1,(8),jobs,inst_19498);
} else {
if((state_val_19510 === (7))){
var inst_19505 = (state_19509[(2)]);
var state_19509__$1 = state_19509;
var statearr_19517_19559 = state_19509__$1;
(statearr_19517_19559[(2)] = inst_19505);

(statearr_19517_19559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19510 === (8))){
var inst_19495 = (state_19509[(8)]);
var inst_19500 = (state_19509[(2)]);
var state_19509__$1 = (function (){var statearr_19518 = state_19509;
(statearr_19518[(9)] = inst_19500);

return statearr_19518;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19509__$1,(9),results,inst_19495);
} else {
if((state_val_19510 === (9))){
var inst_19502 = (state_19509[(2)]);
var state_19509__$1 = (function (){var statearr_19519 = state_19509;
(statearr_19519[(10)] = inst_19502);

return statearr_19519;
})();
var statearr_19520_19560 = state_19509__$1;
(statearr_19520_19560[(2)] = null);

(statearr_19520_19560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__18978__auto___19554,jobs,results,process,async))
;
return ((function (switch__18866__auto__,c__18978__auto___19554,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0 = (function (){
var statearr_19524 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__);

(statearr_19524[(1)] = (1));

return statearr_19524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1 = (function (state_19509){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_19509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e19525){if((e19525 instanceof Object)){
var ex__18870__auto__ = e19525;
var statearr_19526_19561 = state_19509;
(statearr_19526_19561[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19562 = state_19509;
state_19509 = G__19562;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = function(state_19509){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1.call(this,state_19509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto___19554,jobs,results,process,async))
})();
var state__18980__auto__ = (function (){var statearr_19527 = f__18979__auto__.call(null);
(statearr_19527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto___19554);

return statearr_19527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto___19554,jobs,results,process,async))
);


var c__18978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto__,jobs,results,process,async){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto__,jobs,results,process,async){
return (function (state_19455){
var state_val_19456 = (state_19455[(1)]);
if((state_val_19456 === (7))){
var inst_19451 = (state_19455[(2)]);
var state_19455__$1 = state_19455;
var statearr_19457_19563 = state_19455__$1;
(statearr_19457_19563[(2)] = inst_19451);

(statearr_19457_19563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (20))){
var state_19455__$1 = state_19455;
var statearr_19458_19564 = state_19455__$1;
(statearr_19458_19564[(2)] = null);

(statearr_19458_19564[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (1))){
var state_19455__$1 = state_19455;
var statearr_19459_19565 = state_19455__$1;
(statearr_19459_19565[(2)] = null);

(statearr_19459_19565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (4))){
var inst_19420 = (state_19455[(7)]);
var inst_19420__$1 = (state_19455[(2)]);
var inst_19421 = (inst_19420__$1 == null);
var state_19455__$1 = (function (){var statearr_19460 = state_19455;
(statearr_19460[(7)] = inst_19420__$1);

return statearr_19460;
})();
if(cljs.core.truth_(inst_19421)){
var statearr_19461_19566 = state_19455__$1;
(statearr_19461_19566[(1)] = (5));

} else {
var statearr_19462_19567 = state_19455__$1;
(statearr_19462_19567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (15))){
var inst_19433 = (state_19455[(8)]);
var state_19455__$1 = state_19455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19455__$1,(18),to,inst_19433);
} else {
if((state_val_19456 === (21))){
var inst_19446 = (state_19455[(2)]);
var state_19455__$1 = state_19455;
var statearr_19463_19568 = state_19455__$1;
(statearr_19463_19568[(2)] = inst_19446);

(statearr_19463_19568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (13))){
var inst_19448 = (state_19455[(2)]);
var state_19455__$1 = (function (){var statearr_19464 = state_19455;
(statearr_19464[(9)] = inst_19448);

return statearr_19464;
})();
var statearr_19465_19569 = state_19455__$1;
(statearr_19465_19569[(2)] = null);

(statearr_19465_19569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (6))){
var inst_19420 = (state_19455[(7)]);
var state_19455__$1 = state_19455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19455__$1,(11),inst_19420);
} else {
if((state_val_19456 === (17))){
var inst_19441 = (state_19455[(2)]);
var state_19455__$1 = state_19455;
if(cljs.core.truth_(inst_19441)){
var statearr_19466_19570 = state_19455__$1;
(statearr_19466_19570[(1)] = (19));

} else {
var statearr_19467_19571 = state_19455__$1;
(statearr_19467_19571[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (3))){
var inst_19453 = (state_19455[(2)]);
var state_19455__$1 = state_19455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19455__$1,inst_19453);
} else {
if((state_val_19456 === (12))){
var inst_19430 = (state_19455[(10)]);
var state_19455__$1 = state_19455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19455__$1,(14),inst_19430);
} else {
if((state_val_19456 === (2))){
var state_19455__$1 = state_19455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19455__$1,(4),results);
} else {
if((state_val_19456 === (19))){
var state_19455__$1 = state_19455;
var statearr_19468_19572 = state_19455__$1;
(statearr_19468_19572[(2)] = null);

(statearr_19468_19572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (11))){
var inst_19430 = (state_19455[(2)]);
var state_19455__$1 = (function (){var statearr_19469 = state_19455;
(statearr_19469[(10)] = inst_19430);

return statearr_19469;
})();
var statearr_19470_19573 = state_19455__$1;
(statearr_19470_19573[(2)] = null);

(statearr_19470_19573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (9))){
var state_19455__$1 = state_19455;
var statearr_19471_19574 = state_19455__$1;
(statearr_19471_19574[(2)] = null);

(statearr_19471_19574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (5))){
var state_19455__$1 = state_19455;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19472_19575 = state_19455__$1;
(statearr_19472_19575[(1)] = (8));

} else {
var statearr_19473_19576 = state_19455__$1;
(statearr_19473_19576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (14))){
var inst_19433 = (state_19455[(8)]);
var inst_19435 = (state_19455[(11)]);
var inst_19433__$1 = (state_19455[(2)]);
var inst_19434 = (inst_19433__$1 == null);
var inst_19435__$1 = cljs.core.not.call(null,inst_19434);
var state_19455__$1 = (function (){var statearr_19474 = state_19455;
(statearr_19474[(8)] = inst_19433__$1);

(statearr_19474[(11)] = inst_19435__$1);

return statearr_19474;
})();
if(inst_19435__$1){
var statearr_19475_19577 = state_19455__$1;
(statearr_19475_19577[(1)] = (15));

} else {
var statearr_19476_19578 = state_19455__$1;
(statearr_19476_19578[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (16))){
var inst_19435 = (state_19455[(11)]);
var state_19455__$1 = state_19455;
var statearr_19477_19579 = state_19455__$1;
(statearr_19477_19579[(2)] = inst_19435);

(statearr_19477_19579[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (10))){
var inst_19427 = (state_19455[(2)]);
var state_19455__$1 = state_19455;
var statearr_19478_19580 = state_19455__$1;
(statearr_19478_19580[(2)] = inst_19427);

(statearr_19478_19580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (18))){
var inst_19438 = (state_19455[(2)]);
var state_19455__$1 = state_19455;
var statearr_19479_19581 = state_19455__$1;
(statearr_19479_19581[(2)] = inst_19438);

(statearr_19479_19581[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19456 === (8))){
var inst_19424 = cljs.core.async.close_BANG_.call(null,to);
var state_19455__$1 = state_19455;
var statearr_19480_19582 = state_19455__$1;
(statearr_19480_19582[(2)] = inst_19424);

(statearr_19480_19582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18978__auto__,jobs,results,process,async))
;
return ((function (switch__18866__auto__,c__18978__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0 = (function (){
var statearr_19484 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19484[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__);

(statearr_19484[(1)] = (1));

return statearr_19484;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1 = (function (state_19455){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_19455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e19485){if((e19485 instanceof Object)){
var ex__18870__auto__ = e19485;
var statearr_19486_19583 = state_19455;
(statearr_19486_19583[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19584 = state_19455;
state_19455 = G__19584;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__ = function(state_19455){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1.call(this,state_19455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto__,jobs,results,process,async))
})();
var state__18980__auto__ = (function (){var statearr_19487 = f__18979__auto__.call(null);
(statearr_19487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto__);

return statearr_19487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto__,jobs,results,process,async))
);

return c__18978__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args19585 = [];
var len__17861__auto___19588 = arguments.length;
var i__17862__auto___19589 = (0);
while(true){
if((i__17862__auto___19589 < len__17861__auto___19588)){
args19585.push((arguments[i__17862__auto___19589]));

var G__19590 = (i__17862__auto___19589 + (1));
i__17862__auto___19589 = G__19590;
continue;
} else {
}
break;
}

var G__19587 = args19585.length;
switch (G__19587) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19585.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args19592 = [];
var len__17861__auto___19595 = arguments.length;
var i__17862__auto___19596 = (0);
while(true){
if((i__17862__auto___19596 < len__17861__auto___19595)){
args19592.push((arguments[i__17862__auto___19596]));

var G__19597 = (i__17862__auto___19596 + (1));
i__17862__auto___19596 = G__19597;
continue;
} else {
}
break;
}

var G__19594 = args19592.length;
switch (G__19594) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19592.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args19599 = [];
var len__17861__auto___19652 = arguments.length;
var i__17862__auto___19653 = (0);
while(true){
if((i__17862__auto___19653 < len__17861__auto___19652)){
args19599.push((arguments[i__17862__auto___19653]));

var G__19654 = (i__17862__auto___19653 + (1));
i__17862__auto___19653 = G__19654;
continue;
} else {
}
break;
}

var G__19601 = args19599.length;
switch (G__19601) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19599.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18978__auto___19656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto___19656,tc,fc){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto___19656,tc,fc){
return (function (state_19627){
var state_val_19628 = (state_19627[(1)]);
if((state_val_19628 === (7))){
var inst_19623 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
var statearr_19629_19657 = state_19627__$1;
(statearr_19629_19657[(2)] = inst_19623);

(statearr_19629_19657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (1))){
var state_19627__$1 = state_19627;
var statearr_19630_19658 = state_19627__$1;
(statearr_19630_19658[(2)] = null);

(statearr_19630_19658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (4))){
var inst_19604 = (state_19627[(7)]);
var inst_19604__$1 = (state_19627[(2)]);
var inst_19605 = (inst_19604__$1 == null);
var state_19627__$1 = (function (){var statearr_19631 = state_19627;
(statearr_19631[(7)] = inst_19604__$1);

return statearr_19631;
})();
if(cljs.core.truth_(inst_19605)){
var statearr_19632_19659 = state_19627__$1;
(statearr_19632_19659[(1)] = (5));

} else {
var statearr_19633_19660 = state_19627__$1;
(statearr_19633_19660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (13))){
var state_19627__$1 = state_19627;
var statearr_19634_19661 = state_19627__$1;
(statearr_19634_19661[(2)] = null);

(statearr_19634_19661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (6))){
var inst_19604 = (state_19627[(7)]);
var inst_19610 = p.call(null,inst_19604);
var state_19627__$1 = state_19627;
if(cljs.core.truth_(inst_19610)){
var statearr_19635_19662 = state_19627__$1;
(statearr_19635_19662[(1)] = (9));

} else {
var statearr_19636_19663 = state_19627__$1;
(statearr_19636_19663[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (3))){
var inst_19625 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19627__$1,inst_19625);
} else {
if((state_val_19628 === (12))){
var state_19627__$1 = state_19627;
var statearr_19637_19664 = state_19627__$1;
(statearr_19637_19664[(2)] = null);

(statearr_19637_19664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (2))){
var state_19627__$1 = state_19627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19627__$1,(4),ch);
} else {
if((state_val_19628 === (11))){
var inst_19604 = (state_19627[(7)]);
var inst_19614 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19627__$1,(8),inst_19614,inst_19604);
} else {
if((state_val_19628 === (9))){
var state_19627__$1 = state_19627;
var statearr_19638_19665 = state_19627__$1;
(statearr_19638_19665[(2)] = tc);

(statearr_19638_19665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (5))){
var inst_19607 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19608 = cljs.core.async.close_BANG_.call(null,fc);
var state_19627__$1 = (function (){var statearr_19639 = state_19627;
(statearr_19639[(8)] = inst_19607);

return statearr_19639;
})();
var statearr_19640_19666 = state_19627__$1;
(statearr_19640_19666[(2)] = inst_19608);

(statearr_19640_19666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (14))){
var inst_19621 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
var statearr_19641_19667 = state_19627__$1;
(statearr_19641_19667[(2)] = inst_19621);

(statearr_19641_19667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (10))){
var state_19627__$1 = state_19627;
var statearr_19642_19668 = state_19627__$1;
(statearr_19642_19668[(2)] = fc);

(statearr_19642_19668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19628 === (8))){
var inst_19616 = (state_19627[(2)]);
var state_19627__$1 = state_19627;
if(cljs.core.truth_(inst_19616)){
var statearr_19643_19669 = state_19627__$1;
(statearr_19643_19669[(1)] = (12));

} else {
var statearr_19644_19670 = state_19627__$1;
(statearr_19644_19670[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18978__auto___19656,tc,fc))
;
return ((function (switch__18866__auto__,c__18978__auto___19656,tc,fc){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_19648 = [null,null,null,null,null,null,null,null,null];
(statearr_19648[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_19648[(1)] = (1));

return statearr_19648;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_19627){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_19627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e19649){if((e19649 instanceof Object)){
var ex__18870__auto__ = e19649;
var statearr_19650_19671 = state_19627;
(statearr_19650_19671[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19672 = state_19627;
state_19627 = G__19672;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_19627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_19627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto___19656,tc,fc))
})();
var state__18980__auto__ = (function (){var statearr_19651 = f__18979__auto__.call(null);
(statearr_19651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto___19656);

return statearr_19651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto___19656,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto__){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto__){
return (function (state_19736){
var state_val_19737 = (state_19736[(1)]);
if((state_val_19737 === (7))){
var inst_19732 = (state_19736[(2)]);
var state_19736__$1 = state_19736;
var statearr_19738_19759 = state_19736__$1;
(statearr_19738_19759[(2)] = inst_19732);

(statearr_19738_19759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19737 === (1))){
var inst_19716 = init;
var state_19736__$1 = (function (){var statearr_19739 = state_19736;
(statearr_19739[(7)] = inst_19716);

return statearr_19739;
})();
var statearr_19740_19760 = state_19736__$1;
(statearr_19740_19760[(2)] = null);

(statearr_19740_19760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19737 === (4))){
var inst_19719 = (state_19736[(8)]);
var inst_19719__$1 = (state_19736[(2)]);
var inst_19720 = (inst_19719__$1 == null);
var state_19736__$1 = (function (){var statearr_19741 = state_19736;
(statearr_19741[(8)] = inst_19719__$1);

return statearr_19741;
})();
if(cljs.core.truth_(inst_19720)){
var statearr_19742_19761 = state_19736__$1;
(statearr_19742_19761[(1)] = (5));

} else {
var statearr_19743_19762 = state_19736__$1;
(statearr_19743_19762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19737 === (6))){
var inst_19719 = (state_19736[(8)]);
var inst_19716 = (state_19736[(7)]);
var inst_19723 = (state_19736[(9)]);
var inst_19723__$1 = f.call(null,inst_19716,inst_19719);
var inst_19724 = cljs.core.reduced_QMARK_.call(null,inst_19723__$1);
var state_19736__$1 = (function (){var statearr_19744 = state_19736;
(statearr_19744[(9)] = inst_19723__$1);

return statearr_19744;
})();
if(inst_19724){
var statearr_19745_19763 = state_19736__$1;
(statearr_19745_19763[(1)] = (8));

} else {
var statearr_19746_19764 = state_19736__$1;
(statearr_19746_19764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19737 === (3))){
var inst_19734 = (state_19736[(2)]);
var state_19736__$1 = state_19736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19736__$1,inst_19734);
} else {
if((state_val_19737 === (2))){
var state_19736__$1 = state_19736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19736__$1,(4),ch);
} else {
if((state_val_19737 === (9))){
var inst_19723 = (state_19736[(9)]);
var inst_19716 = inst_19723;
var state_19736__$1 = (function (){var statearr_19747 = state_19736;
(statearr_19747[(7)] = inst_19716);

return statearr_19747;
})();
var statearr_19748_19765 = state_19736__$1;
(statearr_19748_19765[(2)] = null);

(statearr_19748_19765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19737 === (5))){
var inst_19716 = (state_19736[(7)]);
var state_19736__$1 = state_19736;
var statearr_19749_19766 = state_19736__$1;
(statearr_19749_19766[(2)] = inst_19716);

(statearr_19749_19766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19737 === (10))){
var inst_19730 = (state_19736[(2)]);
var state_19736__$1 = state_19736;
var statearr_19750_19767 = state_19736__$1;
(statearr_19750_19767[(2)] = inst_19730);

(statearr_19750_19767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19737 === (8))){
var inst_19723 = (state_19736[(9)]);
var inst_19726 = cljs.core.deref.call(null,inst_19723);
var state_19736__$1 = state_19736;
var statearr_19751_19768 = state_19736__$1;
(statearr_19751_19768[(2)] = inst_19726);

(statearr_19751_19768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__18978__auto__))
;
return ((function (switch__18866__auto__,c__18978__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18867__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18867__auto____0 = (function (){
var statearr_19755 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19755[(0)] = cljs$core$async$reduce_$_state_machine__18867__auto__);

(statearr_19755[(1)] = (1));

return statearr_19755;
});
var cljs$core$async$reduce_$_state_machine__18867__auto____1 = (function (state_19736){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_19736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e19756){if((e19756 instanceof Object)){
var ex__18870__auto__ = e19756;
var statearr_19757_19769 = state_19736;
(statearr_19757_19769[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19770 = state_19736;
state_19736 = G__19770;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18867__auto__ = function(state_19736){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18867__auto____1.call(this,state_19736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18867__auto____0;
cljs$core$async$reduce_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18867__auto____1;
return cljs$core$async$reduce_$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto__))
})();
var state__18980__auto__ = (function (){var statearr_19758 = f__18979__auto__.call(null);
(statearr_19758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto__);

return statearr_19758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto__))
);

return c__18978__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args19771 = [];
var len__17861__auto___19823 = arguments.length;
var i__17862__auto___19824 = (0);
while(true){
if((i__17862__auto___19824 < len__17861__auto___19823)){
args19771.push((arguments[i__17862__auto___19824]));

var G__19825 = (i__17862__auto___19824 + (1));
i__17862__auto___19824 = G__19825;
continue;
} else {
}
break;
}

var G__19773 = args19771.length;
switch (G__19773) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19771.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto__){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto__){
return (function (state_19798){
var state_val_19799 = (state_19798[(1)]);
if((state_val_19799 === (7))){
var inst_19780 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
var statearr_19800_19827 = state_19798__$1;
(statearr_19800_19827[(2)] = inst_19780);

(statearr_19800_19827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (1))){
var inst_19774 = cljs.core.seq.call(null,coll);
var inst_19775 = inst_19774;
var state_19798__$1 = (function (){var statearr_19801 = state_19798;
(statearr_19801[(7)] = inst_19775);

return statearr_19801;
})();
var statearr_19802_19828 = state_19798__$1;
(statearr_19802_19828[(2)] = null);

(statearr_19802_19828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (4))){
var inst_19775 = (state_19798[(7)]);
var inst_19778 = cljs.core.first.call(null,inst_19775);
var state_19798__$1 = state_19798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19798__$1,(7),ch,inst_19778);
} else {
if((state_val_19799 === (13))){
var inst_19792 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
var statearr_19803_19829 = state_19798__$1;
(statearr_19803_19829[(2)] = inst_19792);

(statearr_19803_19829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (6))){
var inst_19783 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
if(cljs.core.truth_(inst_19783)){
var statearr_19804_19830 = state_19798__$1;
(statearr_19804_19830[(1)] = (8));

} else {
var statearr_19805_19831 = state_19798__$1;
(statearr_19805_19831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (3))){
var inst_19796 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19798__$1,inst_19796);
} else {
if((state_val_19799 === (12))){
var state_19798__$1 = state_19798;
var statearr_19806_19832 = state_19798__$1;
(statearr_19806_19832[(2)] = null);

(statearr_19806_19832[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (2))){
var inst_19775 = (state_19798[(7)]);
var state_19798__$1 = state_19798;
if(cljs.core.truth_(inst_19775)){
var statearr_19807_19833 = state_19798__$1;
(statearr_19807_19833[(1)] = (4));

} else {
var statearr_19808_19834 = state_19798__$1;
(statearr_19808_19834[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (11))){
var inst_19789 = cljs.core.async.close_BANG_.call(null,ch);
var state_19798__$1 = state_19798;
var statearr_19809_19835 = state_19798__$1;
(statearr_19809_19835[(2)] = inst_19789);

(statearr_19809_19835[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (9))){
var state_19798__$1 = state_19798;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19810_19836 = state_19798__$1;
(statearr_19810_19836[(1)] = (11));

} else {
var statearr_19811_19837 = state_19798__$1;
(statearr_19811_19837[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (5))){
var inst_19775 = (state_19798[(7)]);
var state_19798__$1 = state_19798;
var statearr_19812_19838 = state_19798__$1;
(statearr_19812_19838[(2)] = inst_19775);

(statearr_19812_19838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (10))){
var inst_19794 = (state_19798[(2)]);
var state_19798__$1 = state_19798;
var statearr_19813_19839 = state_19798__$1;
(statearr_19813_19839[(2)] = inst_19794);

(statearr_19813_19839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19799 === (8))){
var inst_19775 = (state_19798[(7)]);
var inst_19785 = cljs.core.next.call(null,inst_19775);
var inst_19775__$1 = inst_19785;
var state_19798__$1 = (function (){var statearr_19814 = state_19798;
(statearr_19814[(7)] = inst_19775__$1);

return statearr_19814;
})();
var statearr_19815_19840 = state_19798__$1;
(statearr_19815_19840[(2)] = null);

(statearr_19815_19840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18978__auto__))
;
return ((function (switch__18866__auto__,c__18978__auto__){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_19819 = [null,null,null,null,null,null,null,null];
(statearr_19819[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_19819[(1)] = (1));

return statearr_19819;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_19798){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_19798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e19820){if((e19820 instanceof Object)){
var ex__18870__auto__ = e19820;
var statearr_19821_19841 = state_19798;
(statearr_19821_19841[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19842 = state_19798;
state_19798 = G__19842;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_19798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_19798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto__))
})();
var state__18980__auto__ = (function (){var statearr_19822 = f__18979__auto__.call(null);
(statearr_19822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto__);

return statearr_19822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto__))
);

return c__18978__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17458__auto__ = (((_ == null))?null:_);
var m__17459__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17458__auto__)]);
if(!((m__17459__auto__ == null))){
return m__17459__auto__.call(null,_);
} else {
var m__17459__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17459__auto____$1 == null))){
return m__17459__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17458__auto__ = (((m == null))?null:m);
var m__17459__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17458__auto__)]);
if(!((m__17459__auto__ == null))){
return m__17459__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17459__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17459__auto____$1 == null))){
return m__17459__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17458__auto__ = (((m == null))?null:m);
var m__17459__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17458__auto__)]);
if(!((m__17459__auto__ == null))){
return m__17459__auto__.call(null,m,ch);
} else {
var m__17459__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17459__auto____$1 == null))){
return m__17459__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17458__auto__ = (((m == null))?null:m);
var m__17459__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17458__auto__)]);
if(!((m__17459__auto__ == null))){
return m__17459__auto__.call(null,m);
} else {
var m__17459__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17459__auto____$1 == null))){
return m__17459__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20064 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20064 = (function (mult,ch,cs,meta20065){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20065 = meta20065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20066,meta20065__$1){
var self__ = this;
var _20066__$1 = this;
return (new cljs.core.async.t_cljs$core$async20064(self__.mult,self__.ch,self__.cs,meta20065__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20066){
var self__ = this;
var _20066__$1 = this;
return self__.meta20065;
});})(cs))
;

cljs.core.async.t_cljs$core$async20064.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20064.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20064.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20064.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20064.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20064.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20064.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20065","meta20065",-519357829,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20064";

cljs.core.async.t_cljs$core$async20064.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17401__auto__,writer__17402__auto__,opt__17403__auto__){
return cljs.core._write.call(null,writer__17402__auto__,"cljs.core.async/t_cljs$core$async20064");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20064 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20064(mult__$1,ch__$1,cs__$1,meta20065){
return (new cljs.core.async.t_cljs$core$async20064(mult__$1,ch__$1,cs__$1,meta20065));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20064(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18978__auto___20285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto___20285,cs,m,dchan,dctr,done){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto___20285,cs,m,dchan,dctr,done){
return (function (state_20197){
var state_val_20198 = (state_20197[(1)]);
if((state_val_20198 === (7))){
var inst_20193 = (state_20197[(2)]);
var state_20197__$1 = state_20197;
var statearr_20199_20286 = state_20197__$1;
(statearr_20199_20286[(2)] = inst_20193);

(statearr_20199_20286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (20))){
var inst_20098 = (state_20197[(7)]);
var inst_20108 = cljs.core.first.call(null,inst_20098);
var inst_20109 = cljs.core.nth.call(null,inst_20108,(0),null);
var inst_20110 = cljs.core.nth.call(null,inst_20108,(1),null);
var state_20197__$1 = (function (){var statearr_20200 = state_20197;
(statearr_20200[(8)] = inst_20109);

return statearr_20200;
})();
if(cljs.core.truth_(inst_20110)){
var statearr_20201_20287 = state_20197__$1;
(statearr_20201_20287[(1)] = (22));

} else {
var statearr_20202_20288 = state_20197__$1;
(statearr_20202_20288[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (27))){
var inst_20138 = (state_20197[(9)]);
var inst_20140 = (state_20197[(10)]);
var inst_20145 = (state_20197[(11)]);
var inst_20069 = (state_20197[(12)]);
var inst_20145__$1 = cljs.core._nth.call(null,inst_20138,inst_20140);
var inst_20146 = cljs.core.async.put_BANG_.call(null,inst_20145__$1,inst_20069,done);
var state_20197__$1 = (function (){var statearr_20203 = state_20197;
(statearr_20203[(11)] = inst_20145__$1);

return statearr_20203;
})();
if(cljs.core.truth_(inst_20146)){
var statearr_20204_20289 = state_20197__$1;
(statearr_20204_20289[(1)] = (30));

} else {
var statearr_20205_20290 = state_20197__$1;
(statearr_20205_20290[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (1))){
var state_20197__$1 = state_20197;
var statearr_20206_20291 = state_20197__$1;
(statearr_20206_20291[(2)] = null);

(statearr_20206_20291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (24))){
var inst_20098 = (state_20197[(7)]);
var inst_20115 = (state_20197[(2)]);
var inst_20116 = cljs.core.next.call(null,inst_20098);
var inst_20078 = inst_20116;
var inst_20079 = null;
var inst_20080 = (0);
var inst_20081 = (0);
var state_20197__$1 = (function (){var statearr_20207 = state_20197;
(statearr_20207[(13)] = inst_20115);

(statearr_20207[(14)] = inst_20079);

(statearr_20207[(15)] = inst_20078);

(statearr_20207[(16)] = inst_20081);

(statearr_20207[(17)] = inst_20080);

return statearr_20207;
})();
var statearr_20208_20292 = state_20197__$1;
(statearr_20208_20292[(2)] = null);

(statearr_20208_20292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (39))){
var state_20197__$1 = state_20197;
var statearr_20212_20293 = state_20197__$1;
(statearr_20212_20293[(2)] = null);

(statearr_20212_20293[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (4))){
var inst_20069 = (state_20197[(12)]);
var inst_20069__$1 = (state_20197[(2)]);
var inst_20070 = (inst_20069__$1 == null);
var state_20197__$1 = (function (){var statearr_20213 = state_20197;
(statearr_20213[(12)] = inst_20069__$1);

return statearr_20213;
})();
if(cljs.core.truth_(inst_20070)){
var statearr_20214_20294 = state_20197__$1;
(statearr_20214_20294[(1)] = (5));

} else {
var statearr_20215_20295 = state_20197__$1;
(statearr_20215_20295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (15))){
var inst_20079 = (state_20197[(14)]);
var inst_20078 = (state_20197[(15)]);
var inst_20081 = (state_20197[(16)]);
var inst_20080 = (state_20197[(17)]);
var inst_20094 = (state_20197[(2)]);
var inst_20095 = (inst_20081 + (1));
var tmp20209 = inst_20079;
var tmp20210 = inst_20078;
var tmp20211 = inst_20080;
var inst_20078__$1 = tmp20210;
var inst_20079__$1 = tmp20209;
var inst_20080__$1 = tmp20211;
var inst_20081__$1 = inst_20095;
var state_20197__$1 = (function (){var statearr_20216 = state_20197;
(statearr_20216[(14)] = inst_20079__$1);

(statearr_20216[(15)] = inst_20078__$1);

(statearr_20216[(16)] = inst_20081__$1);

(statearr_20216[(17)] = inst_20080__$1);

(statearr_20216[(19)] = inst_20094);

return statearr_20216;
})();
var statearr_20217_20296 = state_20197__$1;
(statearr_20217_20296[(2)] = null);

(statearr_20217_20296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (21))){
var inst_20119 = (state_20197[(2)]);
var state_20197__$1 = state_20197;
var statearr_20221_20297 = state_20197__$1;
(statearr_20221_20297[(2)] = inst_20119);

(statearr_20221_20297[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (31))){
var inst_20145 = (state_20197[(11)]);
var inst_20149 = done.call(null,null);
var inst_20150 = cljs.core.async.untap_STAR_.call(null,m,inst_20145);
var state_20197__$1 = (function (){var statearr_20222 = state_20197;
(statearr_20222[(18)] = inst_20149);

return statearr_20222;
})();
var statearr_20223_20298 = state_20197__$1;
(statearr_20223_20298[(2)] = inst_20150);

(statearr_20223_20298[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (32))){
var inst_20138 = (state_20197[(9)]);
var inst_20140 = (state_20197[(10)]);
var inst_20137 = (state_20197[(20)]);
var inst_20139 = (state_20197[(21)]);
var inst_20152 = (state_20197[(2)]);
var inst_20153 = (inst_20140 + (1));
var tmp20218 = inst_20138;
var tmp20219 = inst_20137;
var tmp20220 = inst_20139;
var inst_20137__$1 = tmp20219;
var inst_20138__$1 = tmp20218;
var inst_20139__$1 = tmp20220;
var inst_20140__$1 = inst_20153;
var state_20197__$1 = (function (){var statearr_20224 = state_20197;
(statearr_20224[(9)] = inst_20138__$1);

(statearr_20224[(25)] = inst_20152);

(statearr_20224[(10)] = inst_20140__$1);

(statearr_20224[(20)] = inst_20137__$1);

(statearr_20224[(21)] = inst_20139__$1);

return statearr_20224;
})();
var statearr_20225_20299 = state_20197__$1;
(statearr_20225_20299[(2)] = null);

(statearr_20225_20299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (40))){
var inst_20165 = (state_20197[(22)]);
var inst_20169 = done.call(null,null);
var inst_20170 = cljs.core.async.untap_STAR_.call(null,m,inst_20165);
var state_20197__$1 = (function (){var statearr_20226 = state_20197;
(statearr_20226[(23)] = inst_20169);

return statearr_20226;
})();
var statearr_20227_20300 = state_20197__$1;
(statearr_20227_20300[(2)] = inst_20170);

(statearr_20227_20300[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (33))){
var inst_20156 = (state_20197[(24)]);
var inst_20158 = cljs.core.chunked_seq_QMARK_.call(null,inst_20156);
var state_20197__$1 = state_20197;
if(inst_20158){
var statearr_20228_20301 = state_20197__$1;
(statearr_20228_20301[(1)] = (36));

} else {
var statearr_20229_20302 = state_20197__$1;
(statearr_20229_20302[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (13))){
var inst_20088 = (state_20197[(26)]);
var inst_20091 = cljs.core.async.close_BANG_.call(null,inst_20088);
var state_20197__$1 = state_20197;
var statearr_20230_20303 = state_20197__$1;
(statearr_20230_20303[(2)] = inst_20091);

(statearr_20230_20303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (22))){
var inst_20109 = (state_20197[(8)]);
var inst_20112 = cljs.core.async.close_BANG_.call(null,inst_20109);
var state_20197__$1 = state_20197;
var statearr_20231_20304 = state_20197__$1;
(statearr_20231_20304[(2)] = inst_20112);

(statearr_20231_20304[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (36))){
var inst_20156 = (state_20197[(24)]);
var inst_20160 = cljs.core.chunk_first.call(null,inst_20156);
var inst_20161 = cljs.core.chunk_rest.call(null,inst_20156);
var inst_20162 = cljs.core.count.call(null,inst_20160);
var inst_20137 = inst_20161;
var inst_20138 = inst_20160;
var inst_20139 = inst_20162;
var inst_20140 = (0);
var state_20197__$1 = (function (){var statearr_20232 = state_20197;
(statearr_20232[(9)] = inst_20138);

(statearr_20232[(10)] = inst_20140);

(statearr_20232[(20)] = inst_20137);

(statearr_20232[(21)] = inst_20139);

return statearr_20232;
})();
var statearr_20233_20305 = state_20197__$1;
(statearr_20233_20305[(2)] = null);

(statearr_20233_20305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (41))){
var inst_20156 = (state_20197[(24)]);
var inst_20172 = (state_20197[(2)]);
var inst_20173 = cljs.core.next.call(null,inst_20156);
var inst_20137 = inst_20173;
var inst_20138 = null;
var inst_20139 = (0);
var inst_20140 = (0);
var state_20197__$1 = (function (){var statearr_20234 = state_20197;
(statearr_20234[(9)] = inst_20138);

(statearr_20234[(10)] = inst_20140);

(statearr_20234[(20)] = inst_20137);

(statearr_20234[(21)] = inst_20139);

(statearr_20234[(27)] = inst_20172);

return statearr_20234;
})();
var statearr_20235_20306 = state_20197__$1;
(statearr_20235_20306[(2)] = null);

(statearr_20235_20306[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (43))){
var state_20197__$1 = state_20197;
var statearr_20236_20307 = state_20197__$1;
(statearr_20236_20307[(2)] = null);

(statearr_20236_20307[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (29))){
var inst_20181 = (state_20197[(2)]);
var state_20197__$1 = state_20197;
var statearr_20237_20308 = state_20197__$1;
(statearr_20237_20308[(2)] = inst_20181);

(statearr_20237_20308[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (44))){
var inst_20190 = (state_20197[(2)]);
var state_20197__$1 = (function (){var statearr_20238 = state_20197;
(statearr_20238[(28)] = inst_20190);

return statearr_20238;
})();
var statearr_20239_20309 = state_20197__$1;
(statearr_20239_20309[(2)] = null);

(statearr_20239_20309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (6))){
var inst_20129 = (state_20197[(29)]);
var inst_20128 = cljs.core.deref.call(null,cs);
var inst_20129__$1 = cljs.core.keys.call(null,inst_20128);
var inst_20130 = cljs.core.count.call(null,inst_20129__$1);
var inst_20131 = cljs.core.reset_BANG_.call(null,dctr,inst_20130);
var inst_20136 = cljs.core.seq.call(null,inst_20129__$1);
var inst_20137 = inst_20136;
var inst_20138 = null;
var inst_20139 = (0);
var inst_20140 = (0);
var state_20197__$1 = (function (){var statearr_20240 = state_20197;
(statearr_20240[(9)] = inst_20138);

(statearr_20240[(10)] = inst_20140);

(statearr_20240[(20)] = inst_20137);

(statearr_20240[(29)] = inst_20129__$1);

(statearr_20240[(21)] = inst_20139);

(statearr_20240[(30)] = inst_20131);

return statearr_20240;
})();
var statearr_20241_20310 = state_20197__$1;
(statearr_20241_20310[(2)] = null);

(statearr_20241_20310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (28))){
var inst_20156 = (state_20197[(24)]);
var inst_20137 = (state_20197[(20)]);
var inst_20156__$1 = cljs.core.seq.call(null,inst_20137);
var state_20197__$1 = (function (){var statearr_20242 = state_20197;
(statearr_20242[(24)] = inst_20156__$1);

return statearr_20242;
})();
if(inst_20156__$1){
var statearr_20243_20311 = state_20197__$1;
(statearr_20243_20311[(1)] = (33));

} else {
var statearr_20244_20312 = state_20197__$1;
(statearr_20244_20312[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (25))){
var inst_20140 = (state_20197[(10)]);
var inst_20139 = (state_20197[(21)]);
var inst_20142 = (inst_20140 < inst_20139);
var inst_20143 = inst_20142;
var state_20197__$1 = state_20197;
if(cljs.core.truth_(inst_20143)){
var statearr_20245_20313 = state_20197__$1;
(statearr_20245_20313[(1)] = (27));

} else {
var statearr_20246_20314 = state_20197__$1;
(statearr_20246_20314[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (34))){
var state_20197__$1 = state_20197;
var statearr_20247_20315 = state_20197__$1;
(statearr_20247_20315[(2)] = null);

(statearr_20247_20315[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (17))){
var state_20197__$1 = state_20197;
var statearr_20248_20316 = state_20197__$1;
(statearr_20248_20316[(2)] = null);

(statearr_20248_20316[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (3))){
var inst_20195 = (state_20197[(2)]);
var state_20197__$1 = state_20197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20197__$1,inst_20195);
} else {
if((state_val_20198 === (12))){
var inst_20124 = (state_20197[(2)]);
var state_20197__$1 = state_20197;
var statearr_20249_20317 = state_20197__$1;
(statearr_20249_20317[(2)] = inst_20124);

(statearr_20249_20317[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (2))){
var state_20197__$1 = state_20197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20197__$1,(4),ch);
} else {
if((state_val_20198 === (23))){
var state_20197__$1 = state_20197;
var statearr_20250_20318 = state_20197__$1;
(statearr_20250_20318[(2)] = null);

(statearr_20250_20318[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (35))){
var inst_20179 = (state_20197[(2)]);
var state_20197__$1 = state_20197;
var statearr_20251_20319 = state_20197__$1;
(statearr_20251_20319[(2)] = inst_20179);

(statearr_20251_20319[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (19))){
var inst_20098 = (state_20197[(7)]);
var inst_20102 = cljs.core.chunk_first.call(null,inst_20098);
var inst_20103 = cljs.core.chunk_rest.call(null,inst_20098);
var inst_20104 = cljs.core.count.call(null,inst_20102);
var inst_20078 = inst_20103;
var inst_20079 = inst_20102;
var inst_20080 = inst_20104;
var inst_20081 = (0);
var state_20197__$1 = (function (){var statearr_20252 = state_20197;
(statearr_20252[(14)] = inst_20079);

(statearr_20252[(15)] = inst_20078);

(statearr_20252[(16)] = inst_20081);

(statearr_20252[(17)] = inst_20080);

return statearr_20252;
})();
var statearr_20253_20320 = state_20197__$1;
(statearr_20253_20320[(2)] = null);

(statearr_20253_20320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (11))){
var inst_20078 = (state_20197[(15)]);
var inst_20098 = (state_20197[(7)]);
var inst_20098__$1 = cljs.core.seq.call(null,inst_20078);
var state_20197__$1 = (function (){var statearr_20254 = state_20197;
(statearr_20254[(7)] = inst_20098__$1);

return statearr_20254;
})();
if(inst_20098__$1){
var statearr_20255_20321 = state_20197__$1;
(statearr_20255_20321[(1)] = (16));

} else {
var statearr_20256_20322 = state_20197__$1;
(statearr_20256_20322[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (9))){
var inst_20126 = (state_20197[(2)]);
var state_20197__$1 = state_20197;
var statearr_20257_20323 = state_20197__$1;
(statearr_20257_20323[(2)] = inst_20126);

(statearr_20257_20323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (5))){
var inst_20076 = cljs.core.deref.call(null,cs);
var inst_20077 = cljs.core.seq.call(null,inst_20076);
var inst_20078 = inst_20077;
var inst_20079 = null;
var inst_20080 = (0);
var inst_20081 = (0);
var state_20197__$1 = (function (){var statearr_20258 = state_20197;
(statearr_20258[(14)] = inst_20079);

(statearr_20258[(15)] = inst_20078);

(statearr_20258[(16)] = inst_20081);

(statearr_20258[(17)] = inst_20080);

return statearr_20258;
})();
var statearr_20259_20324 = state_20197__$1;
(statearr_20259_20324[(2)] = null);

(statearr_20259_20324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (14))){
var state_20197__$1 = state_20197;
var statearr_20260_20325 = state_20197__$1;
(statearr_20260_20325[(2)] = null);

(statearr_20260_20325[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (45))){
var inst_20187 = (state_20197[(2)]);
var state_20197__$1 = state_20197;
var statearr_20261_20326 = state_20197__$1;
(statearr_20261_20326[(2)] = inst_20187);

(statearr_20261_20326[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (26))){
var inst_20129 = (state_20197[(29)]);
var inst_20183 = (state_20197[(2)]);
var inst_20184 = cljs.core.seq.call(null,inst_20129);
var state_20197__$1 = (function (){var statearr_20262 = state_20197;
(statearr_20262[(31)] = inst_20183);

return statearr_20262;
})();
if(inst_20184){
var statearr_20263_20327 = state_20197__$1;
(statearr_20263_20327[(1)] = (42));

} else {
var statearr_20264_20328 = state_20197__$1;
(statearr_20264_20328[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (16))){
var inst_20098 = (state_20197[(7)]);
var inst_20100 = cljs.core.chunked_seq_QMARK_.call(null,inst_20098);
var state_20197__$1 = state_20197;
if(inst_20100){
var statearr_20265_20329 = state_20197__$1;
(statearr_20265_20329[(1)] = (19));

} else {
var statearr_20266_20330 = state_20197__$1;
(statearr_20266_20330[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (38))){
var inst_20176 = (state_20197[(2)]);
var state_20197__$1 = state_20197;
var statearr_20267_20331 = state_20197__$1;
(statearr_20267_20331[(2)] = inst_20176);

(statearr_20267_20331[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (30))){
var state_20197__$1 = state_20197;
var statearr_20268_20332 = state_20197__$1;
(statearr_20268_20332[(2)] = null);

(statearr_20268_20332[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (10))){
var inst_20079 = (state_20197[(14)]);
var inst_20081 = (state_20197[(16)]);
var inst_20087 = cljs.core._nth.call(null,inst_20079,inst_20081);
var inst_20088 = cljs.core.nth.call(null,inst_20087,(0),null);
var inst_20089 = cljs.core.nth.call(null,inst_20087,(1),null);
var state_20197__$1 = (function (){var statearr_20269 = state_20197;
(statearr_20269[(26)] = inst_20088);

return statearr_20269;
})();
if(cljs.core.truth_(inst_20089)){
var statearr_20270_20333 = state_20197__$1;
(statearr_20270_20333[(1)] = (13));

} else {
var statearr_20271_20334 = state_20197__$1;
(statearr_20271_20334[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (18))){
var inst_20122 = (state_20197[(2)]);
var state_20197__$1 = state_20197;
var statearr_20272_20335 = state_20197__$1;
(statearr_20272_20335[(2)] = inst_20122);

(statearr_20272_20335[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (42))){
var state_20197__$1 = state_20197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20197__$1,(45),dchan);
} else {
if((state_val_20198 === (37))){
var inst_20156 = (state_20197[(24)]);
var inst_20069 = (state_20197[(12)]);
var inst_20165 = (state_20197[(22)]);
var inst_20165__$1 = cljs.core.first.call(null,inst_20156);
var inst_20166 = cljs.core.async.put_BANG_.call(null,inst_20165__$1,inst_20069,done);
var state_20197__$1 = (function (){var statearr_20273 = state_20197;
(statearr_20273[(22)] = inst_20165__$1);

return statearr_20273;
})();
if(cljs.core.truth_(inst_20166)){
var statearr_20274_20336 = state_20197__$1;
(statearr_20274_20336[(1)] = (39));

} else {
var statearr_20275_20337 = state_20197__$1;
(statearr_20275_20337[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20198 === (8))){
var inst_20081 = (state_20197[(16)]);
var inst_20080 = (state_20197[(17)]);
var inst_20083 = (inst_20081 < inst_20080);
var inst_20084 = inst_20083;
var state_20197__$1 = state_20197;
if(cljs.core.truth_(inst_20084)){
var statearr_20276_20338 = state_20197__$1;
(statearr_20276_20338[(1)] = (10));

} else {
var statearr_20277_20339 = state_20197__$1;
(statearr_20277_20339[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18978__auto___20285,cs,m,dchan,dctr,done))
;
return ((function (switch__18866__auto__,c__18978__auto___20285,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18867__auto__ = null;
var cljs$core$async$mult_$_state_machine__18867__auto____0 = (function (){
var statearr_20281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20281[(0)] = cljs$core$async$mult_$_state_machine__18867__auto__);

(statearr_20281[(1)] = (1));

return statearr_20281;
});
var cljs$core$async$mult_$_state_machine__18867__auto____1 = (function (state_20197){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_20197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e20282){if((e20282 instanceof Object)){
var ex__18870__auto__ = e20282;
var statearr_20283_20340 = state_20197;
(statearr_20283_20340[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20341 = state_20197;
state_20197 = G__20341;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18867__auto__ = function(state_20197){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18867__auto____1.call(this,state_20197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18867__auto____0;
cljs$core$async$mult_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18867__auto____1;
return cljs$core$async$mult_$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto___20285,cs,m,dchan,dctr,done))
})();
var state__18980__auto__ = (function (){var statearr_20284 = f__18979__auto__.call(null);
(statearr_20284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto___20285);

return statearr_20284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto___20285,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args20342 = [];
var len__17861__auto___20345 = arguments.length;
var i__17862__auto___20346 = (0);
while(true){
if((i__17862__auto___20346 < len__17861__auto___20345)){
args20342.push((arguments[i__17862__auto___20346]));

var G__20347 = (i__17862__auto___20346 + (1));
i__17862__auto___20346 = G__20347;
continue;
} else {
}
break;
}

var G__20344 = args20342.length;
switch (G__20344) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20342.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17458__auto__ = (((m == null))?null:m);
var m__17459__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17458__auto__)]);
if(!((m__17459__auto__ == null))){
return m__17459__auto__.call(null,m,ch);
} else {
var m__17459__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17459__auto____$1 == null))){
return m__17459__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17458__auto__ = (((m == null))?null:m);
var m__17459__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17458__auto__)]);
if(!((m__17459__auto__ == null))){
return m__17459__auto__.call(null,m,ch);
} else {
var m__17459__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17459__auto____$1 == null))){
return m__17459__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17458__auto__ = (((m == null))?null:m);
var m__17459__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17458__auto__)]);
if(!((m__17459__auto__ == null))){
return m__17459__auto__.call(null,m);
} else {
var m__17459__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17459__auto____$1 == null))){
return m__17459__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17458__auto__ = (((m == null))?null:m);
var m__17459__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17458__auto__)]);
if(!((m__17459__auto__ == null))){
return m__17459__auto__.call(null,m,state_map);
} else {
var m__17459__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17459__auto____$1 == null))){
return m__17459__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17458__auto__ = (((m == null))?null:m);
var m__17459__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17458__auto__)]);
if(!((m__17459__auto__ == null))){
return m__17459__auto__.call(null,m,mode);
} else {
var m__17459__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17459__auto____$1 == null))){
return m__17459__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17868__auto__ = [];
var len__17861__auto___20359 = arguments.length;
var i__17862__auto___20360 = (0);
while(true){
if((i__17862__auto___20360 < len__17861__auto___20359)){
args__17868__auto__.push((arguments[i__17862__auto___20360]));

var G__20361 = (i__17862__auto___20360 + (1));
i__17862__auto___20360 = G__20361;
continue;
} else {
}
break;
}

var argseq__17869__auto__ = ((((3) < args__17868__auto__.length))?(new cljs.core.IndexedSeq(args__17868__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17869__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20353){
var map__20354 = p__20353;
var map__20354__$1 = ((((!((map__20354 == null)))?((((map__20354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20354):map__20354);
var opts = map__20354__$1;
var statearr_20356_20362 = state;
(statearr_20356_20362[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20354,map__20354__$1,opts){
return (function (val){
var statearr_20357_20363 = state;
(statearr_20357_20363[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20354,map__20354__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20358_20364 = state;
(statearr_20358_20364[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20349){
var G__20350 = cljs.core.first.call(null,seq20349);
var seq20349__$1 = cljs.core.next.call(null,seq20349);
var G__20351 = cljs.core.first.call(null,seq20349__$1);
var seq20349__$2 = cljs.core.next.call(null,seq20349__$1);
var G__20352 = cljs.core.first.call(null,seq20349__$2);
var seq20349__$3 = cljs.core.next.call(null,seq20349__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20350,G__20351,G__20352,seq20349__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20528 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20528 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20529){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20529 = meta20529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20530,meta20529__$1){
var self__ = this;
var _20530__$1 = this;
return (new cljs.core.async.t_cljs$core$async20528(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20529__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20530){
var self__ = this;
var _20530__$1 = this;
return self__.meta20529;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20528.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20528.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20528.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async20528.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20528.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20528.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20528.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20528.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20528.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20529","meta20529",-410749487,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20528.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20528";

cljs.core.async.t_cljs$core$async20528.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17401__auto__,writer__17402__auto__,opt__17403__auto__){
return cljs.core._write.call(null,writer__17402__auto__,"cljs.core.async/t_cljs$core$async20528");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20528 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20528(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20529){
return (new cljs.core.async.t_cljs$core$async20528(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20529));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20528(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18978__auto___20691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto___20691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto___20691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20628){
var state_val_20629 = (state_20628[(1)]);
if((state_val_20629 === (7))){
var inst_20546 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
var statearr_20630_20692 = state_20628__$1;
(statearr_20630_20692[(2)] = inst_20546);

(statearr_20630_20692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (20))){
var inst_20558 = (state_20628[(7)]);
var state_20628__$1 = state_20628;
var statearr_20631_20693 = state_20628__$1;
(statearr_20631_20693[(2)] = inst_20558);

(statearr_20631_20693[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (27))){
var state_20628__$1 = state_20628;
var statearr_20632_20694 = state_20628__$1;
(statearr_20632_20694[(2)] = null);

(statearr_20632_20694[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (1))){
var inst_20534 = (state_20628[(8)]);
var inst_20534__$1 = calc_state.call(null);
var inst_20536 = (inst_20534__$1 == null);
var inst_20537 = cljs.core.not.call(null,inst_20536);
var state_20628__$1 = (function (){var statearr_20633 = state_20628;
(statearr_20633[(8)] = inst_20534__$1);

return statearr_20633;
})();
if(inst_20537){
var statearr_20634_20695 = state_20628__$1;
(statearr_20634_20695[(1)] = (2));

} else {
var statearr_20635_20696 = state_20628__$1;
(statearr_20635_20696[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (24))){
var inst_20588 = (state_20628[(9)]);
var inst_20602 = (state_20628[(10)]);
var inst_20581 = (state_20628[(11)]);
var inst_20602__$1 = inst_20581.call(null,inst_20588);
var state_20628__$1 = (function (){var statearr_20636 = state_20628;
(statearr_20636[(10)] = inst_20602__$1);

return statearr_20636;
})();
if(cljs.core.truth_(inst_20602__$1)){
var statearr_20637_20697 = state_20628__$1;
(statearr_20637_20697[(1)] = (29));

} else {
var statearr_20638_20698 = state_20628__$1;
(statearr_20638_20698[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (4))){
var inst_20549 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
if(cljs.core.truth_(inst_20549)){
var statearr_20639_20699 = state_20628__$1;
(statearr_20639_20699[(1)] = (8));

} else {
var statearr_20640_20700 = state_20628__$1;
(statearr_20640_20700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (15))){
var inst_20575 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
if(cljs.core.truth_(inst_20575)){
var statearr_20641_20701 = state_20628__$1;
(statearr_20641_20701[(1)] = (19));

} else {
var statearr_20642_20702 = state_20628__$1;
(statearr_20642_20702[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (21))){
var inst_20580 = (state_20628[(12)]);
var inst_20580__$1 = (state_20628[(2)]);
var inst_20581 = cljs.core.get.call(null,inst_20580__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20582 = cljs.core.get.call(null,inst_20580__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20583 = cljs.core.get.call(null,inst_20580__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20628__$1 = (function (){var statearr_20643 = state_20628;
(statearr_20643[(13)] = inst_20582);

(statearr_20643[(12)] = inst_20580__$1);

(statearr_20643[(11)] = inst_20581);

return statearr_20643;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20628__$1,(22),inst_20583);
} else {
if((state_val_20629 === (31))){
var inst_20610 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
if(cljs.core.truth_(inst_20610)){
var statearr_20644_20703 = state_20628__$1;
(statearr_20644_20703[(1)] = (32));

} else {
var statearr_20645_20704 = state_20628__$1;
(statearr_20645_20704[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (32))){
var inst_20587 = (state_20628[(14)]);
var state_20628__$1 = state_20628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20628__$1,(35),out,inst_20587);
} else {
if((state_val_20629 === (33))){
var inst_20580 = (state_20628[(12)]);
var inst_20558 = inst_20580;
var state_20628__$1 = (function (){var statearr_20646 = state_20628;
(statearr_20646[(7)] = inst_20558);

return statearr_20646;
})();
var statearr_20647_20705 = state_20628__$1;
(statearr_20647_20705[(2)] = null);

(statearr_20647_20705[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (13))){
var inst_20558 = (state_20628[(7)]);
var inst_20565 = inst_20558.cljs$lang$protocol_mask$partition0$;
var inst_20566 = (inst_20565 & (64));
var inst_20567 = inst_20558.cljs$core$ISeq$;
var inst_20568 = (inst_20566) || (inst_20567);
var state_20628__$1 = state_20628;
if(cljs.core.truth_(inst_20568)){
var statearr_20648_20706 = state_20628__$1;
(statearr_20648_20706[(1)] = (16));

} else {
var statearr_20649_20707 = state_20628__$1;
(statearr_20649_20707[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (22))){
var inst_20588 = (state_20628[(9)]);
var inst_20587 = (state_20628[(14)]);
var inst_20586 = (state_20628[(2)]);
var inst_20587__$1 = cljs.core.nth.call(null,inst_20586,(0),null);
var inst_20588__$1 = cljs.core.nth.call(null,inst_20586,(1),null);
var inst_20589 = (inst_20587__$1 == null);
var inst_20590 = cljs.core._EQ_.call(null,inst_20588__$1,change);
var inst_20591 = (inst_20589) || (inst_20590);
var state_20628__$1 = (function (){var statearr_20650 = state_20628;
(statearr_20650[(9)] = inst_20588__$1);

(statearr_20650[(14)] = inst_20587__$1);

return statearr_20650;
})();
if(cljs.core.truth_(inst_20591)){
var statearr_20651_20708 = state_20628__$1;
(statearr_20651_20708[(1)] = (23));

} else {
var statearr_20652_20709 = state_20628__$1;
(statearr_20652_20709[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (36))){
var inst_20580 = (state_20628[(12)]);
var inst_20558 = inst_20580;
var state_20628__$1 = (function (){var statearr_20653 = state_20628;
(statearr_20653[(7)] = inst_20558);

return statearr_20653;
})();
var statearr_20654_20710 = state_20628__$1;
(statearr_20654_20710[(2)] = null);

(statearr_20654_20710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (29))){
var inst_20602 = (state_20628[(10)]);
var state_20628__$1 = state_20628;
var statearr_20655_20711 = state_20628__$1;
(statearr_20655_20711[(2)] = inst_20602);

(statearr_20655_20711[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (6))){
var state_20628__$1 = state_20628;
var statearr_20656_20712 = state_20628__$1;
(statearr_20656_20712[(2)] = false);

(statearr_20656_20712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (28))){
var inst_20598 = (state_20628[(2)]);
var inst_20599 = calc_state.call(null);
var inst_20558 = inst_20599;
var state_20628__$1 = (function (){var statearr_20657 = state_20628;
(statearr_20657[(7)] = inst_20558);

(statearr_20657[(15)] = inst_20598);

return statearr_20657;
})();
var statearr_20658_20713 = state_20628__$1;
(statearr_20658_20713[(2)] = null);

(statearr_20658_20713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (25))){
var inst_20624 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
var statearr_20659_20714 = state_20628__$1;
(statearr_20659_20714[(2)] = inst_20624);

(statearr_20659_20714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (34))){
var inst_20622 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
var statearr_20660_20715 = state_20628__$1;
(statearr_20660_20715[(2)] = inst_20622);

(statearr_20660_20715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (17))){
var state_20628__$1 = state_20628;
var statearr_20661_20716 = state_20628__$1;
(statearr_20661_20716[(2)] = false);

(statearr_20661_20716[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (3))){
var state_20628__$1 = state_20628;
var statearr_20662_20717 = state_20628__$1;
(statearr_20662_20717[(2)] = false);

(statearr_20662_20717[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (12))){
var inst_20626 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20628__$1,inst_20626);
} else {
if((state_val_20629 === (2))){
var inst_20534 = (state_20628[(8)]);
var inst_20539 = inst_20534.cljs$lang$protocol_mask$partition0$;
var inst_20540 = (inst_20539 & (64));
var inst_20541 = inst_20534.cljs$core$ISeq$;
var inst_20542 = (inst_20540) || (inst_20541);
var state_20628__$1 = state_20628;
if(cljs.core.truth_(inst_20542)){
var statearr_20663_20718 = state_20628__$1;
(statearr_20663_20718[(1)] = (5));

} else {
var statearr_20664_20719 = state_20628__$1;
(statearr_20664_20719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (23))){
var inst_20587 = (state_20628[(14)]);
var inst_20593 = (inst_20587 == null);
var state_20628__$1 = state_20628;
if(cljs.core.truth_(inst_20593)){
var statearr_20665_20720 = state_20628__$1;
(statearr_20665_20720[(1)] = (26));

} else {
var statearr_20666_20721 = state_20628__$1;
(statearr_20666_20721[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (35))){
var inst_20613 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
if(cljs.core.truth_(inst_20613)){
var statearr_20667_20722 = state_20628__$1;
(statearr_20667_20722[(1)] = (36));

} else {
var statearr_20668_20723 = state_20628__$1;
(statearr_20668_20723[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (19))){
var inst_20558 = (state_20628[(7)]);
var inst_20577 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20558);
var state_20628__$1 = state_20628;
var statearr_20669_20724 = state_20628__$1;
(statearr_20669_20724[(2)] = inst_20577);

(statearr_20669_20724[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (11))){
var inst_20558 = (state_20628[(7)]);
var inst_20562 = (inst_20558 == null);
var inst_20563 = cljs.core.not.call(null,inst_20562);
var state_20628__$1 = state_20628;
if(inst_20563){
var statearr_20670_20725 = state_20628__$1;
(statearr_20670_20725[(1)] = (13));

} else {
var statearr_20671_20726 = state_20628__$1;
(statearr_20671_20726[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (9))){
var inst_20534 = (state_20628[(8)]);
var state_20628__$1 = state_20628;
var statearr_20672_20727 = state_20628__$1;
(statearr_20672_20727[(2)] = inst_20534);

(statearr_20672_20727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (5))){
var state_20628__$1 = state_20628;
var statearr_20673_20728 = state_20628__$1;
(statearr_20673_20728[(2)] = true);

(statearr_20673_20728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (14))){
var state_20628__$1 = state_20628;
var statearr_20674_20729 = state_20628__$1;
(statearr_20674_20729[(2)] = false);

(statearr_20674_20729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (26))){
var inst_20588 = (state_20628[(9)]);
var inst_20595 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20588);
var state_20628__$1 = state_20628;
var statearr_20675_20730 = state_20628__$1;
(statearr_20675_20730[(2)] = inst_20595);

(statearr_20675_20730[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (16))){
var state_20628__$1 = state_20628;
var statearr_20676_20731 = state_20628__$1;
(statearr_20676_20731[(2)] = true);

(statearr_20676_20731[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (38))){
var inst_20618 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
var statearr_20677_20732 = state_20628__$1;
(statearr_20677_20732[(2)] = inst_20618);

(statearr_20677_20732[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (30))){
var inst_20582 = (state_20628[(13)]);
var inst_20588 = (state_20628[(9)]);
var inst_20581 = (state_20628[(11)]);
var inst_20605 = cljs.core.empty_QMARK_.call(null,inst_20581);
var inst_20606 = inst_20582.call(null,inst_20588);
var inst_20607 = cljs.core.not.call(null,inst_20606);
var inst_20608 = (inst_20605) && (inst_20607);
var state_20628__$1 = state_20628;
var statearr_20678_20733 = state_20628__$1;
(statearr_20678_20733[(2)] = inst_20608);

(statearr_20678_20733[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (10))){
var inst_20534 = (state_20628[(8)]);
var inst_20554 = (state_20628[(2)]);
var inst_20555 = cljs.core.get.call(null,inst_20554,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20556 = cljs.core.get.call(null,inst_20554,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20557 = cljs.core.get.call(null,inst_20554,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20558 = inst_20534;
var state_20628__$1 = (function (){var statearr_20679 = state_20628;
(statearr_20679[(7)] = inst_20558);

(statearr_20679[(16)] = inst_20557);

(statearr_20679[(17)] = inst_20556);

(statearr_20679[(18)] = inst_20555);

return statearr_20679;
})();
var statearr_20680_20734 = state_20628__$1;
(statearr_20680_20734[(2)] = null);

(statearr_20680_20734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (18))){
var inst_20572 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
var statearr_20681_20735 = state_20628__$1;
(statearr_20681_20735[(2)] = inst_20572);

(statearr_20681_20735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (37))){
var state_20628__$1 = state_20628;
var statearr_20682_20736 = state_20628__$1;
(statearr_20682_20736[(2)] = null);

(statearr_20682_20736[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (8))){
var inst_20534 = (state_20628[(8)]);
var inst_20551 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20534);
var state_20628__$1 = state_20628;
var statearr_20683_20737 = state_20628__$1;
(statearr_20683_20737[(2)] = inst_20551);

(statearr_20683_20737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18978__auto___20691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18866__auto__,c__18978__auto___20691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18867__auto__ = null;
var cljs$core$async$mix_$_state_machine__18867__auto____0 = (function (){
var statearr_20687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20687[(0)] = cljs$core$async$mix_$_state_machine__18867__auto__);

(statearr_20687[(1)] = (1));

return statearr_20687;
});
var cljs$core$async$mix_$_state_machine__18867__auto____1 = (function (state_20628){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_20628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e20688){if((e20688 instanceof Object)){
var ex__18870__auto__ = e20688;
var statearr_20689_20738 = state_20628;
(statearr_20689_20738[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20739 = state_20628;
state_20628 = G__20739;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18867__auto__ = function(state_20628){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18867__auto____1.call(this,state_20628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18867__auto____0;
cljs$core$async$mix_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18867__auto____1;
return cljs$core$async$mix_$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto___20691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18980__auto__ = (function (){var statearr_20690 = f__18979__auto__.call(null);
(statearr_20690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto___20691);

return statearr_20690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto___20691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17458__auto__ = (((p == null))?null:p);
var m__17459__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17458__auto__)]);
if(!((m__17459__auto__ == null))){
return m__17459__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17459__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17459__auto____$1 == null))){
return m__17459__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17458__auto__ = (((p == null))?null:p);
var m__17459__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17458__auto__)]);
if(!((m__17459__auto__ == null))){
return m__17459__auto__.call(null,p,v,ch);
} else {
var m__17459__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17459__auto____$1 == null))){
return m__17459__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args20740 = [];
var len__17861__auto___20743 = arguments.length;
var i__17862__auto___20744 = (0);
while(true){
if((i__17862__auto___20744 < len__17861__auto___20743)){
args20740.push((arguments[i__17862__auto___20744]));

var G__20745 = (i__17862__auto___20744 + (1));
i__17862__auto___20744 = G__20745;
continue;
} else {
}
break;
}

var G__20742 = args20740.length;
switch (G__20742) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20740.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17458__auto__ = (((p == null))?null:p);
var m__17459__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17458__auto__)]);
if(!((m__17459__auto__ == null))){
return m__17459__auto__.call(null,p);
} else {
var m__17459__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17459__auto____$1 == null))){
return m__17459__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17458__auto__ = (((p == null))?null:p);
var m__17459__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17458__auto__)]);
if(!((m__17459__auto__ == null))){
return m__17459__auto__.call(null,p,v);
} else {
var m__17459__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17459__auto____$1 == null))){
return m__17459__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args20748 = [];
var len__17861__auto___20873 = arguments.length;
var i__17862__auto___20874 = (0);
while(true){
if((i__17862__auto___20874 < len__17861__auto___20873)){
args20748.push((arguments[i__17862__auto___20874]));

var G__20875 = (i__17862__auto___20874 + (1));
i__17862__auto___20874 = G__20875;
continue;
} else {
}
break;
}

var G__20750 = args20748.length;
switch (G__20750) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20748.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16803__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16803__auto__)){
return or__16803__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16803__auto__,mults){
return (function (p1__20747_SHARP_){
if(cljs.core.truth_(p1__20747_SHARP_.call(null,topic))){
return p1__20747_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20747_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16803__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20751 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20751 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20752){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20752 = meta20752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20753,meta20752__$1){
var self__ = this;
var _20753__$1 = this;
return (new cljs.core.async.t_cljs$core$async20751(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20752__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20753){
var self__ = this;
var _20753__$1 = this;
return self__.meta20752;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20751.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20751.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20751.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async20751.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20751.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20751.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20751.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20751.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20752","meta20752",1802780452,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20751.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20751";

cljs.core.async.t_cljs$core$async20751.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17401__auto__,writer__17402__auto__,opt__17403__auto__){
return cljs.core._write.call(null,writer__17402__auto__,"cljs.core.async/t_cljs$core$async20751");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20751 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20751(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20752){
return (new cljs.core.async.t_cljs$core$async20751(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20752));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20751(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18978__auto___20877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto___20877,mults,ensure_mult,p){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto___20877,mults,ensure_mult,p){
return (function (state_20825){
var state_val_20826 = (state_20825[(1)]);
if((state_val_20826 === (7))){
var inst_20821 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20827_20878 = state_20825__$1;
(statearr_20827_20878[(2)] = inst_20821);

(statearr_20827_20878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (20))){
var state_20825__$1 = state_20825;
var statearr_20828_20879 = state_20825__$1;
(statearr_20828_20879[(2)] = null);

(statearr_20828_20879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (1))){
var state_20825__$1 = state_20825;
var statearr_20829_20880 = state_20825__$1;
(statearr_20829_20880[(2)] = null);

(statearr_20829_20880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (24))){
var inst_20804 = (state_20825[(7)]);
var inst_20813 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20804);
var state_20825__$1 = state_20825;
var statearr_20830_20881 = state_20825__$1;
(statearr_20830_20881[(2)] = inst_20813);

(statearr_20830_20881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (4))){
var inst_20756 = (state_20825[(8)]);
var inst_20756__$1 = (state_20825[(2)]);
var inst_20757 = (inst_20756__$1 == null);
var state_20825__$1 = (function (){var statearr_20831 = state_20825;
(statearr_20831[(8)] = inst_20756__$1);

return statearr_20831;
})();
if(cljs.core.truth_(inst_20757)){
var statearr_20832_20882 = state_20825__$1;
(statearr_20832_20882[(1)] = (5));

} else {
var statearr_20833_20883 = state_20825__$1;
(statearr_20833_20883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (15))){
var inst_20798 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20834_20884 = state_20825__$1;
(statearr_20834_20884[(2)] = inst_20798);

(statearr_20834_20884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (21))){
var inst_20818 = (state_20825[(2)]);
var state_20825__$1 = (function (){var statearr_20835 = state_20825;
(statearr_20835[(9)] = inst_20818);

return statearr_20835;
})();
var statearr_20836_20885 = state_20825__$1;
(statearr_20836_20885[(2)] = null);

(statearr_20836_20885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (13))){
var inst_20780 = (state_20825[(10)]);
var inst_20782 = cljs.core.chunked_seq_QMARK_.call(null,inst_20780);
var state_20825__$1 = state_20825;
if(inst_20782){
var statearr_20837_20886 = state_20825__$1;
(statearr_20837_20886[(1)] = (16));

} else {
var statearr_20838_20887 = state_20825__$1;
(statearr_20838_20887[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (22))){
var inst_20810 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
if(cljs.core.truth_(inst_20810)){
var statearr_20839_20888 = state_20825__$1;
(statearr_20839_20888[(1)] = (23));

} else {
var statearr_20840_20889 = state_20825__$1;
(statearr_20840_20889[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (6))){
var inst_20756 = (state_20825[(8)]);
var inst_20806 = (state_20825[(11)]);
var inst_20804 = (state_20825[(7)]);
var inst_20804__$1 = topic_fn.call(null,inst_20756);
var inst_20805 = cljs.core.deref.call(null,mults);
var inst_20806__$1 = cljs.core.get.call(null,inst_20805,inst_20804__$1);
var state_20825__$1 = (function (){var statearr_20841 = state_20825;
(statearr_20841[(11)] = inst_20806__$1);

(statearr_20841[(7)] = inst_20804__$1);

return statearr_20841;
})();
if(cljs.core.truth_(inst_20806__$1)){
var statearr_20842_20890 = state_20825__$1;
(statearr_20842_20890[(1)] = (19));

} else {
var statearr_20843_20891 = state_20825__$1;
(statearr_20843_20891[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (25))){
var inst_20815 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20844_20892 = state_20825__$1;
(statearr_20844_20892[(2)] = inst_20815);

(statearr_20844_20892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (17))){
var inst_20780 = (state_20825[(10)]);
var inst_20789 = cljs.core.first.call(null,inst_20780);
var inst_20790 = cljs.core.async.muxch_STAR_.call(null,inst_20789);
var inst_20791 = cljs.core.async.close_BANG_.call(null,inst_20790);
var inst_20792 = cljs.core.next.call(null,inst_20780);
var inst_20766 = inst_20792;
var inst_20767 = null;
var inst_20768 = (0);
var inst_20769 = (0);
var state_20825__$1 = (function (){var statearr_20845 = state_20825;
(statearr_20845[(12)] = inst_20766);

(statearr_20845[(13)] = inst_20767);

(statearr_20845[(14)] = inst_20768);

(statearr_20845[(15)] = inst_20791);

(statearr_20845[(16)] = inst_20769);

return statearr_20845;
})();
var statearr_20846_20893 = state_20825__$1;
(statearr_20846_20893[(2)] = null);

(statearr_20846_20893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (3))){
var inst_20823 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20825__$1,inst_20823);
} else {
if((state_val_20826 === (12))){
var inst_20800 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20847_20894 = state_20825__$1;
(statearr_20847_20894[(2)] = inst_20800);

(statearr_20847_20894[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (2))){
var state_20825__$1 = state_20825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20825__$1,(4),ch);
} else {
if((state_val_20826 === (23))){
var state_20825__$1 = state_20825;
var statearr_20848_20895 = state_20825__$1;
(statearr_20848_20895[(2)] = null);

(statearr_20848_20895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (19))){
var inst_20756 = (state_20825[(8)]);
var inst_20806 = (state_20825[(11)]);
var inst_20808 = cljs.core.async.muxch_STAR_.call(null,inst_20806);
var state_20825__$1 = state_20825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20825__$1,(22),inst_20808,inst_20756);
} else {
if((state_val_20826 === (11))){
var inst_20766 = (state_20825[(12)]);
var inst_20780 = (state_20825[(10)]);
var inst_20780__$1 = cljs.core.seq.call(null,inst_20766);
var state_20825__$1 = (function (){var statearr_20849 = state_20825;
(statearr_20849[(10)] = inst_20780__$1);

return statearr_20849;
})();
if(inst_20780__$1){
var statearr_20850_20896 = state_20825__$1;
(statearr_20850_20896[(1)] = (13));

} else {
var statearr_20851_20897 = state_20825__$1;
(statearr_20851_20897[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (9))){
var inst_20802 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20852_20898 = state_20825__$1;
(statearr_20852_20898[(2)] = inst_20802);

(statearr_20852_20898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (5))){
var inst_20763 = cljs.core.deref.call(null,mults);
var inst_20764 = cljs.core.vals.call(null,inst_20763);
var inst_20765 = cljs.core.seq.call(null,inst_20764);
var inst_20766 = inst_20765;
var inst_20767 = null;
var inst_20768 = (0);
var inst_20769 = (0);
var state_20825__$1 = (function (){var statearr_20853 = state_20825;
(statearr_20853[(12)] = inst_20766);

(statearr_20853[(13)] = inst_20767);

(statearr_20853[(14)] = inst_20768);

(statearr_20853[(16)] = inst_20769);

return statearr_20853;
})();
var statearr_20854_20899 = state_20825__$1;
(statearr_20854_20899[(2)] = null);

(statearr_20854_20899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (14))){
var state_20825__$1 = state_20825;
var statearr_20858_20900 = state_20825__$1;
(statearr_20858_20900[(2)] = null);

(statearr_20858_20900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (16))){
var inst_20780 = (state_20825[(10)]);
var inst_20784 = cljs.core.chunk_first.call(null,inst_20780);
var inst_20785 = cljs.core.chunk_rest.call(null,inst_20780);
var inst_20786 = cljs.core.count.call(null,inst_20784);
var inst_20766 = inst_20785;
var inst_20767 = inst_20784;
var inst_20768 = inst_20786;
var inst_20769 = (0);
var state_20825__$1 = (function (){var statearr_20859 = state_20825;
(statearr_20859[(12)] = inst_20766);

(statearr_20859[(13)] = inst_20767);

(statearr_20859[(14)] = inst_20768);

(statearr_20859[(16)] = inst_20769);

return statearr_20859;
})();
var statearr_20860_20901 = state_20825__$1;
(statearr_20860_20901[(2)] = null);

(statearr_20860_20901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (10))){
var inst_20766 = (state_20825[(12)]);
var inst_20767 = (state_20825[(13)]);
var inst_20768 = (state_20825[(14)]);
var inst_20769 = (state_20825[(16)]);
var inst_20774 = cljs.core._nth.call(null,inst_20767,inst_20769);
var inst_20775 = cljs.core.async.muxch_STAR_.call(null,inst_20774);
var inst_20776 = cljs.core.async.close_BANG_.call(null,inst_20775);
var inst_20777 = (inst_20769 + (1));
var tmp20855 = inst_20766;
var tmp20856 = inst_20767;
var tmp20857 = inst_20768;
var inst_20766__$1 = tmp20855;
var inst_20767__$1 = tmp20856;
var inst_20768__$1 = tmp20857;
var inst_20769__$1 = inst_20777;
var state_20825__$1 = (function (){var statearr_20861 = state_20825;
(statearr_20861[(12)] = inst_20766__$1);

(statearr_20861[(13)] = inst_20767__$1);

(statearr_20861[(17)] = inst_20776);

(statearr_20861[(14)] = inst_20768__$1);

(statearr_20861[(16)] = inst_20769__$1);

return statearr_20861;
})();
var statearr_20862_20902 = state_20825__$1;
(statearr_20862_20902[(2)] = null);

(statearr_20862_20902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (18))){
var inst_20795 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20863_20903 = state_20825__$1;
(statearr_20863_20903[(2)] = inst_20795);

(statearr_20863_20903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (8))){
var inst_20768 = (state_20825[(14)]);
var inst_20769 = (state_20825[(16)]);
var inst_20771 = (inst_20769 < inst_20768);
var inst_20772 = inst_20771;
var state_20825__$1 = state_20825;
if(cljs.core.truth_(inst_20772)){
var statearr_20864_20904 = state_20825__$1;
(statearr_20864_20904[(1)] = (10));

} else {
var statearr_20865_20905 = state_20825__$1;
(statearr_20865_20905[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18978__auto___20877,mults,ensure_mult,p))
;
return ((function (switch__18866__auto__,c__18978__auto___20877,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_20869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20869[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_20869[(1)] = (1));

return statearr_20869;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_20825){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_20825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e20870){if((e20870 instanceof Object)){
var ex__18870__auto__ = e20870;
var statearr_20871_20906 = state_20825;
(statearr_20871_20906[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20907 = state_20825;
state_20825 = G__20907;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_20825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_20825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto___20877,mults,ensure_mult,p))
})();
var state__18980__auto__ = (function (){var statearr_20872 = f__18979__auto__.call(null);
(statearr_20872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto___20877);

return statearr_20872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto___20877,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args20908 = [];
var len__17861__auto___20911 = arguments.length;
var i__17862__auto___20912 = (0);
while(true){
if((i__17862__auto___20912 < len__17861__auto___20911)){
args20908.push((arguments[i__17862__auto___20912]));

var G__20913 = (i__17862__auto___20912 + (1));
i__17862__auto___20912 = G__20913;
continue;
} else {
}
break;
}

var G__20910 = args20908.length;
switch (G__20910) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20908.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args20915 = [];
var len__17861__auto___20918 = arguments.length;
var i__17862__auto___20919 = (0);
while(true){
if((i__17862__auto___20919 < len__17861__auto___20918)){
args20915.push((arguments[i__17862__auto___20919]));

var G__20920 = (i__17862__auto___20919 + (1));
i__17862__auto___20919 = G__20920;
continue;
} else {
}
break;
}

var G__20917 = args20915.length;
switch (G__20917) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20915.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args20922 = [];
var len__17861__auto___20993 = arguments.length;
var i__17862__auto___20994 = (0);
while(true){
if((i__17862__auto___20994 < len__17861__auto___20993)){
args20922.push((arguments[i__17862__auto___20994]));

var G__20995 = (i__17862__auto___20994 + (1));
i__17862__auto___20994 = G__20995;
continue;
} else {
}
break;
}

var G__20924 = args20922.length;
switch (G__20924) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20922.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18978__auto___20997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto___20997,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto___20997,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20963){
var state_val_20964 = (state_20963[(1)]);
if((state_val_20964 === (7))){
var state_20963__$1 = state_20963;
var statearr_20965_20998 = state_20963__$1;
(statearr_20965_20998[(2)] = null);

(statearr_20965_20998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20964 === (1))){
var state_20963__$1 = state_20963;
var statearr_20966_20999 = state_20963__$1;
(statearr_20966_20999[(2)] = null);

(statearr_20966_20999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20964 === (4))){
var inst_20927 = (state_20963[(7)]);
var inst_20929 = (inst_20927 < cnt);
var state_20963__$1 = state_20963;
if(cljs.core.truth_(inst_20929)){
var statearr_20967_21000 = state_20963__$1;
(statearr_20967_21000[(1)] = (6));

} else {
var statearr_20968_21001 = state_20963__$1;
(statearr_20968_21001[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20964 === (15))){
var inst_20959 = (state_20963[(2)]);
var state_20963__$1 = state_20963;
var statearr_20969_21002 = state_20963__$1;
(statearr_20969_21002[(2)] = inst_20959);

(statearr_20969_21002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20964 === (13))){
var inst_20952 = cljs.core.async.close_BANG_.call(null,out);
var state_20963__$1 = state_20963;
var statearr_20970_21003 = state_20963__$1;
(statearr_20970_21003[(2)] = inst_20952);

(statearr_20970_21003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20964 === (6))){
var state_20963__$1 = state_20963;
var statearr_20971_21004 = state_20963__$1;
(statearr_20971_21004[(2)] = null);

(statearr_20971_21004[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20964 === (3))){
var inst_20961 = (state_20963[(2)]);
var state_20963__$1 = state_20963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20963__$1,inst_20961);
} else {
if((state_val_20964 === (12))){
var inst_20949 = (state_20963[(8)]);
var inst_20949__$1 = (state_20963[(2)]);
var inst_20950 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20949__$1);
var state_20963__$1 = (function (){var statearr_20972 = state_20963;
(statearr_20972[(8)] = inst_20949__$1);

return statearr_20972;
})();
if(cljs.core.truth_(inst_20950)){
var statearr_20973_21005 = state_20963__$1;
(statearr_20973_21005[(1)] = (13));

} else {
var statearr_20974_21006 = state_20963__$1;
(statearr_20974_21006[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20964 === (2))){
var inst_20926 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20927 = (0);
var state_20963__$1 = (function (){var statearr_20975 = state_20963;
(statearr_20975[(7)] = inst_20927);

(statearr_20975[(10)] = inst_20926);

return statearr_20975;
})();
var statearr_20976_21007 = state_20963__$1;
(statearr_20976_21007[(2)] = null);

(statearr_20976_21007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20964 === (11))){
var inst_20927 = (state_20963[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20963,(10),Object,null,(9));
var inst_20936 = chs__$1.call(null,inst_20927);
var inst_20937 = done.call(null,inst_20927);
var inst_20938 = cljs.core.async.take_BANG_.call(null,inst_20936,inst_20937);
var state_20963__$1 = state_20963;
var statearr_20977_21008 = state_20963__$1;
(statearr_20977_21008[(2)] = inst_20938);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20963__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20964 === (9))){
var inst_20927 = (state_20963[(7)]);
var inst_20940 = (state_20963[(2)]);
var inst_20941 = (inst_20927 + (1));
var inst_20927__$1 = inst_20941;
var state_20963__$1 = (function (){var statearr_20978 = state_20963;
(statearr_20978[(9)] = inst_20940);

(statearr_20978[(7)] = inst_20927__$1);

return statearr_20978;
})();
var statearr_20979_21009 = state_20963__$1;
(statearr_20979_21009[(2)] = null);

(statearr_20979_21009[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20964 === (5))){
var inst_20947 = (state_20963[(2)]);
var state_20963__$1 = (function (){var statearr_20980 = state_20963;
(statearr_20980[(11)] = inst_20947);

return statearr_20980;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20963__$1,(12),dchan);
} else {
if((state_val_20964 === (14))){
var inst_20949 = (state_20963[(8)]);
var inst_20954 = cljs.core.apply.call(null,f,inst_20949);
var state_20963__$1 = state_20963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20963__$1,(16),out,inst_20954);
} else {
if((state_val_20964 === (16))){
var inst_20956 = (state_20963[(2)]);
var state_20963__$1 = (function (){var statearr_20981 = state_20963;
(statearr_20981[(12)] = inst_20956);

return statearr_20981;
})();
var statearr_20982_21010 = state_20963__$1;
(statearr_20982_21010[(2)] = null);

(statearr_20982_21010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20964 === (10))){
var inst_20931 = (state_20963[(2)]);
var inst_20932 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20963__$1 = (function (){var statearr_20983 = state_20963;
(statearr_20983[(13)] = inst_20931);

return statearr_20983;
})();
var statearr_20984_21011 = state_20963__$1;
(statearr_20984_21011[(2)] = inst_20932);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20963__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20964 === (8))){
var inst_20945 = (state_20963[(2)]);
var state_20963__$1 = state_20963;
var statearr_20985_21012 = state_20963__$1;
(statearr_20985_21012[(2)] = inst_20945);

(statearr_20985_21012[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18978__auto___20997,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18866__auto__,c__18978__auto___20997,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_20989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20989[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_20989[(1)] = (1));

return statearr_20989;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_20963){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_20963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e20990){if((e20990 instanceof Object)){
var ex__18870__auto__ = e20990;
var statearr_20991_21013 = state_20963;
(statearr_20991_21013[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21014 = state_20963;
state_20963 = G__21014;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_20963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_20963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto___20997,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18980__auto__ = (function (){var statearr_20992 = f__18979__auto__.call(null);
(statearr_20992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto___20997);

return statearr_20992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto___20997,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21016 = [];
var len__17861__auto___21072 = arguments.length;
var i__17862__auto___21073 = (0);
while(true){
if((i__17862__auto___21073 < len__17861__auto___21072)){
args21016.push((arguments[i__17862__auto___21073]));

var G__21074 = (i__17862__auto___21073 + (1));
i__17862__auto___21073 = G__21074;
continue;
} else {
}
break;
}

var G__21018 = args21016.length;
switch (G__21018) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21016.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18978__auto___21076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto___21076,out){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto___21076,out){
return (function (state_21048){
var state_val_21049 = (state_21048[(1)]);
if((state_val_21049 === (7))){
var inst_21028 = (state_21048[(7)]);
var inst_21027 = (state_21048[(8)]);
var inst_21027__$1 = (state_21048[(2)]);
var inst_21028__$1 = cljs.core.nth.call(null,inst_21027__$1,(0),null);
var inst_21029 = cljs.core.nth.call(null,inst_21027__$1,(1),null);
var inst_21030 = (inst_21028__$1 == null);
var state_21048__$1 = (function (){var statearr_21050 = state_21048;
(statearr_21050[(7)] = inst_21028__$1);

(statearr_21050[(10)] = inst_21029);

(statearr_21050[(8)] = inst_21027__$1);

return statearr_21050;
})();
if(cljs.core.truth_(inst_21030)){
var statearr_21051_21077 = state_21048__$1;
(statearr_21051_21077[(1)] = (8));

} else {
var statearr_21052_21078 = state_21048__$1;
(statearr_21052_21078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21049 === (1))){
var inst_21019 = cljs.core.vec.call(null,chs);
var inst_21020 = inst_21019;
var state_21048__$1 = (function (){var statearr_21053 = state_21048;
(statearr_21053[(9)] = inst_21020);

return statearr_21053;
})();
var statearr_21054_21079 = state_21048__$1;
(statearr_21054_21079[(2)] = null);

(statearr_21054_21079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21049 === (4))){
var inst_21020 = (state_21048[(9)]);
var state_21048__$1 = state_21048;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21048__$1,(7),inst_21020);
} else {
if((state_val_21049 === (6))){
var inst_21044 = (state_21048[(2)]);
var state_21048__$1 = state_21048;
var statearr_21055_21080 = state_21048__$1;
(statearr_21055_21080[(2)] = inst_21044);

(statearr_21055_21080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21049 === (3))){
var inst_21046 = (state_21048[(2)]);
var state_21048__$1 = state_21048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21048__$1,inst_21046);
} else {
if((state_val_21049 === (2))){
var inst_21020 = (state_21048[(9)]);
var inst_21022 = cljs.core.count.call(null,inst_21020);
var inst_21023 = (inst_21022 > (0));
var state_21048__$1 = state_21048;
if(cljs.core.truth_(inst_21023)){
var statearr_21057_21081 = state_21048__$1;
(statearr_21057_21081[(1)] = (4));

} else {
var statearr_21058_21082 = state_21048__$1;
(statearr_21058_21082[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21049 === (11))){
var inst_21020 = (state_21048[(9)]);
var inst_21037 = (state_21048[(2)]);
var tmp21056 = inst_21020;
var inst_21020__$1 = tmp21056;
var state_21048__$1 = (function (){var statearr_21059 = state_21048;
(statearr_21059[(9)] = inst_21020__$1);

(statearr_21059[(11)] = inst_21037);

return statearr_21059;
})();
var statearr_21060_21083 = state_21048__$1;
(statearr_21060_21083[(2)] = null);

(statearr_21060_21083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21049 === (9))){
var inst_21028 = (state_21048[(7)]);
var state_21048__$1 = state_21048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21048__$1,(11),out,inst_21028);
} else {
if((state_val_21049 === (5))){
var inst_21042 = cljs.core.async.close_BANG_.call(null,out);
var state_21048__$1 = state_21048;
var statearr_21061_21084 = state_21048__$1;
(statearr_21061_21084[(2)] = inst_21042);

(statearr_21061_21084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21049 === (10))){
var inst_21040 = (state_21048[(2)]);
var state_21048__$1 = state_21048;
var statearr_21062_21085 = state_21048__$1;
(statearr_21062_21085[(2)] = inst_21040);

(statearr_21062_21085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21049 === (8))){
var inst_21028 = (state_21048[(7)]);
var inst_21020 = (state_21048[(9)]);
var inst_21029 = (state_21048[(10)]);
var inst_21027 = (state_21048[(8)]);
var inst_21032 = (function (){var cs = inst_21020;
var vec__21025 = inst_21027;
var v = inst_21028;
var c = inst_21029;
return ((function (cs,vec__21025,v,c,inst_21028,inst_21020,inst_21029,inst_21027,state_val_21049,c__18978__auto___21076,out){
return (function (p1__21015_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21015_SHARP_);
});
;})(cs,vec__21025,v,c,inst_21028,inst_21020,inst_21029,inst_21027,state_val_21049,c__18978__auto___21076,out))
})();
var inst_21033 = cljs.core.filterv.call(null,inst_21032,inst_21020);
var inst_21020__$1 = inst_21033;
var state_21048__$1 = (function (){var statearr_21063 = state_21048;
(statearr_21063[(9)] = inst_21020__$1);

return statearr_21063;
})();
var statearr_21064_21086 = state_21048__$1;
(statearr_21064_21086[(2)] = null);

(statearr_21064_21086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18978__auto___21076,out))
;
return ((function (switch__18866__auto__,c__18978__auto___21076,out){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_21068 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21068[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_21068[(1)] = (1));

return statearr_21068;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_21048){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_21048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e21069){if((e21069 instanceof Object)){
var ex__18870__auto__ = e21069;
var statearr_21070_21087 = state_21048;
(statearr_21070_21087[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21088 = state_21048;
state_21048 = G__21088;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_21048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_21048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto___21076,out))
})();
var state__18980__auto__ = (function (){var statearr_21071 = f__18979__auto__.call(null);
(statearr_21071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto___21076);

return statearr_21071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto___21076,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21089 = [];
var len__17861__auto___21138 = arguments.length;
var i__17862__auto___21139 = (0);
while(true){
if((i__17862__auto___21139 < len__17861__auto___21138)){
args21089.push((arguments[i__17862__auto___21139]));

var G__21140 = (i__17862__auto___21139 + (1));
i__17862__auto___21139 = G__21140;
continue;
} else {
}
break;
}

var G__21091 = args21089.length;
switch (G__21091) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21089.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18978__auto___21142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto___21142,out){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto___21142,out){
return (function (state_21115){
var state_val_21116 = (state_21115[(1)]);
if((state_val_21116 === (7))){
var inst_21097 = (state_21115[(7)]);
var inst_21097__$1 = (state_21115[(2)]);
var inst_21098 = (inst_21097__$1 == null);
var inst_21099 = cljs.core.not.call(null,inst_21098);
var state_21115__$1 = (function (){var statearr_21117 = state_21115;
(statearr_21117[(7)] = inst_21097__$1);

return statearr_21117;
})();
if(inst_21099){
var statearr_21118_21143 = state_21115__$1;
(statearr_21118_21143[(1)] = (8));

} else {
var statearr_21119_21144 = state_21115__$1;
(statearr_21119_21144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (1))){
var inst_21092 = (0);
var state_21115__$1 = (function (){var statearr_21120 = state_21115;
(statearr_21120[(8)] = inst_21092);

return statearr_21120;
})();
var statearr_21121_21145 = state_21115__$1;
(statearr_21121_21145[(2)] = null);

(statearr_21121_21145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (4))){
var state_21115__$1 = state_21115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21115__$1,(7),ch);
} else {
if((state_val_21116 === (6))){
var inst_21110 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
var statearr_21122_21146 = state_21115__$1;
(statearr_21122_21146[(2)] = inst_21110);

(statearr_21122_21146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (3))){
var inst_21112 = (state_21115[(2)]);
var inst_21113 = cljs.core.async.close_BANG_.call(null,out);
var state_21115__$1 = (function (){var statearr_21123 = state_21115;
(statearr_21123[(9)] = inst_21112);

return statearr_21123;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21115__$1,inst_21113);
} else {
if((state_val_21116 === (2))){
var inst_21092 = (state_21115[(8)]);
var inst_21094 = (inst_21092 < n);
var state_21115__$1 = state_21115;
if(cljs.core.truth_(inst_21094)){
var statearr_21124_21147 = state_21115__$1;
(statearr_21124_21147[(1)] = (4));

} else {
var statearr_21125_21148 = state_21115__$1;
(statearr_21125_21148[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (11))){
var inst_21092 = (state_21115[(8)]);
var inst_21102 = (state_21115[(2)]);
var inst_21103 = (inst_21092 + (1));
var inst_21092__$1 = inst_21103;
var state_21115__$1 = (function (){var statearr_21126 = state_21115;
(statearr_21126[(10)] = inst_21102);

(statearr_21126[(8)] = inst_21092__$1);

return statearr_21126;
})();
var statearr_21127_21149 = state_21115__$1;
(statearr_21127_21149[(2)] = null);

(statearr_21127_21149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (9))){
var state_21115__$1 = state_21115;
var statearr_21128_21150 = state_21115__$1;
(statearr_21128_21150[(2)] = null);

(statearr_21128_21150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (5))){
var state_21115__$1 = state_21115;
var statearr_21129_21151 = state_21115__$1;
(statearr_21129_21151[(2)] = null);

(statearr_21129_21151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (10))){
var inst_21107 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
var statearr_21130_21152 = state_21115__$1;
(statearr_21130_21152[(2)] = inst_21107);

(statearr_21130_21152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (8))){
var inst_21097 = (state_21115[(7)]);
var state_21115__$1 = state_21115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21115__$1,(11),out,inst_21097);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18978__auto___21142,out))
;
return ((function (switch__18866__auto__,c__18978__auto___21142,out){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_21134 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21134[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_21134[(1)] = (1));

return statearr_21134;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_21115){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_21115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e21135){if((e21135 instanceof Object)){
var ex__18870__auto__ = e21135;
var statearr_21136_21153 = state_21115;
(statearr_21136_21153[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21154 = state_21115;
state_21115 = G__21154;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_21115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_21115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto___21142,out))
})();
var state__18980__auto__ = (function (){var statearr_21137 = f__18979__auto__.call(null);
(statearr_21137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto___21142);

return statearr_21137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto___21142,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21162 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21162 = (function (map_LT_,f,ch,meta21163){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21163 = meta21163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21164,meta21163__$1){
var self__ = this;
var _21164__$1 = this;
return (new cljs.core.async.t_cljs$core$async21162(self__.map_LT_,self__.f,self__.ch,meta21163__$1));
});

cljs.core.async.t_cljs$core$async21162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21164){
var self__ = this;
var _21164__$1 = this;
return self__.meta21163;
});

cljs.core.async.t_cljs$core$async21162.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21162.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21162.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21162.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21162.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21165 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21165 = (function (map_LT_,f,ch,meta21163,_,fn1,meta21166){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21163 = meta21163;
this._ = _;
this.fn1 = fn1;
this.meta21166 = meta21166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21167,meta21166__$1){
var self__ = this;
var _21167__$1 = this;
return (new cljs.core.async.t_cljs$core$async21165(self__.map_LT_,self__.f,self__.ch,self__.meta21163,self__._,self__.fn1,meta21166__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21167){
var self__ = this;
var _21167__$1 = this;
return self__.meta21166;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21155_SHARP_){
return f1.call(null,(((p1__21155_SHARP_ == null))?null:self__.f.call(null,p1__21155_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21165.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21163","meta21163",1227929595,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21162","cljs.core.async/t_cljs$core$async21162",-765596975,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21166","meta21166",-1780039876,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21165.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21165";

cljs.core.async.t_cljs$core$async21165.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17401__auto__,writer__17402__auto__,opt__17403__auto__){
return cljs.core._write.call(null,writer__17402__auto__,"cljs.core.async/t_cljs$core$async21165");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21165 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21165(map_LT___$1,f__$1,ch__$1,meta21163__$1,___$2,fn1__$1,meta21166){
return (new cljs.core.async.t_cljs$core$async21165(map_LT___$1,f__$1,ch__$1,meta21163__$1,___$2,fn1__$1,meta21166));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21165(self__.map_LT_,self__.f,self__.ch,self__.meta21163,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16791__auto__ = ret;
if(cljs.core.truth_(and__16791__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16791__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21162.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21162.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21163","meta21163",1227929595,null)], null);
});

cljs.core.async.t_cljs$core$async21162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21162";

cljs.core.async.t_cljs$core$async21162.cljs$lang$ctorPrWriter = (function (this__17401__auto__,writer__17402__auto__,opt__17403__auto__){
return cljs.core._write.call(null,writer__17402__auto__,"cljs.core.async/t_cljs$core$async21162");
});

cljs.core.async.__GT_t_cljs$core$async21162 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21162(map_LT___$1,f__$1,ch__$1,meta21163){
return (new cljs.core.async.t_cljs$core$async21162(map_LT___$1,f__$1,ch__$1,meta21163));
});

}

return (new cljs.core.async.t_cljs$core$async21162(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21171 = (function (map_GT_,f,ch,meta21172){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21172 = meta21172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21173,meta21172__$1){
var self__ = this;
var _21173__$1 = this;
return (new cljs.core.async.t_cljs$core$async21171(self__.map_GT_,self__.f,self__.ch,meta21172__$1));
});

cljs.core.async.t_cljs$core$async21171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21173){
var self__ = this;
var _21173__$1 = this;
return self__.meta21172;
});

cljs.core.async.t_cljs$core$async21171.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21171.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21171.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21171.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21171.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21171.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21172","meta21172",991290501,null)], null);
});

cljs.core.async.t_cljs$core$async21171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21171";

cljs.core.async.t_cljs$core$async21171.cljs$lang$ctorPrWriter = (function (this__17401__auto__,writer__17402__auto__,opt__17403__auto__){
return cljs.core._write.call(null,writer__17402__auto__,"cljs.core.async/t_cljs$core$async21171");
});

cljs.core.async.__GT_t_cljs$core$async21171 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21171(map_GT___$1,f__$1,ch__$1,meta21172){
return (new cljs.core.async.t_cljs$core$async21171(map_GT___$1,f__$1,ch__$1,meta21172));
});

}

return (new cljs.core.async.t_cljs$core$async21171(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21177 = (function (filter_GT_,p,ch,meta21178){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21178 = meta21178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21179,meta21178__$1){
var self__ = this;
var _21179__$1 = this;
return (new cljs.core.async.t_cljs$core$async21177(self__.filter_GT_,self__.p,self__.ch,meta21178__$1));
});

cljs.core.async.t_cljs$core$async21177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21179){
var self__ = this;
var _21179__$1 = this;
return self__.meta21178;
});

cljs.core.async.t_cljs$core$async21177.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21177.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21177.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21177.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21177.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21177.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21177.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21178","meta21178",1856523628,null)], null);
});

cljs.core.async.t_cljs$core$async21177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21177";

cljs.core.async.t_cljs$core$async21177.cljs$lang$ctorPrWriter = (function (this__17401__auto__,writer__17402__auto__,opt__17403__auto__){
return cljs.core._write.call(null,writer__17402__auto__,"cljs.core.async/t_cljs$core$async21177");
});

cljs.core.async.__GT_t_cljs$core$async21177 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21177(filter_GT___$1,p__$1,ch__$1,meta21178){
return (new cljs.core.async.t_cljs$core$async21177(filter_GT___$1,p__$1,ch__$1,meta21178));
});

}

return (new cljs.core.async.t_cljs$core$async21177(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21180 = [];
var len__17861__auto___21224 = arguments.length;
var i__17862__auto___21225 = (0);
while(true){
if((i__17862__auto___21225 < len__17861__auto___21224)){
args21180.push((arguments[i__17862__auto___21225]));

var G__21226 = (i__17862__auto___21225 + (1));
i__17862__auto___21225 = G__21226;
continue;
} else {
}
break;
}

var G__21182 = args21180.length;
switch (G__21182) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21180.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18978__auto___21228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto___21228,out){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto___21228,out){
return (function (state_21203){
var state_val_21204 = (state_21203[(1)]);
if((state_val_21204 === (7))){
var inst_21199 = (state_21203[(2)]);
var state_21203__$1 = state_21203;
var statearr_21205_21229 = state_21203__$1;
(statearr_21205_21229[(2)] = inst_21199);

(statearr_21205_21229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21204 === (1))){
var state_21203__$1 = state_21203;
var statearr_21206_21230 = state_21203__$1;
(statearr_21206_21230[(2)] = null);

(statearr_21206_21230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21204 === (4))){
var inst_21185 = (state_21203[(7)]);
var inst_21185__$1 = (state_21203[(2)]);
var inst_21186 = (inst_21185__$1 == null);
var state_21203__$1 = (function (){var statearr_21207 = state_21203;
(statearr_21207[(7)] = inst_21185__$1);

return statearr_21207;
})();
if(cljs.core.truth_(inst_21186)){
var statearr_21208_21231 = state_21203__$1;
(statearr_21208_21231[(1)] = (5));

} else {
var statearr_21209_21232 = state_21203__$1;
(statearr_21209_21232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21204 === (6))){
var inst_21185 = (state_21203[(7)]);
var inst_21190 = p.call(null,inst_21185);
var state_21203__$1 = state_21203;
if(cljs.core.truth_(inst_21190)){
var statearr_21210_21233 = state_21203__$1;
(statearr_21210_21233[(1)] = (8));

} else {
var statearr_21211_21234 = state_21203__$1;
(statearr_21211_21234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21204 === (3))){
var inst_21201 = (state_21203[(2)]);
var state_21203__$1 = state_21203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21203__$1,inst_21201);
} else {
if((state_val_21204 === (2))){
var state_21203__$1 = state_21203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21203__$1,(4),ch);
} else {
if((state_val_21204 === (11))){
var inst_21193 = (state_21203[(2)]);
var state_21203__$1 = state_21203;
var statearr_21212_21235 = state_21203__$1;
(statearr_21212_21235[(2)] = inst_21193);

(statearr_21212_21235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21204 === (9))){
var state_21203__$1 = state_21203;
var statearr_21213_21236 = state_21203__$1;
(statearr_21213_21236[(2)] = null);

(statearr_21213_21236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21204 === (5))){
var inst_21188 = cljs.core.async.close_BANG_.call(null,out);
var state_21203__$1 = state_21203;
var statearr_21214_21237 = state_21203__$1;
(statearr_21214_21237[(2)] = inst_21188);

(statearr_21214_21237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21204 === (10))){
var inst_21196 = (state_21203[(2)]);
var state_21203__$1 = (function (){var statearr_21215 = state_21203;
(statearr_21215[(8)] = inst_21196);

return statearr_21215;
})();
var statearr_21216_21238 = state_21203__$1;
(statearr_21216_21238[(2)] = null);

(statearr_21216_21238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21204 === (8))){
var inst_21185 = (state_21203[(7)]);
var state_21203__$1 = state_21203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21203__$1,(11),out,inst_21185);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18978__auto___21228,out))
;
return ((function (switch__18866__auto__,c__18978__auto___21228,out){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_21220 = [null,null,null,null,null,null,null,null,null];
(statearr_21220[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_21220[(1)] = (1));

return statearr_21220;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_21203){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_21203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e21221){if((e21221 instanceof Object)){
var ex__18870__auto__ = e21221;
var statearr_21222_21239 = state_21203;
(statearr_21222_21239[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21240 = state_21203;
state_21203 = G__21240;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_21203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_21203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto___21228,out))
})();
var state__18980__auto__ = (function (){var statearr_21223 = f__18979__auto__.call(null);
(statearr_21223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto___21228);

return statearr_21223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto___21228,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21241 = [];
var len__17861__auto___21244 = arguments.length;
var i__17862__auto___21245 = (0);
while(true){
if((i__17862__auto___21245 < len__17861__auto___21244)){
args21241.push((arguments[i__17862__auto___21245]));

var G__21246 = (i__17862__auto___21245 + (1));
i__17862__auto___21245 = G__21246;
continue;
} else {
}
break;
}

var G__21243 = args21241.length;
switch (G__21243) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21241.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto__){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto__){
return (function (state_21413){
var state_val_21414 = (state_21413[(1)]);
if((state_val_21414 === (7))){
var inst_21409 = (state_21413[(2)]);
var state_21413__$1 = state_21413;
var statearr_21415_21456 = state_21413__$1;
(statearr_21415_21456[(2)] = inst_21409);

(statearr_21415_21456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (20))){
var inst_21379 = (state_21413[(7)]);
var inst_21390 = (state_21413[(2)]);
var inst_21391 = cljs.core.next.call(null,inst_21379);
var inst_21365 = inst_21391;
var inst_21366 = null;
var inst_21367 = (0);
var inst_21368 = (0);
var state_21413__$1 = (function (){var statearr_21416 = state_21413;
(statearr_21416[(8)] = inst_21390);

(statearr_21416[(10)] = inst_21366);

(statearr_21416[(11)] = inst_21365);

(statearr_21416[(12)] = inst_21368);

(statearr_21416[(13)] = inst_21367);

return statearr_21416;
})();
var statearr_21417_21457 = state_21413__$1;
(statearr_21417_21457[(2)] = null);

(statearr_21417_21457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (1))){
var state_21413__$1 = state_21413;
var statearr_21418_21458 = state_21413__$1;
(statearr_21418_21458[(2)] = null);

(statearr_21418_21458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (4))){
var inst_21354 = (state_21413[(9)]);
var inst_21354__$1 = (state_21413[(2)]);
var inst_21355 = (inst_21354__$1 == null);
var state_21413__$1 = (function (){var statearr_21419 = state_21413;
(statearr_21419[(9)] = inst_21354__$1);

return statearr_21419;
})();
if(cljs.core.truth_(inst_21355)){
var statearr_21420_21459 = state_21413__$1;
(statearr_21420_21459[(1)] = (5));

} else {
var statearr_21421_21460 = state_21413__$1;
(statearr_21421_21460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (15))){
var state_21413__$1 = state_21413;
var statearr_21425_21461 = state_21413__$1;
(statearr_21425_21461[(2)] = null);

(statearr_21425_21461[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (21))){
var state_21413__$1 = state_21413;
var statearr_21426_21462 = state_21413__$1;
(statearr_21426_21462[(2)] = null);

(statearr_21426_21462[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (13))){
var inst_21366 = (state_21413[(10)]);
var inst_21365 = (state_21413[(11)]);
var inst_21368 = (state_21413[(12)]);
var inst_21367 = (state_21413[(13)]);
var inst_21375 = (state_21413[(2)]);
var inst_21376 = (inst_21368 + (1));
var tmp21422 = inst_21366;
var tmp21423 = inst_21365;
var tmp21424 = inst_21367;
var inst_21365__$1 = tmp21423;
var inst_21366__$1 = tmp21422;
var inst_21367__$1 = tmp21424;
var inst_21368__$1 = inst_21376;
var state_21413__$1 = (function (){var statearr_21427 = state_21413;
(statearr_21427[(10)] = inst_21366__$1);

(statearr_21427[(11)] = inst_21365__$1);

(statearr_21427[(12)] = inst_21368__$1);

(statearr_21427[(14)] = inst_21375);

(statearr_21427[(13)] = inst_21367__$1);

return statearr_21427;
})();
var statearr_21428_21463 = state_21413__$1;
(statearr_21428_21463[(2)] = null);

(statearr_21428_21463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (22))){
var state_21413__$1 = state_21413;
var statearr_21429_21464 = state_21413__$1;
(statearr_21429_21464[(2)] = null);

(statearr_21429_21464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (6))){
var inst_21354 = (state_21413[(9)]);
var inst_21363 = f.call(null,inst_21354);
var inst_21364 = cljs.core.seq.call(null,inst_21363);
var inst_21365 = inst_21364;
var inst_21366 = null;
var inst_21367 = (0);
var inst_21368 = (0);
var state_21413__$1 = (function (){var statearr_21430 = state_21413;
(statearr_21430[(10)] = inst_21366);

(statearr_21430[(11)] = inst_21365);

(statearr_21430[(12)] = inst_21368);

(statearr_21430[(13)] = inst_21367);

return statearr_21430;
})();
var statearr_21431_21465 = state_21413__$1;
(statearr_21431_21465[(2)] = null);

(statearr_21431_21465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (17))){
var inst_21379 = (state_21413[(7)]);
var inst_21383 = cljs.core.chunk_first.call(null,inst_21379);
var inst_21384 = cljs.core.chunk_rest.call(null,inst_21379);
var inst_21385 = cljs.core.count.call(null,inst_21383);
var inst_21365 = inst_21384;
var inst_21366 = inst_21383;
var inst_21367 = inst_21385;
var inst_21368 = (0);
var state_21413__$1 = (function (){var statearr_21432 = state_21413;
(statearr_21432[(10)] = inst_21366);

(statearr_21432[(11)] = inst_21365);

(statearr_21432[(12)] = inst_21368);

(statearr_21432[(13)] = inst_21367);

return statearr_21432;
})();
var statearr_21433_21466 = state_21413__$1;
(statearr_21433_21466[(2)] = null);

(statearr_21433_21466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (3))){
var inst_21411 = (state_21413[(2)]);
var state_21413__$1 = state_21413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21413__$1,inst_21411);
} else {
if((state_val_21414 === (12))){
var inst_21399 = (state_21413[(2)]);
var state_21413__$1 = state_21413;
var statearr_21434_21467 = state_21413__$1;
(statearr_21434_21467[(2)] = inst_21399);

(statearr_21434_21467[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (2))){
var state_21413__$1 = state_21413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21413__$1,(4),in$);
} else {
if((state_val_21414 === (23))){
var inst_21407 = (state_21413[(2)]);
var state_21413__$1 = state_21413;
var statearr_21435_21468 = state_21413__$1;
(statearr_21435_21468[(2)] = inst_21407);

(statearr_21435_21468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (19))){
var inst_21394 = (state_21413[(2)]);
var state_21413__$1 = state_21413;
var statearr_21436_21469 = state_21413__$1;
(statearr_21436_21469[(2)] = inst_21394);

(statearr_21436_21469[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (11))){
var inst_21379 = (state_21413[(7)]);
var inst_21365 = (state_21413[(11)]);
var inst_21379__$1 = cljs.core.seq.call(null,inst_21365);
var state_21413__$1 = (function (){var statearr_21437 = state_21413;
(statearr_21437[(7)] = inst_21379__$1);

return statearr_21437;
})();
if(inst_21379__$1){
var statearr_21438_21470 = state_21413__$1;
(statearr_21438_21470[(1)] = (14));

} else {
var statearr_21439_21471 = state_21413__$1;
(statearr_21439_21471[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (9))){
var inst_21401 = (state_21413[(2)]);
var inst_21402 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21413__$1 = (function (){var statearr_21440 = state_21413;
(statearr_21440[(15)] = inst_21401);

return statearr_21440;
})();
if(cljs.core.truth_(inst_21402)){
var statearr_21441_21472 = state_21413__$1;
(statearr_21441_21472[(1)] = (21));

} else {
var statearr_21442_21473 = state_21413__$1;
(statearr_21442_21473[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (5))){
var inst_21357 = cljs.core.async.close_BANG_.call(null,out);
var state_21413__$1 = state_21413;
var statearr_21443_21474 = state_21413__$1;
(statearr_21443_21474[(2)] = inst_21357);

(statearr_21443_21474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (14))){
var inst_21379 = (state_21413[(7)]);
var inst_21381 = cljs.core.chunked_seq_QMARK_.call(null,inst_21379);
var state_21413__$1 = state_21413;
if(inst_21381){
var statearr_21444_21475 = state_21413__$1;
(statearr_21444_21475[(1)] = (17));

} else {
var statearr_21445_21476 = state_21413__$1;
(statearr_21445_21476[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (16))){
var inst_21397 = (state_21413[(2)]);
var state_21413__$1 = state_21413;
var statearr_21446_21477 = state_21413__$1;
(statearr_21446_21477[(2)] = inst_21397);

(statearr_21446_21477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (10))){
var inst_21366 = (state_21413[(10)]);
var inst_21368 = (state_21413[(12)]);
var inst_21373 = cljs.core._nth.call(null,inst_21366,inst_21368);
var state_21413__$1 = state_21413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21413__$1,(13),out,inst_21373);
} else {
if((state_val_21414 === (18))){
var inst_21379 = (state_21413[(7)]);
var inst_21388 = cljs.core.first.call(null,inst_21379);
var state_21413__$1 = state_21413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21413__$1,(20),out,inst_21388);
} else {
if((state_val_21414 === (8))){
var inst_21368 = (state_21413[(12)]);
var inst_21367 = (state_21413[(13)]);
var inst_21370 = (inst_21368 < inst_21367);
var inst_21371 = inst_21370;
var state_21413__$1 = state_21413;
if(cljs.core.truth_(inst_21371)){
var statearr_21447_21478 = state_21413__$1;
(statearr_21447_21478[(1)] = (10));

} else {
var statearr_21448_21479 = state_21413__$1;
(statearr_21448_21479[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18978__auto__))
;
return ((function (switch__18866__auto__,c__18978__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18867__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18867__auto____0 = (function (){
var statearr_21452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21452[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18867__auto__);

(statearr_21452[(1)] = (1));

return statearr_21452;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18867__auto____1 = (function (state_21413){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_21413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e21453){if((e21453 instanceof Object)){
var ex__18870__auto__ = e21453;
var statearr_21454_21480 = state_21413;
(statearr_21454_21480[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21481 = state_21413;
state_21413 = G__21481;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18867__auto__ = function(state_21413){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18867__auto____1.call(this,state_21413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18867__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18867__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto__))
})();
var state__18980__auto__ = (function (){var statearr_21455 = f__18979__auto__.call(null);
(statearr_21455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto__);

return statearr_21455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto__))
);

return c__18978__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21482 = [];
var len__17861__auto___21485 = arguments.length;
var i__17862__auto___21486 = (0);
while(true){
if((i__17862__auto___21486 < len__17861__auto___21485)){
args21482.push((arguments[i__17862__auto___21486]));

var G__21487 = (i__17862__auto___21486 + (1));
i__17862__auto___21486 = G__21487;
continue;
} else {
}
break;
}

var G__21484 = args21482.length;
switch (G__21484) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21482.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args21489 = [];
var len__17861__auto___21492 = arguments.length;
var i__17862__auto___21493 = (0);
while(true){
if((i__17862__auto___21493 < len__17861__auto___21492)){
args21489.push((arguments[i__17862__auto___21493]));

var G__21494 = (i__17862__auto___21493 + (1));
i__17862__auto___21493 = G__21494;
continue;
} else {
}
break;
}

var G__21491 = args21489.length;
switch (G__21491) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21489.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args21496 = [];
var len__17861__auto___21547 = arguments.length;
var i__17862__auto___21548 = (0);
while(true){
if((i__17862__auto___21548 < len__17861__auto___21547)){
args21496.push((arguments[i__17862__auto___21548]));

var G__21549 = (i__17862__auto___21548 + (1));
i__17862__auto___21548 = G__21549;
continue;
} else {
}
break;
}

var G__21498 = args21496.length;
switch (G__21498) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21496.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18978__auto___21551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto___21551,out){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto___21551,out){
return (function (state_21522){
var state_val_21523 = (state_21522[(1)]);
if((state_val_21523 === (7))){
var inst_21517 = (state_21522[(2)]);
var state_21522__$1 = state_21522;
var statearr_21524_21552 = state_21522__$1;
(statearr_21524_21552[(2)] = inst_21517);

(statearr_21524_21552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21523 === (1))){
var inst_21499 = null;
var state_21522__$1 = (function (){var statearr_21525 = state_21522;
(statearr_21525[(7)] = inst_21499);

return statearr_21525;
})();
var statearr_21526_21553 = state_21522__$1;
(statearr_21526_21553[(2)] = null);

(statearr_21526_21553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21523 === (4))){
var inst_21502 = (state_21522[(8)]);
var inst_21502__$1 = (state_21522[(2)]);
var inst_21503 = (inst_21502__$1 == null);
var inst_21504 = cljs.core.not.call(null,inst_21503);
var state_21522__$1 = (function (){var statearr_21527 = state_21522;
(statearr_21527[(8)] = inst_21502__$1);

return statearr_21527;
})();
if(inst_21504){
var statearr_21528_21554 = state_21522__$1;
(statearr_21528_21554[(1)] = (5));

} else {
var statearr_21529_21555 = state_21522__$1;
(statearr_21529_21555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21523 === (6))){
var state_21522__$1 = state_21522;
var statearr_21530_21556 = state_21522__$1;
(statearr_21530_21556[(2)] = null);

(statearr_21530_21556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21523 === (3))){
var inst_21519 = (state_21522[(2)]);
var inst_21520 = cljs.core.async.close_BANG_.call(null,out);
var state_21522__$1 = (function (){var statearr_21531 = state_21522;
(statearr_21531[(9)] = inst_21519);

return statearr_21531;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21522__$1,inst_21520);
} else {
if((state_val_21523 === (2))){
var state_21522__$1 = state_21522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21522__$1,(4),ch);
} else {
if((state_val_21523 === (11))){
var inst_21502 = (state_21522[(8)]);
var inst_21511 = (state_21522[(2)]);
var inst_21499 = inst_21502;
var state_21522__$1 = (function (){var statearr_21532 = state_21522;
(statearr_21532[(7)] = inst_21499);

(statearr_21532[(10)] = inst_21511);

return statearr_21532;
})();
var statearr_21533_21557 = state_21522__$1;
(statearr_21533_21557[(2)] = null);

(statearr_21533_21557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21523 === (9))){
var inst_21502 = (state_21522[(8)]);
var state_21522__$1 = state_21522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21522__$1,(11),out,inst_21502);
} else {
if((state_val_21523 === (5))){
var inst_21499 = (state_21522[(7)]);
var inst_21502 = (state_21522[(8)]);
var inst_21506 = cljs.core._EQ_.call(null,inst_21502,inst_21499);
var state_21522__$1 = state_21522;
if(inst_21506){
var statearr_21535_21558 = state_21522__$1;
(statearr_21535_21558[(1)] = (8));

} else {
var statearr_21536_21559 = state_21522__$1;
(statearr_21536_21559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21523 === (10))){
var inst_21514 = (state_21522[(2)]);
var state_21522__$1 = state_21522;
var statearr_21537_21560 = state_21522__$1;
(statearr_21537_21560[(2)] = inst_21514);

(statearr_21537_21560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21523 === (8))){
var inst_21499 = (state_21522[(7)]);
var tmp21534 = inst_21499;
var inst_21499__$1 = tmp21534;
var state_21522__$1 = (function (){var statearr_21538 = state_21522;
(statearr_21538[(7)] = inst_21499__$1);

return statearr_21538;
})();
var statearr_21539_21561 = state_21522__$1;
(statearr_21539_21561[(2)] = null);

(statearr_21539_21561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18978__auto___21551,out))
;
return ((function (switch__18866__auto__,c__18978__auto___21551,out){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_21543 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21543[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_21543[(1)] = (1));

return statearr_21543;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_21522){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_21522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e21544){if((e21544 instanceof Object)){
var ex__18870__auto__ = e21544;
var statearr_21545_21562 = state_21522;
(statearr_21545_21562[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21563 = state_21522;
state_21522 = G__21563;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_21522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_21522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto___21551,out))
})();
var state__18980__auto__ = (function (){var statearr_21546 = f__18979__auto__.call(null);
(statearr_21546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto___21551);

return statearr_21546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto___21551,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args21564 = [];
var len__17861__auto___21634 = arguments.length;
var i__17862__auto___21635 = (0);
while(true){
if((i__17862__auto___21635 < len__17861__auto___21634)){
args21564.push((arguments[i__17862__auto___21635]));

var G__21636 = (i__17862__auto___21635 + (1));
i__17862__auto___21635 = G__21636;
continue;
} else {
}
break;
}

var G__21566 = args21564.length;
switch (G__21566) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21564.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18978__auto___21638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto___21638,out){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto___21638,out){
return (function (state_21604){
var state_val_21605 = (state_21604[(1)]);
if((state_val_21605 === (7))){
var inst_21600 = (state_21604[(2)]);
var state_21604__$1 = state_21604;
var statearr_21606_21639 = state_21604__$1;
(statearr_21606_21639[(2)] = inst_21600);

(statearr_21606_21639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21605 === (1))){
var inst_21567 = (new Array(n));
var inst_21568 = inst_21567;
var inst_21569 = (0);
var state_21604__$1 = (function (){var statearr_21607 = state_21604;
(statearr_21607[(7)] = inst_21569);

(statearr_21607[(9)] = inst_21568);

return statearr_21607;
})();
var statearr_21608_21640 = state_21604__$1;
(statearr_21608_21640[(2)] = null);

(statearr_21608_21640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21605 === (4))){
var inst_21572 = (state_21604[(8)]);
var inst_21572__$1 = (state_21604[(2)]);
var inst_21573 = (inst_21572__$1 == null);
var inst_21574 = cljs.core.not.call(null,inst_21573);
var state_21604__$1 = (function (){var statearr_21609 = state_21604;
(statearr_21609[(8)] = inst_21572__$1);

return statearr_21609;
})();
if(inst_21574){
var statearr_21610_21641 = state_21604__$1;
(statearr_21610_21641[(1)] = (5));

} else {
var statearr_21611_21642 = state_21604__$1;
(statearr_21611_21642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21605 === (15))){
var inst_21594 = (state_21604[(2)]);
var state_21604__$1 = state_21604;
var statearr_21612_21643 = state_21604__$1;
(statearr_21612_21643[(2)] = inst_21594);

(statearr_21612_21643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21605 === (13))){
var state_21604__$1 = state_21604;
var statearr_21613_21644 = state_21604__$1;
(statearr_21613_21644[(2)] = null);

(statearr_21613_21644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21605 === (6))){
var inst_21569 = (state_21604[(7)]);
var inst_21590 = (inst_21569 > (0));
var state_21604__$1 = state_21604;
if(cljs.core.truth_(inst_21590)){
var statearr_21614_21645 = state_21604__$1;
(statearr_21614_21645[(1)] = (12));

} else {
var statearr_21615_21646 = state_21604__$1;
(statearr_21615_21646[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21605 === (3))){
var inst_21602 = (state_21604[(2)]);
var state_21604__$1 = state_21604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21604__$1,inst_21602);
} else {
if((state_val_21605 === (12))){
var inst_21568 = (state_21604[(9)]);
var inst_21592 = cljs.core.vec.call(null,inst_21568);
var state_21604__$1 = state_21604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21604__$1,(15),out,inst_21592);
} else {
if((state_val_21605 === (2))){
var state_21604__$1 = state_21604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21604__$1,(4),ch);
} else {
if((state_val_21605 === (11))){
var inst_21584 = (state_21604[(2)]);
var inst_21585 = (new Array(n));
var inst_21568 = inst_21585;
var inst_21569 = (0);
var state_21604__$1 = (function (){var statearr_21616 = state_21604;
(statearr_21616[(7)] = inst_21569);

(statearr_21616[(9)] = inst_21568);

(statearr_21616[(11)] = inst_21584);

return statearr_21616;
})();
var statearr_21617_21647 = state_21604__$1;
(statearr_21617_21647[(2)] = null);

(statearr_21617_21647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21605 === (9))){
var inst_21568 = (state_21604[(9)]);
var inst_21582 = cljs.core.vec.call(null,inst_21568);
var state_21604__$1 = state_21604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21604__$1,(11),out,inst_21582);
} else {
if((state_val_21605 === (5))){
var inst_21569 = (state_21604[(7)]);
var inst_21572 = (state_21604[(8)]);
var inst_21568 = (state_21604[(9)]);
var inst_21577 = (state_21604[(10)]);
var inst_21576 = (inst_21568[inst_21569] = inst_21572);
var inst_21577__$1 = (inst_21569 + (1));
var inst_21578 = (inst_21577__$1 < n);
var state_21604__$1 = (function (){var statearr_21618 = state_21604;
(statearr_21618[(10)] = inst_21577__$1);

(statearr_21618[(13)] = inst_21576);

return statearr_21618;
})();
if(cljs.core.truth_(inst_21578)){
var statearr_21619_21648 = state_21604__$1;
(statearr_21619_21648[(1)] = (8));

} else {
var statearr_21620_21649 = state_21604__$1;
(statearr_21620_21649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21605 === (14))){
var inst_21597 = (state_21604[(2)]);
var inst_21598 = cljs.core.async.close_BANG_.call(null,out);
var state_21604__$1 = (function (){var statearr_21622 = state_21604;
(statearr_21622[(12)] = inst_21597);

return statearr_21622;
})();
var statearr_21623_21650 = state_21604__$1;
(statearr_21623_21650[(2)] = inst_21598);

(statearr_21623_21650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21605 === (10))){
var inst_21588 = (state_21604[(2)]);
var state_21604__$1 = state_21604;
var statearr_21624_21651 = state_21604__$1;
(statearr_21624_21651[(2)] = inst_21588);

(statearr_21624_21651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21605 === (8))){
var inst_21568 = (state_21604[(9)]);
var inst_21577 = (state_21604[(10)]);
var tmp21621 = inst_21568;
var inst_21568__$1 = tmp21621;
var inst_21569 = inst_21577;
var state_21604__$1 = (function (){var statearr_21625 = state_21604;
(statearr_21625[(7)] = inst_21569);

(statearr_21625[(9)] = inst_21568__$1);

return statearr_21625;
})();
var statearr_21626_21652 = state_21604__$1;
(statearr_21626_21652[(2)] = null);

(statearr_21626_21652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18978__auto___21638,out))
;
return ((function (switch__18866__auto__,c__18978__auto___21638,out){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_21630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21630[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_21630[(1)] = (1));

return statearr_21630;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_21604){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_21604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e21631){if((e21631 instanceof Object)){
var ex__18870__auto__ = e21631;
var statearr_21632_21653 = state_21604;
(statearr_21632_21653[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21654 = state_21604;
state_21604 = G__21654;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_21604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_21604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto___21638,out))
})();
var state__18980__auto__ = (function (){var statearr_21633 = f__18979__auto__.call(null);
(statearr_21633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto___21638);

return statearr_21633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto___21638,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args21655 = [];
var len__17861__auto___21729 = arguments.length;
var i__17862__auto___21730 = (0);
while(true){
if((i__17862__auto___21730 < len__17861__auto___21729)){
args21655.push((arguments[i__17862__auto___21730]));

var G__21731 = (i__17862__auto___21730 + (1));
i__17862__auto___21730 = G__21731;
continue;
} else {
}
break;
}

var G__21657 = args21655.length;
switch (G__21657) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21655.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18978__auto___21733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto___21733,out){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto___21733,out){
return (function (state_21699){
var state_val_21700 = (state_21699[(1)]);
if((state_val_21700 === (7))){
var inst_21695 = (state_21699[(2)]);
var state_21699__$1 = state_21699;
var statearr_21701_21734 = state_21699__$1;
(statearr_21701_21734[(2)] = inst_21695);

(statearr_21701_21734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21700 === (1))){
var inst_21658 = [];
var inst_21659 = inst_21658;
var inst_21660 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21699__$1 = (function (){var statearr_21702 = state_21699;
(statearr_21702[(7)] = inst_21659);

(statearr_21702[(9)] = inst_21660);

return statearr_21702;
})();
var statearr_21703_21735 = state_21699__$1;
(statearr_21703_21735[(2)] = null);

(statearr_21703_21735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21700 === (4))){
var inst_21663 = (state_21699[(8)]);
var inst_21663__$1 = (state_21699[(2)]);
var inst_21664 = (inst_21663__$1 == null);
var inst_21665 = cljs.core.not.call(null,inst_21664);
var state_21699__$1 = (function (){var statearr_21704 = state_21699;
(statearr_21704[(8)] = inst_21663__$1);

return statearr_21704;
})();
if(inst_21665){
var statearr_21705_21736 = state_21699__$1;
(statearr_21705_21736[(1)] = (5));

} else {
var statearr_21706_21737 = state_21699__$1;
(statearr_21706_21737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21700 === (15))){
var inst_21689 = (state_21699[(2)]);
var state_21699__$1 = state_21699;
var statearr_21707_21738 = state_21699__$1;
(statearr_21707_21738[(2)] = inst_21689);

(statearr_21707_21738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21700 === (13))){
var state_21699__$1 = state_21699;
var statearr_21708_21739 = state_21699__$1;
(statearr_21708_21739[(2)] = null);

(statearr_21708_21739[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21700 === (6))){
var inst_21659 = (state_21699[(7)]);
var inst_21684 = inst_21659.length;
var inst_21685 = (inst_21684 > (0));
var state_21699__$1 = state_21699;
if(cljs.core.truth_(inst_21685)){
var statearr_21709_21740 = state_21699__$1;
(statearr_21709_21740[(1)] = (12));

} else {
var statearr_21710_21741 = state_21699__$1;
(statearr_21710_21741[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21700 === (3))){
var inst_21697 = (state_21699[(2)]);
var state_21699__$1 = state_21699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21699__$1,inst_21697);
} else {
if((state_val_21700 === (12))){
var inst_21659 = (state_21699[(7)]);
var inst_21687 = cljs.core.vec.call(null,inst_21659);
var state_21699__$1 = state_21699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21699__$1,(15),out,inst_21687);
} else {
if((state_val_21700 === (2))){
var state_21699__$1 = state_21699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21699__$1,(4),ch);
} else {
if((state_val_21700 === (11))){
var inst_21663 = (state_21699[(8)]);
var inst_21667 = (state_21699[(10)]);
var inst_21677 = (state_21699[(2)]);
var inst_21678 = [];
var inst_21679 = inst_21678.push(inst_21663);
var inst_21659 = inst_21678;
var inst_21660 = inst_21667;
var state_21699__$1 = (function (){var statearr_21711 = state_21699;
(statearr_21711[(7)] = inst_21659);

(statearr_21711[(11)] = inst_21679);

(statearr_21711[(9)] = inst_21660);

(statearr_21711[(12)] = inst_21677);

return statearr_21711;
})();
var statearr_21712_21742 = state_21699__$1;
(statearr_21712_21742[(2)] = null);

(statearr_21712_21742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21700 === (9))){
var inst_21659 = (state_21699[(7)]);
var inst_21675 = cljs.core.vec.call(null,inst_21659);
var state_21699__$1 = state_21699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21699__$1,(11),out,inst_21675);
} else {
if((state_val_21700 === (5))){
var inst_21660 = (state_21699[(9)]);
var inst_21663 = (state_21699[(8)]);
var inst_21667 = (state_21699[(10)]);
var inst_21667__$1 = f.call(null,inst_21663);
var inst_21668 = cljs.core._EQ_.call(null,inst_21667__$1,inst_21660);
var inst_21669 = cljs.core.keyword_identical_QMARK_.call(null,inst_21660,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21670 = (inst_21668) || (inst_21669);
var state_21699__$1 = (function (){var statearr_21713 = state_21699;
(statearr_21713[(10)] = inst_21667__$1);

return statearr_21713;
})();
if(cljs.core.truth_(inst_21670)){
var statearr_21714_21743 = state_21699__$1;
(statearr_21714_21743[(1)] = (8));

} else {
var statearr_21715_21744 = state_21699__$1;
(statearr_21715_21744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21700 === (14))){
var inst_21692 = (state_21699[(2)]);
var inst_21693 = cljs.core.async.close_BANG_.call(null,out);
var state_21699__$1 = (function (){var statearr_21717 = state_21699;
(statearr_21717[(13)] = inst_21692);

return statearr_21717;
})();
var statearr_21718_21745 = state_21699__$1;
(statearr_21718_21745[(2)] = inst_21693);

(statearr_21718_21745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21700 === (10))){
var inst_21682 = (state_21699[(2)]);
var state_21699__$1 = state_21699;
var statearr_21719_21746 = state_21699__$1;
(statearr_21719_21746[(2)] = inst_21682);

(statearr_21719_21746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21700 === (8))){
var inst_21659 = (state_21699[(7)]);
var inst_21663 = (state_21699[(8)]);
var inst_21667 = (state_21699[(10)]);
var inst_21672 = inst_21659.push(inst_21663);
var tmp21716 = inst_21659;
var inst_21659__$1 = tmp21716;
var inst_21660 = inst_21667;
var state_21699__$1 = (function (){var statearr_21720 = state_21699;
(statearr_21720[(7)] = inst_21659__$1);

(statearr_21720[(14)] = inst_21672);

(statearr_21720[(9)] = inst_21660);

return statearr_21720;
})();
var statearr_21721_21747 = state_21699__$1;
(statearr_21721_21747[(2)] = null);

(statearr_21721_21747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18978__auto___21733,out))
;
return ((function (switch__18866__auto__,c__18978__auto___21733,out){
return (function() {
var cljs$core$async$state_machine__18867__auto__ = null;
var cljs$core$async$state_machine__18867__auto____0 = (function (){
var statearr_21725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21725[(0)] = cljs$core$async$state_machine__18867__auto__);

(statearr_21725[(1)] = (1));

return statearr_21725;
});
var cljs$core$async$state_machine__18867__auto____1 = (function (state_21699){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_21699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e21726){if((e21726 instanceof Object)){
var ex__18870__auto__ = e21726;
var statearr_21727_21748 = state_21699;
(statearr_21727_21748[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21749 = state_21699;
state_21699 = G__21749;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
cljs$core$async$state_machine__18867__auto__ = function(state_21699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18867__auto____1.call(this,state_21699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18867__auto____0;
cljs$core$async$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18867__auto____1;
return cljs$core$async$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto___21733,out))
})();
var state__18980__auto__ = (function (){var statearr_21728 = f__18979__auto__.call(null);
(statearr_21728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto___21733);

return statearr_21728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto___21733,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1457999282251