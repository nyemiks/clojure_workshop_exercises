// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__4343 = arguments.length;
switch (G__4343) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4344 = (function (f,blockable,meta4345){
this.f = f;
this.blockable = blockable;
this.meta4345 = meta4345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4346,meta4345__$1){
var self__ = this;
var _4346__$1 = this;
return (new cljs.core.async.t_cljs$core$async4344(self__.f,self__.blockable,meta4345__$1));
});

cljs.core.async.t_cljs$core$async4344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4346){
var self__ = this;
var _4346__$1 = this;
return self__.meta4345;
});

cljs.core.async.t_cljs$core$async4344.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async4344.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async4344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async4344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta4345","meta4345",538392267,null)], null);
});

cljs.core.async.t_cljs$core$async4344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4344";

cljs.core.async.t_cljs$core$async4344.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async4344");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4344.
 */
cljs.core.async.__GT_t_cljs$core$async4344 = (function cljs$core$async$__GT_t_cljs$core$async4344(f__$1,blockable__$1,meta4345){
return (new cljs.core.async.t_cljs$core$async4344(f__$1,blockable__$1,meta4345));
});

}

return (new cljs.core.async.t_cljs$core$async4344(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__4350 = arguments.length;
switch (G__4350) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__4353 = arguments.length;
switch (G__4353) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__4356 = arguments.length;
switch (G__4356) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_4358 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_4358);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_4358,ret){
return (function (){
return fn1.call(null,val_4358);
});})(val_4358,ret))
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
var G__4360 = arguments.length;
switch (G__4360) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
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
var n__4607__auto___4362 = n;
var x_4363 = (0);
while(true){
if((x_4363 < n__4607__auto___4362)){
(a[x_4363] = (0));

var G__4364 = (x_4363 + (1));
x_4363 = G__4364;
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

var G__4365 = (i + (1));
i = G__4365;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4366 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4366 = (function (flag,meta4367){
this.flag = flag;
this.meta4367 = meta4367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_4368,meta4367__$1){
var self__ = this;
var _4368__$1 = this;
return (new cljs.core.async.t_cljs$core$async4366(self__.flag,meta4367__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async4366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_4368){
var self__ = this;
var _4368__$1 = this;
return self__.meta4367;
});})(flag))
;

cljs.core.async.t_cljs$core$async4366.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4366.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async4366.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async4366.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async4366.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta4367","meta4367",-168824036,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async4366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4366";

cljs.core.async.t_cljs$core$async4366.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async4366");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4366.
 */
cljs.core.async.__GT_t_cljs$core$async4366 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async4366(flag__$1,meta4367){
return (new cljs.core.async.t_cljs$core$async4366(flag__$1,meta4367));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async4366(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4369 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4369 = (function (flag,cb,meta4370){
this.flag = flag;
this.cb = cb;
this.meta4370 = meta4370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4371,meta4370__$1){
var self__ = this;
var _4371__$1 = this;
return (new cljs.core.async.t_cljs$core$async4369(self__.flag,self__.cb,meta4370__$1));
});

cljs.core.async.t_cljs$core$async4369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4371){
var self__ = this;
var _4371__$1 = this;
return self__.meta4370;
});

cljs.core.async.t_cljs$core$async4369.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4369.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async4369.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async4369.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async4369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta4370","meta4370",176861034,null)], null);
});

cljs.core.async.t_cljs$core$async4369.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4369";

cljs.core.async.t_cljs$core$async4369.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async4369");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4369.
 */
cljs.core.async.__GT_t_cljs$core$async4369 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async4369(flag__$1,cb__$1,meta4370){
return (new cljs.core.async.t_cljs$core$async4369(flag__$1,cb__$1,meta4370));
});

}

