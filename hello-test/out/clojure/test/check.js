// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.test.check');
goog.require('cljs.core');
goog.require('clojure.test.check.generators');
goog.require('clojure.test.check.random');
goog.require('clojure.test.check.results');
goog.require('clojure.test.check.rose_tree');
goog.require('clojure.test.check.impl');

clojure.test.check.make_rng = (function clojure$test$check$make_rng(seed){
if(cljs.core.truth_(seed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,clojure.test.check.random.make_random.call(null,seed)], null);
} else {
var non_nil_seed = clojure.test.check.impl.get_current_time_millis.call(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [non_nil_seed,clojure.test.check.random.make_random.call(null,non_nil_seed)], null);
}
});
clojure.test.check.complete = (function clojure$test$check$complete(property,num_trials,seed,start_time,reporter_fn){
var time_elapsed_ms = (clojure.test.check.impl.get_current_time_millis.call(null) - start_time);
reporter_fn.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"complete","complete",-500388775),new cljs.core.Keyword(null,"property","property",-1114278232),property,new cljs.core.Keyword(null,"result","result",1415092211),true,new cljs.core.Keyword(null,"pass?","pass?",-424635753),true,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),num_trials,new cljs.core.Keyword(null,"time-elapsed-ms","time-elapsed-ms",-755913315),time_elapsed_ms,new cljs.core.Keyword(null,"seed","seed",68613327),seed], null));

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"result","result",1415092211),true,new cljs.core.Keyword(null,"pass?","pass?",-424635753),true,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),num_trials,new cljs.core.Keyword(null,"time-elapsed-ms","time-elapsed-ms",-755913315),time_elapsed_ms,new cljs.core.Keyword(null,"seed","seed",68613327),seed], null);
});
/**
 * Returns a value for the legacy :result key, which has the peculiar
 *   property of conflating returned exceptions with thrown exceptions.
 */
