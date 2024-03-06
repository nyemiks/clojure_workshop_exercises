// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.core.rrb_vector.nodes');
goog.require('cljs.core');
clojure.core.rrb_vector.nodes.empty_node = cljs.core.PersistentVector.EMPTY_NODE;
clojure.core.rrb_vector.nodes.clone = (function clojure$core$rrb_vector$nodes$clone(shift,node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone.call(null,node.arr)));
});
clojure.core.rrb_vector.nodes.regular_QMARK_ = (function clojure$core$rrb_vector$nodes$regular_QMARK_(node){
return (!((node.arr.length === (33))));
});
clojure.core.rrb_vector.nodes.ranges = (function clojure$core$rrb_vector$nodes$ranges(node){
return (node.arr[(32)]);
});
clojure.core.rrb_vector.nodes.last_range = (function clojure$core$rrb_vector$nodes$last_range(node){
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,node);
var i = ((rngs[(32)]) - (1));
return (rngs[i]);
});
clojure.core.rrb_vector.nodes.regular_ranges = (function clojure$core$rrb_vector$nodes$regular_ranges(shift,cnt){
var step = ((1) << shift);
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var i = (0);
var r = step;
while(true){
if((r < cnt)){
(rngs[i] = r);

var G__2336 = (i + (1));
var G__2337 = (r + step);
i = G__2336;
r = G__2337;
continue;
} else {
(rngs[i] = cnt);

(rngs[(32)] = (i + (1)));

return rngs;
}
break;
}
});
clojure.core.rrb_vector.nodes.overflow_QMARK_ = (function clojure$core$rrb_vector$nodes$overflow_QMARK_(root,shift,cnt){
while(true){
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,root)){
return ((cnt >> (5)) > ((1) << shift));
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,root);
var slc = (rngs[(32)]);
var and__4120__auto__ = (slc === (32));
if(and__4120__auto__){
var or__4131__auto__ = (shift === (5));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var G__2338 = (root.arr[(slc - (1))]);
var G__2339 = (shift - (5));
var G__2340 = (((rngs[(31)]) - (rngs[(30)])) + (32));
root = G__2338;
shift = G__2339;
cnt = G__2340;
continue;
}
} else {
return and__4120__auto__;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.index_of_0 = (function clojure$core$rrb_vector$nodes$index_of_0(arr){
var l = (0);
var h = (31);
while(true){
if((l >= (h - (1)))){
if((((arr[l]) | (0)) === (0))){
return l;
} else {
if((((arr[h]) | (0)) === (0))){
return h;
} else {
return (32);
}
}
} else {
var mid = (l + ((h - l) >> (1)));
if((((arr[mid]) | (0)) === (0))){
var G__2341 = l;
var G__2342 = mid;
l = G__2341;
h = G__2342;
continue;
} else {
var G__2343 = (mid + (1));
var G__2344 = h;
l = G__2343;
h = G__2344;
continue;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.index_of_nil = (function clojure$core$rrb_vector$nodes$index_of_nil(arr){
var l = (0);
var h = (31);
while(true){
if((l >= (h - (1)))){
if(((arr[l]) == null)){
return l;
} else {
if(((arr[h]) == null)){
return h;
} else {
return (32);
}
}
} else {
var mid = (l + ((h - l) >> (1)));
if(((arr[mid]) == null)){
var G__2345 = l;
var G__2346 = mid;
l = G__2345;
h = G__2346;
continue;
} else {
var G__2347 = (mid + (1));
var G__2348 = h;
l = G__2347;
h = G__2348;
continue;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.first_child = (function clojure$core$rrb_vector$nodes$first_child(node){
return (node.arr[(0)]);
});
clojure.core.rrb_vector.nodes.last_child = (function clojure$core$rrb_vector$nodes$last_child(node){
var arr = node.arr;
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node)){
return (arr[(clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr) - (1))]);
} else {
return (arr[((clojure.core.rrb_vector.nodes.ranges.call(null,node)[(32)]) - (1))]);
}
});
clojure.core.rrb_vector.nodes.remove_leftmost_child = (function clojure$core$rrb_vector$nodes$remove_leftmost_child(shift,parent){
var arr = parent.arr;
if(((arr[(1)]) == null)){
return null;
} else {
var r_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,parent);
var new_arr = (new Array(((r_QMARK_)?(32):(33))));
cljs.core.array_copy.call(null,arr,(1),new_arr,(0),(31));

if((!(r_QMARK_))){
var rngs_2349 = clojure.core.rrb_vector.nodes.ranges.call(null,parent);
var rng0_2350 = (rngs_2349[(0)]);
var new_rngs_2351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var lim_2352 = (rngs_2349[(32)]);
cljs.core.array_copy.call(null,rngs_2349,(1),new_rngs_2351,(0),(lim_2352 - (1)));

var i_2353 = (0);
while(true){
if((i_2353 < lim_2352)){
(new_rngs_2351[i_2353] = ((new_rngs_2351[i_2353]) - rng0_2350));

var G__2354 = (i_2353 + (1));
i_2353 = G__2354;
continue;
} else {
}
break;
}

(new_rngs_2351[(32)] = ((rngs_2349[(32)]) - (1)));

(new_rngs_2351[((rngs_2349[(32)]) - (1))] = (0));

(new_arr[(32)] = new_rngs_2351);
} else {
}

return cljs.core.__GT_VectorNode.call(null,parent.edit,new_arr);
}
});
clojure.core.rrb_vector.nodes.replace_leftmost_child = (function clojure$core$rrb_vector$nodes$replace_leftmost_child(shift,parent,pcnt,child,d){
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,parent)){
var step = ((1) << shift);
var rng0 = (step - d);
var ncnt = (pcnt - d);
var li = ((shift >> (pcnt - (1))) & (31));
var arr = parent.arr;
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_arr[(0)] = child);

cljs.core.array_copy.call(null,arr,(1),new_arr,(1),li);

(new_arr[(32)] = new_rngs);

(new_rngs[(0)] = rng0);

(new_rngs[li] = ncnt);

(new_rngs[(32)] = (li + (1)));

var i_2355 = (1);
while(true){
if((i_2355 <= li)){
(new_rngs[i_2355] = ((new_rngs[(i_2355 - (1))]) + step));

var G__2356 = (i_2355 + (1));
i_2355 = G__2356;
continue;
} else {
}
break;
}

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else {
var new_arr = cljs.core.aclone.call(null,parent.arr);
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,parent);
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var li = ((rngs[(32)]) - (1));
(new_rngs[(32)] = (rngs[(32)]));

(new_arr[(32)] = new_rngs);

(new_arr[(0)] = child);

var i_2357 = (0);
while(true){
if((i_2357 <= li)){
(new_rngs[i_2357] = ((rngs[i_2357]) - d));

var G__2358 = (i_2357 + (1));
i_2357 = G__2358;
continue;
} else {
}
break;
}

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});
clojure.core.rrb_vector.nodes.replace_rightmost_child = (function clojure$core$rrb_vector$nodes$replace_rightmost_child(shift,parent,child,d){
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,parent)){
var arr = parent.arr;
var i = (clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr) - (1));
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,child)){
var new_arr = cljs.core.aclone.call(null,arr);
(new_arr[i] = child);

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else {
var arr__$1 = parent.arr;
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var step = ((1) << shift);
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(rngs[(32)] = (i + (1)));

(new_arr[(32)] = rngs);

cljs.core.array_copy.call(null,arr__$1,(0),new_arr,(0),i);

(new_arr[i] = child);

var j_2359 = (0);
var r_2360 = step;
while(true){
if((j_2359 <= i)){
(rngs[j_2359] = r_2360);

var G__2361 = (j_2359 + (1));
var G__2362 = (r_2360 + step);
j_2359 = G__2361;
r_2360 = G__2362;
continue;
} else {
}
break;
}

(rngs[i] = clojure.core.rrb_vector.nodes.last_range.call(null,child));

return cljs.core.__GT_VectorNode.call(null,null,arr__$1);
}
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,parent);
var new_rngs = cljs.core.aclone.call(null,rngs);
var i = ((rngs[(32)]) - (1));
var new_arr = cljs.core.aclone.call(null,parent.arr);
(new_arr[i] = child);

(new_arr[(32)] = new_rngs);

(new_rngs[i] = ((rngs[i]) + d));

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});
clojure.core.rrb_vector.nodes.new_path_STAR_ = (function clojure$core$rrb_vector$nodes$new_path_STAR_(shift,node){
var reg_QMARK_ = ((32) === node.arr.length);
var len = ((reg_QMARK_)?(32):(33));
var arr = (new Array(len));
var rngs = (((!(reg_QMARK_)))?(function (){var G__2363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__2363[(0)] = node.arr.length);

(G__2363[(32)] = (1));

return G__2363;
})():null);
var ret = cljs.core.__GT_VectorNode.call(null,null,arr);
var arr_2364__$1 = arr;
var shift_2365__$1 = shift;
while(true){
if((shift_2365__$1 === (5))){
if((!(reg_QMARK_))){
(arr_2364__$1[(32)] = rngs);
} else {
}

(arr_2364__$1[(0)] = node);
} else {
var a_2366 = (new Array(len));
var e_2367 = cljs.core.__GT_VectorNode.call(null,null,a_2366);
(arr_2364__$1[(0)] = e_2367);

if((!(reg_QMARK_))){
(arr_2364__$1[(32)] = rngs);
} else {
}

var G__2368 = a_2366;
var G__2369 = (shift_2365__$1 - (5));
arr_2364__$1 = G__2368;
shift_2365__$1 = G__2369;
continue;
}
break;
}

return ret;
});
clojure.core.rrb_vector.nodes.fold_tail = (function clojure$core$rrb_vector$nodes$fold_tail(node,shift,cnt,tail){
var tlen = tail.length;
var reg_QMARK_ = ((clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node)) && ((tlen === (32))));
var arr = node.arr;
var li = clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr);
var new_arr = (new Array(((reg_QMARK_)?(32):(33))));
var rngs = (((!(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))))?clojure.core.rrb_vector.nodes.ranges.call(null,node):null);
var cret = (((shift === (5)))?cljs.core.__GT_VectorNode.call(null,null,tail):clojure.core.rrb_vector.nodes.fold_tail.call(null,(arr[(li - (1))]),(shift - (5)),((clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))?cljs.core.mod.call(null,cnt,((1) << shift)):(function (){var li__$1 = ((rngs[(32)]) - (1));
if((li__$1 > (0))){
return ((rngs[li__$1]) - (rngs[(li__$1 - (1))]));
} else {
return (rngs[(0)]);
}
})()),tail));
var new_rngs = (((!(reg_QMARK_)))?(cljs.core.truth_(rngs)?cljs.core.aclone.call(null,rngs):clojure.core.rrb_vector.nodes.regular_ranges.call(null,shift,cnt)):null);
if((((((cret == null)) || ((shift === (5))))) && ((li === (32))))){
return null;
} else {
cljs.core.array_copy.call(null,arr,(0),new_arr,(0),li);

if(reg_QMARK_){
} else {
if((((cret == null)) || ((shift === (5))))){
(new_rngs[li] = ((((li > (0)))?(new_rngs[(li - (1))]):((0) | (0))) + tlen));

(new_rngs[(32)] = (li + (1)));
} else {
if((li > (0))){
(new_rngs[(li - (1))] = ((new_rngs[(li - (1))]) + tlen));
} else {
}

(new_rngs[(32)] = li);
}
}

if((!(reg_QMARK_))){
(new_arr[(32)] = new_rngs);
} else {
}

if((cret == null)){
(new_arr[li] = clojure.core.rrb_vector.nodes.new_path_STAR_.call(null,(shift - (5)),cljs.core.__GT_VectorNode.call(null,null,tail)));
} else {
(new_arr[(((shift === (5)))?li:(li - (1)))] = cret);
}

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});

//# sourceMappingURL=nodes.js.map