return (new cljs.core.async.t_cljs$core$async4369(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__4372_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4372_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__4373_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4373_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__4374 = (i + (1));
i = G__4374;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___4380 = arguments.length;
var i__4731__auto___4381 = (0);
while(true){
if((i__4731__auto___4381 < len__4730__auto___4380)){
args__4736__auto__.push((arguments[i__4731__auto___4381]));

var G__4382 = (i__4731__auto___4381 + (1));
i__4731__auto___4381 = G__4382;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__4377){
var map__4378 = p__4377;
var map__4378__$1 = (((((!((map__4378 == null))))?(((((map__4378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4378):map__4378);
var opts = map__4378__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq4375){
var G__4376 = cljs.core.first.call(null,seq4375);
var seq4375__$1 = cljs.core.next.call(null,seq4375);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4376,seq4375__$1);
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
var G__4384 = arguments.length;
switch (G__4384) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__4283__auto___4430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto___4430){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto___4430){
return (function (state_4408){
var state_val_4409 = (state_4408[(1)]);
if((state_val_4409 === (7))){
var inst_4404 = (state_4408[(2)]);
var state_4408__$1 = state_4408;
var statearr_4410_4431 = state_4408__$1;
(statearr_4410_4431[(2)] = inst_4404);

(statearr_4410_4431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4409 === (1))){
var state_4408__$1 = state_4408;
var statearr_4411_4432 = state_4408__$1;
(statearr_4411_4432[(2)] = null);

(statearr_4411_4432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4409 === (4))){
var inst_4387 = (state_4408[(7)]);
var inst_4387__$1 = (state_4408[(2)]);
var inst_4388 = (inst_4387__$1 == null);
var state_4408__$1 = (function (){var statearr_4412 = state_4408;
(statearr_4412[(7)] = inst_4387__$1);

return statearr_4412;
})();
if(cljs.core.truth_(inst_4388)){
var statearr_4413_4433 = state_4408__$1;
(statearr_4413_4433[(1)] = (5));

} else {
var statearr_4414_4434 = state_4408__$1;
(statearr_4414_4434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4409 === (13))){
var state_4408__$1 = state_4408;
var statearr_4415_4435 = state_4408__$1;
(statearr_4415_4435[(2)] = null);

(statearr_4415_4435[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4409 === (6))){
var inst_4387 = (state_4408[(7)]);
var state_4408__$1 = state_4408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4408__$1,(11),to,inst_4387);
} else {
if((state_val_4409 === (3))){
var inst_4406 = (state_4408[(2)]);
var state_4408__$1 = state_4408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4408__$1,inst_4406);
} else {
if((state_val_4409 === (12))){
var state_4408__$1 = state_4408;
var statearr_4416_4436 = state_4408__$1;
(statearr_4416_4436[(2)] = null);

(statearr_4416_4436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4409 === (2))){
var state_4408__$1 = state_4408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4408__$1,(4),from);
} else {
if((state_val_4409 === (11))){
var inst_4397 = (state_4408[(2)]);
var state_4408__$1 = state_4408;
if(cljs.core.truth_(inst_4397)){
var statearr_4417_4437 = state_4408__$1;
(statearr_4417_4437[(1)] = (12));

} else {
var statearr_4418_4438 = state_4408__$1;
(statearr_4418_4438[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4409 === (9))){
var state_4408__$1 = state_4408;
var statearr_4419_4439 = state_4408__$1;
(statearr_4419_4439[(2)] = null);

(statearr_4419_4439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4409 === (5))){
var state_4408__$1 = state_4408;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4420_4440 = state_4408__$1;
(statearr_4420_4440[(1)] = (8));

} else {
var statearr_4421_4441 = state_4408__$1;
(statearr_4421_4441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4409 === (14))){
var inst_4402 = (state_4408[(2)]);
var state_4408__$1 = state_4408;
var statearr_4422_4442 = state_4408__$1;
(statearr_4422_4442[(2)] = inst_4402);

(statearr_4422_4442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4409 === (10))){
var inst_4394 = (state_4408[(2)]);
var state_4408__$1 = state_4408;
var statearr_4423_4443 = state_4408__$1;
(statearr_4423_4443[(2)] = inst_4394);

(statearr_4423_4443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4409 === (8))){
var inst_4391 = cljs.core.async.close_BANG_.call(null,to);
var state_4408__$1 = state_4408;
var statearr_4424_4444 = state_4408__$1;
(statearr_4424_4444[(2)] = inst_4391);

(statearr_4424_4444[(1)] = (10));


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
});})(c__4283__auto___4430))
;
return ((function (switch__4188__auto__,c__4283__auto___4430){
return (function() {
var cljs$core$async$state_machine__4189__auto__ = null;
var cljs$core$async$state_machine__4189__auto____0 = (function (){
var statearr_4425 = [null,null,null,null,null,null,null,null];
(statearr_4425[(0)] = cljs$core$async$state_machine__4189__auto__);

(statearr_4425[(1)] = (1));

return statearr_4425;
});
var cljs$core$async$state_machine__4189__auto____1 = (function (state_4408){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_4408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e4426){if((e4426 instanceof Object)){
var ex__4192__auto__ = e4426;
var statearr_4427_4445 = state_4408;
(statearr_4427_4445[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4446 = state_4408;
state_4408 = G__4446;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$state_machine__4189__auto__ = function(state_4408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4189__auto____1.call(this,state_4408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4189__auto____0;
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4189__auto____1;
return cljs$core$async$state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto___4430))
})();
var state__4285__auto__ = (function (){var statearr_4428 = f__4284__auto__.call(null);
(statearr_4428[(6)] = c__4283__auto___4430);

return statearr_4428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto___4430))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__4447){
var vec__4448 = p__4447;
var v = cljs.core.nth.call(null,vec__4448,(0),null);
var p = cljs.core.nth.call(null,vec__4448,(1),null);
var job = vec__4448;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__4283__auto___4619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto___4619,res,vec__4448,v,p,job,jobs,results){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto___4619,res,vec__4448,v,p,job,jobs,results){
return (function (state_4455){
var state_val_4456 = (state_4455[(1)]);
if((state_val_4456 === (1))){
var state_4455__$1 = state_4455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4455__$1,(2),res,v);
} else {
if((state_val_4456 === (2))){
var inst_4452 = (state_4455[(2)]);
var inst_4453 = cljs.core.async.close_BANG_.call(null,res);
var state_4455__$1 = (function (){var statearr_4457 = state_4455;
(statearr_4457[(7)] = inst_4452);

return statearr_4457;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4455__$1,inst_4453);
} else {
return null;
}
}
});})(c__4283__auto___4619,res,vec__4448,v,p,job,jobs,results))
;
return ((function (switch__4188__auto__,c__4283__auto___4619,res,vec__4448,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____0 = (function (){
var statearr_4458 = [null,null,null,null,null,null,null,null];
(statearr_4458[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__);

(statearr_4458[(1)] = (1));

return statearr_4458;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____1 = (function (state_4455){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_4455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e4459){if((e4459 instanceof Object)){
var ex__4192__auto__ = e4459;
var statearr_4460_4620 = state_4455;
(statearr_4460_4620[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4621 = state_4455;
state_4455 = G__4621;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__ = function(state_4455){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____1.call(this,state_4455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto___4619,res,vec__4448,v,p,job,jobs,results))
})();
var state__4285__auto__ = (function (){var statearr_4461 = f__4284__auto__.call(null);
(statearr_4461[(6)] = c__4283__auto___4619);

return statearr_4461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto___4619,res,vec__4448,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__4462){
var vec__4463 = p__4462;
var v = cljs.core.nth.call(null,vec__4463,(0),null);
var p = cljs.core.nth.call(null,vec__4463,(1),null);
var job = vec__4463;
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
var n__4607__auto___4622 = n;
var __4623 = (0);
while(true){
if((__4623 < n__4607__auto___4622)){
var G__4466_4624 = type;
var G__4466_4625__$1 = (((G__4466_4624 instanceof cljs.core.Keyword))?G__4466_4624.fqn:null);
switch (G__4466_4625__$1) {
case "compute":
var c__4283__auto___4627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4623,c__4283__auto___4627,G__4466_4624,G__4466_4625__$1,n__4607__auto___4622,jobs,results,process,async){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (__4623,c__4283__auto___4627,G__4466_4624,G__4466_4625__$1,n__4607__auto___4622,jobs,results,process,async){
return (function (state_4479){
var state_val_4480 = (state_4479[(1)]);
if((state_val_4480 === (1))){
var state_4479__$1 = state_4479;
var statearr_4481_4628 = state_4479__$1;
(statearr_4481_4628[(2)] = null);

(statearr_4481_4628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4480 === (2))){
var state_4479__$1 = state_4479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4479__$1,(4),jobs);
} else {
if((state_val_4480 === (3))){
var inst_4477 = (state_4479[(2)]);
var state_4479__$1 = state_4479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4479__$1,inst_4477);
} else {
if((state_val_4480 === (4))){
var inst_4469 = (state_4479[(2)]);
var inst_4470 = process.call(null,inst_4469);
var state_4479__$1 = state_4479;
if(cljs.core.truth_(inst_4470)){
var statearr_4482_4629 = state_4479__$1;
(statearr_4482_4629[(1)] = (5));

} else {
var statearr_4483_4630 = state_4479__$1;
(statearr_4483_4630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4480 === (5))){
var state_4479__$1 = state_4479;
var statearr_4484_4631 = state_4479__$1;
(statearr_4484_4631[(2)] = null);

(statearr_4484_4631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4480 === (6))){
var state_4479__$1 = state_4479;
var statearr_4485_4632 = state_4479__$1;
(statearr_4485_4632[(2)] = null);

(statearr_4485_4632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4480 === (7))){
var inst_4475 = (state_4479[(2)]);
var state_4479__$1 = state_4479;
var statearr_4486_4633 = state_4479__$1;
(statearr_4486_4633[(2)] = inst_4475);

(statearr_4486_4633[(1)] = (3));


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
});})(__4623,c__4283__auto___4627,G__4466_4624,G__4466_4625__$1,n__4607__auto___4622,jobs,results,process,async))
;
return ((function (__4623,switch__4188__auto__,c__4283__auto___4627,G__4466_4624,G__4466_4625__$1,n__4607__auto___4622,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____0 = (function (){
var statearr_4487 = [null,null,null,null,null,null,null];
(statearr_4487[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__);

(statearr_4487[(1)] = (1));

return statearr_4487;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____1 = (function (state_4479){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_4479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e4488){if((e4488 instanceof Object)){
var ex__4192__auto__ = e4488;
var statearr_4489_4634 = state_4479;
(statearr_4489_4634[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4635 = state_4479;
state_4479 = G__4635;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__ = function(state_4479){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____1.call(this,state_4479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__;
})()
;})(__4623,switch__4188__auto__,c__4283__auto___4627,G__4466_4624,G__4466_4625__$1,n__4607__auto___4622,jobs,results,process,async))
})();
var state__4285__auto__ = (function (){var statearr_4490 = f__4284__auto__.call(null);
(statearr_4490[(6)] = c__4283__auto___4627);

return statearr_4490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(__4623,c__4283__auto___4627,G__4466_4624,G__4466_4625__$1,n__4607__auto___4622,jobs,results,process,async))
);


break;
case "async":
var c__4283__auto___4636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4623,c__4283__auto___4636,G__4466_4624,G__4466_4625__$1,n__4607__auto___4622,jobs,results,process,async){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (__4623,c__4283__auto___4636,G__4466_4624,G__4466_4625__$1,n__4607__auto___4622,jobs,results,process,async){
return (function (state_4503){
var state_val_4504 = (state_4503[(1)]);
if((state_val_4504 === (1))){
var state_4503__$1 = state_4503;
var statearr_4505_4637 = state_4503__$1;
(statearr_4505_4637[(2)] = null);

(statearr_4505_4637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4504 === (2))){
var state_4503__$1 = state_4503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4503__$1,(4),jobs);
} else {
if((state_val_4504 === (3))){
var inst_4501 = (state_4503[(2)]);
var state_4503__$1 = state_4503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4503__$1,inst_4501);
} else {
if((state_val_4504 === (4))){
var inst_4493 = (state_4503[(2)]);
var inst_4494 = async.call(null,inst_4493);
var state_4503__$1 = state_4503;
if(cljs.core.truth_(inst_4494)){
var statearr_4506_4638 = state_4503__$1;
(statearr_4506_4638[(1)] = (5));

} else {
var statearr_4507_4639 = state_4503__$1;
(statearr_4507_4639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4504 === (5))){
var state_4503__$1 = state_4503;
var statearr_4508_4640 = state_4503__$1;
(statearr_4508_4640[(2)] = null);

(statearr_4508_4640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4504 === (6))){
var state_4503__$1 = state_4503;
var statearr_4509_4641 = state_4503__$1;
(statearr_4509_4641[(2)] = null);

(statearr_4509_4641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4504 === (7))){
var inst_4499 = (state_4503[(2)]);
var state_4503__$1 = state_4503;
var statearr_4510_4642 = state_4503__$1;
(statearr_4510_4642[(2)] = inst_4499);

(statearr_4510_4642[(1)] = (3));


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
});})(__4623,c__4283__auto___4636,G__4466_4624,G__4466_4625__$1,n__4607__auto___4622,jobs,results,process,async))
;
return ((function (__4623,switch__4188__auto__,c__4283__auto___4636,G__4466_4624,G__4466_4625__$1,n__4607__auto___4622,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____0 = (function (){
var statearr_4511 = [null,null,null,null,null,null,null];
(statearr_4511[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__);

(statearr_4511[(1)] = (1));

return statearr_4511;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____1 = (function (state_4503){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_4503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e4512){if((e4512 instanceof Object)){
var ex__4192__auto__ = e4512;
var statearr_4513_4643 = state_4503;
(statearr_4513_4643[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4644 = state_4503;
state_4503 = G__4644;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__ = function(state_4503){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____1.call(this,state_4503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__;
})()
;})(__4623,switch__4188__auto__,c__4283__auto___4636,G__4466_4624,G__4466_4625__$1,n__4607__auto___4622,jobs,results,process,async))
})();
var state__4285__auto__ = (function (){var statearr_4514 = f__4284__auto__.call(null);
(statearr_4514[(6)] = c__4283__auto___4636);

return statearr_4514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(__4623,c__4283__auto___4636,G__4466_4624,G__4466_4625__$1,n__4607__auto___4622,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4466_4625__$1)].join('')));

}

var G__4645 = (__4623 + (1));
__4623 = G__4645;
continue;
} else {
}
break;
}

var c__4283__auto___4646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto___4646,jobs,results,process,async){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto___4646,jobs,results,process,async){
return (function (state_4536){
var state_val_4537 = (state_4536[(1)]);
if((state_val_4537 === (7))){
var inst_4532 = (state_4536[(2)]);
var state_4536__$1 = state_4536;
var statearr_4538_4647 = state_4536__$1;
(statearr_4538_4647[(2)] = inst_4532);

(statearr_4538_4647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4537 === (1))){
var state_4536__$1 = state_4536;
var statearr_4539_4648 = state_4536__$1;
(statearr_4539_4648[(2)] = null);

(statearr_4539_4648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4537 === (4))){
var inst_4517 = (state_4536[(7)]);
var inst_4517__$1 = (state_4536[(2)]);
var inst_4518 = (inst_4517__$1 == null);
var state_4536__$1 = (function (){var statearr_4540 = state_4536;
(statearr_4540[(7)] = inst_4517__$1);

return statearr_4540;
})();
if(cljs.core.truth_(inst_4518)){
var statearr_4541_4649 = state_4536__$1;
(statearr_4541_4649[(1)] = (5));

} else {
var statearr_4542_4650 = state_4536__$1;
(statearr_4542_4650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4537 === (6))){
var inst_4517 = (state_4536[(7)]);
var inst_4522 = (state_4536[(8)]);
var inst_4522__$1 = cljs.core.async.chan.call(null,(1));
var inst_4523 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4524 = [inst_4517,inst_4522__$1];
var inst_4525 = (new cljs.core.PersistentVector(null,2,(5),inst_4523,inst_4524,null));
var state_4536__$1 = (function (){var statearr_4543 = state_4536;
(statearr_4543[(8)] = inst_4522__$1);

return statearr_4543;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4536__$1,(8),jobs,inst_4525);
} else {
if((state_val_4537 === (3))){
var inst_4534 = (state_4536[(2)]);
var state_4536__$1 = state_4536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4536__$1,inst_4534);
} else {
if((state_val_4537 === (2))){
var state_4536__$1 = state_4536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4536__$1,(4),from);
} else {
if((state_val_4537 === (9))){
var inst_4529 = (state_4536[(2)]);
var state_4536__$1 = (function (){var statearr_4544 = state_4536;
(statearr_4544[(9)] = inst_4529);

return statearr_4544;
})();
var statearr_4545_4651 = state_4536__$1;
(statearr_4545_4651[(2)] = null);

(statearr_4545_4651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4537 === (5))){
var inst_4520 = cljs.core.async.close_BANG_.call(null,jobs);
var state_4536__$1 = state_4536;
var statearr_4546_4652 = state_4536__$1;
(statearr_4546_4652[(2)] = inst_4520);

(statearr_4546_4652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4537 === (8))){
var inst_4522 = (state_4536[(8)]);
var inst_4527 = (state_4536[(2)]);
var state_4536__$1 = (function (){var statearr_4547 = state_4536;
(statearr_4547[(10)] = inst_4527);

return statearr_4547;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4536__$1,(9),results,inst_4522);
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
});})(c__4283__auto___4646,jobs,results,process,async))
;
return ((function (switch__4188__auto__,c__4283__auto___4646,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____0 = (function (){
var statearr_4548 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4548[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__);

(statearr_4548[(1)] = (1));

return statearr_4548;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____1 = (function (state_4536){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_4536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e4549){if((e4549 instanceof Object)){
var ex__4192__auto__ = e4549;
var statearr_4550_4653 = state_4536;
(statearr_4550_4653[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4654 = state_4536;
state_4536 = G__4654;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__ = function(state_4536){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____1.call(this,state_4536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto___4646,jobs,results,process,async))
})();
var state__4285__auto__ = (function (){var statearr_4551 = f__4284__auto__.call(null);
(statearr_4551[(6)] = c__4283__auto___4646);

return statearr_4551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto___4646,jobs,results,process,async))
);


var c__4283__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto__,jobs,results,process,async){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto__,jobs,results,process,async){
return (function (state_4589){
var state_val_4590 = (state_4589[(1)]);
if((state_val_4590 === (7))){
var inst_4585 = (state_4589[(2)]);
var state_4589__$1 = state_4589;
var statearr_4591_4655 = state_4589__$1;
(statearr_4591_4655[(2)] = inst_4585);

(statearr_4591_4655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (20))){
var state_4589__$1 = state_4589;
var statearr_4592_4656 = state_4589__$1;
(statearr_4592_4656[(2)] = null);

(statearr_4592_4656[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (1))){
var state_4589__$1 = state_4589;
var statearr_4593_4657 = state_4589__$1;
(statearr_4593_4657[(2)] = null);

(statearr_4593_4657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (4))){
var inst_4554 = (state_4589[(7)]);
var inst_4554__$1 = (state_4589[(2)]);
var inst_4555 = (inst_4554__$1 == null);
var state_4589__$1 = (function (){var statearr_4594 = state_4589;
(statearr_4594[(7)] = inst_4554__$1);

return statearr_4594;
})();
if(cljs.core.truth_(inst_4555)){
var statearr_4595_4658 = state_4589__$1;
(statearr_4595_4658[(1)] = (5));

} else {
var statearr_4596_4659 = state_4589__$1;
(statearr_4596_4659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (15))){
var inst_4567 = (state_4589[(8)]);
var state_4589__$1 = state_4589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4589__$1,(18),to,inst_4567);
} else {
if((state_val_4590 === (21))){
var inst_4580 = (state_4589[(2)]);
var state_4589__$1 = state_4589;
var statearr_4597_4660 = state_4589__$1;
(statearr_4597_4660[(2)] = inst_4580);

(statearr_4597_4660[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (13))){
var inst_4582 = (state_4589[(2)]);
var state_4589__$1 = (function (){var statearr_4598 = state_4589;
(statearr_4598[(9)] = inst_4582);

return statearr_4598;
})();
var statearr_4599_4661 = state_4589__$1;
(statearr_4599_4661[(2)] = null);

(statearr_4599_4661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (6))){
var inst_4554 = (state_4589[(7)]);
var state_4589__$1 = state_4589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4589__$1,(11),inst_4554);
} else {
if((state_val_4590 === (17))){
var inst_4575 = (state_4589[(2)]);
var state_4589__$1 = state_4589;
if(cljs.core.truth_(inst_4575)){
var statearr_4600_4662 = state_4589__$1;
(statearr_4600_4662[(1)] = (19));

} else {
var statearr_4601_4663 = state_4589__$1;
(statearr_4601_4663[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (3))){
var inst_4587 = (state_4589[(2)]);
var state_4589__$1 = state_4589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4589__$1,inst_4587);
} else {
if((state_val_4590 === (12))){
var inst_4564 = (state_4589[(10)]);
var state_4589__$1 = state_4589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4589__$1,(14),inst_4564);
} else {
if((state_val_4590 === (2))){
var state_4589__$1 = state_4589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4589__$1,(4),results);
} else {
if((state_val_4590 === (19))){
var state_4589__$1 = state_4589;
var statearr_4602_4664 = state_4589__$1;
(statearr_4602_4664[(2)] = null);

(statearr_4602_4664[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (11))){
var inst_4564 = (state_4589[(2)]);
var state_4589__$1 = (function (){var statearr_4603 = state_4589;
(statearr_4603[(10)] = inst_4564);

return statearr_4603;
})();
var statearr_4604_4665 = state_4589__$1;
(statearr_4604_4665[(2)] = null);

(statearr_4604_4665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (9))){
var state_4589__$1 = state_4589;
var statearr_4605_4666 = state_4589__$1;
(statearr_4605_4666[(2)] = null);

(statearr_4605_4666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (5))){
var state_4589__$1 = state_4589;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4606_4667 = state_4589__$1;
(statearr_4606_4667[(1)] = (8));

} else {
var statearr_4607_4668 = state_4589__$1;
(statearr_4607_4668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (14))){
var inst_4567 = (state_4589[(8)]);
var inst_4569 = (state_4589[(11)]);
var inst_4567__$1 = (state_4589[(2)]);
var inst_4568 = (inst_4567__$1 == null);
var inst_4569__$1 = cljs.core.not.call(null,inst_4568);
var state_4589__$1 = (function (){var statearr_4608 = state_4589;
(statearr_4608[(8)] = inst_4567__$1);

(statearr_4608[(11)] = inst_4569__$1);

return statearr_4608;
})();
if(inst_4569__$1){
var statearr_4609_4669 = state_4589__$1;
(statearr_4609_4669[(1)] = (15));

} else {
var statearr_4610_4670 = state_4589__$1;
(statearr_4610_4670[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (16))){
var inst_4569 = (state_4589[(11)]);
var state_4589__$1 = state_4589;
var statearr_4611_4671 = state_4589__$1;
(statearr_4611_4671[(2)] = inst_4569);

(statearr_4611_4671[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (10))){
var inst_4561 = (state_4589[(2)]);
var state_4589__$1 = state_4589;
var statearr_4612_4672 = state_4589__$1;
(statearr_4612_4672[(2)] = inst_4561);

(statearr_4612_4672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (18))){
var inst_4572 = (state_4589[(2)]);
var state_4589__$1 = state_4589;
var statearr_4613_4673 = state_4589__$1;
(statearr_4613_4673[(2)] = inst_4572);

(statearr_4613_4673[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4590 === (8))){
var inst_4558 = cljs.core.async.close_BANG_.call(null,to);
var state_4589__$1 = state_4589;
var statearr_4614_4674 = state_4589__$1;
(statearr_4614_4674[(2)] = inst_4558);

(statearr_4614_4674[(1)] = (10));


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
});})(c__4283__auto__,jobs,results,process,async))
;
return ((function (switch__4188__auto__,c__4283__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____0 = (function (){
var statearr_4615 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4615[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__);

(statearr_4615[(1)] = (1));

return statearr_4615;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____1 = (function (state_4589){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_4589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e4616){if((e4616 instanceof Object)){
var ex__4192__auto__ = e4616;
var statearr_4617_4675 = state_4589;
(statearr_4617_4675[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4676 = state_4589;
state_4589 = G__4676;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__ = function(state_4589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____1.call(this,state_4589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4189__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto__,jobs,results,process,async))
})();
var state__4285__auto__ = (function (){var statearr_4618 = f__4284__auto__.call(null);
(statearr_4618[(6)] = c__4283__auto__);

return statearr_4618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto__,jobs,results,process,async))
);

return c__4283__auto__;
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
var G__4678 = arguments.length;
switch (G__4678) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__4681 = arguments.length;
switch (G__4681) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__4684 = arguments.length;
switch (G__4684) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__4283__auto___4733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto___4733,tc,fc){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto___4733,tc,fc){
return (function (state_4710){
var state_val_4711 = (state_4710[(1)]);
if((state_val_4711 === (7))){
var inst_4706 = (state_4710[(2)]);
var state_4710__$1 = state_4710;
var statearr_4712_4734 = state_4710__$1;
(statearr_4712_4734[(2)] = inst_4706);

(statearr_4712_4734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4711 === (1))){
var state_4710__$1 = state_4710;
var statearr_4713_4735 = state_4710__$1;
(statearr_4713_4735[(2)] = null);

(statearr_4713_4735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4711 === (4))){
var inst_4687 = (state_4710[(7)]);
var inst_4687__$1 = (state_4710[(2)]);
var inst_4688 = (inst_4687__$1 == null);
var state_4710__$1 = (function (){var statearr_4714 = state_4710;
(statearr_4714[(7)] = inst_4687__$1);

return statearr_4714;
})();
if(cljs.core.truth_(inst_4688)){
var statearr_4715_4736 = state_4710__$1;
(statearr_4715_4736[(1)] = (5));

} else {
var statearr_4716_4737 = state_4710__$1;
(statearr_4716_4737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4711 === (13))){
var state_4710__$1 = state_4710;
var statearr_4717_4738 = state_4710__$1;
(statearr_4717_4738[(2)] = null);

(statearr_4717_4738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4711 === (6))){
var inst_4687 = (state_4710[(7)]);
var inst_4693 = p.call(null,inst_4687);
var state_4710__$1 = state_4710;
if(cljs.core.truth_(inst_4693)){
var statearr_4718_4739 = state_4710__$1;
(statearr_4718_4739[(1)] = (9));

} else {
var statearr_4719_4740 = state_4710__$1;
(statearr_4719_4740[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4711 === (3))){
var inst_4708 = (state_4710[(2)]);
var state_4710__$1 = state_4710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4710__$1,inst_4708);
} else {
if((state_val_4711 === (12))){
var state_4710__$1 = state_4710;
var statearr_4720_4741 = state_4710__$1;
(statearr_4720_4741[(2)] = null);

(statearr_4720_4741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4711 === (2))){
var state_4710__$1 = state_4710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4710__$1,(4),ch);
} else {
if((state_val_4711 === (11))){
var inst_4687 = (state_4710[(7)]);
var inst_4697 = (state_4710[(2)]);
var state_4710__$1 = state_4710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4710__$1,(8),inst_4697,inst_4687);
} else {
if((state_val_4711 === (9))){
var state_4710__$1 = state_4710;
var statearr_4721_4742 = state_4710__$1;
(statearr_4721_4742[(2)] = tc);

(statearr_4721_4742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4711 === (5))){
var inst_4690 = cljs.core.async.close_BANG_.call(null,tc);
var inst_4691 = cljs.core.async.close_BANG_.call(null,fc);
var state_4710__$1 = (function (){var statearr_4722 = state_4710;
(statearr_4722[(8)] = inst_4690);

return statearr_4722;
})();
var statearr_4723_4743 = state_4710__$1;
(statearr_4723_4743[(2)] = inst_4691);

(statearr_4723_4743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4711 === (14))){
var inst_4704 = (state_4710[(2)]);
var state_4710__$1 = state_4710;
var statearr_4724_4744 = state_4710__$1;
(statearr_4724_4744[(2)] = inst_4704);

(statearr_4724_4744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4711 === (10))){
var state_4710__$1 = state_4710;
var statearr_4725_4745 = state_4710__$1;
(statearr_4725_4745[(2)] = fc);

(statearr_4725_4745[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4711 === (8))){
var inst_4699 = (state_4710[(2)]);
var state_4710__$1 = state_4710;
if(cljs.core.truth_(inst_4699)){
var statearr_4726_4746 = state_4710__$1;
(statearr_4726_4746[(1)] = (12));

} else {
var statearr_4727_4747 = state_4710__$1;
(statearr_4727_4747[(1)] = (13));

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
});})(c__4283__auto___4733,tc,fc))
;
return ((function (switch__4188__auto__,c__4283__auto___4733,tc,fc){
return (function() {
var cljs$core$async$state_machine__4189__auto__ = null;
var cljs$core$async$state_machine__4189__auto____0 = (function (){
var statearr_4728 = [null,null,null,null,null,null,null,null,null];
(statearr_4728[(0)] = cljs$core$async$state_machine__4189__auto__);

(statearr_4728[(1)] = (1));

return statearr_4728;
});
var cljs$core$async$state_machine__4189__auto____1 = (function (state_4710){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_4710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e4729){if((e4729 instanceof Object)){
var ex__4192__auto__ = e4729;
var statearr_4730_4748 = state_4710;
(statearr_4730_4748[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4749 = state_4710;
state_4710 = G__4749;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$state_machine__4189__auto__ = function(state_4710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4189__auto____1.call(this,state_4710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4189__auto____0;
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4189__auto____1;
return cljs$core$async$state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto___4733,tc,fc))
})();
var state__4285__auto__ = (function (){var statearr_4731 = f__4284__auto__.call(null);
(statearr_4731[(6)] = c__4283__auto___4733);

return statearr_4731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto___4733,tc,fc))
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
var c__4283__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto__){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto__){
return (function (state_4770){
var state_val_4771 = (state_4770[(1)]);
if((state_val_4771 === (7))){
var inst_4766 = (state_4770[(2)]);
var state_4770__$1 = state_4770;
var statearr_4772_4790 = state_4770__$1;
(statearr_4772_4790[(2)] = inst_4766);

(statearr_4772_4790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4771 === (1))){
var inst_4750 = init;
var state_4770__$1 = (function (){var statearr_4773 = state_4770;
(statearr_4773[(7)] = inst_4750);

return statearr_4773;
})();
var statearr_4774_4791 = state_4770__$1;
(statearr_4774_4791[(2)] = null);

(statearr_4774_4791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4771 === (4))){
var inst_4753 = (state_4770[(8)]);
var inst_4753__$1 = (state_4770[(2)]);
var inst_4754 = (inst_4753__$1 == null);
var state_4770__$1 = (function (){var statearr_4775 = state_4770;
(statearr_4775[(8)] = inst_4753__$1);

return statearr_4775;
})();
if(cljs.core.truth_(inst_4754)){
var statearr_4776_4792 = state_4770__$1;
(statearr_4776_4792[(1)] = (5));

} else {
var statearr_4777_4793 = state_4770__$1;
(statearr_4777_4793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4771 === (6))){
var inst_4750 = (state_4770[(7)]);
var inst_4757 = (state_4770[(9)]);
var inst_4753 = (state_4770[(8)]);
var inst_4757__$1 = f.call(null,inst_4750,inst_4753);
var inst_4758 = cljs.core.reduced_QMARK_.call(null,inst_4757__$1);
var state_4770__$1 = (function (){var statearr_4778 = state_4770;
(statearr_4778[(9)] = inst_4757__$1);

return statearr_4778;
})();
if(inst_4758){
var statearr_4779_4794 = state_4770__$1;
(statearr_4779_4794[(1)] = (8));

} else {
var statearr_4780_4795 = state_4770__$1;
(statearr_4780_4795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4771 === (3))){
var inst_4768 = (state_4770[(2)]);
var state_4770__$1 = state_4770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4770__$1,inst_4768);
} else {
if((state_val_4771 === (2))){
var state_4770__$1 = state_4770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4770__$1,(4),ch);
} else {
if((state_val_4771 === (9))){
var inst_4757 = (state_4770[(9)]);
var inst_4750 = inst_4757;
var state_4770__$1 = (function (){var statearr_4781 = state_4770;
(statearr_4781[(7)] = inst_4750);

return statearr_4781;
})();
var statearr_4782_4796 = state_4770__$1;
(statearr_4782_4796[(2)] = null);

(statearr_4782_4796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4771 === (5))){
var inst_4750 = (state_4770[(7)]);
var state_4770__$1 = state_4770;
var statearr_4783_4797 = state_4770__$1;
(statearr_4783_4797[(2)] = inst_4750);

(statearr_4783_4797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4771 === (10))){
var inst_4764 = (state_4770[(2)]);
var state_4770__$1 = state_4770;
var statearr_4784_4798 = state_4770__$1;
(statearr_4784_4798[(2)] = inst_4764);

(statearr_4784_4798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4771 === (8))){
var inst_4757 = (state_4770[(9)]);
var inst_4760 = cljs.core.deref.call(null,inst_4757);
var state_4770__$1 = state_4770;
var statearr_4785_4799 = state_4770__$1;
(statearr_4785_4799[(2)] = inst_4760);

(statearr_4785_4799[(1)] = (10));


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
});})(c__4283__auto__))
;
return ((function (switch__4188__auto__,c__4283__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__4189__auto__ = null;
var cljs$core$async$reduce_$_state_machine__4189__auto____0 = (function (){
var statearr_4786 = [null,null,null,null,null,null,null,null,null,null];
(statearr_4786[(0)] = cljs$core$async$reduce_$_state_machine__4189__auto__);

(statearr_4786[(1)] = (1));

return statearr_4786;
});
var cljs$core$async$reduce_$_state_machine__4189__auto____1 = (function (state_4770){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_4770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e4787){if((e4787 instanceof Object)){
var ex__4192__auto__ = e4787;
var statearr_4788_4800 = state_4770;
(statearr_4788_4800[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4801 = state_4770;
state_4770 = G__4801;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__4189__auto__ = function(state_4770){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__4189__auto____1.call(this,state_4770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__4189__auto____0;
cljs$core$async$reduce_$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__4189__auto____1;
return cljs$core$async$reduce_$_state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto__))
})();
var state__4285__auto__ = (function (){var statearr_4789 = f__4284__auto__.call(null);
(statearr_4789[(6)] = c__4283__auto__);

return statearr_4789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto__))
);

return c__4283__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__4283__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto__,f__$1){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto__,f__$1){
return (function (state_4807){
var state_val_4808 = (state_4807[(1)]);
if((state_val_4808 === (1))){
var inst_4802 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_4807__$1 = state_4807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4807__$1,(2),inst_4802);
} else {
if((state_val_4808 === (2))){
var inst_4804 = (state_4807[(2)]);
var inst_4805 = f__$1.call(null,inst_4804);
var state_4807__$1 = state_4807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4807__$1,inst_4805);
} else {
return null;
}
}
});})(c__4283__auto__,f__$1))
;
return ((function (switch__4188__auto__,c__4283__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__4189__auto__ = null;
var cljs$core$async$transduce_$_state_machine__4189__auto____0 = (function (){
var statearr_4809 = [null,null,null,null,null,null,null];
(statearr_4809[(0)] = cljs$core$async$transduce_$_state_machine__4189__auto__);

(statearr_4809[(1)] = (1));

return statearr_4809;
});
var cljs$core$async$transduce_$_state_machine__4189__auto____1 = (function (state_4807){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_4807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e4810){if((e4810 instanceof Object)){
var ex__4192__auto__ = e4810;
var statearr_4811_4813 = state_4807;
(statearr_4811_4813[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4814 = state_4807;
state_4807 = G__4814;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__4189__auto__ = function(state_4807){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__4189__auto____1.call(this,state_4807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__4189__auto____0;
cljs$core$async$transduce_$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__4189__auto____1;
return cljs$core$async$transduce_$_state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto__,f__$1))
})();
var state__4285__auto__ = (function (){var statearr_4812 = f__4284__auto__.call(null);
(statearr_4812[(6)] = c__4283__auto__);

return statearr_4812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto__,f__$1))
);

return c__4283__auto__;
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
var G__4816 = arguments.length;
switch (G__4816) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__4283__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto__){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto__){
return (function (state_4841){
var state_val_4842 = (state_4841[(1)]);
if((state_val_4842 === (7))){
var inst_4823 = (state_4841[(2)]);
var state_4841__$1 = state_4841;
var statearr_4843_4864 = state_4841__$1;
(statearr_4843_4864[(2)] = inst_4823);

(statearr_4843_4864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (1))){
var inst_4817 = cljs.core.seq.call(null,coll);
var inst_4818 = inst_4817;
var state_4841__$1 = (function (){var statearr_4844 = state_4841;
(statearr_4844[(7)] = inst_4818);

return statearr_4844;
})();
var statearr_4845_4865 = state_4841__$1;
(statearr_4845_4865[(2)] = null);

(statearr_4845_4865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (4))){
var inst_4818 = (state_4841[(7)]);
var inst_4821 = cljs.core.first.call(null,inst_4818);
var state_4841__$1 = state_4841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4841__$1,(7),ch,inst_4821);
} else {
if((state_val_4842 === (13))){
var inst_4835 = (state_4841[(2)]);
var state_4841__$1 = state_4841;
var statearr_4846_4866 = state_4841__$1;
(statearr_4846_4866[(2)] = inst_4835);

(statearr_4846_4866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (6))){
var inst_4826 = (state_4841[(2)]);
var state_4841__$1 = state_4841;
if(cljs.core.truth_(inst_4826)){
var statearr_4847_4867 = state_4841__$1;
(statearr_4847_4867[(1)] = (8));

} else {
var statearr_4848_4868 = state_4841__$1;
(statearr_4848_4868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (3))){
var inst_4839 = (state_4841[(2)]);
var state_4841__$1 = state_4841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4841__$1,inst_4839);
} else {
if((state_val_4842 === (12))){
var state_4841__$1 = state_4841;
var statearr_4849_4869 = state_4841__$1;
(statearr_4849_4869[(2)] = null);

(statearr_4849_4869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (2))){
var inst_4818 = (state_4841[(7)]);
var state_4841__$1 = state_4841;
if(cljs.core.truth_(inst_4818)){
var statearr_4850_4870 = state_4841__$1;
(statearr_4850_4870[(1)] = (4));

} else {
var statearr_4851_4871 = state_4841__$1;
(statearr_4851_4871[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (11))){
var inst_4832 = cljs.core.async.close_BANG_.call(null,ch);
var state_4841__$1 = state_4841;
var statearr_4852_4872 = state_4841__$1;
(statearr_4852_4872[(2)] = inst_4832);

(statearr_4852_4872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (9))){
var state_4841__$1 = state_4841;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4853_4873 = state_4841__$1;
(statearr_4853_4873[(1)] = (11));

} else {
var statearr_4854_4874 = state_4841__$1;
(statearr_4854_4874[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (5))){
var inst_4818 = (state_4841[(7)]);
var state_4841__$1 = state_4841;
var statearr_4855_4875 = state_4841__$1;
(statearr_4855_4875[(2)] = inst_4818);

(statearr_4855_4875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (10))){
var inst_4837 = (state_4841[(2)]);
var state_4841__$1 = state_4841;
var statearr_4856_4876 = state_4841__$1;
(statearr_4856_4876[(2)] = inst_4837);

(statearr_4856_4876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (8))){
var inst_4818 = (state_4841[(7)]);
var inst_4828 = cljs.core.next.call(null,inst_4818);
var inst_4818__$1 = inst_4828;
var state_4841__$1 = (function (){var statearr_4857 = state_4841;
(statearr_4857[(7)] = inst_4818__$1);

return statearr_4857;
})();
var statearr_4858_4877 = state_4841__$1;
(statearr_4858_4877[(2)] = null);

(statearr_4858_4877[(1)] = (2));


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
});})(c__4283__auto__))
;
return ((function (switch__4188__auto__,c__4283__auto__){
return (function() {
var cljs$core$async$state_machine__4189__auto__ = null;
var cljs$core$async$state_machine__4189__auto____0 = (function (){
var statearr_4859 = [null,null,null,null,null,null,null,null];
(statearr_4859[(0)] = cljs$core$async$state_machine__4189__auto__);

(statearr_4859[(1)] = (1));

return statearr_4859;
});
var cljs$core$async$state_machine__4189__auto____1 = (function (state_4841){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_4841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e4860){if((e4860 instanceof Object)){
var ex__4192__auto__ = e4860;
var statearr_4861_4878 = state_4841;
(statearr_4861_4878[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4879 = state_4841;
state_4841 = G__4879;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$state_machine__4189__auto__ = function(state_4841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4189__auto____1.call(this,state_4841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4189__auto____0;
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4189__auto____1;
return cljs$core$async$state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto__))
})();
var state__4285__auto__ = (function (){var statearr_4862 = f__4284__auto__.call(null);
(statearr_4862[(6)] = c__4283__auto__);

return statearr_4862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto__))
);

return c__4283__auto__;
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
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4880 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4880 = (function (ch,cs,meta4881){
this.ch = ch;
this.cs = cs;
this.meta4881 = meta4881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_4882,meta4881__$1){
var self__ = this;
var _4882__$1 = this;
return (new cljs.core.async.t_cljs$core$async4880(self__.ch,self__.cs,meta4881__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async4880.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_4882){
var self__ = this;
var _4882__$1 = this;
return self__.meta4881;
});})(cs))
;

cljs.core.async.t_cljs$core$async4880.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4880.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async4880.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4880.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4880.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4880.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4880.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta4881","meta4881",84896011,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async4880.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4880";

cljs.core.async.t_cljs$core$async4880.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async4880");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4880.
 */
cljs.core.async.__GT_t_cljs$core$async4880 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async4880(ch__$1,cs__$1,meta4881){
return (new cljs.core.async.t_cljs$core$async4880(ch__$1,cs__$1,meta4881));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async4880(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__4283__auto___5102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto___5102,cs,m,dchan,dctr,done){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto___5102,cs,m,dchan,dctr,done){
return (function (state_5017){
var state_val_5018 = (state_5017[(1)]);
if((state_val_5018 === (7))){
var inst_5013 = (state_5017[(2)]);
var state_5017__$1 = state_5017;
var statearr_5019_5103 = state_5017__$1;
(statearr_5019_5103[(2)] = inst_5013);

(statearr_5019_5103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (20))){
var inst_4916 = (state_5017[(7)]);
var inst_4928 = cljs.core.first.call(null,inst_4916);
var inst_4929 = cljs.core.nth.call(null,inst_4928,(0),null);
var inst_4930 = cljs.core.nth.call(null,inst_4928,(1),null);
var state_5017__$1 = (function (){var statearr_5020 = state_5017;
(statearr_5020[(8)] = inst_4929);

return statearr_5020;
})();
if(cljs.core.truth_(inst_4930)){
var statearr_5021_5104 = state_5017__$1;
(statearr_5021_5104[(1)] = (22));

} else {
var statearr_5022_5105 = state_5017__$1;
(statearr_5022_5105[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (27))){
var inst_4965 = (state_5017[(9)]);
var inst_4958 = (state_5017[(10)]);
var inst_4885 = (state_5017[(11)]);
var inst_4960 = (state_5017[(12)]);
var inst_4965__$1 = cljs.core._nth.call(null,inst_4958,inst_4960);
var inst_4966 = cljs.core.async.put_BANG_.call(null,inst_4965__$1,inst_4885,done);
var state_5017__$1 = (function (){var statearr_5023 = state_5017;
(statearr_5023[(9)] = inst_4965__$1);

return statearr_5023;
})();
if(cljs.core.truth_(inst_4966)){
var statearr_5024_5106 = state_5017__$1;
(statearr_5024_5106[(1)] = (30));

} else {
var statearr_5025_5107 = state_5017__$1;
(statearr_5025_5107[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (1))){
var state_5017__$1 = state_5017;
var statearr_5026_5108 = state_5017__$1;
(statearr_5026_5108[(2)] = null);

(statearr_5026_5108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (24))){
var inst_4916 = (state_5017[(7)]);
var inst_4935 = (state_5017[(2)]);
var inst_4936 = cljs.core.next.call(null,inst_4916);
var inst_4894 = inst_4936;
var inst_4895 = null;
var inst_4896 = (0);
var inst_4897 = (0);
var state_5017__$1 = (function (){var statearr_5027 = state_5017;
(statearr_5027[(13)] = inst_4895);

(statearr_5027[(14)] = inst_4897);

(statearr_5027[(15)] = inst_4894);

(statearr_5027[(16)] = inst_4896);

(statearr_5027[(17)] = inst_4935);

return statearr_5027;
})();
var statearr_5028_5109 = state_5017__$1;
(statearr_5028_5109[(2)] = null);

(statearr_5028_5109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (39))){
var state_5017__$1 = state_5017;
var statearr_5032_5110 = state_5017__$1;
(statearr_5032_5110[(2)] = null);

(statearr_5032_5110[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (4))){
var inst_4885 = (state_5017[(11)]);
var inst_4885__$1 = (state_5017[(2)]);
var inst_4886 = (inst_4885__$1 == null);
var state_5017__$1 = (function (){var statearr_5033 = state_5017;
(statearr_5033[(11)] = inst_4885__$1);

return statearr_5033;
})();
if(cljs.core.truth_(inst_4886)){
var statearr_5034_5111 = state_5017__$1;
(statearr_5034_5111[(1)] = (5));

} else {
var statearr_5035_5112 = state_5017__$1;
(statearr_5035_5112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (15))){
var inst_4895 = (state_5017[(13)]);
var inst_4897 = (state_5017[(14)]);
var inst_4894 = (state_5017[(15)]);
var inst_4896 = (state_5017[(16)]);
var inst_4912 = (state_5017[(2)]);
var inst_4913 = (inst_4897 + (1));
var tmp5029 = inst_4895;
var tmp5030 = inst_4894;
var tmp5031 = inst_4896;
var inst_4894__$1 = tmp5030;
var inst_4895__$1 = tmp5029;
var inst_4896__$1 = tmp5031;
var inst_4897__$1 = inst_4913;
var state_5017__$1 = (function (){var statearr_5036 = state_5017;
(statearr_5036[(13)] = inst_4895__$1);

(statearr_5036[(14)] = inst_4897__$1);

(statearr_5036[(15)] = inst_4894__$1);

(statearr_5036[(18)] = inst_4912);

(statearr_5036[(16)] = inst_4896__$1);

return statearr_5036;
})();
var statearr_5037_5113 = state_5017__$1;
(statearr_5037_5113[(2)] = null);

(statearr_5037_5113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (21))){
var inst_4939 = (state_5017[(2)]);
var state_5017__$1 = state_5017;
var statearr_5041_5114 = state_5017__$1;
(statearr_5041_5114[(2)] = inst_4939);

(statearr_5041_5114[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (31))){
var inst_4965 = (state_5017[(9)]);
var inst_4969 = done.call(null,null);
var inst_4970 = cljs.core.async.untap_STAR_.call(null,m,inst_4965);
var state_5017__$1 = (function (){var statearr_5042 = state_5017;
(statearr_5042[(19)] = inst_4969);

return statearr_5042;
})();
var statearr_5043_5115 = state_5017__$1;
(statearr_5043_5115[(2)] = inst_4970);

(statearr_5043_5115[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (32))){
var inst_4959 = (state_5017[(20)]);
var inst_4958 = (state_5017[(10)]);
var inst_4957 = (state_5017[(21)]);
var inst_4960 = (state_5017[(12)]);
var inst_4972 = (state_5017[(2)]);
var inst_4973 = (inst_4960 + (1));
var tmp5038 = inst_4959;
var tmp5039 = inst_4958;
var tmp5040 = inst_4957;
var inst_4957__$1 = tmp5040;
var inst_4958__$1 = tmp5039;
var inst_4959__$1 = tmp5038;
var inst_4960__$1 = inst_4973;
var state_5017__$1 = (function (){var statearr_5044 = state_5017;
(statearr_5044[(20)] = inst_4959__$1);

(statearr_5044[(10)] = inst_4958__$1);

(statearr_5044[(21)] = inst_4957__$1);

(statearr_5044[(22)] = inst_4972);

(statearr_5044[(12)] = inst_4960__$1);

return statearr_5044;
})();
var statearr_5045_5116 = state_5017__$1;
(statearr_5045_5116[(2)] = null);

(statearr_5045_5116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (40))){
var inst_4985 = (state_5017[(23)]);
var inst_4989 = done.call(null,null);
var inst_4990 = cljs.core.async.untap_STAR_.call(null,m,inst_4985);
var state_5017__$1 = (function (){var statearr_5046 = state_5017;
(statearr_5046[(24)] = inst_4989);

return statearr_5046;
})();
var statearr_5047_5117 = state_5017__$1;
(statearr_5047_5117[(2)] = inst_4990);

(statearr_5047_5117[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (33))){
var inst_4976 = (state_5017[(25)]);
var inst_4978 = cljs.core.chunked_seq_QMARK_.call(null,inst_4976);
var state_5017__$1 = state_5017;
if(inst_4978){
var statearr_5048_5118 = state_5017__$1;
(statearr_5048_5118[(1)] = (36));

} else {
var statearr_5049_5119 = state_5017__$1;
(statearr_5049_5119[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (13))){
var inst_4906 = (state_5017[(26)]);
var inst_4909 = cljs.core.async.close_BANG_.call(null,inst_4906);
var state_5017__$1 = state_5017;
var statearr_5050_5120 = state_5017__$1;
(statearr_5050_5120[(2)] = inst_4909);

(statearr_5050_5120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (22))){
var inst_4929 = (state_5017[(8)]);
var inst_4932 = cljs.core.async.close_BANG_.call(null,inst_4929);
var state_5017__$1 = state_5017;
var statearr_5051_5121 = state_5017__$1;
(statearr_5051_5121[(2)] = inst_4932);

(statearr_5051_5121[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (36))){
var inst_4976 = (state_5017[(25)]);
var inst_4980 = cljs.core.chunk_first.call(null,inst_4976);
var inst_4981 = cljs.core.chunk_rest.call(null,inst_4976);
var inst_4982 = cljs.core.count.call(null,inst_4980);
var inst_4957 = inst_4981;
var inst_4958 = inst_4980;
var inst_4959 = inst_4982;
var inst_4960 = (0);
var state_5017__$1 = (function (){var statearr_5052 = state_5017;
(statearr_5052[(20)] = inst_4959);

(statearr_5052[(10)] = inst_4958);

(statearr_5052[(21)] = inst_4957);

(statearr_5052[(12)] = inst_4960);

return statearr_5052;
})();
var statearr_5053_5122 = state_5017__$1;
(statearr_5053_5122[(2)] = null);

(statearr_5053_5122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (41))){
var inst_4976 = (state_5017[(25)]);
var inst_4992 = (state_5017[(2)]);
var inst_4993 = cljs.core.next.call(null,inst_4976);
var inst_4957 = inst_4993;
var inst_4958 = null;
var inst_4959 = (0);
var inst_4960 = (0);
var state_5017__$1 = (function (){var statearr_5054 = state_5017;
(statearr_5054[(20)] = inst_4959);

(statearr_5054[(10)] = inst_4958);

(statearr_5054[(27)] = inst_4992);

(statearr_5054[(21)] = inst_4957);

(statearr_5054[(12)] = inst_4960);

return statearr_5054;
})();
var statearr_5055_5123 = state_5017__$1;
(statearr_5055_5123[(2)] = null);

(statearr_5055_5123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (43))){
var state_5017__$1 = state_5017;
var statearr_5056_5124 = state_5017__$1;
(statearr_5056_5124[(2)] = null);

(statearr_5056_5124[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (29))){
var inst_5001 = (state_5017[(2)]);
var state_5017__$1 = state_5017;
var statearr_5057_5125 = state_5017__$1;
(statearr_5057_5125[(2)] = inst_5001);

(statearr_5057_5125[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (44))){
var inst_5010 = (state_5017[(2)]);
var state_5017__$1 = (function (){var statearr_5058 = state_5017;
(statearr_5058[(28)] = inst_5010);

return statearr_5058;
})();
var statearr_5059_5126 = state_5017__$1;
(statearr_5059_5126[(2)] = null);

(statearr_5059_5126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (6))){
var inst_4949 = (state_5017[(29)]);
var inst_4948 = cljs.core.deref.call(null,cs);
var inst_4949__$1 = cljs.core.keys.call(null,inst_4948);
var inst_4950 = cljs.core.count.call(null,inst_4949__$1);
var inst_4951 = cljs.core.reset_BANG_.call(null,dctr,inst_4950);
var inst_4956 = cljs.core.seq.call(null,inst_4949__$1);
var inst_4957 = inst_4956;
var inst_4958 = null;
var inst_4959 = (0);
var inst_4960 = (0);
var state_5017__$1 = (function (){var statearr_5060 = state_5017;
(statearr_5060[(20)] = inst_4959);

(statearr_5060[(10)] = inst_4958);

(statearr_5060[(30)] = inst_4951);

(statearr_5060[(21)] = inst_4957);

(statearr_5060[(29)] = inst_4949__$1);

(statearr_5060[(12)] = inst_4960);

return statearr_5060;
})();
var statearr_5061_5127 = state_5017__$1;
(statearr_5061_5127[(2)] = null);

(statearr_5061_5127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (28))){
var inst_4976 = (state_5017[(25)]);
var inst_4957 = (state_5017[(21)]);
var inst_4976__$1 = cljs.core.seq.call(null,inst_4957);
var state_5017__$1 = (function (){var statearr_5062 = state_5017;
(statearr_5062[(25)] = inst_4976__$1);

return statearr_5062;
})();
if(inst_4976__$1){
var statearr_5063_5128 = state_5017__$1;
(statearr_5063_5128[(1)] = (33));

} else {
var statearr_5064_5129 = state_5017__$1;
(statearr_5064_5129[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (25))){
var inst_4959 = (state_5017[(20)]);
var inst_4960 = (state_5017[(12)]);
var inst_4962 = (inst_4960 < inst_4959);
var inst_4963 = inst_4962;
var state_5017__$1 = state_5017;
if(cljs.core.truth_(inst_4963)){
var statearr_5065_5130 = state_5017__$1;
(statearr_5065_5130[(1)] = (27));

} else {
var statearr_5066_5131 = state_5017__$1;
(statearr_5066_5131[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (34))){
var state_5017__$1 = state_5017;
var statearr_5067_5132 = state_5017__$1;
(statearr_5067_5132[(2)] = null);

(statearr_5067_5132[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (17))){
var state_5017__$1 = state_5017;
var statearr_5068_5133 = state_5017__$1;
(statearr_5068_5133[(2)] = null);

(statearr_5068_5133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (3))){
var inst_5015 = (state_5017[(2)]);
var state_5017__$1 = state_5017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5017__$1,inst_5015);
} else {
if((state_val_5018 === (12))){
var inst_4944 = (state_5017[(2)]);
var state_5017__$1 = state_5017;
var statearr_5069_5134 = state_5017__$1;
(statearr_5069_5134[(2)] = inst_4944);

(statearr_5069_5134[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (2))){
var state_5017__$1 = state_5017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5017__$1,(4),ch);
} else {
if((state_val_5018 === (23))){
var state_5017__$1 = state_5017;
var statearr_5070_5135 = state_5017__$1;
(statearr_5070_5135[(2)] = null);

(statearr_5070_5135[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (35))){
var inst_4999 = (state_5017[(2)]);
var state_5017__$1 = state_5017;
var statearr_5071_5136 = state_5017__$1;
(statearr_5071_5136[(2)] = inst_4999);

(statearr_5071_5136[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (19))){
var inst_4916 = (state_5017[(7)]);
var inst_4920 = cljs.core.chunk_first.call(null,inst_4916);
var inst_4921 = cljs.core.chunk_rest.call(null,inst_4916);
var inst_4922 = cljs.core.count.call(null,inst_4920);
var inst_4894 = inst_4921;
var inst_4895 = inst_4920;
var inst_4896 = inst_4922;
var inst_4897 = (0);
var state_5017__$1 = (function (){var statearr_5072 = state_5017;
(statearr_5072[(13)] = inst_4895);

(statearr_5072[(14)] = inst_4897);

(statearr_5072[(15)] = inst_4894);

(statearr_5072[(16)] = inst_4896);

return statearr_5072;
})();
var statearr_5073_5137 = state_5017__$1;
(statearr_5073_5137[(2)] = null);

(statearr_5073_5137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (11))){
var inst_4916 = (state_5017[(7)]);
var inst_4894 = (state_5017[(15)]);
var inst_4916__$1 = cljs.core.seq.call(null,inst_4894);
var state_5017__$1 = (function (){var statearr_5074 = state_5017;
(statearr_5074[(7)] = inst_4916__$1);

return statearr_5074;
})();
if(inst_4916__$1){
var statearr_5075_5138 = state_5017__$1;
(statearr_5075_5138[(1)] = (16));

} else {
var statearr_5076_5139 = state_5017__$1;
(statearr_5076_5139[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (9))){
var inst_4946 = (state_5017[(2)]);
var state_5017__$1 = state_5017;
var statearr_5077_5140 = state_5017__$1;
(statearr_5077_5140[(2)] = inst_4946);

(statearr_5077_5140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (5))){
var inst_4892 = cljs.core.deref.call(null,cs);
var inst_4893 = cljs.core.seq.call(null,inst_4892);
var inst_4894 = inst_4893;
var inst_4895 = null;
var inst_4896 = (0);
var inst_4897 = (0);
var state_5017__$1 = (function (){var statearr_5078 = state_5017;
(statearr_5078[(13)] = inst_4895);

(statearr_5078[(14)] = inst_4897);

(statearr_5078[(15)] = inst_4894);

(statearr_5078[(16)] = inst_4896);

return statearr_5078;
})();
var statearr_5079_5141 = state_5017__$1;
(statearr_5079_5141[(2)] = null);

(statearr_5079_5141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (14))){
var state_5017__$1 = state_5017;
var statearr_5080_5142 = state_5017__$1;
(statearr_5080_5142[(2)] = null);

(statearr_5080_5142[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (45))){
var inst_5007 = (state_5017[(2)]);
var state_5017__$1 = state_5017;
var statearr_5081_5143 = state_5017__$1;
(statearr_5081_5143[(2)] = inst_5007);

(statearr_5081_5143[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (26))){
var inst_4949 = (state_5017[(29)]);
var inst_5003 = (state_5017[(2)]);
var inst_5004 = cljs.core.seq.call(null,inst_4949);
var state_5017__$1 = (function (){var statearr_5082 = state_5017;
(statearr_5082[(31)] = inst_5003);

return statearr_5082;
})();
if(inst_5004){
var statearr_5083_5144 = state_5017__$1;
(statearr_5083_5144[(1)] = (42));

} else {
var statearr_5084_5145 = state_5017__$1;
(statearr_5084_5145[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (16))){
var inst_4916 = (state_5017[(7)]);
var inst_4918 = cljs.core.chunked_seq_QMARK_.call(null,inst_4916);
var state_5017__$1 = state_5017;
if(inst_4918){
var statearr_5085_5146 = state_5017__$1;
(statearr_5085_5146[(1)] = (19));

} else {
var statearr_5086_5147 = state_5017__$1;
(statearr_5086_5147[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (38))){
var inst_4996 = (state_5017[(2)]);
var state_5017__$1 = state_5017;
var statearr_5087_5148 = state_5017__$1;
(statearr_5087_5148[(2)] = inst_4996);

(statearr_5087_5148[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (30))){
var state_5017__$1 = state_5017;
var statearr_5088_5149 = state_5017__$1;
(statearr_5088_5149[(2)] = null);

(statearr_5088_5149[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (10))){
var inst_4895 = (state_5017[(13)]);
var inst_4897 = (state_5017[(14)]);
var inst_4905 = cljs.core._nth.call(null,inst_4895,inst_4897);
var inst_4906 = cljs.core.nth.call(null,inst_4905,(0),null);
var inst_4907 = cljs.core.nth.call(null,inst_4905,(1),null);
var state_5017__$1 = (function (){var statearr_5089 = state_5017;
(statearr_5089[(26)] = inst_4906);

return statearr_5089;
})();
if(cljs.core.truth_(inst_4907)){
var statearr_5090_5150 = state_5017__$1;
(statearr_5090_5150[(1)] = (13));

} else {
var statearr_5091_5151 = state_5017__$1;
(statearr_5091_5151[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (18))){
var inst_4942 = (state_5017[(2)]);
var state_5017__$1 = state_5017;
var statearr_5092_5152 = state_5017__$1;
(statearr_5092_5152[(2)] = inst_4942);

(statearr_5092_5152[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (42))){
var state_5017__$1 = state_5017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5017__$1,(45),dchan);
} else {
if((state_val_5018 === (37))){
var inst_4976 = (state_5017[(25)]);
var inst_4885 = (state_5017[(11)]);
var inst_4985 = (state_5017[(23)]);
var inst_4985__$1 = cljs.core.first.call(null,inst_4976);
var inst_4986 = cljs.core.async.put_BANG_.call(null,inst_4985__$1,inst_4885,done);
var state_5017__$1 = (function (){var statearr_5093 = state_5017;
(statearr_5093[(23)] = inst_4985__$1);

return statearr_5093;
})();
if(cljs.core.truth_(inst_4986)){
var statearr_5094_5153 = state_5017__$1;
(statearr_5094_5153[(1)] = (39));

} else {
var statearr_5095_5154 = state_5017__$1;
(statearr_5095_5154[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5018 === (8))){
var inst_4897 = (state_5017[(14)]);
var inst_4896 = (state_5017[(16)]);
var inst_4899 = (inst_4897 < inst_4896);
var inst_4900 = inst_4899;
var state_5017__$1 = state_5017;
if(cljs.core.truth_(inst_4900)){
var statearr_5096_5155 = state_5017__$1;
(statearr_5096_5155[(1)] = (10));

} else {
var statearr_5097_5156 = state_5017__$1;
(statearr_5097_5156[(1)] = (11));

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
});})(c__4283__auto___5102,cs,m,dchan,dctr,done))
;
return ((function (switch__4188__auto__,c__4283__auto___5102,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__4189__auto__ = null;
var cljs$core$async$mult_$_state_machine__4189__auto____0 = (function (){
var statearr_5098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5098[(0)] = cljs$core$async$mult_$_state_machine__4189__auto__);

(statearr_5098[(1)] = (1));

return statearr_5098;
});
var cljs$core$async$mult_$_state_machine__4189__auto____1 = (function (state_5017){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_5017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e5099){if((e5099 instanceof Object)){
var ex__4192__auto__ = e5099;
var statearr_5100_5157 = state_5017;
(statearr_5100_5157[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5158 = state_5017;
state_5017 = G__5158;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__4189__auto__ = function(state_5017){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__4189__auto____1.call(this,state_5017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__4189__auto____0;
cljs$core$async$mult_$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__4189__auto____1;
return cljs$core$async$mult_$_state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto___5102,cs,m,dchan,dctr,done))
})();
var state__4285__auto__ = (function (){var statearr_5101 = f__4284__auto__.call(null);
(statearr_5101[(6)] = c__4283__auto___5102);

return statearr_5101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto___5102,cs,m,dchan,dctr,done))
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
var G__5160 = arguments.length;
switch (G__5160) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5172 = arguments.length;
var i__4731__auto___5173 = (0);
while(true){
if((i__4731__auto___5173 < len__4730__auto___5172)){
args__4736__auto__.push((arguments[i__4731__auto___5173]));

var G__5174 = (i__4731__auto___5173 + (1));
i__4731__auto___5173 = G__5174;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__5166){
var map__5167 = p__5166;
var map__5167__$1 = (((((!((map__5167 == null))))?(((((map__5167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5167):map__5167);
var opts = map__5167__$1;
var statearr_5169_5175 = state;
(statearr_5169_5175[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__5167,map__5167__$1,opts){
return (function (val){
var statearr_5170_5176 = state;
(statearr_5170_5176[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__5167,map__5167__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_5171_5177 = state;
(statearr_5171_5177[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq5162){
var G__5163 = cljs.core.first.call(null,seq5162);
var seq5162__$1 = cljs.core.next.call(null,seq5162);
var G__5164 = cljs.core.first.call(null,seq5162__$1);
var seq5162__$2 = cljs.core.next.call(null,seq5162__$1);
var G__5165 = cljs.core.first.call(null,seq5162__$2);
var seq5162__$3 = cljs.core.next.call(null,seq5162__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5163,G__5164,G__5165,seq5162__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5178 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5178 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta5179){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta5179 = meta5179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5180,meta5179__$1){
var self__ = this;
var _5180__$1 = this;
return (new cljs.core.async.t_cljs$core$async5178(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta5179__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5178.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5180){
var self__ = this;
var _5180__$1 = this;
return self__.meta5179;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5178.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5178.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5178.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5178.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5178.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5178.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5178.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5178.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5178.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta5179","meta5179",-153845121,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5178";

cljs.core.async.t_cljs$core$async5178.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async5178");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5178.
 */
cljs.core.async.__GT_t_cljs$core$async5178 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async5178(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta5179){
return (new cljs.core.async.t_cljs$core$async5178(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta5179));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async5178(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__4283__auto___5342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto___5342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto___5342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_5282){
var state_val_5283 = (state_5282[(1)]);
if((state_val_5283 === (7))){
var inst_5197 = (state_5282[(2)]);
var state_5282__$1 = state_5282;
var statearr_5284_5343 = state_5282__$1;
(statearr_5284_5343[(2)] = inst_5197);

(statearr_5284_5343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (20))){
var inst_5209 = (state_5282[(7)]);
var state_5282__$1 = state_5282;
var statearr_5285_5344 = state_5282__$1;
(statearr_5285_5344[(2)] = inst_5209);

(statearr_5285_5344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (27))){
var state_5282__$1 = state_5282;
var statearr_5286_5345 = state_5282__$1;
(statearr_5286_5345[(2)] = null);

(statearr_5286_5345[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (1))){
var inst_5184 = (state_5282[(8)]);
var inst_5184__$1 = calc_state.call(null);
var inst_5186 = (inst_5184__$1 == null);
var inst_5187 = cljs.core.not.call(null,inst_5186);
var state_5282__$1 = (function (){var statearr_5287 = state_5282;
(statearr_5287[(8)] = inst_5184__$1);

return statearr_5287;
})();
if(inst_5187){
var statearr_5288_5346 = state_5282__$1;
(statearr_5288_5346[(1)] = (2));

} else {
var statearr_5289_5347 = state_5282__$1;
(statearr_5289_5347[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (24))){
var inst_5233 = (state_5282[(9)]);
var inst_5256 = (state_5282[(10)]);
var inst_5242 = (state_5282[(11)]);
var inst_5256__$1 = inst_5233.call(null,inst_5242);
var state_5282__$1 = (function (){var statearr_5290 = state_5282;
(statearr_5290[(10)] = inst_5256__$1);

return statearr_5290;
})();
if(cljs.core.truth_(inst_5256__$1)){
var statearr_5291_5348 = state_5282__$1;
(statearr_5291_5348[(1)] = (29));

} else {
var statearr_5292_5349 = state_5282__$1;
(statearr_5292_5349[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (4))){
var inst_5200 = (state_5282[(2)]);
var state_5282__$1 = state_5282;
if(cljs.core.truth_(inst_5200)){
var statearr_5293_5350 = state_5282__$1;
(statearr_5293_5350[(1)] = (8));

} else {
var statearr_5294_5351 = state_5282__$1;
(statearr_5294_5351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (15))){
var inst_5227 = (state_5282[(2)]);
var state_5282__$1 = state_5282;
if(cljs.core.truth_(inst_5227)){
var statearr_5295_5352 = state_5282__$1;
(statearr_5295_5352[(1)] = (19));

} else {
var statearr_5296_5353 = state_5282__$1;
(statearr_5296_5353[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (21))){
var inst_5232 = (state_5282[(12)]);
var inst_5232__$1 = (state_5282[(2)]);
var inst_5233 = cljs.core.get.call(null,inst_5232__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5234 = cljs.core.get.call(null,inst_5232__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5235 = cljs.core.get.call(null,inst_5232__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_5282__$1 = (function (){var statearr_5297 = state_5282;
(statearr_5297[(9)] = inst_5233);

(statearr_5297[(13)] = inst_5234);

(statearr_5297[(12)] = inst_5232__$1);

return statearr_5297;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_5282__$1,(22),inst_5235);
} else {
if((state_val_5283 === (31))){
var inst_5264 = (state_5282[(2)]);
var state_5282__$1 = state_5282;
if(cljs.core.truth_(inst_5264)){
var statearr_5298_5354 = state_5282__$1;
(statearr_5298_5354[(1)] = (32));

} else {
var statearr_5299_5355 = state_5282__$1;
(statearr_5299_5355[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (32))){
var inst_5241 = (state_5282[(14)]);
var state_5282__$1 = state_5282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5282__$1,(35),out,inst_5241);
} else {
if((state_val_5283 === (33))){
var inst_5232 = (state_5282[(12)]);
var inst_5209 = inst_5232;
var state_5282__$1 = (function (){var statearr_5300 = state_5282;
(statearr_5300[(7)] = inst_5209);

return statearr_5300;
})();
var statearr_5301_5356 = state_5282__$1;
(statearr_5301_5356[(2)] = null);

(statearr_5301_5356[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (13))){
var inst_5209 = (state_5282[(7)]);
var inst_5216 = inst_5209.cljs$lang$protocol_mask$partition0$;
var inst_5217 = (inst_5216 & (64));
var inst_5218 = inst_5209.cljs$core$ISeq$;
var inst_5219 = (cljs.core.PROTOCOL_SENTINEL === inst_5218);
var inst_5220 = ((inst_5217) || (inst_5219));
var state_5282__$1 = state_5282;
if(cljs.core.truth_(inst_5220)){
var statearr_5302_5357 = state_5282__$1;
(statearr_5302_5357[(1)] = (16));

} else {
var statearr_5303_5358 = state_5282__$1;
(statearr_5303_5358[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (22))){
var inst_5242 = (state_5282[(11)]);
var inst_5241 = (state_5282[(14)]);
var inst_5240 = (state_5282[(2)]);
var inst_5241__$1 = cljs.core.nth.call(null,inst_5240,(0),null);
var inst_5242__$1 = cljs.core.nth.call(null,inst_5240,(1),null);
var inst_5243 = (inst_5241__$1 == null);
var inst_5244 = cljs.core._EQ_.call(null,inst_5242__$1,change);
var inst_5245 = ((inst_5243) || (inst_5244));
var state_5282__$1 = (function (){var statearr_5304 = state_5282;
(statearr_5304[(11)] = inst_5242__$1);

(statearr_5304[(14)] = inst_5241__$1);

return statearr_5304;
})();
if(cljs.core.truth_(inst_5245)){
var statearr_5305_5359 = state_5282__$1;
(statearr_5305_5359[(1)] = (23));

} else {
var statearr_5306_5360 = state_5282__$1;
(statearr_5306_5360[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (36))){
var inst_5232 = (state_5282[(12)]);
var inst_5209 = inst_5232;
var state_5282__$1 = (function (){var statearr_5307 = state_5282;
(statearr_5307[(7)] = inst_5209);

return statearr_5307;
})();
var statearr_5308_5361 = state_5282__$1;
(statearr_5308_5361[(2)] = null);

(statearr_5308_5361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (29))){
var inst_5256 = (state_5282[(10)]);
var state_5282__$1 = state_5282;
var statearr_5309_5362 = state_5282__$1;
(statearr_5309_5362[(2)] = inst_5256);

(statearr_5309_5362[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (6))){
var state_5282__$1 = state_5282;
var statearr_5310_5363 = state_5282__$1;
(statearr_5310_5363[(2)] = false);

(statearr_5310_5363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (28))){
var inst_5252 = (state_5282[(2)]);
var inst_5253 = calc_state.call(null);
var inst_5209 = inst_5253;
var state_5282__$1 = (function (){var statearr_5311 = state_5282;
(statearr_5311[(15)] = inst_5252);

(statearr_5311[(7)] = inst_5209);

return statearr_5311;
})();
var statearr_5312_5364 = state_5282__$1;
(statearr_5312_5364[(2)] = null);

(statearr_5312_5364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (25))){
var inst_5278 = (state_5282[(2)]);
var state_5282__$1 = state_5282;
var statearr_5313_5365 = state_5282__$1;
(statearr_5313_5365[(2)] = inst_5278);

(statearr_5313_5365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (34))){
var inst_5276 = (state_5282[(2)]);
var state_5282__$1 = state_5282;
var statearr_5314_5366 = state_5282__$1;
(statearr_5314_5366[(2)] = inst_5276);

(statearr_5314_5366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (17))){
var state_5282__$1 = state_5282;
var statearr_5315_5367 = state_5282__$1;
(statearr_5315_5367[(2)] = false);

(statearr_5315_5367[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (3))){
var state_5282__$1 = state_5282;
var statearr_5316_5368 = state_5282__$1;
(statearr_5316_5368[(2)] = false);

(statearr_5316_5368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (12))){
var inst_5280 = (state_5282[(2)]);
var state_5282__$1 = state_5282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5282__$1,inst_5280);
} else {
if((state_val_5283 === (2))){
var inst_5184 = (state_5282[(8)]);
var inst_5189 = inst_5184.cljs$lang$protocol_mask$partition0$;
var inst_5190 = (inst_5189 & (64));
var inst_5191 = inst_5184.cljs$core$ISeq$;
var inst_5192 = (cljs.core.PROTOCOL_SENTINEL === inst_5191);
var inst_5193 = ((inst_5190) || (inst_5192));
var state_5282__$1 = state_5282;
if(cljs.core.truth_(inst_5193)){
var statearr_5317_5369 = state_5282__$1;
(statearr_5317_5369[(1)] = (5));

} else {
var statearr_5318_5370 = state_5282__$1;
(statearr_5318_5370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (23))){
var inst_5241 = (state_5282[(14)]);
var inst_5247 = (inst_5241 == null);
var state_5282__$1 = state_5282;
if(cljs.core.truth_(inst_5247)){
var statearr_5319_5371 = state_5282__$1;
(statearr_5319_5371[(1)] = (26));

} else {
var statearr_5320_5372 = state_5282__$1;
(statearr_5320_5372[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (35))){
var inst_5267 = (state_5282[(2)]);
var state_5282__$1 = state_5282;
if(cljs.core.truth_(inst_5267)){
var statearr_5321_5373 = state_5282__$1;
(statearr_5321_5373[(1)] = (36));

} else {
var statearr_5322_5374 = state_5282__$1;
(statearr_5322_5374[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (19))){
var inst_5209 = (state_5282[(7)]);
var inst_5229 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5209);
var state_5282__$1 = state_5282;
var statearr_5323_5375 = state_5282__$1;
(statearr_5323_5375[(2)] = inst_5229);

(statearr_5323_5375[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (11))){
var inst_5209 = (state_5282[(7)]);
var inst_5213 = (inst_5209 == null);
var inst_5214 = cljs.core.not.call(null,inst_5213);
var state_5282__$1 = state_5282;
if(inst_5214){
var statearr_5324_5376 = state_5282__$1;
(statearr_5324_5376[(1)] = (13));

} else {
var statearr_5325_5377 = state_5282__$1;
(statearr_5325_5377[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (9))){
var inst_5184 = (state_5282[(8)]);
var state_5282__$1 = state_5282;
var statearr_5326_5378 = state_5282__$1;
(statearr_5326_5378[(2)] = inst_5184);

(statearr_5326_5378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (5))){
var state_5282__$1 = state_5282;
var statearr_5327_5379 = state_5282__$1;
(statearr_5327_5379[(2)] = true);

(statearr_5327_5379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (14))){
var state_5282__$1 = state_5282;
var statearr_5328_5380 = state_5282__$1;
(statearr_5328_5380[(2)] = false);

(statearr_5328_5380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (26))){
var inst_5242 = (state_5282[(11)]);
var inst_5249 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_5242);
var state_5282__$1 = state_5282;
var statearr_5329_5381 = state_5282__$1;
(statearr_5329_5381[(2)] = inst_5249);

(statearr_5329_5381[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (16))){
var state_5282__$1 = state_5282;
var statearr_5330_5382 = state_5282__$1;
(statearr_5330_5382[(2)] = true);

(statearr_5330_5382[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (38))){
var inst_5272 = (state_5282[(2)]);
var state_5282__$1 = state_5282;
var statearr_5331_5383 = state_5282__$1;
(statearr_5331_5383[(2)] = inst_5272);

(statearr_5331_5383[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (30))){
var inst_5233 = (state_5282[(9)]);
var inst_5234 = (state_5282[(13)]);
var inst_5242 = (state_5282[(11)]);
var inst_5259 = cljs.core.empty_QMARK_.call(null,inst_5233);
var inst_5260 = inst_5234.call(null,inst_5242);
var inst_5261 = cljs.core.not.call(null,inst_5260);
var inst_5262 = ((inst_5259) && (inst_5261));
var state_5282__$1 = state_5282;
var statearr_5332_5384 = state_5282__$1;
(statearr_5332_5384[(2)] = inst_5262);

(statearr_5332_5384[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (10))){
var inst_5184 = (state_5282[(8)]);
var inst_5205 = (state_5282[(2)]);
var inst_5206 = cljs.core.get.call(null,inst_5205,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5207 = cljs.core.get.call(null,inst_5205,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5208 = cljs.core.get.call(null,inst_5205,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_5209 = inst_5184;
var state_5282__$1 = (function (){var statearr_5333 = state_5282;
(statearr_5333[(16)] = inst_5206);

(statearr_5333[(7)] = inst_5209);

(statearr_5333[(17)] = inst_5208);

(statearr_5333[(18)] = inst_5207);

return statearr_5333;
})();
var statearr_5334_5385 = state_5282__$1;
(statearr_5334_5385[(2)] = null);

(statearr_5334_5385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (18))){
var inst_5224 = (state_5282[(2)]);
var state_5282__$1 = state_5282;
var statearr_5335_5386 = state_5282__$1;
(statearr_5335_5386[(2)] = inst_5224);

(statearr_5335_5386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (37))){
var state_5282__$1 = state_5282;
var statearr_5336_5387 = state_5282__$1;
(statearr_5336_5387[(2)] = null);

(statearr_5336_5387[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5283 === (8))){
var inst_5184 = (state_5282[(8)]);
var inst_5202 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5184);
var state_5282__$1 = state_5282;
var statearr_5337_5388 = state_5282__$1;
(statearr_5337_5388[(2)] = inst_5202);

(statearr_5337_5388[(1)] = (10));


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
});})(c__4283__auto___5342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__4188__auto__,c__4283__auto___5342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__4189__auto__ = null;
var cljs$core$async$mix_$_state_machine__4189__auto____0 = (function (){
var statearr_5338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5338[(0)] = cljs$core$async$mix_$_state_machine__4189__auto__);

(statearr_5338[(1)] = (1));

return statearr_5338;
});
var cljs$core$async$mix_$_state_machine__4189__auto____1 = (function (state_5282){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_5282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e5339){if((e5339 instanceof Object)){
var ex__4192__auto__ = e5339;
var statearr_5340_5389 = state_5282;
(statearr_5340_5389[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5390 = state_5282;
state_5282 = G__5390;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__4189__auto__ = function(state_5282){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__4189__auto____1.call(this,state_5282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__4189__auto____0;
cljs$core$async$mix_$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__4189__auto____1;
return cljs$core$async$mix_$_state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto___5342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__4285__auto__ = (function (){var statearr_5341 = f__4284__auto__.call(null);
(statearr_5341[(6)] = c__4283__auto___5342);

return statearr_5341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto___5342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__5392 = arguments.length;
switch (G__5392) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
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
var G__5396 = arguments.length;
switch (G__5396) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__5394_SHARP_){
if(cljs.core.truth_(p1__5394_SHARP_.call(null,topic))){
return p1__5394_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__5394_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5397 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5397 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta5398){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta5398 = meta5398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_5399,meta5398__$1){
var self__ = this;
var _5399__$1 = this;
return (new cljs.core.async.t_cljs$core$async5397(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta5398__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5397.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_5399){
var self__ = this;
var _5399__$1 = this;
return self__.meta5398;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5397.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5397.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5397.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5397.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5397.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5397.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5397.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5397.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta5398","meta5398",989209941,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5397.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5397.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5397";

cljs.core.async.t_cljs$core$async5397.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async5397");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5397.
 */
cljs.core.async.__GT_t_cljs$core$async5397 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async5397(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5398){
return (new cljs.core.async.t_cljs$core$async5397(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5398));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async5397(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__4283__auto___5517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto___5517,mults,ensure_mult,p){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto___5517,mults,ensure_mult,p){
return (function (state_5471){
var state_val_5472 = (state_5471[(1)]);
if((state_val_5472 === (7))){
var inst_5467 = (state_5471[(2)]);
var state_5471__$1 = state_5471;
var statearr_5473_5518 = state_5471__$1;
(statearr_5473_5518[(2)] = inst_5467);

(statearr_5473_5518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (20))){
var state_5471__$1 = state_5471;
var statearr_5474_5519 = state_5471__$1;
(statearr_5474_5519[(2)] = null);

(statearr_5474_5519[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (1))){
var state_5471__$1 = state_5471;
var statearr_5475_5520 = state_5471__$1;
(statearr_5475_5520[(2)] = null);

(statearr_5475_5520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (24))){
var inst_5450 = (state_5471[(7)]);
var inst_5459 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_5450);
var state_5471__$1 = state_5471;
var statearr_5476_5521 = state_5471__$1;
(statearr_5476_5521[(2)] = inst_5459);

(statearr_5476_5521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (4))){
var inst_5402 = (state_5471[(8)]);
var inst_5402__$1 = (state_5471[(2)]);
var inst_5403 = (inst_5402__$1 == null);
var state_5471__$1 = (function (){var statearr_5477 = state_5471;
(statearr_5477[(8)] = inst_5402__$1);

return statearr_5477;
})();
if(cljs.core.truth_(inst_5403)){
var statearr_5478_5522 = state_5471__$1;
(statearr_5478_5522[(1)] = (5));

} else {
var statearr_5479_5523 = state_5471__$1;
(statearr_5479_5523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (15))){
var inst_5444 = (state_5471[(2)]);
var state_5471__$1 = state_5471;
var statearr_5480_5524 = state_5471__$1;
(statearr_5480_5524[(2)] = inst_5444);

(statearr_5480_5524[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (21))){
var inst_5464 = (state_5471[(2)]);
var state_5471__$1 = (function (){var statearr_5481 = state_5471;
(statearr_5481[(9)] = inst_5464);

return statearr_5481;
})();
var statearr_5482_5525 = state_5471__$1;
(statearr_5482_5525[(2)] = null);

(statearr_5482_5525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (13))){
var inst_5426 = (state_5471[(10)]);
var inst_5428 = cljs.core.chunked_seq_QMARK_.call(null,inst_5426);
var state_5471__$1 = state_5471;
if(inst_5428){
var statearr_5483_5526 = state_5471__$1;
(statearr_5483_5526[(1)] = (16));

} else {
var statearr_5484_5527 = state_5471__$1;
(statearr_5484_5527[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (22))){
var inst_5456 = (state_5471[(2)]);
var state_5471__$1 = state_5471;
if(cljs.core.truth_(inst_5456)){
var statearr_5485_5528 = state_5471__$1;
(statearr_5485_5528[(1)] = (23));

} else {
var statearr_5486_5529 = state_5471__$1;
(statearr_5486_5529[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (6))){
var inst_5450 = (state_5471[(7)]);
var inst_5452 = (state_5471[(11)]);
var inst_5402 = (state_5471[(8)]);
var inst_5450__$1 = topic_fn.call(null,inst_5402);
var inst_5451 = cljs.core.deref.call(null,mults);
var inst_5452__$1 = cljs.core.get.call(null,inst_5451,inst_5450__$1);
var state_5471__$1 = (function (){var statearr_5487 = state_5471;
(statearr_5487[(7)] = inst_5450__$1);

(statearr_5487[(11)] = inst_5452__$1);

return statearr_5487;
})();
if(cljs.core.truth_(inst_5452__$1)){
var statearr_5488_5530 = state_5471__$1;
(statearr_5488_5530[(1)] = (19));

} else {
var statearr_5489_5531 = state_5471__$1;
(statearr_5489_5531[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (25))){
var inst_5461 = (state_5471[(2)]);
var state_5471__$1 = state_5471;
var statearr_5490_5532 = state_5471__$1;
(statearr_5490_5532[(2)] = inst_5461);

(statearr_5490_5532[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (17))){
var inst_5426 = (state_5471[(10)]);
var inst_5435 = cljs.core.first.call(null,inst_5426);
var inst_5436 = cljs.core.async.muxch_STAR_.call(null,inst_5435);
var inst_5437 = cljs.core.async.close_BANG_.call(null,inst_5436);
var inst_5438 = cljs.core.next.call(null,inst_5426);
var inst_5412 = inst_5438;
var inst_5413 = null;
var inst_5414 = (0);
var inst_5415 = (0);
var state_5471__$1 = (function (){var statearr_5491 = state_5471;
(statearr_5491[(12)] = inst_5413);

(statearr_5491[(13)] = inst_5415);

(statearr_5491[(14)] = inst_5412);

(statearr_5491[(15)] = inst_5414);

(statearr_5491[(16)] = inst_5437);

return statearr_5491;
})();
var statearr_5492_5533 = state_5471__$1;
(statearr_5492_5533[(2)] = null);

(statearr_5492_5533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (3))){
var inst_5469 = (state_5471[(2)]);
var state_5471__$1 = state_5471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5471__$1,inst_5469);
} else {
if((state_val_5472 === (12))){
var inst_5446 = (state_5471[(2)]);
var state_5471__$1 = state_5471;
var statearr_5493_5534 = state_5471__$1;
(statearr_5493_5534[(2)] = inst_5446);

(statearr_5493_5534[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (2))){
var state_5471__$1 = state_5471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5471__$1,(4),ch);
} else {
if((state_val_5472 === (23))){
var state_5471__$1 = state_5471;
var statearr_5494_5535 = state_5471__$1;
(statearr_5494_5535[(2)] = null);

(statearr_5494_5535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (19))){
var inst_5452 = (state_5471[(11)]);
var inst_5402 = (state_5471[(8)]);
var inst_5454 = cljs.core.async.muxch_STAR_.call(null,inst_5452);
var state_5471__$1 = state_5471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5471__$1,(22),inst_5454,inst_5402);
} else {
if((state_val_5472 === (11))){
var inst_5426 = (state_5471[(10)]);
var inst_5412 = (state_5471[(14)]);
var inst_5426__$1 = cljs.core.seq.call(null,inst_5412);
var state_5471__$1 = (function (){var statearr_5495 = state_5471;
(statearr_5495[(10)] = inst_5426__$1);

return statearr_5495;
})();
if(inst_5426__$1){
var statearr_5496_5536 = state_5471__$1;
(statearr_5496_5536[(1)] = (13));

} else {
var statearr_5497_5537 = state_5471__$1;
(statearr_5497_5537[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (9))){
var inst_5448 = (state_5471[(2)]);
var state_5471__$1 = state_5471;
var statearr_5498_5538 = state_5471__$1;
(statearr_5498_5538[(2)] = inst_5448);

(statearr_5498_5538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (5))){
var inst_5409 = cljs.core.deref.call(null,mults);
var inst_5410 = cljs.core.vals.call(null,inst_5409);
var inst_5411 = cljs.core.seq.call(null,inst_5410);
var inst_5412 = inst_5411;
var inst_5413 = null;
var inst_5414 = (0);
var inst_5415 = (0);
var state_5471__$1 = (function (){var statearr_5499 = state_5471;
(statearr_5499[(12)] = inst_5413);

(statearr_5499[(13)] = inst_5415);

(statearr_5499[(14)] = inst_5412);

(statearr_5499[(15)] = inst_5414);

return statearr_5499;
})();
var statearr_5500_5539 = state_5471__$1;
(statearr_5500_5539[(2)] = null);

(statearr_5500_5539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (14))){
var state_5471__$1 = state_5471;
var statearr_5504_5540 = state_5471__$1;
(statearr_5504_5540[(2)] = null);

(statearr_5504_5540[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (16))){
var inst_5426 = (state_5471[(10)]);
var inst_5430 = cljs.core.chunk_first.call(null,inst_5426);
var inst_5431 = cljs.core.chunk_rest.call(null,inst_5426);
var inst_5432 = cljs.core.count.call(null,inst_5430);
var inst_5412 = inst_5431;
var inst_5413 = inst_5430;
var inst_5414 = inst_5432;
var inst_5415 = (0);
var state_5471__$1 = (function (){var statearr_5505 = state_5471;
(statearr_5505[(12)] = inst_5413);

(statearr_5505[(13)] = inst_5415);

(statearr_5505[(14)] = inst_5412);

(statearr_5505[(15)] = inst_5414);

return statearr_5505;
})();
var statearr_5506_5541 = state_5471__$1;
(statearr_5506_5541[(2)] = null);

(statearr_5506_5541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (10))){
var inst_5413 = (state_5471[(12)]);
var inst_5415 = (state_5471[(13)]);
var inst_5412 = (state_5471[(14)]);
var inst_5414 = (state_5471[(15)]);
var inst_5420 = cljs.core._nth.call(null,inst_5413,inst_5415);
var inst_5421 = cljs.core.async.muxch_STAR_.call(null,inst_5420);
var inst_5422 = cljs.core.async.close_BANG_.call(null,inst_5421);
var inst_5423 = (inst_5415 + (1));
var tmp5501 = inst_5413;
var tmp5502 = inst_5412;
var tmp5503 = inst_5414;
var inst_5412__$1 = tmp5502;
var inst_5413__$1 = tmp5501;
var inst_5414__$1 = tmp5503;
var inst_5415__$1 = inst_5423;
var state_5471__$1 = (function (){var statearr_5507 = state_5471;
(statearr_5507[(12)] = inst_5413__$1);

(statearr_5507[(13)] = inst_5415__$1);

(statearr_5507[(14)] = inst_5412__$1);

(statearr_5507[(15)] = inst_5414__$1);

(statearr_5507[(17)] = inst_5422);

return statearr_5507;
})();
var statearr_5508_5542 = state_5471__$1;
(statearr_5508_5542[(2)] = null);

(statearr_5508_5542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (18))){
var inst_5441 = (state_5471[(2)]);
var state_5471__$1 = state_5471;
var statearr_5509_5543 = state_5471__$1;
(statearr_5509_5543[(2)] = inst_5441);

(statearr_5509_5543[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5472 === (8))){
var inst_5415 = (state_5471[(13)]);
var inst_5414 = (state_5471[(15)]);
var inst_5417 = (inst_5415 < inst_5414);
var inst_5418 = inst_5417;
var state_5471__$1 = state_5471;
if(cljs.core.truth_(inst_5418)){
var statearr_5510_5544 = state_5471__$1;
(statearr_5510_5544[(1)] = (10));

} else {
var statearr_5511_5545 = state_5471__$1;
(statearr_5511_5545[(1)] = (11));

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
});})(c__4283__auto___5517,mults,ensure_mult,p))
;
return ((function (switch__4188__auto__,c__4283__auto___5517,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__4189__auto__ = null;
var cljs$core$async$state_machine__4189__auto____0 = (function (){
var statearr_5512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5512[(0)] = cljs$core$async$state_machine__4189__auto__);

(statearr_5512[(1)] = (1));

return statearr_5512;
});
var cljs$core$async$state_machine__4189__auto____1 = (function (state_5471){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_5471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e5513){if((e5513 instanceof Object)){
var ex__4192__auto__ = e5513;
var statearr_5514_5546 = state_5471;
(statearr_5514_5546[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5547 = state_5471;
state_5471 = G__5547;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$state_machine__4189__auto__ = function(state_5471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4189__auto____1.call(this,state_5471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4189__auto____0;
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4189__auto____1;
return cljs$core$async$state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto___5517,mults,ensure_mult,p))
})();
var state__4285__auto__ = (function (){var statearr_5515 = f__4284__auto__.call(null);
(statearr_5515[(6)] = c__4283__auto___5517);

return statearr_5515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto___5517,mults,ensure_mult,p))
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
var G__5549 = arguments.length;
switch (G__5549) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__5552 = arguments.length;
switch (G__5552) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__5555 = arguments.length;
switch (G__5555) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__4283__auto___5622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto___5622,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto___5622,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_5594){
var state_val_5595 = (state_5594[(1)]);
if((state_val_5595 === (7))){
var state_5594__$1 = state_5594;
var statearr_5596_5623 = state_5594__$1;
(statearr_5596_5623[(2)] = null);

(statearr_5596_5623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (1))){
var state_5594__$1 = state_5594;
var statearr_5597_5624 = state_5594__$1;
(statearr_5597_5624[(2)] = null);

(statearr_5597_5624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (4))){
var inst_5558 = (state_5594[(7)]);
var inst_5560 = (inst_5558 < cnt);
var state_5594__$1 = state_5594;
if(cljs.core.truth_(inst_5560)){
var statearr_5598_5625 = state_5594__$1;
(statearr_5598_5625[(1)] = (6));

} else {
var statearr_5599_5626 = state_5594__$1;
(statearr_5599_5626[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (15))){
var inst_5590 = (state_5594[(2)]);
var state_5594__$1 = state_5594;
var statearr_5600_5627 = state_5594__$1;
(statearr_5600_5627[(2)] = inst_5590);

(statearr_5600_5627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (13))){
var inst_5583 = cljs.core.async.close_BANG_.call(null,out);
var state_5594__$1 = state_5594;
var statearr_5601_5628 = state_5594__$1;
(statearr_5601_5628[(2)] = inst_5583);

(statearr_5601_5628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (6))){
var state_5594__$1 = state_5594;
var statearr_5602_5629 = state_5594__$1;
(statearr_5602_5629[(2)] = null);

(statearr_5602_5629[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (3))){
var inst_5592 = (state_5594[(2)]);
var state_5594__$1 = state_5594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5594__$1,inst_5592);
} else {
if((state_val_5595 === (12))){
var inst_5580 = (state_5594[(8)]);
var inst_5580__$1 = (state_5594[(2)]);
var inst_5581 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_5580__$1);
var state_5594__$1 = (function (){var statearr_5603 = state_5594;
(statearr_5603[(8)] = inst_5580__$1);

return statearr_5603;
})();
if(cljs.core.truth_(inst_5581)){
var statearr_5604_5630 = state_5594__$1;
(statearr_5604_5630[(1)] = (13));

} else {
var statearr_5605_5631 = state_5594__$1;
(statearr_5605_5631[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (2))){
var inst_5557 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_5558 = (0);
var state_5594__$1 = (function (){var statearr_5606 = state_5594;
(statearr_5606[(9)] = inst_5557);

(statearr_5606[(7)] = inst_5558);

return statearr_5606;
})();
var statearr_5607_5632 = state_5594__$1;
(statearr_5607_5632[(2)] = null);

(statearr_5607_5632[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (11))){
var inst_5558 = (state_5594[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_5594,(10),Object,null,(9));
var inst_5567 = chs__$1.call(null,inst_5558);
var inst_5568 = done.call(null,inst_5558);
var inst_5569 = cljs.core.async.take_BANG_.call(null,inst_5567,inst_5568);
var state_5594__$1 = state_5594;
var statearr_5608_5633 = state_5594__$1;
(statearr_5608_5633[(2)] = inst_5569);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (9))){
var inst_5558 = (state_5594[(7)]);
var inst_5571 = (state_5594[(2)]);
var inst_5572 = (inst_5558 + (1));
var inst_5558__$1 = inst_5572;
var state_5594__$1 = (function (){var statearr_5609 = state_5594;
(statearr_5609[(10)] = inst_5571);

(statearr_5609[(7)] = inst_5558__$1);

return statearr_5609;
})();
var statearr_5610_5634 = state_5594__$1;
(statearr_5610_5634[(2)] = null);

(statearr_5610_5634[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (5))){
var inst_5578 = (state_5594[(2)]);
var state_5594__$1 = (function (){var statearr_5611 = state_5594;
(statearr_5611[(11)] = inst_5578);

return statearr_5611;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5594__$1,(12),dchan);
} else {
if((state_val_5595 === (14))){
var inst_5580 = (state_5594[(8)]);
var inst_5585 = cljs.core.apply.call(null,f,inst_5580);
var state_5594__$1 = state_5594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5594__$1,(16),out,inst_5585);
} else {
if((state_val_5595 === (16))){
var inst_5587 = (state_5594[(2)]);
var state_5594__$1 = (function (){var statearr_5612 = state_5594;
(statearr_5612[(12)] = inst_5587);

return statearr_5612;
})();
var statearr_5613_5635 = state_5594__$1;
(statearr_5613_5635[(2)] = null);

(statearr_5613_5635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (10))){
var inst_5562 = (state_5594[(2)]);
var inst_5563 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_5594__$1 = (function (){var statearr_5614 = state_5594;
(statearr_5614[(13)] = inst_5562);

return statearr_5614;
})();
var statearr_5615_5636 = state_5594__$1;
(statearr_5615_5636[(2)] = inst_5563);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5595 === (8))){
var inst_5576 = (state_5594[(2)]);
var state_5594__$1 = state_5594;
var statearr_5616_5637 = state_5594__$1;
(statearr_5616_5637[(2)] = inst_5576);

(statearr_5616_5637[(1)] = (5));


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
});})(c__4283__auto___5622,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__4188__auto__,c__4283__auto___5622,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__4189__auto__ = null;
var cljs$core$async$state_machine__4189__auto____0 = (function (){
var statearr_5617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5617[(0)] = cljs$core$async$state_machine__4189__auto__);

(statearr_5617[(1)] = (1));

return statearr_5617;
});
var cljs$core$async$state_machine__4189__auto____1 = (function (state_5594){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_5594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e5618){if((e5618 instanceof Object)){
var ex__4192__auto__ = e5618;
var statearr_5619_5638 = state_5594;
(statearr_5619_5638[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5639 = state_5594;
state_5594 = G__5639;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$state_machine__4189__auto__ = function(state_5594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4189__auto____1.call(this,state_5594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4189__auto____0;
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4189__auto____1;
return cljs$core$async$state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto___5622,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__4285__auto__ = (function (){var statearr_5620 = f__4284__auto__.call(null);
(statearr_5620[(6)] = c__4283__auto___5622);

return statearr_5620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto___5622,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__5642 = arguments.length;
switch (G__5642) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4283__auto___5696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto___5696,out){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto___5696,out){
return (function (state_5674){
var state_val_5675 = (state_5674[(1)]);
if((state_val_5675 === (7))){
var inst_5653 = (state_5674[(7)]);
var inst_5654 = (state_5674[(8)]);
var inst_5653__$1 = (state_5674[(2)]);
var inst_5654__$1 = cljs.core.nth.call(null,inst_5653__$1,(0),null);
var inst_5655 = cljs.core.nth.call(null,inst_5653__$1,(1),null);
var inst_5656 = (inst_5654__$1 == null);
var state_5674__$1 = (function (){var statearr_5676 = state_5674;
(statearr_5676[(7)] = inst_5653__$1);

(statearr_5676[(9)] = inst_5655);

(statearr_5676[(8)] = inst_5654__$1);

return statearr_5676;
})();
if(cljs.core.truth_(inst_5656)){
var statearr_5677_5697 = state_5674__$1;
(statearr_5677_5697[(1)] = (8));

} else {
var statearr_5678_5698 = state_5674__$1;
(statearr_5678_5698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5675 === (1))){
var inst_5643 = cljs.core.vec.call(null,chs);
var inst_5644 = inst_5643;
var state_5674__$1 = (function (){var statearr_5679 = state_5674;
(statearr_5679[(10)] = inst_5644);

return statearr_5679;
})();
var statearr_5680_5699 = state_5674__$1;
(statearr_5680_5699[(2)] = null);

(statearr_5680_5699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5675 === (4))){
var inst_5644 = (state_5674[(10)]);
var state_5674__$1 = state_5674;
return cljs.core.async.ioc_alts_BANG_.call(null,state_5674__$1,(7),inst_5644);
} else {
if((state_val_5675 === (6))){
var inst_5670 = (state_5674[(2)]);
var state_5674__$1 = state_5674;
var statearr_5681_5700 = state_5674__$1;
(statearr_5681_5700[(2)] = inst_5670);

(statearr_5681_5700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5675 === (3))){
var inst_5672 = (state_5674[(2)]);
var state_5674__$1 = state_5674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5674__$1,inst_5672);
} else {
if((state_val_5675 === (2))){
var inst_5644 = (state_5674[(10)]);
var inst_5646 = cljs.core.count.call(null,inst_5644);
var inst_5647 = (inst_5646 > (0));
var state_5674__$1 = state_5674;
if(cljs.core.truth_(inst_5647)){
var statearr_5683_5701 = state_5674__$1;
(statearr_5683_5701[(1)] = (4));

} else {
var statearr_5684_5702 = state_5674__$1;
(statearr_5684_5702[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5675 === (11))){
var inst_5644 = (state_5674[(10)]);
var inst_5663 = (state_5674[(2)]);
var tmp5682 = inst_5644;
var inst_5644__$1 = tmp5682;
var state_5674__$1 = (function (){var statearr_5685 = state_5674;
(statearr_5685[(10)] = inst_5644__$1);

(statearr_5685[(11)] = inst_5663);

return statearr_5685;
})();
var statearr_5686_5703 = state_5674__$1;
(statearr_5686_5703[(2)] = null);

(statearr_5686_5703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5675 === (9))){
var inst_5654 = (state_5674[(8)]);
var state_5674__$1 = state_5674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5674__$1,(11),out,inst_5654);
} else {
if((state_val_5675 === (5))){
var inst_5668 = cljs.core.async.close_BANG_.call(null,out);
var state_5674__$1 = state_5674;
var statearr_5687_5704 = state_5674__$1;
(statearr_5687_5704[(2)] = inst_5668);

(statearr_5687_5704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5675 === (10))){
var inst_5666 = (state_5674[(2)]);
var state_5674__$1 = state_5674;
var statearr_5688_5705 = state_5674__$1;
(statearr_5688_5705[(2)] = inst_5666);

(statearr_5688_5705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5675 === (8))){
var inst_5644 = (state_5674[(10)]);
var inst_5653 = (state_5674[(7)]);
var inst_5655 = (state_5674[(9)]);
var inst_5654 = (state_5674[(8)]);
var inst_5658 = (function (){var cs = inst_5644;
var vec__5649 = inst_5653;
var v = inst_5654;
var c = inst_5655;
return ((function (cs,vec__5649,v,c,inst_5644,inst_5653,inst_5655,inst_5654,state_val_5675,c__4283__auto___5696,out){
return (function (p1__5640_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__5640_SHARP_);
});
;})(cs,vec__5649,v,c,inst_5644,inst_5653,inst_5655,inst_5654,state_val_5675,c__4283__auto___5696,out))
})();
var inst_5659 = cljs.core.filterv.call(null,inst_5658,inst_5644);
var inst_5644__$1 = inst_5659;
var state_5674__$1 = (function (){var statearr_5689 = state_5674;
(statearr_5689[(10)] = inst_5644__$1);

return statearr_5689;
})();
var statearr_5690_5706 = state_5674__$1;
(statearr_5690_5706[(2)] = null);

(statearr_5690_5706[(1)] = (2));


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
});})(c__4283__auto___5696,out))
;
return ((function (switch__4188__auto__,c__4283__auto___5696,out){
return (function() {
var cljs$core$async$state_machine__4189__auto__ = null;
var cljs$core$async$state_machine__4189__auto____0 = (function (){
var statearr_5691 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5691[(0)] = cljs$core$async$state_machine__4189__auto__);

(statearr_5691[(1)] = (1));

return statearr_5691;
});
var cljs$core$async$state_machine__4189__auto____1 = (function (state_5674){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_5674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e5692){if((e5692 instanceof Object)){
var ex__4192__auto__ = e5692;
var statearr_5693_5707 = state_5674;
(statearr_5693_5707[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5708 = state_5674;
state_5674 = G__5708;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$state_machine__4189__auto__ = function(state_5674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4189__auto____1.call(this,state_5674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4189__auto____0;
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4189__auto____1;
return cljs$core$async$state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto___5696,out))
})();
var state__4285__auto__ = (function (){var statearr_5694 = f__4284__auto__.call(null);
(statearr_5694[(6)] = c__4283__auto___5696);

return statearr_5694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto___5696,out))
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
var G__5710 = arguments.length;
switch (G__5710) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4283__auto___5755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto___5755,out){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto___5755,out){
return (function (state_5734){
var state_val_5735 = (state_5734[(1)]);
if((state_val_5735 === (7))){
var inst_5716 = (state_5734[(7)]);
var inst_5716__$1 = (state_5734[(2)]);
var inst_5717 = (inst_5716__$1 == null);
var inst_5718 = cljs.core.not.call(null,inst_5717);
var state_5734__$1 = (function (){var statearr_5736 = state_5734;
(statearr_5736[(7)] = inst_5716__$1);

return statearr_5736;
})();
if(inst_5718){
var statearr_5737_5756 = state_5734__$1;
(statearr_5737_5756[(1)] = (8));

} else {
var statearr_5738_5757 = state_5734__$1;
(statearr_5738_5757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5735 === (1))){
var inst_5711 = (0);
var state_5734__$1 = (function (){var statearr_5739 = state_5734;
(statearr_5739[(8)] = inst_5711);

return statearr_5739;
})();
var statearr_5740_5758 = state_5734__$1;
(statearr_5740_5758[(2)] = null);

(statearr_5740_5758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5735 === (4))){
var state_5734__$1 = state_5734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5734__$1,(7),ch);
} else {
if((state_val_5735 === (6))){
var inst_5729 = (state_5734[(2)]);
var state_5734__$1 = state_5734;
var statearr_5741_5759 = state_5734__$1;
(statearr_5741_5759[(2)] = inst_5729);

(statearr_5741_5759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5735 === (3))){
var inst_5731 = (state_5734[(2)]);
var inst_5732 = cljs.core.async.close_BANG_.call(null,out);
var state_5734__$1 = (function (){var statearr_5742 = state_5734;
(statearr_5742[(9)] = inst_5731);

return statearr_5742;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5734__$1,inst_5732);
} else {
if((state_val_5735 === (2))){
var inst_5711 = (state_5734[(8)]);
var inst_5713 = (inst_5711 < n);
var state_5734__$1 = state_5734;
if(cljs.core.truth_(inst_5713)){
var statearr_5743_5760 = state_5734__$1;
(statearr_5743_5760[(1)] = (4));

} else {
var statearr_5744_5761 = state_5734__$1;
(statearr_5744_5761[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5735 === (11))){
var inst_5711 = (state_5734[(8)]);
var inst_5721 = (state_5734[(2)]);
var inst_5722 = (inst_5711 + (1));
var inst_5711__$1 = inst_5722;
var state_5734__$1 = (function (){var statearr_5745 = state_5734;
(statearr_5745[(8)] = inst_5711__$1);

(statearr_5745[(10)] = inst_5721);

return statearr_5745;
})();
var statearr_5746_5762 = state_5734__$1;
(statearr_5746_5762[(2)] = null);

(statearr_5746_5762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5735 === (9))){
var state_5734__$1 = state_5734;
var statearr_5747_5763 = state_5734__$1;
(statearr_5747_5763[(2)] = null);

(statearr_5747_5763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5735 === (5))){
var state_5734__$1 = state_5734;
var statearr_5748_5764 = state_5734__$1;
(statearr_5748_5764[(2)] = null);

(statearr_5748_5764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5735 === (10))){
var inst_5726 = (state_5734[(2)]);
var state_5734__$1 = state_5734;
var statearr_5749_5765 = state_5734__$1;
(statearr_5749_5765[(2)] = inst_5726);

(statearr_5749_5765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5735 === (8))){
var inst_5716 = (state_5734[(7)]);
var state_5734__$1 = state_5734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5734__$1,(11),out,inst_5716);
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
});})(c__4283__auto___5755,out))
;
return ((function (switch__4188__auto__,c__4283__auto___5755,out){
return (function() {
var cljs$core$async$state_machine__4189__auto__ = null;
var cljs$core$async$state_machine__4189__auto____0 = (function (){
var statearr_5750 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5750[(0)] = cljs$core$async$state_machine__4189__auto__);

(statearr_5750[(1)] = (1));

return statearr_5750;
});
var cljs$core$async$state_machine__4189__auto____1 = (function (state_5734){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_5734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e5751){if((e5751 instanceof Object)){
var ex__4192__auto__ = e5751;
var statearr_5752_5766 = state_5734;
(statearr_5752_5766[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5767 = state_5734;
state_5734 = G__5767;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$state_machine__4189__auto__ = function(state_5734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4189__auto____1.call(this,state_5734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4189__auto____0;
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4189__auto____1;
return cljs$core$async$state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto___5755,out))
})();
var state__4285__auto__ = (function (){var statearr_5753 = f__4284__auto__.call(null);
(statearr_5753[(6)] = c__4283__auto___5755);

return statearr_5753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto___5755,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5769 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5769 = (function (f,ch,meta5770){
this.f = f;
this.ch = ch;
this.meta5770 = meta5770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5771,meta5770__$1){
var self__ = this;
var _5771__$1 = this;
return (new cljs.core.async.t_cljs$core$async5769(self__.f,self__.ch,meta5770__$1));
});

cljs.core.async.t_cljs$core$async5769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5771){
var self__ = this;
var _5771__$1 = this;
return self__.meta5770;
});

cljs.core.async.t_cljs$core$async5769.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5769.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5769.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5769.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5769.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5772 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5772 = (function (f,ch,meta5770,_,fn1,meta5773){
this.f = f;
this.ch = ch;
this.meta5770 = meta5770;
this._ = _;
this.fn1 = fn1;
this.meta5773 = meta5773;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_5774,meta5773__$1){
var self__ = this;
var _5774__$1 = this;
return (new cljs.core.async.t_cljs$core$async5772(self__.f,self__.ch,self__.meta5770,self__._,self__.fn1,meta5773__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async5772.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_5774){
var self__ = this;
var _5774__$1 = this;
return self__.meta5773;
});})(___$1))
;

cljs.core.async.t_cljs$core$async5772.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5772.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5772.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async5772.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__5768_SHARP_){
return f1.call(null,(((p1__5768_SHARP_ == null))?null:self__.f.call(null,p1__5768_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async5772.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5770","meta5770",47536785,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async5769","cljs.core.async/t_cljs$core$async5769",1069290063,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta5773","meta5773",-572207276,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5772.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5772.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5772";

cljs.core.async.t_cljs$core$async5772.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async5772");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5772.
 */
cljs.core.async.__GT_t_cljs$core$async5772 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5772(f__$1,ch__$1,meta5770__$1,___$2,fn1__$1,meta5773){
return (new cljs.core.async.t_cljs$core$async5772(f__$1,ch__$1,meta5770__$1,___$2,fn1__$1,meta5773));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async5772(self__.f,self__.ch,self__.meta5770,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async5769.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5769.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async5769.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5770","meta5770",47536785,null)], null);
});

cljs.core.async.t_cljs$core$async5769.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5769.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5769";

cljs.core.async.t_cljs$core$async5769.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async5769");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5769.
 */
cljs.core.async.__GT_t_cljs$core$async5769 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5769(f__$1,ch__$1,meta5770){
return (new cljs.core.async.t_cljs$core$async5769(f__$1,ch__$1,meta5770));
});

}

return (new cljs.core.async.t_cljs$core$async5769(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5775 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5775 = (function (f,ch,meta5776){
this.f = f;
this.ch = ch;
this.meta5776 = meta5776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5777,meta5776__$1){
var self__ = this;
var _5777__$1 = this;
return (new cljs.core.async.t_cljs$core$async5775(self__.f,self__.ch,meta5776__$1));
});

cljs.core.async.t_cljs$core$async5775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5777){
var self__ = this;
var _5777__$1 = this;
return self__.meta5776;
});

cljs.core.async.t_cljs$core$async5775.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5775.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5775.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5775.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5775.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5775.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async5775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5776","meta5776",-654921693,null)], null);
});

cljs.core.async.t_cljs$core$async5775.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5775";

cljs.core.async.t_cljs$core$async5775.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async5775");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5775.
 */
cljs.core.async.__GT_t_cljs$core$async5775 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async5775(f__$1,ch__$1,meta5776){
return (new cljs.core.async.t_cljs$core$async5775(f__$1,ch__$1,meta5776));
});

}

return (new cljs.core.async.t_cljs$core$async5775(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5778 = (function (p,ch,meta5779){
this.p = p;
this.ch = ch;
this.meta5779 = meta5779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5780,meta5779__$1){
var self__ = this;
var _5780__$1 = this;
return (new cljs.core.async.t_cljs$core$async5778(self__.p,self__.ch,meta5779__$1));
});

cljs.core.async.t_cljs$core$async5778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5780){
var self__ = this;
var _5780__$1 = this;
return self__.meta5779;
});

cljs.core.async.t_cljs$core$async5778.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5778.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5778.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5778.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5778.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5778.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5778.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async5778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5779","meta5779",-2013236897,null)], null);
});

cljs.core.async.t_cljs$core$async5778.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5778";

cljs.core.async.t_cljs$core$async5778.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async5778");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5778.
 */
cljs.core.async.__GT_t_cljs$core$async5778 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async5778(p__$1,ch__$1,meta5779){
return (new cljs.core.async.t_cljs$core$async5778(p__$1,ch__$1,meta5779));
});

}

return (new cljs.core.async.t_cljs$core$async5778(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__5782 = arguments.length;
switch (G__5782) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4283__auto___5822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto___5822,out){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto___5822,out){
return (function (state_5803){
var state_val_5804 = (state_5803[(1)]);
if((state_val_5804 === (7))){
var inst_5799 = (state_5803[(2)]);
var state_5803__$1 = state_5803;
var statearr_5805_5823 = state_5803__$1;
(statearr_5805_5823[(2)] = inst_5799);

(statearr_5805_5823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5804 === (1))){
var state_5803__$1 = state_5803;
var statearr_5806_5824 = state_5803__$1;
(statearr_5806_5824[(2)] = null);

(statearr_5806_5824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5804 === (4))){
var inst_5785 = (state_5803[(7)]);
var inst_5785__$1 = (state_5803[(2)]);
var inst_5786 = (inst_5785__$1 == null);
var state_5803__$1 = (function (){var statearr_5807 = state_5803;
(statearr_5807[(7)] = inst_5785__$1);

return statearr_5807;
})();
if(cljs.core.truth_(inst_5786)){
var statearr_5808_5825 = state_5803__$1;
(statearr_5808_5825[(1)] = (5));

} else {
var statearr_5809_5826 = state_5803__$1;
(statearr_5809_5826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5804 === (6))){
var inst_5785 = (state_5803[(7)]);
var inst_5790 = p.call(null,inst_5785);
var state_5803__$1 = state_5803;
if(cljs.core.truth_(inst_5790)){
var statearr_5810_5827 = state_5803__$1;
(statearr_5810_5827[(1)] = (8));

} else {
var statearr_5811_5828 = state_5803__$1;
(statearr_5811_5828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5804 === (3))){
var inst_5801 = (state_5803[(2)]);
var state_5803__$1 = state_5803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5803__$1,inst_5801);
} else {
if((state_val_5804 === (2))){
var state_5803__$1 = state_5803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5803__$1,(4),ch);
} else {
if((state_val_5804 === (11))){
var inst_5793 = (state_5803[(2)]);
var state_5803__$1 = state_5803;
var statearr_5812_5829 = state_5803__$1;
(statearr_5812_5829[(2)] = inst_5793);

(statearr_5812_5829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5804 === (9))){
var state_5803__$1 = state_5803;
var statearr_5813_5830 = state_5803__$1;
(statearr_5813_5830[(2)] = null);

(statearr_5813_5830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5804 === (5))){
var inst_5788 = cljs.core.async.close_BANG_.call(null,out);
var state_5803__$1 = state_5803;
var statearr_5814_5831 = state_5803__$1;
(statearr_5814_5831[(2)] = inst_5788);

(statearr_5814_5831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5804 === (10))){
var inst_5796 = (state_5803[(2)]);
var state_5803__$1 = (function (){var statearr_5815 = state_5803;
(statearr_5815[(8)] = inst_5796);

return statearr_5815;
})();
var statearr_5816_5832 = state_5803__$1;
(statearr_5816_5832[(2)] = null);

(statearr_5816_5832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5804 === (8))){
var inst_5785 = (state_5803[(7)]);
var state_5803__$1 = state_5803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5803__$1,(11),out,inst_5785);
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
});})(c__4283__auto___5822,out))
;
return ((function (switch__4188__auto__,c__4283__auto___5822,out){
return (function() {
var cljs$core$async$state_machine__4189__auto__ = null;
var cljs$core$async$state_machine__4189__auto____0 = (function (){
var statearr_5817 = [null,null,null,null,null,null,null,null,null];
(statearr_5817[(0)] = cljs$core$async$state_machine__4189__auto__);

(statearr_5817[(1)] = (1));

return statearr_5817;
});
var cljs$core$async$state_machine__4189__auto____1 = (function (state_5803){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_5803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e5818){if((e5818 instanceof Object)){
var ex__4192__auto__ = e5818;
var statearr_5819_5833 = state_5803;
(statearr_5819_5833[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5834 = state_5803;
state_5803 = G__5834;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$state_machine__4189__auto__ = function(state_5803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4189__auto____1.call(this,state_5803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4189__auto____0;
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4189__auto____1;
return cljs$core$async$state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto___5822,out))
})();
var state__4285__auto__ = (function (){var statearr_5820 = f__4284__auto__.call(null);
(statearr_5820[(6)] = c__4283__auto___5822);

return statearr_5820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto___5822,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__5836 = arguments.length;
switch (G__5836) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__4283__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto__){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto__){
return (function (state_5899){
var state_val_5900 = (state_5899[(1)]);
if((state_val_5900 === (7))){
var inst_5895 = (state_5899[(2)]);
var state_5899__$1 = state_5899;
var statearr_5901_5939 = state_5899__$1;
(statearr_5901_5939[(2)] = inst_5895);

(statearr_5901_5939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5900 === (20))){
var inst_5865 = (state_5899[(7)]);
var inst_5876 = (state_5899[(2)]);
var inst_5877 = cljs.core.next.call(null,inst_5865);
var inst_5851 = inst_5877;
var inst_5852 = null;
var inst_5853 = (0);
var inst_5854 = (0);
var state_5899__$1 = (function (){var statearr_5902 = state_5899;
(statearr_5902[(8)] = inst_5854);

(statearr_5902[(9)] = inst_5853);

(statearr_5902[(10)] = inst_5876);

(statearr_5902[(11)] = inst_5852);

(statearr_5902[(12)] = inst_5851);

return statearr_5902;
})();
var statearr_5903_5940 = state_5899__$1;
(statearr_5903_5940[(2)] = null);

(statearr_5903_5940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5900 === (1))){
var state_5899__$1 = state_5899;
var statearr_5904_5941 = state_5899__$1;
(statearr_5904_5941[(2)] = null);

(statearr_5904_5941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5900 === (4))){
var inst_5840 = (state_5899[(13)]);
var inst_5840__$1 = (state_5899[(2)]);
var inst_5841 = (inst_5840__$1 == null);
var state_5899__$1 = (function (){var statearr_5905 = state_5899;
(statearr_5905[(13)] = inst_5840__$1);

return statearr_5905;
})();
if(cljs.core.truth_(inst_5841)){
var statearr_5906_5942 = state_5899__$1;
(statearr_5906_5942[(1)] = (5));

} else {
var statearr_5907_5943 = state_5899__$1;
(statearr_5907_5943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5900 === (15))){
var state_5899__$1 = state_5899;
var statearr_5911_5944 = state_5899__$1;
(statearr_5911_5944[(2)] = null);

(statearr_5911_5944[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5900 === (21))){
var state_5899__$1 = state_5899;
var statearr_5912_5945 = state_5899__$1;
(statearr_5912_5945[(2)] = null);

(statearr_5912_5945[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5900 === (13))){
var inst_5854 = (state_5899[(8)]);
var inst_5853 = (state_5899[(9)]);
var inst_5852 = (state_5899[(11)]);
var inst_5851 = (state_5899[(12)]);
var inst_5861 = (state_5899[(2)]);
var inst_5862 = (inst_5854 + (1));
var tmp5908 = inst_5853;
var tmp5909 = inst_5852;
var tmp5910 = inst_5851;
var inst_5851__$1 = tmp5910;
var inst_5852__$1 = tmp5909;
var inst_5853__$1 = tmp5908;
var inst_5854__$1 = inst_5862;
var state_5899__$1 = (function (){var statearr_5913 = state_5899;
(statearr_5913[(8)] = inst_5854__$1);

(statearr_5913[(14)] = inst_5861);

(statearr_5913[(9)] = inst_5853__$1);

(statearr_5913[(11)] = inst_5852__$1);

(statearr_5913[(12)] = inst_5851__$1);

return statearr_5913;
})();
var statearr_5914_5946 = state_5899__$1;
(statearr_5914_5946[(2)] = null);

(statearr_5914_5946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5900 === (22))){
var state_5899__$1 = state_5899;
var statearr_5915_5947 = state_5899__$1;
(statearr_5915_5947[(2)] = null);

(statearr_5915_5947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5900 === (6))){
var inst_5840 = (state_5899[(13)]);
var inst_5849 = f.call(null,inst_5840);
var inst_5850 = cljs.core.seq.call(null,inst_5849);
var inst_5851 = inst_5850;
var inst_5852 = null;
var inst_5853 = (0);
var inst_5854 = (0);
var state_5899__$1 = (function (){var statearr_5916 = state_5899;
(statearr_5916[(8)] = inst_5854);

(statearr_5916[(9)] = inst_5853);

(statearr_5916[(11)] = inst_5852);

(statearr_5916[(12)] = inst_5851);

return statearr_5916;
})();
var statearr_5917_5948 = state_5899__$1;
(statearr_5917_5948[(2)] = null);

(statearr_5917_5948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5900 === (17))){
var inst_5865 = (state_5899[(7)]);
var inst_5869 = cljs.core.chunk_first.call(null,inst_5865);
var inst_5870 = cljs.core.chunk_rest.call(null,inst_5865);
var inst_5871 = cljs.core.count.call(null,inst_5869);
var inst_5851 = inst_5870;
var inst_5852 = inst_5869;
var inst_5853 = inst_5871;
var inst_5854 = (0);
var state_5899__$1 = (function (){var statearr_5918 = state_5899;
(statearr_5918[(8)] = inst_5854);

(statearr_5918[(9)] = inst_5853);

(statearr_5918[(11)] = inst_5852);

(statearr_5918[(12)] = inst_5851);

return statearr_5918;
})();
var statearr_5919_5949 = state_5899__$1;
(statearr_5919_5949[(2)] = null);

(statearr_5919_5949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5900 === (3))){
var inst_5897 = (state_5899[(2)]);
var state_5899__$1 = state_5899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5899__$1,inst_5897);
} else {
if((state_val_5900 === (12))){
var inst_5885 = (state_5899[(2)]);
var state_5899__$1 = state_5899;
var statearr_5920_5950 = state_5899__$1;
(statearr_5920_5950[(2)] = inst_5885);

(statearr_5920_5950[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5900 === (2))){
var state_5899__$1 = state_5899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5899__$1,(4),in$);
} else {
if((state_val_5900 === (23))){
var inst_5893 = (state_5899[(2)]);
var state_5899__$1 = state_5899;
var statearr_5921_5951 = state_5899__$1;
(statearr_5921_5951[(2)] = inst_5893);

(statearr_5921_5951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5900 === (19))){
var inst_5880 = (state_5899[(2)]);
var state_5899__$1 = state_5899;
var statearr_5922_5952 = state_5899__$1;
(statearr_5922_5952[(2)] = inst_5880);

(statearr_5922_5952[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5900 === (11))){
var inst_5851 = (state_5899[(12)]);
var inst_5865 = (state_5899[(7)]);
var inst_5865__$1 = cljs.core.seq.call(null,inst_5851);
var state_5899__$1 = (function (){var statearr_5923 = state_5899;
(statearr_5923[(7)] = inst_5865__$1);

return statearr_5923;
})();
if(inst_5865__$1){
var statearr_5924_5953 = state_5899__$1;
(statearr_5924_5953[(1)] = (14));

} else {
var statearr_5925_5954 = state_5899__$1;
(statearr_5925_5954[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5900 === (9))){
var inst_5887 = (state_5899[(2)]);
var inst_5888 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_5899__$1 = (function (){var statearr_5926 = state_5899;
(statearr_5926[(15)] = inst_5887);

return statearr_5926;
})();
if(cljs.core.truth_(inst_5888)){
var statearr_5927_5955 = state_5899__$1;
(statearr_5927_5955[(1)] = (21));

} else {
var statearr_5928_5956 = state_5899__$1;
(statearr_5928_5956[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5900 === (5))){
var inst_5843 = cljs.core.async.close_BANG_.call(null,out);
var state_5899__$1 = state_5899;
var statearr_5929_5957 = state_5899__$1;
(statearr_5929_5957[(2)] = inst_5843);

(statearr_5929_5957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5900 === (14))){
var inst_5865 = (state_5899[(7)]);
var inst_5867 = cljs.core.chunked_seq_QMARK_.call(null,inst_5865);
var state_5899__$1 = state_5899;
if(inst_5867){
var statearr_5930_5958 = state_5899__$1;
(statearr_5930_5958[(1)] = (17));

} else {
var statearr_5931_5959 = state_5899__$1;
(statearr_5931_5959[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5900 === (16))){
var inst_5883 = (state_5899[(2)]);
var state_5899__$1 = state_5899;
var statearr_5932_5960 = state_5899__$1;
(statearr_5932_5960[(2)] = inst_5883);

(statearr_5932_5960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5900 === (10))){
var inst_5854 = (state_5899[(8)]);
var inst_5852 = (state_5899[(11)]);
var inst_5859 = cljs.core._nth.call(null,inst_5852,inst_5854);
var state_5899__$1 = state_5899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5899__$1,(13),out,inst_5859);
} else {
if((state_val_5900 === (18))){
var inst_5865 = (state_5899[(7)]);
var inst_5874 = cljs.core.first.call(null,inst_5865);
var state_5899__$1 = state_5899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5899__$1,(20),out,inst_5874);
} else {
if((state_val_5900 === (8))){
var inst_5854 = (state_5899[(8)]);
var inst_5853 = (state_5899[(9)]);
var inst_5856 = (inst_5854 < inst_5853);
var inst_5857 = inst_5856;
var state_5899__$1 = state_5899;
if(cljs.core.truth_(inst_5857)){
var statearr_5933_5961 = state_5899__$1;
(statearr_5933_5961[(1)] = (10));

} else {
var statearr_5934_5962 = state_5899__$1;
(statearr_5934_5962[(1)] = (11));

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
});})(c__4283__auto__))
;
return ((function (switch__4188__auto__,c__4283__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__4189__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__4189__auto____0 = (function (){
var statearr_5935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5935[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__4189__auto__);

(statearr_5935[(1)] = (1));

return statearr_5935;
});
var cljs$core$async$mapcat_STAR__$_state_machine__4189__auto____1 = (function (state_5899){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_5899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e5936){if((e5936 instanceof Object)){
var ex__4192__auto__ = e5936;
var statearr_5937_5963 = state_5899;
(statearr_5937_5963[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5964 = state_5899;
state_5899 = G__5964;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__4189__auto__ = function(state_5899){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__4189__auto____1.call(this,state_5899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__4189__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__4189__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto__))
})();
var state__4285__auto__ = (function (){var statearr_5938 = f__4284__auto__.call(null);
(statearr_5938[(6)] = c__4283__auto__);

return statearr_5938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto__))
);

return c__4283__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__5966 = arguments.length;
switch (G__5966) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__5969 = arguments.length;
switch (G__5969) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__5972 = arguments.length;
switch (G__5972) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4283__auto___6019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto___6019,out){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto___6019,out){
return (function (state_5996){
var state_val_5997 = (state_5996[(1)]);
if((state_val_5997 === (7))){
var inst_5991 = (state_5996[(2)]);
var state_5996__$1 = state_5996;
var statearr_5998_6020 = state_5996__$1;
(statearr_5998_6020[(2)] = inst_5991);

(statearr_5998_6020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5997 === (1))){
var inst_5973 = null;
var state_5996__$1 = (function (){var statearr_5999 = state_5996;
(statearr_5999[(7)] = inst_5973);

return statearr_5999;
})();
var statearr_6000_6021 = state_5996__$1;
(statearr_6000_6021[(2)] = null);

(statearr_6000_6021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5997 === (4))){
var inst_5976 = (state_5996[(8)]);
var inst_5976__$1 = (state_5996[(2)]);
var inst_5977 = (inst_5976__$1 == null);
var inst_5978 = cljs.core.not.call(null,inst_5977);
var state_5996__$1 = (function (){var statearr_6001 = state_5996;
(statearr_6001[(8)] = inst_5976__$1);

return statearr_6001;
})();
if(inst_5978){
var statearr_6002_6022 = state_5996__$1;
(statearr_6002_6022[(1)] = (5));

} else {
var statearr_6003_6023 = state_5996__$1;
(statearr_6003_6023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5997 === (6))){
var state_5996__$1 = state_5996;
var statearr_6004_6024 = state_5996__$1;
(statearr_6004_6024[(2)] = null);

(statearr_6004_6024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5997 === (3))){
var inst_5993 = (state_5996[(2)]);
var inst_5994 = cljs.core.async.close_BANG_.call(null,out);
var state_5996__$1 = (function (){var statearr_6005 = state_5996;
(statearr_6005[(9)] = inst_5993);

return statearr_6005;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5996__$1,inst_5994);
} else {
if((state_val_5997 === (2))){
var state_5996__$1 = state_5996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5996__$1,(4),ch);
} else {
if((state_val_5997 === (11))){
var inst_5976 = (state_5996[(8)]);
var inst_5985 = (state_5996[(2)]);
var inst_5973 = inst_5976;
var state_5996__$1 = (function (){var statearr_6006 = state_5996;
(statearr_6006[(7)] = inst_5973);

(statearr_6006[(10)] = inst_5985);

return statearr_6006;
})();
var statearr_6007_6025 = state_5996__$1;
(statearr_6007_6025[(2)] = null);

(statearr_6007_6025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5997 === (9))){
var inst_5976 = (state_5996[(8)]);
var state_5996__$1 = state_5996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5996__$1,(11),out,inst_5976);
} else {
if((state_val_5997 === (5))){
var inst_5973 = (state_5996[(7)]);
var inst_5976 = (state_5996[(8)]);
var inst_5980 = cljs.core._EQ_.call(null,inst_5976,inst_5973);
var state_5996__$1 = state_5996;
if(inst_5980){
var statearr_6009_6026 = state_5996__$1;
(statearr_6009_6026[(1)] = (8));

} else {
var statearr_6010_6027 = state_5996__$1;
(statearr_6010_6027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5997 === (10))){
var inst_5988 = (state_5996[(2)]);
var state_5996__$1 = state_5996;
var statearr_6011_6028 = state_5996__$1;
(statearr_6011_6028[(2)] = inst_5988);

(statearr_6011_6028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5997 === (8))){
var inst_5973 = (state_5996[(7)]);
var tmp6008 = inst_5973;
var inst_5973__$1 = tmp6008;
var state_5996__$1 = (function (){var statearr_6012 = state_5996;
(statearr_6012[(7)] = inst_5973__$1);

return statearr_6012;
})();
var statearr_6013_6029 = state_5996__$1;
(statearr_6013_6029[(2)] = null);

(statearr_6013_6029[(1)] = (2));


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
});})(c__4283__auto___6019,out))
;
return ((function (switch__4188__auto__,c__4283__auto___6019,out){
return (function() {
var cljs$core$async$state_machine__4189__auto__ = null;
var cljs$core$async$state_machine__4189__auto____0 = (function (){
var statearr_6014 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6014[(0)] = cljs$core$async$state_machine__4189__auto__);

(statearr_6014[(1)] = (1));

return statearr_6014;
});
var cljs$core$async$state_machine__4189__auto____1 = (function (state_5996){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_5996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e6015){if((e6015 instanceof Object)){
var ex__4192__auto__ = e6015;
var statearr_6016_6030 = state_5996;
(statearr_6016_6030[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6031 = state_5996;
state_5996 = G__6031;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$state_machine__4189__auto__ = function(state_5996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4189__auto____1.call(this,state_5996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4189__auto____0;
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4189__auto____1;
return cljs$core$async$state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto___6019,out))
})();
var state__4285__auto__ = (function (){var statearr_6017 = f__4284__auto__.call(null);
(statearr_6017[(6)] = c__4283__auto___6019);

return statearr_6017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto___6019,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__6033 = arguments.length;
switch (G__6033) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4283__auto___6099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto___6099,out){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto___6099,out){
return (function (state_6071){
var state_val_6072 = (state_6071[(1)]);
if((state_val_6072 === (7))){
var inst_6067 = (state_6071[(2)]);
var state_6071__$1 = state_6071;
var statearr_6073_6100 = state_6071__$1;
(statearr_6073_6100[(2)] = inst_6067);

(statearr_6073_6100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (1))){
var inst_6034 = (new Array(n));
var inst_6035 = inst_6034;
var inst_6036 = (0);
var state_6071__$1 = (function (){var statearr_6074 = state_6071;
(statearr_6074[(7)] = inst_6035);

(statearr_6074[(8)] = inst_6036);

return statearr_6074;
})();
var statearr_6075_6101 = state_6071__$1;
(statearr_6075_6101[(2)] = null);

(statearr_6075_6101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (4))){
var inst_6039 = (state_6071[(9)]);
var inst_6039__$1 = (state_6071[(2)]);
var inst_6040 = (inst_6039__$1 == null);
var inst_6041 = cljs.core.not.call(null,inst_6040);
var state_6071__$1 = (function (){var statearr_6076 = state_6071;
(statearr_6076[(9)] = inst_6039__$1);

return statearr_6076;
})();
if(inst_6041){
var statearr_6077_6102 = state_6071__$1;
(statearr_6077_6102[(1)] = (5));

} else {
var statearr_6078_6103 = state_6071__$1;
(statearr_6078_6103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (15))){
var inst_6061 = (state_6071[(2)]);
var state_6071__$1 = state_6071;
var statearr_6079_6104 = state_6071__$1;
(statearr_6079_6104[(2)] = inst_6061);

(statearr_6079_6104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (13))){
var state_6071__$1 = state_6071;
var statearr_6080_6105 = state_6071__$1;
(statearr_6080_6105[(2)] = null);

(statearr_6080_6105[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (6))){
var inst_6036 = (state_6071[(8)]);
var inst_6057 = (inst_6036 > (0));
var state_6071__$1 = state_6071;
if(cljs.core.truth_(inst_6057)){
var statearr_6081_6106 = state_6071__$1;
(statearr_6081_6106[(1)] = (12));

} else {
var statearr_6082_6107 = state_6071__$1;
(statearr_6082_6107[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (3))){
var inst_6069 = (state_6071[(2)]);
var state_6071__$1 = state_6071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6071__$1,inst_6069);
} else {
if((state_val_6072 === (12))){
var inst_6035 = (state_6071[(7)]);
var inst_6059 = cljs.core.vec.call(null,inst_6035);
var state_6071__$1 = state_6071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6071__$1,(15),out,inst_6059);
} else {
if((state_val_6072 === (2))){
var state_6071__$1 = state_6071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6071__$1,(4),ch);
} else {
if((state_val_6072 === (11))){
var inst_6051 = (state_6071[(2)]);
var inst_6052 = (new Array(n));
var inst_6035 = inst_6052;
var inst_6036 = (0);
var state_6071__$1 = (function (){var statearr_6083 = state_6071;
(statearr_6083[(10)] = inst_6051);

(statearr_6083[(7)] = inst_6035);

(statearr_6083[(8)] = inst_6036);

return statearr_6083;
})();
var statearr_6084_6108 = state_6071__$1;
(statearr_6084_6108[(2)] = null);

(statearr_6084_6108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (9))){
var inst_6035 = (state_6071[(7)]);
var inst_6049 = cljs.core.vec.call(null,inst_6035);
var state_6071__$1 = state_6071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6071__$1,(11),out,inst_6049);
} else {
if((state_val_6072 === (5))){
var inst_6039 = (state_6071[(9)]);
var inst_6035 = (state_6071[(7)]);
var inst_6044 = (state_6071[(11)]);
var inst_6036 = (state_6071[(8)]);
var inst_6043 = (inst_6035[inst_6036] = inst_6039);
var inst_6044__$1 = (inst_6036 + (1));
var inst_6045 = (inst_6044__$1 < n);
var state_6071__$1 = (function (){var statearr_6085 = state_6071;
(statearr_6085[(12)] = inst_6043);

(statearr_6085[(11)] = inst_6044__$1);

return statearr_6085;
})();
if(cljs.core.truth_(inst_6045)){
var statearr_6086_6109 = state_6071__$1;
(statearr_6086_6109[(1)] = (8));

} else {
var statearr_6087_6110 = state_6071__$1;
(statearr_6087_6110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (14))){
var inst_6064 = (state_6071[(2)]);
var inst_6065 = cljs.core.async.close_BANG_.call(null,out);
var state_6071__$1 = (function (){var statearr_6089 = state_6071;
(statearr_6089[(13)] = inst_6064);

return statearr_6089;
})();
var statearr_6090_6111 = state_6071__$1;
(statearr_6090_6111[(2)] = inst_6065);

(statearr_6090_6111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (10))){
var inst_6055 = (state_6071[(2)]);
var state_6071__$1 = state_6071;
var statearr_6091_6112 = state_6071__$1;
(statearr_6091_6112[(2)] = inst_6055);

(statearr_6091_6112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6072 === (8))){
var inst_6035 = (state_6071[(7)]);
var inst_6044 = (state_6071[(11)]);
var tmp6088 = inst_6035;
var inst_6035__$1 = tmp6088;
var inst_6036 = inst_6044;
var state_6071__$1 = (function (){var statearr_6092 = state_6071;
(statearr_6092[(7)] = inst_6035__$1);

(statearr_6092[(8)] = inst_6036);

return statearr_6092;
})();
var statearr_6093_6113 = state_6071__$1;
(statearr_6093_6113[(2)] = null);

(statearr_6093_6113[(1)] = (2));


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
});})(c__4283__auto___6099,out))
;
return ((function (switch__4188__auto__,c__4283__auto___6099,out){
return (function() {
var cljs$core$async$state_machine__4189__auto__ = null;
var cljs$core$async$state_machine__4189__auto____0 = (function (){
var statearr_6094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6094[(0)] = cljs$core$async$state_machine__4189__auto__);

(statearr_6094[(1)] = (1));

return statearr_6094;
});
var cljs$core$async$state_machine__4189__auto____1 = (function (state_6071){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_6071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e6095){if((e6095 instanceof Object)){
var ex__4192__auto__ = e6095;
var statearr_6096_6114 = state_6071;
(statearr_6096_6114[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6115 = state_6071;
state_6071 = G__6115;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$state_machine__4189__auto__ = function(state_6071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4189__auto____1.call(this,state_6071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4189__auto____0;
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4189__auto____1;
return cljs$core$async$state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto___6099,out))
})();
var state__4285__auto__ = (function (){var statearr_6097 = f__4284__auto__.call(null);
(statearr_6097[(6)] = c__4283__auto___6099);

return statearr_6097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto___6099,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__6117 = arguments.length;
switch (G__6117) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4283__auto___6187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto___6187,out){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto___6187,out){
return (function (state_6159){
var state_val_6160 = (state_6159[(1)]);
if((state_val_6160 === (7))){
var inst_6155 = (state_6159[(2)]);
var state_6159__$1 = state_6159;
var statearr_6161_6188 = state_6159__$1;
(statearr_6161_6188[(2)] = inst_6155);

(statearr_6161_6188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6160 === (1))){
var inst_6118 = [];
var inst_6119 = inst_6118;
var inst_6120 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_6159__$1 = (function (){var statearr_6162 = state_6159;
(statearr_6162[(7)] = inst_6119);

(statearr_6162[(8)] = inst_6120);

return statearr_6162;
})();
var statearr_6163_6189 = state_6159__$1;
(statearr_6163_6189[(2)] = null);

(statearr_6163_6189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6160 === (4))){
var inst_6123 = (state_6159[(9)]);
var inst_6123__$1 = (state_6159[(2)]);
var inst_6124 = (inst_6123__$1 == null);
var inst_6125 = cljs.core.not.call(null,inst_6124);
var state_6159__$1 = (function (){var statearr_6164 = state_6159;
(statearr_6164[(9)] = inst_6123__$1);

return statearr_6164;
})();
if(inst_6125){
var statearr_6165_6190 = state_6159__$1;
(statearr_6165_6190[(1)] = (5));

} else {
var statearr_6166_6191 = state_6159__$1;
(statearr_6166_6191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6160 === (15))){
var inst_6149 = (state_6159[(2)]);
var state_6159__$1 = state_6159;
var statearr_6167_6192 = state_6159__$1;
(statearr_6167_6192[(2)] = inst_6149);

(statearr_6167_6192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6160 === (13))){
var state_6159__$1 = state_6159;
var statearr_6168_6193 = state_6159__$1;
(statearr_6168_6193[(2)] = null);

(statearr_6168_6193[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6160 === (6))){
var inst_6119 = (state_6159[(7)]);
var inst_6144 = inst_6119.length;
var inst_6145 = (inst_6144 > (0));
var state_6159__$1 = state_6159;
if(cljs.core.truth_(inst_6145)){
var statearr_6169_6194 = state_6159__$1;
(statearr_6169_6194[(1)] = (12));

} else {
var statearr_6170_6195 = state_6159__$1;
(statearr_6170_6195[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6160 === (3))){
var inst_6157 = (state_6159[(2)]);
var state_6159__$1 = state_6159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6159__$1,inst_6157);
} else {
if((state_val_6160 === (12))){
var inst_6119 = (state_6159[(7)]);
var inst_6147 = cljs.core.vec.call(null,inst_6119);
var state_6159__$1 = state_6159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6159__$1,(15),out,inst_6147);
} else {
if((state_val_6160 === (2))){
var state_6159__$1 = state_6159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6159__$1,(4),ch);
} else {
if((state_val_6160 === (11))){
var inst_6127 = (state_6159[(10)]);
var inst_6123 = (state_6159[(9)]);
var inst_6137 = (state_6159[(2)]);
var inst_6138 = [];
var inst_6139 = inst_6138.push(inst_6123);
var inst_6119 = inst_6138;
var inst_6120 = inst_6127;
var state_6159__$1 = (function (){var statearr_6171 = state_6159;
(statearr_6171[(7)] = inst_6119);

(statearr_6171[(11)] = inst_6137);

(statearr_6171[(8)] = inst_6120);

(statearr_6171[(12)] = inst_6139);

return statearr_6171;
})();
var statearr_6172_6196 = state_6159__$1;
(statearr_6172_6196[(2)] = null);

(statearr_6172_6196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6160 === (9))){
var inst_6119 = (state_6159[(7)]);
var inst_6135 = cljs.core.vec.call(null,inst_6119);
var state_6159__$1 = state_6159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6159__$1,(11),out,inst_6135);
} else {
if((state_val_6160 === (5))){
var inst_6127 = (state_6159[(10)]);
var inst_6120 = (state_6159[(8)]);
var inst_6123 = (state_6159[(9)]);
var inst_6127__$1 = f.call(null,inst_6123);
var inst_6128 = cljs.core._EQ_.call(null,inst_6127__$1,inst_6120);
var inst_6129 = cljs.core.keyword_identical_QMARK_.call(null,inst_6120,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_6130 = ((inst_6128) || (inst_6129));
var state_6159__$1 = (function (){var statearr_6173 = state_6159;
(statearr_6173[(10)] = inst_6127__$1);

return statearr_6173;
})();
if(cljs.core.truth_(inst_6130)){
var statearr_6174_6197 = state_6159__$1;
(statearr_6174_6197[(1)] = (8));

} else {
var statearr_6175_6198 = state_6159__$1;
(statearr_6175_6198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6160 === (14))){
var inst_6152 = (state_6159[(2)]);
var inst_6153 = cljs.core.async.close_BANG_.call(null,out);
var state_6159__$1 = (function (){var statearr_6177 = state_6159;
(statearr_6177[(13)] = inst_6152);

return statearr_6177;
})();
var statearr_6178_6199 = state_6159__$1;
(statearr_6178_6199[(2)] = inst_6153);

(statearr_6178_6199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6160 === (10))){
var inst_6142 = (state_6159[(2)]);
var state_6159__$1 = state_6159;
var statearr_6179_6200 = state_6159__$1;
(statearr_6179_6200[(2)] = inst_6142);

(statearr_6179_6200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6160 === (8))){
var inst_6119 = (state_6159[(7)]);
var inst_6127 = (state_6159[(10)]);
var inst_6123 = (state_6159[(9)]);
var inst_6132 = inst_6119.push(inst_6123);
var tmp6176 = inst_6119;
var inst_6119__$1 = tmp6176;
var inst_6120 = inst_6127;
var state_6159__$1 = (function (){var statearr_6180 = state_6159;
(statearr_6180[(7)] = inst_6119__$1);

(statearr_6180[(8)] = inst_6120);

(statearr_6180[(14)] = inst_6132);

return statearr_6180;
})();
var statearr_6181_6201 = state_6159__$1;
(statearr_6181_6201[(2)] = null);

(statearr_6181_6201[(1)] = (2));


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
});})(c__4283__auto___6187,out))
;
return ((function (switch__4188__auto__,c__4283__auto___6187,out){
return (function() {
var cljs$core$async$state_machine__4189__auto__ = null;
var cljs$core$async$state_machine__4189__auto____0 = (function (){
var statearr_6182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6182[(0)] = cljs$core$async$state_machine__4189__auto__);

(statearr_6182[(1)] = (1));

return statearr_6182;
});
var cljs$core$async$state_machine__4189__auto____1 = (function (state_6159){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_6159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e6183){if((e6183 instanceof Object)){
var ex__4192__auto__ = e6183;
var statearr_6184_6202 = state_6159;
(statearr_6184_6202[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6203 = state_6159;
state_6159 = G__6203;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
cljs$core$async$state_machine__4189__auto__ = function(state_6159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4189__auto____1.call(this,state_6159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4189__auto____0;
cljs$core$async$state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4189__auto____1;
return cljs$core$async$state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto___6187,out))
})();
var state__4285__auto__ = (function (){var statearr_6185 = f__4284__auto__.call(null);
(statearr_6185[(6)] = c__4283__auto___6187);

return statearr_6185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto___6187,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