clojure.test.check.legacy_result = (function clojure$test$check$legacy_result(result){
if((((!((result == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === result.clojure$test$check$results$Result$))))?true:(((!result.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,clojure.test.check.results.Result,result):false)):cljs.core.native_satisfies_QMARK_.call(null,clojure.test.check.results.Result,result))){
var d = clojure.test.check.results.result_data.call(null,result);
var temp__5718__auto__ = cljs.core.find.call(null,d,new cljs.core.Keyword("clojure.test.check.properties","error","clojure.test.check.properties/error",483933635));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__4481 = temp__5718__auto__;
var _ = cljs.core.nth.call(null,vec__4481,(0),null);
var e = cljs.core.nth.call(null,vec__4481,(1),null);
if((e instanceof Error)){
return e;
} else {
return cljs.core.ex_info.call(null,"Non-Error object thrown in test",cljs.core.PersistentArrayMap.EMPTY,e);
}
} else {
return clojure.test.check.results.pass_QMARK_.call(null,result);
}
} else {
return result;
}
});
/**
 * Tests `property` `num-tests` times.
 * 
 *   Takes several optional keys:
 * 
 *   `:seed`
 *  Can be used to re-run previous tests, as the seed used is returned
 *  after a test is run.
 * 
 *   `:max-size`.
 *  can be used to control the 'size' of generated values. The size will
 *  start at 0, and grow up to max-size, as the number of tests increases.
 *  Generators will use the size parameter to bound their growth. This
 *  prevents, for example, generating a five-thousand element vector on
 *  the very first test.
 * 
 *   `:reporter-fn`
 *  A callback function that will be called at various points in the test
 *  run, with a map like:
 * 
 *    ;; called after a passing trial
 *    {:type            :trial
 *     :args            [...]
 *     :num-tests       <number of tests run so far>
 *     :num-tests-total <total number of tests to be run>
 *     :seed            42
 *     :pass?           true
 *     :property        #<...>
 *     :result          true
 *     :result-data     {...}}
 * 
 *    ;; called after the first failing trial
 *    {:type         :failure
 *     :fail         [...failing args...]
 *     :failing-size 13
 *     :num-tests    <tests ran before failure found>
 *     :pass?        false
 *     :property     #<...>
 *     :result       false/exception
 *     :result-data  {...}
 *     :seed         42}
 * 
 *  It will also be called on :complete, :shrink-step and :shrunk. Many
 *  of the keys also appear in the quick-check return value, and are
 *  documented below.
 * 
 *   If the test passes, the return value will be something like:
 * 
 *    {:num-tests       100,
 *     :pass?           true,
 *     :result          true,
 *     :seed            1561826505982,
 *     :time-elapsed-ms 24}
 * 
 *   If the test fails, the return value will be something like:
 * 
 *    {:fail            [0],
 *     :failed-after-ms 0,
 *     :failing-size    0,
 *     :num-tests       1,
 *     :pass?           false,
 *     :result          false,
 *     :result-data     nil,
 *     :seed            1561826506080,
 *     :shrunk
 *     {:depth               0,
 *      :pass?               false,
 *      :result              false,
 *      :result-data         nil,
 *      :smallest            [0],
 *      :time-shrinking-ms   0,
 *      :total-nodes-visited 0}}
 * 
 *   The meaning of the individual entries is:
 * 
 *    :num-tests
 *    The total number of trials that was were run, not including
 *    shrinking (if applicable)
 * 
 *    :pass?
 *    A boolean indicating whether the test passed or failed
 * 
 *    :result
 *    A legacy entry that is similar to :pass?
 * 
 *    :seed
 *    The seed used for the entire test run; can be used to reproduce
 *    a test run by passing it as the :seed option to quick-check
 * 
 *    :time-elapsed-ms
 *    The total time, in milliseconds, of a successful test run
 * 
 *    :fail
 *    The generated values for the first failure; note that this is
 *    always a vector, since prop/for-all can have multiple clauses
 * 
 *    :failed-after-ms
 *    The total time, in milliseconds, spent finding the first failing
 *    trial
 * 
 *    :failing-size
 *    The value of the size parameter used to generate the first
 *    failure
 * 
 *    :result-data
 *    The result data, if any, of the first failing trial (to take
 *    advantage of this a property must return an object satisfying
 *    the clojure.test.check.results/Result protocol)
 * 
 *    :shrunk
 *    A map of data about the shrinking process; nested keys that
 *    appear at the top level have the same meaning; other keys are
 *    documented next
 * 
 *    :shrunk / :depth
 *    The depth in the shrink tree that the smallest failing instance
 *    was found; this is essentially the idea of how many times the
 *    original failure was successfully shrunk
 * 
 *    :smallest
 *    The smallest values found in the shrinking process that still
 *    fail the test; this is a vector of the same type as :fail
 * 
 *    :time-shrinking-ms
 *    The total time, in milliseconds, spent shrinking
 * 
 *    :total-nodes-visited
 *    The total number of steps in the shrinking process
 * 
 *   Examples:
 * 
 *    (def p (for-all [a gen/nat] (> (* a a) a)))
 * 
 *    (quick-check 100 p)
 *    (quick-check 200 p
 *                 :seed 42
 *                 :max-size 50
 *                 :reporter-fn (fn [m]
 *                                (when (= :failure (:type m))
 *                                  (println "Uh oh..."))))
 */
