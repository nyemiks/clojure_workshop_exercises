// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.test.check.properties');
goog.require('cljs.core');
goog.require('clojure.test.check.generators');
goog.require('clojure.test.check.results');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {clojure.test.check.results.Result}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure.test.check.properties.ErrorResult = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
clojure.test.check.properties.ErrorResult.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k4777,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__4781 = k4777;
var G__4781__$1 = (((G__4781 instanceof cljs.core.Keyword))?G__4781.fqn:null);
switch (G__4781__$1) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k4777,else__4388__auto__);

}
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__4782){
var vec__4783 = p__4782;
var k__4408__auto__ = cljs.core.nth.call(null,vec__4783,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__4783,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#clojure.test.check.properties.ErrorResult{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__4776){
var self__ = this;
var G__4776__$1 = this;
return (new cljs.core.RecordIter((0),G__4776__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new clojure.test.check.properties.ErrorResult(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-12654282 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

clojure.test.check.properties.ErrorResult.prototype.clojure$test$check$results$Result$ = cljs.core.PROTOCOL_SENTINEL;

clojure.test.check.properties.ErrorResult.prototype.clojure$test$check$results$Result$pass_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

clojure.test.check.properties.ErrorResult.prototype.clojure$test$check$results$Result$result_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check.properties","error","clojure.test.check.properties/error",483933635),self__.error], null);
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this4778,other4779){
var self__ = this;
var this4778__$1 = this;
return (((!((other4779 == null)))) && ((this4778__$1.constructor === other4779.constructor)) && (cljs.core._EQ_.call(null,this4778__$1.error,other4779.error)) && (cljs.core._EQ_.call(null,this4778__$1.__extmap,other4779.__extmap)));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new clojure.test.check.properties.ErrorResult(self__.error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__4776){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__4786 = cljs.core.keyword_identical_QMARK_;
var expr__4787 = k__4393__auto__;
if(cljs.core.truth_(pred__4786.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__4787))){
return (new clojure.test.check.properties.ErrorResult(G__4776,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.test.check.properties.ErrorResult(self__.error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__4776),null));
}
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"error","error",-978969032),self__.error,null))], null),self__.__extmap));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__4776){
var self__ = this;
var this__4384__auto____$1 = this;
return (new clojure.test.check.properties.ErrorResult(self__.error,G__4776,self__.__extmap,self__.__hash));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

clojure.test.check.properties.ErrorResult.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null)], null);
});

clojure.test.check.properties.ErrorResult.cljs$lang$type = true;

clojure.test.check.properties.ErrorResult.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"clojure.test.check.properties/ErrorResult",null,(1),null));
});

clojure.test.check.properties.ErrorResult.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"clojure.test.check.properties/ErrorResult");
});

/**
 * Positional factory function for clojure.test.check.properties/ErrorResult.
 */
clojure.test.check.properties.__GT_ErrorResult = (function clojure$test$check$properties$__GT_ErrorResult(error){
return (new clojure.test.check.properties.ErrorResult(error,null,null,null));
});

/**
 * Factory function for clojure.test.check.properties/ErrorResult, taking a map of keywords to field values.
 */
clojure.test.check.properties.map__GT_ErrorResult = (function clojure$test$check$properties$map__GT_ErrorResult(G__4780){
var extmap__4424__auto__ = (function (){var G__4789 = cljs.core.dissoc.call(null,G__4780,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.record_QMARK_.call(null,G__4780)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__4789);
} else {
return G__4789;
}
})();
return (new clojure.test.check.properties.ErrorResult(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__4780),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

clojure.test.check.properties.exception_QMARK_ = (function clojure$test$check$properties$exception_QMARK_(x){
return (x instanceof Error);
});
clojure.test.check.properties.apply_gen = (function clojure$test$check$properties$apply_gen(function$){
return (function (args){
var result = (function (){try{var ret = cljs.core.apply.call(null,function$,args);
if(clojure.test.check.properties.exception_QMARK_.call(null,ret)){
throw ret;
} else {
return ret;
}
}catch (e4791){var ex = e4791;
return clojure.test.check.properties.__GT_ErrorResult.call(null,ex);
}})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
});
});
/**
 * A function version of `for-all`. Takes a sequence of N generators
 *   and a function of N args, and returns a property that calls the
 *   function with generated values and tests the return value for
 *   truthiness, like with `for-all`.
 * 
 *   Example:
 * 
 *   (for-all* [gen/large-integer gen/large-integer]
 *          (fn [a b] (>= (+ a b) a)))
 */
clojure.test.check.properties.for_all_STAR_ = (function clojure$test$check$properties$for_all_STAR_(args,function$){
return clojure.test.check.generators.fmap.call(null,clojure.test.check.properties.apply_gen.call(null,function$),cljs.core.apply.call(null,clojure.test.check.generators.tuple,args));
});
clojure.test.check.properties.binding_vars = (function clojure$test$check$properties$binding_vars(bindings){
return cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),bindings));
});
clojure.test.check.properties.binding_gens = (function clojure$test$check$properties$binding_gens(bindings){
return cljs.core.map.call(null,cljs.core.second,cljs.core.partition.call(null,(2),bindings));
});
var ret__4776__auto___4796 = (function (){
/**
 * Returns a property, which is the combination of some generators and
 *   an assertion that should be true for all generated values. Properties
 *   can be used with `quick-check` or `defspec`.
 * 
 *   `for-all` takes a `let`-style bindings vector, where the right-hand
 *   side of each binding is a generator.
 * 
 *   The body should be an expression of the generated values that will
 *   be tested for truthiness, unless it is a special implementation of
 *   the clojure.test.check.results/Result protocol. Exceptions in the
 *   body will be caught and treated as failures.
 * 
 *   When there are multiple binding pairs, the earlier pairs are not
 *   visible to the later pairs.
 * 
 *   If there are multiple body expressions, all but the last one are
 *   executed for side effects, as with `do`.
 * 
 *   Example:
 * 
 *   (for-all [a gen/large-integer
 *          b gen/large-integer]
 *  (>= (+ a b) a))
 */
clojure.test.check.properties.for_all = (function clojure$test$check$properties$for_all(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4797 = arguments.length;
var i__4731__auto___4798 = (0);
while(true){
if((i__4731__auto___4798 < len__4730__auto___4797)){
args__4736__auto__.push((arguments[i__4731__auto___4798]));

var G__4799 = (i__4731__auto___4798 + (1));
i__4731__auto___4798 = G__4799;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,clojure.test.check.properties.binding_gens.call(null,bindings)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,clojure.test.check.properties.binding_vars.call(null,bindings))))),null,(1),null)),body))),null,(1),null)))));
});

clojure.test.check.properties.for_all.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clojure.test.check.properties.for_all.cljs$lang$applyTo = (function (seq4792){
var G__4793 = cljs.core.first.call(null,seq4792);
var seq4792__$1 = cljs.core.next.call(null,seq4792);
var G__4794 = cljs.core.first.call(null,seq4792__$1);
var seq4792__$2 = cljs.core.next.call(null,seq4792__$1);
var G__4795 = cljs.core.first.call(null,seq4792__$2);
var seq4792__$3 = cljs.core.next.call(null,seq4792__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4793,G__4794,G__4795,seq4792__$3);
});

return null;
})()
;
clojure.test.check.properties.for_all.cljs$lang$macro = true;


//# sourceMappingURL=properties.js.map