clojure.test.check.quick_check = (function clojure$test$check$quick_check(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4505 = arguments.length;
var i__4731__auto___4506 = (0);
while(true){
if((i__4731__auto___4506 < len__4730__auto___4505)){
args__4736__auto__.push((arguments[i__4731__auto___4506]));

var G__4507 = (i__4731__auto___4506 + (1));
i__4731__auto___4506 = G__4507;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (num_tests,property,p__4487){
var map__4488 = p__4487;
var map__4488__$1 = (((((!((map__4488 == null))))?(((((map__4488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4488):map__4488);
var seed = cljs.core.get.call(null,map__4488__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var max_size = cljs.core.get.call(null,map__4488__$1,new cljs.core.Keyword(null,"max-size","max-size",-874966132),(200));
var reporter_fn = cljs.core.get.call(null,map__4488__$1,new cljs.core.Keyword(null,"reporter-fn","reporter-fn",1280520247),cljs.core.constantly.call(null,null));
var vec__4490 = clojure.test.check.make_rng.call(null,seed);
var created_seed = cljs.core.nth.call(null,vec__4490,(0),null);
var rng = cljs.core.nth.call(null,vec__4490,(1),null);
var size_seq = clojure.test.check.generators.make_size_range_seq.call(null,max_size);
var start_time = clojure.test.check.impl.get_current_time_millis.call(null);
var so_far = (0);
var size_seq__$1 = size_seq;
var rstate = rng;
while(true){
if((so_far === num_tests)){
return clojure.test.check.complete.call(null,property,num_tests,created_seed,start_time,reporter_fn);
} else {
var vec__4499 = size_seq__$1;
var seq__4500 = cljs.core.seq.call(null,vec__4499);
var first__4501 = cljs.core.first.call(null,seq__4500);
var seq__4500__$1 = cljs.core.next.call(null,seq__4500);
var size = first__4501;
var rest_size_seq = seq__4500__$1;
var vec__4502 = clojure.test.check.random.split.call(null,rstate);
var r1 = cljs.core.nth.call(null,vec__4502,(0),null);
var r2 = cljs.core.nth.call(null,vec__4502,(1),null);
var result_map_rose = clojure.test.check.generators.call_gen.call(null,property,r1,size);
var result_map = clojure.test.check.rose_tree.root.call(null,result_map_rose);
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result_map);
var args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(result_map);
var so_far__$1 = (so_far + (1));
if(cljs.core.truth_(clojure.test.check.results.pass_QMARK_.call(null,result))){
reporter_fn.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"num-tests-total","num-tests-total",-2113009946),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"result-data","result-data",-1724248844),new cljs.core.Keyword(null,"pass?","pass?",-424635753)],[args,num_tests,property,so_far__$1,new cljs.core.Keyword(null,"trial","trial",-677458347),seed,result,clojure.test.check.results.result_data.call(null,result),true]));

var G__4508 = so_far__$1;
var G__4509 = rest_size_seq;
var G__4510 = r2;
so_far = G__4508;
size_seq__$1 = G__4509;
rstate = G__4510;
continue;
} else {
return clojure.test.check.failure.call(null,property,result_map_rose,so_far__$1,size,created_seed,start_time,reporter_fn);
}
}
break;
}
});

clojure.test.check.quick_check.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clojure.test.check.quick_check.cljs$lang$applyTo = (function (seq4484){
var G__4485 = cljs.core.first.call(null,seq4484);
var seq4484__$1 = cljs.core.next.call(null,seq4484);
var G__4486 = cljs.core.first.call(null,seq4484__$1);
var seq4484__$2 = cljs.core.next.call(null,seq4484__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4485,G__4486,seq4484__$2);
});

clojure.test.check.smallest_shrink = (function clojure$test$check$smallest_shrink(total_nodes_visited,depth,smallest,start_time){
var map__4511 = smallest;
var map__4511__$1 = (((((!((map__4511 == null))))?(((((map__4511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4511):map__4511);
var result = cljs.core.get.call(null,map__4511__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"total-nodes-visited","total-nodes-visited",-620132443),total_nodes_visited,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"pass?","pass?",-424635753),false,new cljs.core.Keyword(null,"result","result",1415092211),clojure.test.check.legacy_result.call(null,result),new cljs.core.Keyword(null,"result-data","result-data",-1724248844),clojure.test.check.results.result_data.call(null,result),new cljs.core.Keyword(null,"time-shrinking-ms","time-shrinking-ms",-383238219),(clojure.test.check.impl.get_current_time_millis.call(null) - start_time),new cljs.core.Keyword(null,"smallest","smallest",-152623883),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(smallest)], null);
});
/**
 * Shrinking a value produces a sequence of smaller values of the same type.
 *   Each of these values can then be shrunk. Think of this as a tree. We do a
 *   modified depth-first search of the tree:
 * 
 *   Do a non-exhaustive search for a deeper (than the root) failing example.
 *   Additional rules added to depth-first search:
 *   * If a node passes the property, you may continue searching at this depth,
 *   but not backtrack
 *   * If a node fails the property, search its children
 *   The value returned is the left-most failing example at the depth where a
 *   passing example was found.
 * 
 *   Calls reporter-fn on every shrink step.
 */
clojure.test.check.shrink_loop = (function clojure$test$check$shrink_loop(rose_tree,reporter_fn){
var start_time = clojure.test.check.impl.get_current_time_millis.call(null);
var shrinks_this_depth = clojure.test.check.rose_tree.children.call(null,rose_tree);
var nodes = shrinks_this_depth;
var current_smallest = clojure.test.check.rose_tree.root.call(null,rose_tree);
var total_nodes_visited = (0);
var depth = (0);
while(true){
if(cljs.core.empty_QMARK_.call(null,nodes)){
return clojure.test.check.smallest_shrink.call(null,total_nodes_visited,depth,current_smallest,start_time);
} else {
var head = cljs.core.first.call(null,nodes);
var tail = cljs.core.rest.call(null,nodes);
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root.call(null,head));
var args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root.call(null,head));
var pass_QMARK_ = clojure.test.check.results.pass_QMARK_.call(null,result);
var reporter_fn_arg = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shrink-step","shrink-step",-541828120),new cljs.core.Keyword(null,"shrinking","shrinking",2049648186),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"pass?","pass?",-424635753),cljs.core.boolean$.call(null,pass_QMARK_),new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"result-data","result-data",-1724248844),clojure.test.check.results.result_data.call(null,result),new cljs.core.Keyword(null,"smallest","smallest",-152623883),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(current_smallest),new cljs.core.Keyword(null,"total-nodes-visited","total-nodes-visited",-620132443),total_nodes_visited], null)], null);
if(cljs.core.truth_(pass_QMARK_)){
reporter_fn.call(null,reporter_fn_arg);

var G__4513 = tail;
var G__4514 = current_smallest;
var G__4515 = (total_nodes_visited + (1));
var G__4516 = depth;
nodes = G__4513;
current_smallest = G__4514;
total_nodes_visited = G__4515;
depth = G__4516;
continue;
} else {
var new_smallest = clojure.test.check.rose_tree.root.call(null,head);
reporter_fn.call(null,cljs.core.assoc_in.call(null,reporter_fn_arg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shrinking","shrinking",2049648186),new cljs.core.Keyword(null,"smallest","smallest",-152623883)], null),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(new_smallest)));

var temp__5718__auto__ = cljs.core.seq.call(null,clojure.test.check.rose_tree.children.call(null,head));
if(temp__5718__auto__){
var children = temp__5718__auto__;
var G__4517 = children;
var G__4518 = new_smallest;
var G__4519 = (total_nodes_visited + (1));
var G__4520 = (depth + (1));
nodes = G__4517;
current_smallest = G__4518;
total_nodes_visited = G__4519;
depth = G__4520;
continue;
} else {
var G__4521 = tail;
var G__4522 = new_smallest;
var G__4523 = (total_nodes_visited + (1));
var G__4524 = depth;
nodes = G__4521;
current_smallest = G__4522;
total_nodes_visited = G__4523;
depth = G__4524;
continue;
}
}
}
break;
}
});
clojure.test.check.failure = (function clojure$test$check$failure(property,failing_rose_tree,trial_number,size,seed,start_time,reporter_fn){
var failed_after_ms = (clojure.test.check.impl.get_current_time_millis.call(null) - start_time);
var root = clojure.test.check.rose_tree.root.call(null,failing_rose_tree);
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(root);
var failure_data = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"failed-after-ms","failed-after-ms",912141156),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"result-data","result-data",-1724248844),new cljs.core.Keyword(null,"failing-size","failing-size",-429562538),new cljs.core.Keyword(null,"pass?","pass?",-424635753)],[failed_after_ms,property,trial_number,seed,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(root),clojure.test.check.legacy_result.call(null,result),clojure.test.check.results.result_data.call(null,result),size,false]);
reporter_fn.call(null,cljs.core.assoc.call(null,failure_data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"failure","failure",720415879)));

var shrunk = clojure.test.check.shrink_loop.call(null,failing_rose_tree,((function (failed_after_ms,root,result,failure_data){
return (function (p1__4525_SHARP_){
return reporter_fn.call(null,cljs.core.merge.call(null,failure_data,p1__4525_SHARP_));
});})(failed_after_ms,root,result,failure_data))
);
reporter_fn.call(null,cljs.core.assoc.call(null,failure_data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412),new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412),shrunk));

return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,failure_data,new cljs.core.Keyword(null,"property","property",-1114278232)),new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412),shrunk);
});

//# sourceMappingURL=check.js.map
