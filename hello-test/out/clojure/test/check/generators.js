// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.test.check.generators');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.test.check.random');
goog.require('clojure.test.check.rose_tree');
goog.require('goog.string');

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
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure.test.check.generators.Generator = (function (gen,__meta,__extmap,__hash){
this.gen = gen;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k4223,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__4227 = k4223;
var G__4227__$1 = (((G__4227 instanceof cljs.core.Keyword))?G__4227.fqn:null);
switch (G__4227__$1) {
case "gen":
return self__.gen;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k4223,else__4388__auto__);

}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__4228){
var vec__4229 = p__4228;
var k__4408__auto__ = cljs.core.nth.call(null,vec__4229,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__4229,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

clojure.test.check.generators.Generator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#clojure.test.check.generators.Generator{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gen","gen",142575302),self__.gen],null))], null),self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__4222){
var self__ = this;
var G__4222__$1 = this;
return (new cljs.core.RecordIter((0),G__4222__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen","gen",142575302)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,self__.__extmap,self__.__hash));
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (236843149 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this4224,other4225){
var self__ = this;
var this4224__$1 = this;
return (((!((other4225 == null)))) && ((this4224__$1.constructor === other4225.constructor)) && (cljs.core._EQ_.call(null,this4224__$1.gen,other4225.gen)) && (cljs.core._EQ_.call(null,this4224__$1.__extmap,other4225.__extmap)));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gen","gen",142575302),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__4222){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__4232 = cljs.core.keyword_identical_QMARK_;
var expr__4233 = k__4393__auto__;
if(cljs.core.truth_(pred__4232.call(null,new cljs.core.Keyword(null,"gen","gen",142575302),expr__4233))){
return (new clojure.test.check.generators.Generator(G__4222,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__4222),null));
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"gen","gen",142575302),self__.gen,null))], null),self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__4222){
var self__ = this;
var this__4384__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,G__4222,self__.__extmap,self__.__hash));
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

clojure.test.check.generators.Generator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",1783106829,null)], null);
});

clojure.test.check.generators.Generator.cljs$lang$type = true;

clojure.test.check.generators.Generator.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"clojure.test.check.generators/Generator",null,(1),null));
});

clojure.test.check.generators.Generator.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"clojure.test.check.generators/Generator");
});

/**
 * Positional factory function for clojure.test.check.generators/Generator.
 */
clojure.test.check.generators.__GT_Generator = (function clojure$test$check$generators$__GT_Generator(gen){
return (new clojure.test.check.generators.Generator(gen,null,null,null));
});

/**
 * Factory function for clojure.test.check.generators/Generator, taking a map of keywords to field values.
 */
clojure.test.check.generators.map__GT_Generator = (function clojure$test$check$generators$map__GT_Generator(G__4226){
var extmap__4424__auto__ = (function (){var G__4235 = cljs.core.dissoc.call(null,G__4226,new cljs.core.Keyword(null,"gen","gen",142575302));
if(cljs.core.record_QMARK_.call(null,G__4226)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__4235);
} else {
return G__4235;
}
})();
return (new clojure.test.check.generators.Generator(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(G__4226),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

/**
 * Test if `x` is a generator. Generators should be treated as opaque values.
 */
clojure.test.check.generators.generator_QMARK_ = (function clojure$test$check$generators$generator_QMARK_(x){
return (x instanceof clojure.test.check.generators.Generator);
});
clojure.test.check.generators.make_gen = (function clojure$test$check$generators$make_gen(generator_fn){
return (new clojure.test.check.generators.Generator(generator_fn,null,null,null));
});
/**
 * Internal function.
 */
clojure.test.check.generators.call_gen = (function clojure$test$check$generators$call_gen(p__4237,rnd,size){
var map__4238 = p__4237;
var map__4238__$1 = (((((!((map__4238 == null))))?(((((map__4238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4238):map__4238);
var generator_fn = cljs.core.get.call(null,map__4238__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return generator_fn.call(null,rnd,size);
});
/**
 * Internal function.
 */
clojure.test.check.generators.gen_pure = (function clojure$test$check$generators$gen_pure(value){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
return value;
}));
});
/**
 * Internal function.
 */
clojure.test.check.generators.gen_fmap = (function clojure$test$check$generators$gen_fmap(k,p__4240){
var map__4241 = p__4240;
var map__4241__$1 = (((((!((map__4241 == null))))?(((((map__4241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4241):map__4241);
var h = cljs.core.get.call(null,map__4241__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return clojure.test.check.generators.make_gen.call(null,((function (map__4241,map__4241__$1,h){
return (function (rnd,size){
return k.call(null,h.call(null,rnd,size));
});})(map__4241,map__4241__$1,h))
);
});
/**
 * Internal function.
 */
clojure.test.check.generators.gen_bind = (function clojure$test$check$generators$gen_bind(p__4243,k){
var map__4244 = p__4243;
var map__4244__$1 = (((((!((map__4244 == null))))?(((((map__4244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4244):map__4244);
var h = cljs.core.get.call(null,map__4244__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return clojure.test.check.generators.make_gen.call(null,((function (map__4244,map__4244__$1,h){
return (function (rnd,size){
var vec__4246 = clojure.test.check.random.split.call(null,rnd);
var r1 = cljs.core.nth.call(null,vec__4246,(0),null);
var r2 = cljs.core.nth.call(null,vec__4246,(1),null);
var inner = h.call(null,r1,size);
var map__4249 = k.call(null,inner);
var map__4249__$1 = (((((!((map__4249 == null))))?(((((map__4249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4249):map__4249);
var result = cljs.core.get.call(null,map__4249__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return result.call(null,r2,size);
});})(map__4244,map__4244__$1,h))
);
});
/**
 * Internal function.
 * 
 *   Given a random number generator, returns an infinite lazy sequence
 *   of random number generators.
 */
clojure.test.check.generators.lazy_random_states = (function clojure$test$check$generators$lazy_random_states(rr){
return (new cljs.core.LazySeq(null,(function (){
var vec__4251 = clojure.test.check.random.split.call(null,rr);
var r1 = cljs.core.nth.call(null,vec__4251,(0),null);
var r2 = cljs.core.nth.call(null,vec__4251,(1),null);
return cljs.core.cons.call(null,r1,clojure.test.check.generators.lazy_random_states.call(null,r2));
}),null,null));
});
/**
 * Takes a collection of generators and returns a generator of vectors.
 */
clojure.test.check.generators.gen_tuple = (function clojure$test$check$generators$gen_tuple(gens){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
return cljs.core.mapv.call(null,(function (p1__4254_SHARP_,p2__4255_SHARP_){
return clojure.test.check.generators.call_gen.call(null,p1__4254_SHARP_,p2__4255_SHARP_,size);
}),gens,clojure.test.check.random.split_n.call(null,rnd,cljs.core.count.call(null,gens)));
}));
});
/**
 * Returns a generator like `gen` but with values transformed by `f`.
 *   E.g.:
 * 
 *    (gen/sample (gen/fmap str gen/nat))
 *    => ("0" "1" "0" "1" "4" "3" "6" "6" "4" "2")
 * 
 *   Also see gen/let for a macro with similar functionality.
 */
clojure.test.check.generators.fmap = (function clojure$test$check$generators$fmap(f,gen){
if(clojure.test.check.generators.generator_QMARK_.call(null,gen)){
} else {
throw (new Error(["Assert failed: ","Second arg to fmap must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.gen_fmap.call(null,(function (p1__4256_SHARP_){
return clojure.test.check.rose_tree.fmap.call(null,f,p1__4256_SHARP_);
}),gen);
});
/**
 * Creates a generator that always returns `value`,
 *   and never shrinks. You can think of this as
 *   the `constantly` of generators. E.g.:
 * 
 *    (gen/sample (gen/return 42))
 *    => (42 42 42 42 42 42 42 42 42 42)
 */
clojure.test.check.generators.return$ = (function clojure$test$check$generators$return(value){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.pure.call(null,value));
});
clojure.test.check.generators.bind_helper = (function clojure$test$check$generators$bind_helper(f){
return (function (rose){
return clojure.test.check.generators.gen_fmap.call(null,clojure.test.check.rose_tree.join,clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
return clojure.test.check.rose_tree.fmap.call(null,(function (p1__4257_SHARP_){
return clojure.test.check.generators.call_gen.call(null,f.call(null,p1__4257_SHARP_),rnd,size);
}),rose);
})));
});
});
/**
 * Creates a new generator that passes the result of `gen` into function
 *   `f`. `f` should return a new generator. This allows you to create new
 *   generators that depend on the value of other generators. For example,
 *   to create a generator of permutations which first generates a
 *   `num-elements` and then generates a shuffling of `(range num-elements)`:
 * 
 *    (gen/bind gen/nat
 *              ;; this function takes a value generated by
 *              ;; the generator above and returns a new generator
 *              ;; which shuffles the collection returned by `range`
 *              (fn [num-elements]
 *                (gen/shuffle (range num-elements))))
 * 
 *   Also see gen/let for a macro with similar functionality.
 */
clojure.test.check.generators.bind = (function clojure$test$check$generators$bind(generator,f){
if(clojure.test.check.generators.generator_QMARK_.call(null,generator)){
} else {
throw (new Error(["Assert failed: ","First arg to bind must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,generator,clojure.test.check.generators.bind_helper.call(null,f));
});
/**
 * Internal function.
 */
clojure.test.check.generators.make_size_range_seq = (function clojure$test$check$generators$make_size_range_seq(max_size){
return cljs.core.cycle.call(null,cljs.core.range.call(null,(0),max_size));
});
/**
 * Returns an infinite sequence of realized values from `generator`.
 * 
 *   Note that this function is a dev helper and is not meant to be used
 *   to build other generators.
 */
clojure.test.check.generators.sample_seq = (function clojure$test$check$generators$sample_seq(var_args){
var G__4261 = arguments.length;
switch (G__4261) {
case 1:
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.sample_seq.call(null,generator,(200));
});

clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2 = (function (generator,max_size){
var r = clojure.test.check.random.make_random.call(null);
var size_seq = clojure.test.check.generators.make_size_range_seq.call(null,max_size);
return cljs.core.map.call(null,((function (r,size_seq){
return (function (p1__4258_SHARP_,p2__4259_SHARP_){
return clojure.test.check.rose_tree.root.call(null,clojure.test.check.generators.call_gen.call(null,generator,p1__4258_SHARP_,p2__4259_SHARP_));
});})(r,size_seq))
,clojure.test.check.generators.lazy_random_states.call(null,r),size_seq);
});

clojure.test.check.generators.sample_seq.cljs$lang$maxFixedArity = 2;

/**
 * Return a sequence of `num-samples` (default 10)
 *   realized values from `generator`.
 * 
 *   The sequence starts with small values from the generator, which
 *   probably do not reflect the variety of values that will be generated
 *   during a longer test run.
 * 
 *   Note that this function is a dev helper and is not meant to be used
 *   to build other generators.
 */
clojure.test.check.generators.sample = (function clojure$test$check$generators$sample(var_args){
var G__4264 = arguments.length;
switch (G__4264) {
case 1:
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.sample.call(null,generator,(10));
});

clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_samples){
if(clojure.test.check.generators.generator_QMARK_.call(null,generator)){
} else {
throw (new Error(["Assert failed: ","First arg to sample must be a generator","\n","(generator? generator)"].join('')));
}

return cljs.core.take.call(null,num_samples,clojure.test.check.generators.sample_seq.call(null,generator));
});

clojure.test.check.generators.sample.cljs$lang$maxFixedArity = 2;

/**
 * Returns a single sample value from the generator.
 * 
 *   Note that this function is a dev helper and is not meant to be used
 *   to build other generators.
 * 
 *   Optional args:
 * 
 *   - size: the abstract size parameter, defaults to 30
 *   - seed: the seed for the random number generator, an integer
 */
clojure.test.check.generators.generate = (function clojure$test$check$generators$generate(var_args){
var G__4267 = arguments.length;
switch (G__4267) {
case 1:
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.generate.call(null,generator,(30));
});

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2 = (function (generator,size){
var rng = clojure.test.check.random.make_random.call(null);
return clojure.test.check.rose_tree.root.call(null,clojure.test.check.generators.call_gen.call(null,generator,rng,size));
});

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$3 = (function (generator,size,seed){
var rng = clojure.test.check.random.make_random.call(null,seed);
return clojure.test.check.rose_tree.root.call(null,clojure.test.check.generators.call_gen.call(null,generator,rng,size));
});

clojure.test.check.generators.generate.cljs$lang$maxFixedArity = 3;

clojure.test.check.generators.halfs = (function clojure$test$check$generators$halfs(n){
return cljs.core.take_while.call(null,(function (p1__4269_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__4269_SHARP_);
}),cljs.core.iterate.call(null,(function (p1__4270_SHARP_){
return cljs.core.quot.call(null,p1__4270_SHARP_,(2));
}),n));
});
clojure.test.check.generators.shrink_int = (function clojure$test$check$generators$shrink_int(integer){
return cljs.core.map.call(null,(function (p1__4271_SHARP_){
return (integer - p1__4271_SHARP_);
}),clojure.test.check.generators.halfs.call(null,integer));
});
clojure.test.check.generators.int_rose_tree = (function clojure$test$check$generators$int_rose_tree(value){
return clojure.test.check.rose_tree.make_rose.call(null,value,cljs.core.map.call(null,clojure.test.check.generators.int_rose_tree,clojure.test.check.generators.shrink_int.call(null,value)));
});
clojure.test.check.generators.calc_long = (function clojure$test$check$generators$calc_long(factor,lower,upper){
return cljs.core.long$.call(null,Math.floor((lower + ((factor * (1.0 + upper)) - (factor * lower)))));
});
clojure.test.check.generators.rand_range = (function clojure$test$check$generators$rand_range(rnd,lower,upper){
if((lower <= upper)){
} else {
throw (new Error("Assert failed: (<= lower upper)"));
}

return clojure.test.check.generators.calc_long.call(null,clojure.test.check.random.rand_double.call(null,rnd),lower,upper);
});
/**
 * Creates a generator that depends on the size parameter.
 *   `sized-gen` is a function that takes an integer and returns
 *   a generator.
 * 
 *   Examples:
 * 
 *    ;; generates vectors of booleans where the length always exactly
 *    ;; matches the `size` parameter
 *    (gen/sample (gen/sized (fn [size] (gen/vector gen/boolean size))))
 *    => ([]
 *        [false]
 *        [true true]
 *        [false true false]
 *        [false true true true]
 *        [false false true true false]
 *        [false true false true true false]
 *        [true false true true true false false]
 *        [true true false false false true false false]
 *        [false false false true true false true false true])
 */
clojure.test.check.generators.sized = (function clojure$test$check$generators$sized(sized_gen){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
var sized_gen__$1 = sized_gen.call(null,size);
return clojure.test.check.generators.call_gen.call(null,sized_gen__$1,rnd,size);
}));
});
/**
 * Creates a new generator with `size` always bound to `n`.
 * 
 *    (gen/sample (gen/set (gen/resize 200 gen/double)))
 *    => (#{}
 *        #{-4.994772362980037E147}
 *        #{-4.234418056487335E-146}
 *        #{}
 *        #{}
 *        #{}
 *        #{NaN}
 *        #{8.142414100982609E-63}
 *        #{-3.58429955903876E-159 2.8563794617604296E-154
 *          4.1021360195776005E-100 1.9084564045332549E-38}
 *        #{-2.1582818131881376E83 -5.8460065493236117E48 9.729260993803226E166})
 */
clojure.test.check.generators.resize = (function clojure$test$check$generators$resize(n,generator){
if(clojure.test.check.generators.generator_QMARK_.call(null,generator)){
} else {
throw (new Error(["Assert failed: ","Second arg to resize must be a generator","\n","(generator? generator)"].join('')));
}

var map__4272 = generator;
var map__4272__$1 = (((((!((map__4272 == null))))?(((((map__4272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4272):map__4272);
var gen = cljs.core.get.call(null,map__4272__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return clojure.test.check.generators.make_gen.call(null,((function (map__4272,map__4272__$1,gen){
return (function (rnd,_size){
return gen.call(null,rnd,n);
});})(map__4272,map__4272__$1,gen))
);
});
/**
 * Creates a new generator that modifies the size parameter by the
 *   given function. Intended to support generators with sizes that need
 *   to grow at different rates compared to the normal linear scaling.
 * 
 *    (gen/sample (gen/tuple (gen/scale #(/ % 10) gen/nat)
 *                           gen/nat
 *                           (gen/scale #(* % 10) gen/nat)))
 *    => ([0 0 0]  [0 1 2]  [0 2 13] [0 1 6]  [0 1 23]
 *        [0 2 42] [0 1 26] [0 1 12] [0 1 12] [0 0 3])
 */
clojure.test.check.generators.scale = (function clojure$test$check$generators$scale(f,generator){
return clojure.test.check.generators.sized.call(null,(function (n){
return clojure.test.check.generators.resize.call(null,f.call(null,n),generator);
}));
});
/**
 * Creates a generator that generates integer numbers uniformly in
 *   the range `lower` to `upper`, inclusive.
 * 
 *       (gen/sample (gen/choose 200 800))
 *       => (331 241 593 339 643 718 688 473 247 694)
 */
clojure.test.check.generators.choose = (function clojure$test$check$generators$choose(lower,upper){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,_size){
var value = clojure.test.check.generators.rand_range.call(null,rnd,lower,upper);
return clojure.test.check.rose_tree.filter.call(null,((function (value){
return (function (p1__4274_SHARP_){
return (((p1__4274_SHARP_ >= lower)) && ((p1__4274_SHARP_ <= upper)));
});})(value))
,clojure.test.check.generators.int_rose_tree.call(null,value));
}));
});
/**
 * Creates a generator that randomly chooses a value from the list of
 *   provided generators. Shrinks toward choosing an earlier generator,
 *   as well as shrinking the value generated by the chosen generator.
 * 
 *    (gen/sample (gen/one-of [gen/small-integer gen/boolean (gen/vector gen/small-integer)]))
 *    => (true [] -1 [0] [1 -4 -4 1] true 4 [] 6 true)
 */
clojure.test.check.generators.one_of = (function clojure$test$check$generators$one_of(generators){
if(cljs.core.every_QMARK_.call(null,clojure.test.check.generators.generator_QMARK_,generators)){
} else {
throw (new Error(["Assert failed: ","Arg to one-of must be a collection of generators","\n","(every? generator? generators)"].join('')));
}

if(cljs.core.seq.call(null,generators)){
} else {
throw (new Error(["Assert failed: ","one-of cannot be called with an empty collection","\n","(seq generators)"].join('')));
}

return clojure.test.check.generators.bind.call(null,clojure.test.check.generators.choose.call(null,(0),(cljs.core.count.call(null,generators) - (1))),(function (p1__4275_SHARP_){
return cljs.core.nth.call(null,generators,p1__4275_SHARP_);
}));
});
/**
 * Returns an index into the `likelihoods` sequence.
 */
clojure.test.check.generators.pick = (function clojure$test$check$generators$pick(likelihoods,n){
return cljs.core.count.call(null,cljs.core.take_while.call(null,(function (p1__4276_SHARP_){
return (p1__4276_SHARP_ <= n);
}),cljs.core.rest.call(null,cljs.core.reductions.call(null,cljs.core._PLUS_,(0),likelihoods))));
});
/**
 * Creates a generator that chooses a generator from `pairs` based on the
 *   provided likelihoods. The likelihood of a given generator being chosen is
 *   its likelihood divided by the sum of all likelihoods. Shrinks toward
 *   choosing an earlier generator, as well as shrinking the value generated
 *   by the chosen generator.
 * 
 *   Examples:
 * 
 *    (gen/sample (gen/frequency [[5 gen/small-integer] [3 (gen/vector gen/small-integer)] [2 gen/boolean]]))
 *    => (true [] -1 [0] [1 -4 -4 1] true 4 [] 6 true)
 */
clojure.test.check.generators.frequency = (function clojure$test$check$generators$frequency(pairs){
if(cljs.core.every_QMARK_.call(null,(function (p__4277){
var vec__4278 = p__4277;
var x = cljs.core.nth.call(null,vec__4278,(0),null);
var g = cljs.core.nth.call(null,vec__4278,(1),null);
return ((typeof x === 'number') && (clojure.test.check.generators.generator_QMARK_.call(null,g)));
}),pairs)){
} else {
throw (new Error(["Assert failed: ","Arg to frequency must be a list of [num generator] pairs","\n","(every? (fn [[x g]] (and (number? x) (generator? g))) pairs)"].join('')));
}

var pairs__$1 = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.pos_QMARK_,cljs.core.first),pairs);
var total = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.first,pairs__$1));
if(cljs.core.seq.call(null,pairs__$1)){
} else {
throw (new Error(["Assert failed: ","frequency must be called with at least one non-zero weight","\n","(seq pairs)"].join('')));
}

return clojure.test.check.generators.make_gen.call(null,((function (pairs__$1,total){
return (function (rnd,size){
return clojure.test.check.generators.call_gen.call(null,clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.choose.call(null,(0),(total - (1))),((function (pairs__$1,total){
return (function (x){
var idx = clojure.test.check.generators.pick.call(null,cljs.core.map.call(null,cljs.core.first,pairs__$1),clojure.test.check.rose_tree.root.call(null,x));
return clojure.test.check.generators.gen_fmap.call(null,((function (idx,pairs__$1,total){
return (function (rose){
return clojure.test.check.rose_tree.make_rose.call(null,clojure.test.check.rose_tree.root.call(null,rose),(new cljs.core.LazySeq(null,((function (idx,pairs__$1,total){
return (function (){
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = ((function (idx,pairs__$1,total){
return (function clojure$test$check$generators$frequency_$_iter__4281(s__4282){
return (new cljs.core.LazySeq(null,((function (idx,pairs__$1,total){
return (function (){
var s__4282__$1 = s__4282;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__4282__$1);
if(temp__5720__auto__){
var s__4282__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4282__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4282__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4284 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4283 = (0);
while(true){
if((i__4283 < size__4522__auto__)){
var idx__$1 = cljs.core._nth.call(null,c__4521__auto__,i__4283);
cljs.core.chunk_append.call(null,b__4284,clojure.test.check.generators.call_gen.call(null,cljs.core.second.call(null,cljs.core.nth.call(null,pairs__$1,idx__$1)),rnd,size));

var G__4285 = (i__4283 + (1));
i__4283 = G__4285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4284),clojure$test$check$generators$frequency_$_iter__4281.call(null,cljs.core.chunk_rest.call(null,s__4282__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4284),null);
}
} else {
var idx__$1 = cljs.core.first.call(null,s__4282__$2);
return cljs.core.cons.call(null,clojure.test.check.generators.call_gen.call(null,cljs.core.second.call(null,cljs.core.nth.call(null,pairs__$1,idx__$1)),rnd,size),clojure$test$check$generators$frequency_$_iter__4281.call(null,cljs.core.rest.call(null,s__4282__$2)));
}
} else {
return null;
}
break;
}
});})(idx,pairs__$1,total))
,null,null));
});})(idx,pairs__$1,total))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,idx));
})(),clojure.test.check.rose_tree.children.call(null,rose));
});})(idx,pairs__$1,total))
,null,null)));
});})(idx,pairs__$1,total))
,cljs.core.second.call(null,cljs.core.nth.call(null,pairs__$1,idx)));
});})(pairs__$1,total))
),rnd,size);
});})(pairs__$1,total))
);
});
/**
 * Creates a generator that randomly chooses an element from `coll`.
 * 
 *    (gen/sample (gen/elements [:foo :bar :baz]))
 *    => (:foo :baz :baz :bar :foo :foo :bar :bar :foo :bar)
 */
clojure.test.check.generators.elements = (function clojure$test$check$generators$elements(coll){
if(cljs.core.seq.call(null,coll)){
} else {
throw (new Error(["Assert failed: ","elements cannot be called with an empty collection","\n","(seq coll)"].join('')));
}

var v = cljs.core.vec.call(null,coll);
return clojure.test.check.generators.gen_fmap.call(null,((function (v){
return (function (p1__4286_SHARP_){
return clojure.test.check.rose_tree.fmap.call(null,v,p1__4286_SHARP_);
});})(v))
,clojure.test.check.generators.choose.call(null,(0),(cljs.core.count.call(null,v) - (1))));
});
clojure.test.check.generators.such_that_helper = (function clojure$test$check$generators$such_that_helper(pred,gen,p__4287,rng,size){
var map__4288 = p__4287;
var map__4288__$1 = (((((!((map__4288 == null))))?(((((map__4288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4288):map__4288);
var ex_fn = cljs.core.get.call(null,map__4288__$1,new cljs.core.Keyword(null,"ex-fn","ex-fn",-284925510));
var max_tries = cljs.core.get.call(null,map__4288__$1,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792));
var tries_left = max_tries;
var rng__$1 = rng;
var size__$1 = size;
while(true){
if((tries_left === (0))){
throw ex_fn.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pred","pred",1927423397),pred,new cljs.core.Keyword(null,"gen","gen",142575302),gen,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),max_tries], null));
} else {
var vec__4293 = clojure.test.check.random.split.call(null,rng__$1);
var r1 = cljs.core.nth.call(null,vec__4293,(0),null);
var r2 = cljs.core.nth.call(null,vec__4293,(1),null);
var value = clojure.test.check.generators.call_gen.call(null,gen,r1,size__$1);
if(cljs.core.truth_(pred.call(null,clojure.test.check.rose_tree.root.call(null,value)))){
return clojure.test.check.rose_tree.filter.call(null,pred,value);
} else {
var G__4296 = (tries_left - (1));
var G__4297 = r2;
var G__4298 = (size__$1 + (1));
tries_left = G__4296;
rng__$1 = G__4297;
size__$1 = G__4298;
continue;
}
}
break;
}
});
clojure.test.check.generators.default_such_that_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ex-fn","ex-fn",-284925510),(function (p__4299){
var map__4300 = p__4299;
var map__4300__$1 = (((((!((map__4300 == null))))?(((((map__4300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4300):map__4300);
var arg = map__4300__$1;
var max_tries = cljs.core.get.call(null,map__4300__$1,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792));
return cljs.core.ex_info.call(null,["Couldn't satisfy such-that predicate after ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_tries)," tries."].join(''),arg);
}),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(10)], null);
/**
 * Creates a generator that generates values from `gen` that satisfy predicate
 *   `pred`. Care is needed to ensure there is a high chance `gen` will satisfy
 *   `pred`. By default, `such-that` will try 10 times to generate a value that
 *   satisfies the predicate. If no value passes this predicate after this number
 *   of iterations, a runtime exception will be thrown. Note also that each
 *   time such-that retries, it will increase the size parameter.
 * 
 *   Examples:
 * 
 *    ;; generate non-empty vectors of integers
 *    ;; (note, gen/not-empty does exactly this)
 *    (gen/such-that not-empty (gen/vector gen/small-integer))
 * 
 *   You can customize `such-that` by passing an optional third argument, which can
 *   either be an integer representing the maximum number of times test.check
 *   will try to generate a value matching the predicate, or a map:
 * 
 *    :max-tries  positive integer, the maximum number of tries (default 10)
 *    :ex-fn      a function of one arg that will be called if test.check cannot
 *                generate a matching value; it will be passed a map with `:gen`,
 *                `:pred`, and `:max-tries` and should return an exception
 */
clojure.test.check.generators.such_that = (function clojure$test$check$generators$such_that(var_args){
var G__4303 = arguments.length;
switch (G__4303) {
case 2:
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2 = (function (pred,gen){
return clojure.test.check.generators.such_that.call(null,pred,gen,(10));
});

clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3 = (function (pred,gen,max_tries_or_opts){
var opts = ((cljs.core.integer_QMARK_.call(null,max_tries_or_opts))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),max_tries_or_opts], null):((cljs.core.map_QMARK_.call(null,max_tries_or_opts))?max_tries_or_opts:(function(){throw cljs.core.ex_info.call(null,"Bad argument to such-that!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-tries-or-opts","max-tries-or-opts",-609860571),max_tries_or_opts], null))})()
));
var opts__$1 = cljs.core.merge.call(null,clojure.test.check.generators.default_such_that_opts,opts);
if(clojure.test.check.generators.generator_QMARK_.call(null,gen)){
} else {
throw (new Error(["Assert failed: ","Second arg to such-that must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.make_gen.call(null,((function (opts,opts__$1){
return (function (rand_seed,size){
return clojure.test.check.generators.such_that_helper.call(null,pred,gen,opts__$1,rand_seed,size);
});})(opts,opts__$1))
);
});

clojure.test.check.generators.such_that.cljs$lang$maxFixedArity = 3;

/**
 * Modifies a generator so that it doesn't generate empty collections.
 * 
 *   Examples:
 * 
 *    ;; generate a vector of booleans, but never the empty vector
 *    (gen/sample (gen/not-empty (gen/vector gen/boolean)))
 *    => ([false]
 *        [false false]
 *        [false false]
 *        [false false false]
 *        [false false false false]
 *        [false true true]
 *        [true false false false]
 *        [true]
 *        [true true true false false true false]
 *        [false true true true false true true true false])
 */
clojure.test.check.generators.not_empty = (function clojure$test$check$generators$not_empty(gen){
if(clojure.test.check.generators.generator_QMARK_.call(null,gen)){
} else {
throw (new Error(["Assert failed: ","Arg to not-empty must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.such_that.call(null,cljs.core.not_empty,gen);
});
/**
 * Creates a new generator that is just like `gen`, except does not shrink
 *   at all. This can be useful when shrinking is taking a long time or is not
 *   applicable to the domain.
 */
clojure.test.check.generators.no_shrink = (function clojure$test$check$generators$no_shrink(gen){
if(clojure.test.check.generators.generator_QMARK_.call(null,gen)){
} else {
throw (new Error(["Assert failed: ","Arg to no-shrink must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.gen_fmap.call(null,(function (rose){
return clojure.test.check.rose_tree.make_rose.call(null,clojure.test.check.rose_tree.root.call(null,rose),cljs.core.PersistentVector.EMPTY);
}),gen);
});
/**
 * Creates a new generator like `gen`, but will consider nodes for shrinking
 *   even if their parent passes the test (up to one additional level).
 */
clojure.test.check.generators.shrink_2 = (function clojure$test$check$generators$shrink_2(gen){
if(clojure.test.check.generators.generator_QMARK_.call(null,gen)){
} else {
throw (new Error(["Assert failed: ","Arg to shrink-2 must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.gen_fmap.call(null,clojure.test.check.rose_tree.collapse,gen);
});
/**
 * Generates one of `true` or `false`. Shrinks to `false`.
 */
clojure.test.check.generators.boolean$ = clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null));
/**
 * Creates a generator that returns a vector, whose elements are chosen
 *   from the generators in the same position. The individual elements shrink
 *   according to their generator, but the vector will never shrink in count.
 * 
 *   Examples:
 * 
 *    (def t (tuple gen/small-integer gen/boolean))
 *    (sample t)
 *    ;; => ([1 true] [2 true] [2 false] [1 false] [0 true] [-2 false] [-6 false]
 *    ;; =>  [3 true] [-4 false] [9 true]))
 */
clojure.test.check.generators.tuple = (function clojure$test$check$generators$tuple(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4306 = arguments.length;
var i__4731__auto___4307 = (0);
while(true){
if((i__4731__auto___4307 < len__4730__auto___4306)){
args__4736__auto__.push((arguments[i__4731__auto___4307]));

var G__4308 = (i__4731__auto___4307 + (1));
i__4731__auto___4307 = G__4308;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (generators){
if(cljs.core.every_QMARK_.call(null,clojure.test.check.generators.generator_QMARK_,generators)){
} else {
throw (new Error(["Assert failed: ","Args to tuple must be generators","\n","(every? generator? generators)"].join('')));
}

return clojure.test.check.generators.gen_fmap.call(null,(function (roses){
return clojure.test.check.rose_tree.zip.call(null,cljs.core.vector,roses);
}),clojure.test.check.generators.gen_tuple.call(null,generators));
});

clojure.test.check.generators.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
clojure.test.check.generators.tuple.cljs$lang$applyTo = (function (seq4305){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4305));
});

/**
 * Generates non-negative integers bounded by the generator's `size`
 *   parameter. Shrinks to zero.
 */
clojure.test.check.generators.nat = clojure.test.check.generators.sized.call(null,(function (size){
return clojure.test.check.generators.choose.call(null,(0),size);
}));
/**
 * Generates a positive or negative integer bounded by the generator's
 *   `size` parameter. Shrinks to zero.
 */
clojure.test.check.generators.small_integer = clojure.test.check.generators.sized.call(null,(function (size){
return clojure.test.check.generators.choose.call(null,(- size),size);
}));
/**
 * Deprecated - use gen/small-integer instead.
 * 
 *   Generates a positive or negative integer bounded by the generator's
 *   `size` parameter.
 */
clojure.test.check.generators.int$ = clojure.test.check.generators.small_integer;
/**
 * Deprecated - use gen/nat instead (see also gen/large-integer).
 * 
 *   (this generator, despite its name, can generate 0)
 * 
 *   Generates nonnegative integers bounded by the generator's `size` parameter.
 */
clojure.test.check.generators.pos_int = clojure.test.check.generators.nat;
/**
 * Deprecated - use (gen/fmap - gen/nat) instead (see also gen/large-integer).
 * 
 *   (this generator, despite its name, can generate 0)
 * 
 *   Generates nonpositive integers bounded by the generator's `size` parameter.
 */
clojure.test.check.generators.neg_int = clojure.test.check.generators.fmap.call(null,(function (p1__4310_SHARP_){
return ((-1) * p1__4310_SHARP_);
}),clojure.test.check.generators.nat);
/**
 * Deprecated - use (gen/fmap inc gen/nat) instead (see also gen/large-integer).
 * 
 *   Generates positive integers bounded by the generator's `size` + 1
 */
clojure.test.check.generators.s_pos_int = clojure.test.check.generators.fmap.call(null,cljs.core.inc,clojure.test.check.generators.nat);
/**
 * Deprecated - use (gen/fmap (comp dec -) gen/nat) instead (see also gen/large-integer).
 * 
 *   Generates negative integers bounded by the generator's `size` + 1
 */
clojure.test.check.generators.s_neg_int = clojure.test.check.generators.fmap.call(null,cljs.core.dec,clojure.test.check.generators.neg_int);
/**
 * Creates a generator of vectors whose elements are chosen from
 *   `generator`. The count of the vector will be bounded by the `size`
 *   generator parameter.
 */
clojure.test.check.generators.vector = (function clojure$test$check$generators$vector(var_args){
var G__4313 = arguments.length;
switch (G__4313) {
case 1:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1 = (function (generator){
if(clojure.test.check.generators.generator_QMARK_.call(null,generator)){
} else {
throw (new Error(["Assert failed: ","Arg to vector must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.sized.call(null,(function (p1__4311_SHARP_){
return clojure.test.check.generators.choose.call(null,(0),p1__4311_SHARP_);
})),(function (num_elements_rose){
return clojure.test.check.generators.gen_fmap.call(null,(function (roses){
return clojure.test.check.rose_tree.shrink_vector.call(null,cljs.core.vector,roses);
}),clojure.test.check.generators.gen_tuple.call(null,cljs.core.repeat.call(null,clojure.test.check.rose_tree.root.call(null,num_elements_rose),generator)));
}));
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_elements){
if(clojure.test.check.generators.generator_QMARK_.call(null,generator)){
} else {
throw (new Error(["Assert failed: ","First arg to vector must be a generator","\n","(generator? generator)"].join('')));
}

return cljs.core.apply.call(null,clojure.test.check.generators.tuple,cljs.core.repeat.call(null,num_elements,generator));
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3 = (function (generator,min_elements,max_elements){
if(clojure.test.check.generators.generator_QMARK_.call(null,generator)){
} else {
throw (new Error(["Assert failed: ","First arg to vector must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.choose.call(null,min_elements,max_elements),(function (num_elements_rose){
return clojure.test.check.generators.gen_fmap.call(null,(function (roses){
return clojure.test.check.rose_tree.filter.call(null,(function (v){
return (((cljs.core.count.call(null,v) >= min_elements)) && ((cljs.core.count.call(null,v) <= max_elements)));
}),clojure.test.check.rose_tree.shrink_vector.call(null,cljs.core.vector,roses));
}),clojure.test.check.generators.gen_tuple.call(null,cljs.core.repeat.call(null,clojure.test.check.rose_tree.root.call(null,num_elements_rose),generator)));
}));
});

clojure.test.check.generators.vector.cljs$lang$maxFixedArity = 3;

/**
 * Like `vector`, but generates lists.
 */
clojure.test.check.generators.list = (function clojure$test$check$generators$list(generator){
if(clojure.test.check.generators.generator_QMARK_.call(null,generator)){
} else {
throw (new Error(["Assert failed: ","First arg to list must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.sized.call(null,(function (p1__4315_SHARP_){
return clojure.test.check.generators.choose.call(null,(0),p1__4315_SHARP_);
})),(function (num_elements_rose){
return clojure.test.check.generators.gen_fmap.call(null,(function (roses){
return clojure.test.check.rose_tree.shrink_vector.call(null,cljs.core.list,roses);
}),clojure.test.check.generators.gen_tuple.call(null,cljs.core.repeat.call(null,clojure.test.check.rose_tree.root.call(null,num_elements_rose),generator)));
}));
});
clojure.test.check.generators.swap = (function clojure$test$check$generators$swap(coll,p__4316){
var vec__4317 = p__4316;
var i1 = cljs.core.nth.call(null,vec__4317,(0),null);
var i2 = cljs.core.nth.call(null,vec__4317,(1),null);
return cljs.core.assoc.call(null,coll,i2,coll.call(null,i1),i1,coll.call(null,i2));
});
/**
 * Creates a generator that generates random permutations of
 *   `coll`. Shrinks toward the original collection: `coll`. `coll` will
 *   be coerced to a vector.
 */
clojure.test.check.generators.shuffle = (function clojure$test$check$generators$shuffle(coll){
var coll__$1 = ((cljs.core.vector_QMARK_.call(null,coll))?coll:cljs.core.vec.call(null,coll));
var index_gen = clojure.test.check.generators.choose.call(null,(0),(cljs.core.count.call(null,coll__$1) - (1)));
return clojure.test.check.generators.fmap.call(null,((function (coll__$1,index_gen){
return (function (p1__4320_SHARP_){
return cljs.core.reduce.call(null,clojure.test.check.generators.swap,coll__$1,p1__4320_SHARP_);
});})(coll__$1,index_gen))
,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.tuple.call(null,index_gen,index_gen),(0),((2) * cljs.core.count.call(null,coll__$1))));
});
/**
 * Like clojure.core/hash-map, except the values are generators.
 * Returns a generator that makes maps with the supplied keys and
 * values generated using the supplied generators.
 * 
 *     (gen/sample (gen/hash-map :a gen/boolean :b gen/nat))
 *     => ({:a false, :b 0}
 *         {:a true,  :b 1}
 *         {:a false, :b 2}
 *         {:a true,  :b 2}
 *         {:a false, :b 4}
 *         {:a false, :b 2}
 *         {:a true,  :b 3}
 *         {:a true,  :b 4}
 *         {:a false, :b 1}
 *         {:a false, :b 0})
 */
clojure.test.check.generators.hash_map = (function clojure$test$check$generators$hash_map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4323 = arguments.length;
var i__4731__auto___4324 = (0);
while(true){
if((i__4731__auto___4324 < len__4730__auto___4323)){
args__4736__auto__.push((arguments[i__4731__auto___4324]));

var G__4325 = (i__4731__auto___4324 + (1));
i__4731__auto___4324 = G__4325;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var ks = cljs.core.take_nth.call(null,(2),kvs);
var vs = cljs.core.take_nth.call(null,(2),cljs.core.rest.call(null,kvs));
if(cljs.core.every_QMARK_.call(null,clojure.test.check.generators.generator_QMARK_,vs)){
} else {
throw (new Error(["Assert failed: ","Value args to hash-map must be generators","\n","(every? generator? vs)"].join('')));
}

return clojure.test.check.generators.fmap.call(null,((function (ks,vs){
return (function (p1__4321_SHARP_){
return cljs.core.zipmap.call(null,ks,p1__4321_SHARP_);
});})(ks,vs))
,cljs.core.apply.call(null,clojure.test.check.generators.tuple,vs));
});

clojure.test.check.generators.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
clojure.test.check.generators.hash_map.cljs$lang$applyTo = (function (seq4322){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4322));
});

clojure.test.check.generators.transient_set_contains_QMARK_ = (function clojure$test$check$generators$transient_set_contains_QMARK_(s,k){
return (!((cljs.core._lookup.call(null,s,k) == null)));
});
/**
 * Returns a rose tree.
 */
clojure.test.check.generators.coll_distinct_by_STAR_ = (function clojure$test$check$generators$coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,size,num_elements,min_elements,max_tries,ex_fn){
if(cljs.core.truth_(gen)){
} else {
throw (new Error("Assert failed: gen"));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(gen))){
} else {
throw (new Error("Assert failed: (:gen gen)"));
}

var rose_trees = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var s = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
var rng__$1 = rng;
var size__$1 = size;
var tries = (0);
while(true){
if(((cljs.core._EQ_.call(null,max_tries,tries)) && ((cljs.core.count.call(null,rose_trees) < min_elements)))){
throw ex_fn.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gen","gen",142575302),gen,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),max_tries,new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),num_elements], null));
} else {
if(((cljs.core._EQ_.call(null,max_tries,tries)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,rose_trees),num_elements)))){
return clojure.test.check.rose_tree.shrink_vector.call(null,((function (rose_trees,s,rng__$1,size__$1,tries){
return (function() { 
var G__4330__delegate = function (rest__4326_SHARP_){
return cljs.core.into.call(null,empty_coll,rest__4326_SHARP_);
};
var G__4330 = function (var_args){
var rest__4326_SHARP_ = null;
if (arguments.length > 0) {
var G__4331__i = 0, G__4331__a = new Array(arguments.length -  0);
while (G__4331__i < G__4331__a.length) {G__4331__a[G__4331__i] = arguments[G__4331__i + 0]; ++G__4331__i;}
  rest__4326_SHARP_ = new cljs.core.IndexedSeq(G__4331__a,0,null);
} 
return G__4330__delegate.call(this,rest__4326_SHARP_);};
G__4330.cljs$lang$maxFixedArity = 0;
G__4330.cljs$lang$applyTo = (function (arglist__4332){
var rest__4326_SHARP_ = cljs.core.seq(arglist__4332);
return G__4330__delegate(rest__4326_SHARP_);
});
G__4330.cljs$core$IFn$_invoke$arity$variadic = G__4330__delegate;
return G__4330;
})()
;})(rose_trees,s,rng__$1,size__$1,tries))
,shuffle_fn.call(null,rng__$1,cljs.core.persistent_BANG_.call(null,rose_trees)));
} else {
var vec__4327 = clojure.test.check.random.split.call(null,rng__$1);
var rng1 = cljs.core.nth.call(null,vec__4327,(0),null);
var rng2 = cljs.core.nth.call(null,vec__4327,(1),null);
var rose = clojure.test.check.generators.call_gen.call(null,gen,rng1,size__$1);
var root = clojure.test.check.rose_tree.root.call(null,rose);
var k = key_fn.call(null,root);
if(clojure.test.check.generators.transient_set_contains_QMARK_.call(null,s,k)){
var G__4333 = rose_trees;
var G__4334 = s;
var G__4335 = rng2;
var G__4336 = (size__$1 + (1));
var G__4337 = (tries + (1));
rose_trees = G__4333;
s = G__4334;
rng__$1 = G__4335;
size__$1 = G__4336;
tries = G__4337;
continue;
} else {
var G__4338 = cljs.core.conj_BANG_.call(null,rose_trees,rose);
var G__4339 = cljs.core.conj_BANG_.call(null,s,k);
var G__4340 = rng2;
var G__4341 = size__$1;
var G__4342 = (0);
rose_trees = G__4338;
s = G__4339;
rng__$1 = G__4340;
size__$1 = G__4341;
tries = G__4342;
continue;
}

}
}
break;
}
});
/**
 * Like clojure.core/distinct? but takes a collection instead of varargs,
 *   and returns true for empty collections.
 */
clojure.test.check.generators.distinct_by_QMARK_ = (function clojure$test$check$generators$distinct_by_QMARK_(f,coll){
var or__4131__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,cljs.core.map.call(null,f,coll));
}
});
/**
 * Returns a shuffled version of coll according to the rng.
 * 
 *   Note that this is not a generator, it is just a utility function.
 */
clojure.test.check.generators.the_shuffle_fn = (function clojure$test$check$generators$the_shuffle_fn(rng,coll){
var empty_coll = cljs.core.empty.call(null,coll);
var v = cljs.core.vec.call(null,coll);
var card = cljs.core.count.call(null,coll);
var dec_card = (card - (1));
return cljs.core.into.call(null,empty_coll,cljs.core.first.call(null,cljs.core.reduce.call(null,((function (empty_coll,v,card,dec_card){
return (function (p__4343,idx){
var vec__4344 = p__4343;
var v__$1 = cljs.core.nth.call(null,vec__4344,(0),null);
var rng__$1 = cljs.core.nth.call(null,vec__4344,(1),null);
var vec__4347 = clojure.test.check.random.split.call(null,rng__$1);
var rng1 = cljs.core.nth.call(null,vec__4347,(0),null);
var rng2 = cljs.core.nth.call(null,vec__4347,(1),null);
var swap_idx = clojure.test.check.generators.rand_range.call(null,rng1,idx,dec_card);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.swap.call(null,v__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,swap_idx], null)),rng2], null);
});})(empty_coll,v,card,dec_card))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,rng], null),cljs.core.range.call(null,card))));
});
clojure.test.check.generators.coll_distinct_by = (function clojure$test$check$generators$coll_distinct_by(empty_coll,key_fn,allows_dupes_QMARK_,ordered_QMARK_,gen,p__4357){
var map__4358 = p__4357;
var map__4358__$1 = (((((!((map__4358 == null))))?(((((map__4358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4358):map__4358);
var num_elements = cljs.core.get.call(null,map__4358__$1,new cljs.core.Keyword(null,"num-elements","num-elements",1960422107));
var min_elements = cljs.core.get.call(null,map__4358__$1,new cljs.core.Keyword(null,"min-elements","min-elements",949370780));
var max_elements = cljs.core.get.call(null,map__4358__$1,new cljs.core.Keyword(null,"max-elements","max-elements",433034073));
var max_tries = cljs.core.get.call(null,map__4358__$1,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(10));
var ex_fn = cljs.core.get.call(null,map__4358__$1,new cljs.core.Keyword(null,"ex-fn","ex-fn",-284925510),((function (map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__4350_SHARP_){
return cljs.core.ex_info.call(null,"Couldn't generate enough distinct elements!",p1__4350_SHARP_);
});})(map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries))
);
var shuffle_fn = (cljs.core.truth_(ordered_QMARK_)?clojure.test.check.generators.the_shuffle_fn:((function (map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (_rng,coll){
return coll;
});})(map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
);
var hard_min_elements = (function (){var or__4131__auto__ = num_elements;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = min_elements;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return (1);
}
}
})();
if(cljs.core.truth_(num_elements)){
var size_pred = ((function (shuffle_fn,hard_min_elements,map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (p1__4351_SHARP_){
return cljs.core._EQ_.call(null,num_elements,cljs.core.count.call(null,p1__4351_SHARP_));
});})(shuffle_fn,hard_min_elements,map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
;
if((((min_elements == null)) && ((max_elements == null)))){
} else {
throw (new Error("Assert failed: (and (nil? min-elements) (nil? max-elements))"));
}

return clojure.test.check.generators.make_gen.call(null,((function (size_pred,shuffle_fn,hard_min_elements,map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (rng,gen_size){
return clojure.test.check.rose_tree.filter.call(null,(cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.call(null,size_pred,((function (size_pred,shuffle_fn,hard_min_elements,map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (p1__4352_SHARP_){
return clojure.test.check.generators.distinct_by_QMARK_.call(null,key_fn,p1__4352_SHARP_);
});})(size_pred,shuffle_fn,hard_min_elements,map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
):size_pred),clojure.test.check.generators.coll_distinct_by_STAR_.call(null,empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements,hard_min_elements,max_tries,ex_fn));
});})(size_pred,shuffle_fn,hard_min_elements,map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
);
} else {
var min_elements__$1 = (function (){var or__4131__auto__ = min_elements;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var size_pred = (cljs.core.truth_(max_elements)?((function (min_elements__$1,shuffle_fn,hard_min_elements,map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (p1__4353_SHARP_){
return (((min_elements__$1 <= cljs.core.count.call(null,p1__4353_SHARP_))) && ((cljs.core.count.call(null,p1__4353_SHARP_) <= max_elements)));
});})(min_elements__$1,shuffle_fn,hard_min_elements,map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
:((function (min_elements__$1,shuffle_fn,hard_min_elements,map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (p1__4354_SHARP_){
return (min_elements__$1 <= cljs.core.count.call(null,p1__4354_SHARP_));
});})(min_elements__$1,shuffle_fn,hard_min_elements,map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
);
return clojure.test.check.generators.gen_bind.call(null,(cljs.core.truth_(max_elements)?clojure.test.check.generators.choose.call(null,min_elements__$1,max_elements):clojure.test.check.generators.sized.call(null,((function (min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (p1__4355_SHARP_){
return clojure.test.check.generators.choose.call(null,min_elements__$1,(min_elements__$1 + p1__4355_SHARP_));
});})(min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
)),((function (min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (num_elements_rose){
var num_elements__$1 = clojure.test.check.rose_tree.root.call(null,num_elements_rose);
return clojure.test.check.generators.make_gen.call(null,((function (num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (rng,gen_size){
return clojure.test.check.rose_tree.filter.call(null,(cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.call(null,size_pred,((function (num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (p1__4356_SHARP_){
return clojure.test.check.generators.distinct_by_QMARK_.call(null,key_fn,p1__4356_SHARP_);
});})(num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
):size_pred),clojure.test.check.generators.coll_distinct_by_STAR_.call(null,empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements__$1,hard_min_elements,max_tries,ex_fn));
});})(num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
);
});})(min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__4358,map__4358__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
);
}
});
/**
 * Generates a vector of elements from the given generator, with the
 *   guarantee that the elements will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct values; it will be passed a map with
 *                 `:gen`, `:num-elements`, and `:max-tries` and should return an
 *                 exception
 */
clojure.test.check.generators.vector_distinct = (function clojure$test$check$generators$vector_distinct(var_args){
var G__4361 = arguments.length;
switch (G__4361) {
case 1:
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.vector_distinct.call(null,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(clojure.test.check.generators.generator_QMARK_.call(null,gen)){
} else {
throw (new Error(["Assert failed: ","First arg to vector-distinct must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.identity,true,true,gen,opts);
});

clojure.test.check.generators.vector_distinct.cljs$lang$maxFixedArity = 2;

/**
 * Generates a list of elements from the given generator, with the
 *   guarantee that the elements will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated list
 *  :min-elements  the min size of generated list
 *  :max-elements  the max size of generated list
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct values; it will be passed a map with
 *                 `:gen`, `:num-elements`, and `:max-tries` and should return an
 *                 exception
 */
clojure.test.check.generators.list_distinct = (function clojure$test$check$generators$list_distinct(var_args){
var G__4364 = arguments.length;
switch (G__4364) {
case 1:
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.list_distinct.call(null,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(clojure.test.check.generators.generator_QMARK_.call(null,gen)){
} else {
throw (new Error(["Assert failed: ","First arg to list-distinct must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.List.EMPTY,cljs.core.identity,true,true,gen,opts);
});

clojure.test.check.generators.list_distinct.cljs$lang$maxFixedArity = 2;

/**
 * Generates a vector of elements from the given generator, with the
 *   guarantee that (map key-fn the-vector) will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct values; it will be passed a map with
 *                 `:gen`, `:num-elements`, and `:max-tries` and should return an
 *                 exception
 */
clojure.test.check.generators.vector_distinct_by = (function clojure$test$check$generators$vector_distinct_by(var_args){
var G__4367 = arguments.length;
switch (G__4367) {
case 2:
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (key_fn,gen){
return clojure.test.check.generators.vector_distinct_by.call(null,key_fn,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3 = (function (key_fn,gen,opts){
if(clojure.test.check.generators.generator_QMARK_.call(null,gen)){
} else {
throw (new Error(["Assert failed: ","Second arg to vector-distinct-by must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.PersistentVector.EMPTY,key_fn,true,true,gen,opts);
});

clojure.test.check.generators.vector_distinct_by.cljs$lang$maxFixedArity = 3;

/**
 * Generates a list of elements from the given generator, with the
 *   guarantee that (map key-fn the-list) will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated list
 *  :min-elements  the min size of generated list
 *  :max-elements  the max size of generated list
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct values; it will be passed a map with
 *                 `:gen`, `:num-elements`, and `:max-tries` and should return an
 *                 exception
 */
clojure.test.check.generators.list_distinct_by = (function clojure$test$check$generators$list_distinct_by(var_args){
var G__4370 = arguments.length;
switch (G__4370) {
case 2:
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (key_fn,gen){
return clojure.test.check.generators.list_distinct_by.call(null,key_fn,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3 = (function (key_fn,gen,opts){
if(clojure.test.check.generators.generator_QMARK_.call(null,gen)){
} else {
throw (new Error(["Assert failed: ","Second arg to list-distinct-by must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.List.EMPTY,key_fn,true,true,gen,opts);
});

clojure.test.check.generators.list_distinct_by.cljs$lang$maxFixedArity = 3;

/**
 * Generates a set of elements from the given generator.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated set
 *  :min-elements  the min size of generated set
 *  :max-elements  the max size of generated set
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct values; it will be passed a map with
 *                 `:gen`, `:num-elements`, and `:max-tries` and should return an
 *                 exception
 */
clojure.test.check.generators.set = (function clojure$test$check$generators$set(var_args){
var G__4373 = arguments.length;
switch (G__4373) {
case 1:
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.set.call(null,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(clojure.test.check.generators.generator_QMARK_.call(null,gen)){
} else {
throw (new Error(["Assert failed: ","First arg to set must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.identity,false,false,gen,opts);
});

clojure.test.check.generators.set.cljs$lang$maxFixedArity = 2;

/**
 * Generates a sorted set of elements from the given generator.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated set
 *  :min-elements  the min size of generated set
 *  :max-elements  the max size of generated set
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct values; it will be passed a map with
 *                 `:gen`, `:num-elements`, and `:max-tries` and should return an
 *                 exception
 */
clojure.test.check.generators.sorted_set = (function clojure$test$check$generators$sorted_set(var_args){
var G__4376 = arguments.length;
switch (G__4376) {
case 1:
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.sorted_set.call(null,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(clojure.test.check.generators.generator_QMARK_.call(null,gen)){
} else {
throw (new Error(["Assert failed: ","First arg to sorted-set must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.sorted_set.call(null),cljs.core.identity,false,false,gen,opts);
});

clojure.test.check.generators.sorted_set.cljs$lang$maxFixedArity = 2;

/**
 * Creates a generator that generates maps, with keys chosen from
 *   `key-gen` and values chosen from `val-gen`.
 * 
 *   If the key generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated maps
 *  :min-elements  the min size of generated maps
 *  :max-elements  the max size of generated maps
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct keys; it will be passed a map with
 *                 `:gen` (the key-gen), `:num-elements`, and `:max-tries` and
 *                 should return an exception
 */
clojure.test.check.generators.map = (function clojure$test$check$generators$map(var_args){
var G__4379 = arguments.length;
switch (G__4379) {
case 2:
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2 = (function (key_gen,val_gen){
return clojure.test.check.generators.map.call(null,key_gen,val_gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3 = (function (key_gen,val_gen,opts){
return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.first,false,false,clojure.test.check.generators.tuple.call(null,key_gen,val_gen),opts);
});

clojure.test.check.generators.map.cljs$lang$maxFixedArity = 3;

/**
 * Generates a single uniformly random long, does not shrink.
 */
clojure.test.check.generators.gen_raw_long = clojure.test.check.generators.make_gen.call(null,(function (rnd,_size){
return clojure.test.check.rose_tree.pure.call(null,clojure.test.check.random.rand_long.call(null,rnd));
}));
clojure.test.check.generators.MAX_INTEGER = (cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.repeat.call(null,(53),(2))) - (1));
clojure.test.check.generators.MIN_INTEGER = (- clojure.test.check.generators.MAX_INTEGER);
clojure.test.check.generators.abs = (function clojure$test$check$generators$abs(x){
return Math.abs(x);
});
clojure.test.check.generators.long__GT_large_integer = (function clojure$test$check$generators$long__GT_large_integer(bit_count,x,min,max){
var res = (function (){var G__4381 = x.shiftRight(((64) - bit_count)).toNumber();
if((min === (0))){
return clojure.test.check.generators.abs.call(null,G__4381);
} else {
return G__4381;
}
})();
while(true){
if((((min <= res)) && ((res <= max)))){
return res;
} else {
var res_SINGLEQUOTE_ = (- res);
if((((min <= res_SINGLEQUOTE_)) && ((res_SINGLEQUOTE_ <= max)))){
return res_SINGLEQUOTE_;
} else {
var G__4383 = ((function (){var G__4382 = res;
if(cljs.core.odd_QMARK_.call(null,res)){
return (((res < (0)))?cljs.core.inc:cljs.core.dec).call(null,G__4382);
} else {
return G__4382;
}
})() / (2));
res = G__4383;
continue;
}
}
break;
}
});
/**
 * Like large-integer*, but assumes range includes zero.
 */
clojure.test.check.generators.large_integer_STAR__STAR_ = (function clojure$test$check$generators$large_integer_STAR__STAR_(min,max){
return clojure.test.check.generators.sized.call(null,(function (size){
var size__$1 = (function (){var x__4219__auto__ = size;
var y__4220__auto__ = (1);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var max_bit_count = (function (){var x__4222__auto__ = size__$1;
var y__4223__auto__ = (54);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return clojure.test.check.generators.gen_fmap.call(null,((function (size__$1,max_bit_count){
return (function (rose){
var vec__4384 = clojure.test.check.rose_tree.root.call(null,rose);
var bit_count = cljs.core.nth.call(null,vec__4384,(0),null);
var x = cljs.core.nth.call(null,vec__4384,(1),null);
return clojure.test.check.generators.int_rose_tree.call(null,clojure.test.check.generators.long__GT_large_integer.call(null,bit_count,x,min,max));
});})(size__$1,max_bit_count))
,clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.choose.call(null,(1),max_bit_count),clojure.test.check.generators.gen_raw_long));
}));
});
/**
 * Like large-integer, but accepts options:
 * 
 *  :min  the minimum integer (inclusive)
 *  :max  the maximum integer (inclusive)
 * 
 *   Both :min and :max are optional.
 * 
 *    (gen/sample (gen/large-integer* {:min 9000 :max 10000}))
 *    => (9000 9001 9001 9002 9000 9003 9006 9030 9005 9044)
 */
clojure.test.check.generators.large_integer_STAR_ = (function clojure$test$check$generators$large_integer_STAR_(p__4390){
var map__4391 = p__4390;
var map__4391__$1 = (((((!((map__4391 == null))))?(((((map__4391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4391):map__4391);
var min = cljs.core.get.call(null,map__4391__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__4391__$1,new cljs.core.Keyword(null,"max","max",61366548));
var min__$1 = (function (){var or__4131__auto__ = min;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.test.check.generators.MIN_INTEGER;
}
})();
var max__$1 = (function (){var or__4131__auto__ = max;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.test.check.generators.MAX_INTEGER;
}
})();
if((min__$1 <= max__$1)){
} else {
throw (new Error("Assert failed: (<= min max)"));
}

return clojure.test.check.generators.such_that.call(null,((function (min__$1,max__$1,map__4391,map__4391__$1,min,max){
return (function (p1__4387_SHARP_){
return (((min__$1 <= p1__4387_SHARP_)) && ((p1__4387_SHARP_ <= max__$1)));
});})(min__$1,max__$1,map__4391,map__4391__$1,min,max))
,(((((min__$1 <= (0))) && (((0) <= max__$1))))?clojure.test.check.generators.large_integer_STAR__STAR_.call(null,min__$1,max__$1):(((max__$1 < (0)))?clojure.test.check.generators.fmap.call(null,((function (min__$1,max__$1,map__4391,map__4391__$1,min,max){
return (function (p1__4388_SHARP_){
return (max__$1 + p1__4388_SHARP_);
});})(min__$1,max__$1,map__4391,map__4391__$1,min,max))
,clojure.test.check.generators.large_integer_STAR__STAR_.call(null,(min__$1 - max__$1),(0))):clojure.test.check.generators.fmap.call(null,((function (min__$1,max__$1,map__4391,map__4391__$1,min,max){
return (function (p1__4389_SHARP_){
return (min__$1 + p1__4389_SHARP_);
});})(min__$1,max__$1,map__4391,map__4391__$1,min,max))
,clojure.test.check.generators.large_integer_STAR__STAR_.call(null,(0),(max__$1 - min__$1))))));
});
/**
 * Generates a platform-native integer from the full available range
 *   (in clj, 64-bit Longs, and in cljs, numbers between -(2^53 - 1) and
 *   (2^53 - 1)).
 * 
 *   Use large-integer* for more control.
 */
clojure.test.check.generators.large_integer = clojure.test.check.generators.large_integer_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
clojure.test.check.generators.POS_INFINITY = Number.POSITIVE_INFINITY;
clojure.test.check.generators.NEG_INFINITY = Number.NEGATIVE_INFINITY;
clojure.test.check.generators.MAX_POS_VALUE = Number.MAX_VALUE;
clojure.test.check.generators.MIN_NEG_VALUE = (- clojure.test.check.generators.MAX_POS_VALUE);
clojure.test.check.generators.NAN = Number.NaN;
/**
 * Generates an integer uniformly in the range 0..(2^bit-count-1).
 */
clojure.test.check.generators.uniform_integer = (function clojure$test$check$generators$uniform_integer(bit_count){
if((bit_count <= (32))){
return clojure.test.check.generators.choose.call(null,(0),(function (){var G__4393 = cljs.core.long$.call(null,bit_count);
switch (G__4393) {
case (32):
return (4294967295);

break;
case (31):
return (2147483647);

break;
default:
return (((1) << bit_count) - (1));

}
})());
} else {
return clojure.test.check.generators.fmap.call(null,(function (p__4394){
var vec__4395 = p__4394;
var upper = cljs.core.nth.call(null,vec__4395,(0),null);
var lower = cljs.core.nth.call(null,vec__4395,(1),null);
return ((upper * (4294967296)) + lower);
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.uniform_integer.call(null,(bit_count - (32))),clojure.test.check.generators.uniform_integer.call(null,(32))));
}
});
clojure.test.check.generators.scalb = (function clojure$test$check$generators$scalb(x,exp){
return (x * Math.pow((2),exp));
});
/**
 * Bit-reverses an integer in the range [0, 2^52).
 */
clojure.test.check.generators.fifty_two_bit_reverse = (function clojure$test$check$generators$fifty_two_bit_reverse(n){
var out = (0);
var n__$1 = n;
var out_shifter = Math.pow((2),(52));
while(true){
if((n__$1 < (1))){
return (out * out_shifter);
} else {
var G__4399 = ((out * (2)) + (n__$1 & (1)));
var G__4400 = (n__$1 / (2));
var G__4401 = (out_shifter / (2));
out = G__4399;
n__$1 = G__4400;
out_shifter = G__4401;
continue;
}
break;
}
});
/**
 * Generates a 52-bit non-negative integer that shrinks toward having
 *   fewer lower-order bits (and shrinks to 0 if possible).
 */
clojure.test.check.generators.backwards_shrinking_significand = clojure.test.check.generators.fmap.call(null,clojure.test.check.generators.fifty_two_bit_reverse,clojure.test.check.generators.sized.call(null,(function (size){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.choose.call(null,(0),(function (){var x__4222__auto__ = size;
var y__4223__auto__ = (52);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})()),(function (rose){
return clojure.test.check.generators.uniform_integer.call(null,clojure.test.check.rose_tree.root.call(null,rose));
}));
})));
clojure.test.check.generators.get_exponent = (function clojure$test$check$generators$get_exponent(x){
if((x === (0))){
return (-1023);
} else {
var x__$1 = Math.abs(x);
var res = Math.floor((Math.log(x__$1) * Math.LOG2E));
var t = clojure.test.check.generators.scalb.call(null,x__$1,(- res));
if((t < (1))){
return (res - (1));
} else {
if(((2) <= t)){
return (res + (1));
} else {
return res;

}
}
}
});
/**
 * Generates [exp sign], where exp is in [-1023, 1023] and sign is 1
 *   or -1. Only generates values for exp and sign for which there are
 *   doubles within the given bounds.
 */
clojure.test.check.generators.double_exp_and_sign = (function clojure$test$check$generators$double_exp_and_sign(lower_bound,upper_bound){
var gen_exp = (function clojure$test$check$generators$double_exp_and_sign_$_gen_exp(lb,ub){
return clojure.test.check.generators.sized.call(null,(function (size){
var qs8 = ((1) << cljs.core.quot.call(null,(function (){var x__4222__auto__ = (200);
var y__4223__auto__ = size;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})(),(8)));
if((((lb <= (0))) && (((0) <= ub)))){
return clojure.test.check.generators.choose.call(null,(function (){var x__4219__auto__ = lb;
var y__4220__auto__ = (- qs8);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})(),(function (){var x__4222__auto__ = ub;
var y__4223__auto__ = qs8;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})());
} else {
if((ub < (0))){
return clojure.test.check.generators.choose.call(null,(function (){var x__4219__auto__ = lb;
var y__4220__auto__ = (ub - qs8);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})(),ub);
} else {
return clojure.test.check.generators.choose.call(null,lb,(function (){var x__4222__auto__ = ub;
var y__4223__auto__ = (lb + qs8);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})());

}
}
}));
});
if((((lower_bound == null)) && ((upper_bound == null)))){
return clojure.test.check.generators.tuple.call(null,gen_exp.call(null,(-1023),(1023)),clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-1.0], null)));
} else {
var lower_bound__$1 = (function (){var or__4131__auto__ = lower_bound;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.test.check.generators.MIN_NEG_VALUE;
}
})();
var upper_bound__$1 = (function (){var or__4131__auto__ = upper_bound;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.test.check.generators.MAX_POS_VALUE;
}
})();
var lbexp = (function (){var x__4219__auto__ = (-1023);
var y__4220__auto__ = clojure.test.check.generators.get_exponent.call(null,lower_bound__$1);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var ubexp = (function (){var x__4219__auto__ = (-1023);
var y__4220__auto__ = clojure.test.check.generators.get_exponent.call(null,upper_bound__$1);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
if((0.0 <= lower_bound__$1)){
return clojure.test.check.generators.tuple.call(null,gen_exp.call(null,lbexp,ubexp),clojure.test.check.generators.return$.call(null,1.0));
} else {
if((upper_bound__$1 <= 0.0)){
return clojure.test.check.generators.tuple.call(null,gen_exp.call(null,ubexp,lbexp),clojure.test.check.generators.return$.call(null,-1.0));
} else {
return clojure.test.check.generators.fmap.call(null,((function (lower_bound__$1,upper_bound__$1,lbexp,ubexp){
return (function (p__4402){
var vec__4403 = p__4402;
var exp = cljs.core.nth.call(null,vec__4403,(0),null);
var sign = cljs.core.nth.call(null,vec__4403,(1),null);
var pair = vec__4403;
if((((((sign < (0))) && ((lbexp < exp)))) || ((((sign > (0))) && ((ubexp < exp)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exp,(- sign)], null);
} else {
return pair;
}
});})(lower_bound__$1,upper_bound__$1,lbexp,ubexp))
,clojure.test.check.generators.tuple.call(null,gen_exp.call(null,(-1023),(function (){var x__4219__auto__ = ubexp;
var y__4220__auto__ = lbexp;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()),clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-1.0], null))));

}
}
}
});
/**
 * Returns [low high], the smallest and largest numbers in the given
 *   range.
 */
clojure.test.check.generators.block_bounds = (function clojure$test$check$generators$block_bounds(exp,sign){
if((sign < (0))){
var vec__4406 = clojure.test.check.generators.block_bounds.call(null,exp,(- sign));
var low = cljs.core.nth.call(null,vec__4406,(0),null);
var high = cljs.core.nth.call(null,vec__4406,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- high),(- low)], null);
} else {
if(cljs.core._EQ_.call(null,(-1023),exp)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,clojure.test.check.generators.scalb.call(null,(clojure.test.check.generators.scalb.call(null,1.0,(52)) - (1)),(-1074))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.scalb.call(null,1.0,exp),clojure.test.check.generators.scalb.call(null,(clojure.test.check.generators.scalb.call(null,1.0,(52)) - (1)),(exp - (51)))], null);
}
}
});
clojure.test.check.generators.double_finite = (function clojure$test$check$generators$double_finite(lower_bound,upper_bound){
if((((lower_bound == null)) || ((upper_bound == null)) || ((lower_bound <= upper_bound)))){
} else {
throw (new Error("Assert failed: (or (nil? lower-bound) (nil? upper-bound) (<= lower-bound upper-bound))"));
}

var pred = (cljs.core.truth_(lower_bound)?(cljs.core.truth_(upper_bound)?(function (p1__4409_SHARP_){
return (((lower_bound <= p1__4409_SHARP_)) && ((p1__4409_SHARP_ <= upper_bound)));
}):(function (p1__4410_SHARP_){
return (lower_bound <= p1__4410_SHARP_);
})):(cljs.core.truth_(upper_bound)?(function (p1__4411_SHARP_){
return (p1__4411_SHARP_ <= upper_bound);
}):null));
var gen = clojure.test.check.generators.fmap.call(null,((function (pred){
return (function (p__4412){
var vec__4413 = p__4412;
var vec__4416 = cljs.core.nth.call(null,vec__4413,(0),null);
var exp = cljs.core.nth.call(null,vec__4416,(0),null);
var sign = cljs.core.nth.call(null,vec__4416,(1),null);
var significand = cljs.core.nth.call(null,vec__4413,(1),null);
var base = ((significand / Math.pow((2),(52))) + (1));
var x = (clojure.test.check.generators.scalb.call(null,base,exp) * sign);
if(cljs.core.truth_((function (){var or__4131__auto__ = (pred == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return pred.call(null,x);
}
})())){
return x;
} else {
var vec__4419 = clojure.test.check.generators.block_bounds.call(null,exp,sign);
var low = cljs.core.nth.call(null,vec__4419,(0),null);
var high = cljs.core.nth.call(null,vec__4419,(1),null);
var block_lb = (function (){var G__4422 = low;
if(cljs.core.truth_(lower_bound)){
var x__4219__auto__ = G__4422;
var y__4220__auto__ = lower_bound;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
} else {
return G__4422;
}
})();
var block_ub = (function (){var G__4423 = high;
if(cljs.core.truth_(upper_bound)){
var x__4222__auto__ = G__4423;
var y__4223__auto__ = upper_bound;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
} else {
return G__4423;
}
})();
var x__$1 = (block_lb + ((block_ub - block_lb) * (base - (1))));
var x__4219__auto__ = (function (){var x__4222__auto__ = x__$1;
var y__4223__auto__ = block_ub;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var y__4220__auto__ = block_lb;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
}
});})(pred))
,clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.double_exp_and_sign.call(null,lower_bound,upper_bound),clojure.test.check.generators.backwards_shrinking_significand));
var G__4424 = gen;
if(cljs.core.truth_(pred)){
return clojure.test.check.generators.such_that.call(null,pred,G__4424);
} else {
return G__4424;
}
});
/**
 * Generates a 64-bit floating point number. Options:
 * 
 *  :infinite? - whether +/- infinity can be generated (default true)
 *  :NaN?      - whether NaN can be generated (default true)
 *  :min       - minimum value (inclusive, default none)
 *  :max       - maximum value (inclusive, default none)
 * 
 *   Note that the min/max options must be finite numbers. Supplying a
 *   min precludes -Infinity, and supplying a max precludes +Infinity.
 */
clojure.test.check.generators.double_STAR_ = (function clojure$test$check$generators$double_STAR_(p__4425){
var map__4426 = p__4425;
var map__4426__$1 = (((((!((map__4426 == null))))?(((((map__4426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4426):map__4426);
var infinite_QMARK_ = cljs.core.get.call(null,map__4426__$1,new cljs.core.Keyword(null,"infinite?","infinite?",-2017886608),true);
var NaN_QMARK_ = cljs.core.get.call(null,map__4426__$1,new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),true);
var min = cljs.core.get.call(null,map__4426__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__4426__$1,new cljs.core.Keyword(null,"max","max",61366548));
var frequency_arg = (function (){var G__4428 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(95),clojure.test.check.generators.double_finite.call(null,min,max)], null)], null);
var G__4428__$1 = (((((min == null))?(((max == null)) || ((0.0 <= max))):(((max == null))?(min <= 0.0):(((min <= 0.0)) && ((0.0 <= max))))))?cljs.core.conj.call(null,G__4428,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,0.0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,-0.0)], null)):G__4428);
var G__4428__$2 = (cljs.core.truth_((function (){var and__4120__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (max == null);
} else {
return and__4120__auto__;
}
})())?cljs.core.conj.call(null,G__4428__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,clojure.test.check.generators.POS_INFINITY)], null)):G__4428__$1);
var G__4428__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (min == null);
} else {
return and__4120__auto__;
}
})())?cljs.core.conj.call(null,G__4428__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,clojure.test.check.generators.NEG_INFINITY)], null)):G__4428__$2);
if(cljs.core.truth_(NaN_QMARK_)){
return cljs.core.conj.call(null,G__4428__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,clojure.test.check.generators.NAN)], null));
} else {
return G__4428__$3;
}
})();
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,frequency_arg))){
return cljs.core.second.call(null,cljs.core.first.call(null,frequency_arg));
} else {
return clojure.test.check.generators.frequency.call(null,frequency_arg);
}
});
/**
 * Generates 64-bit floating point numbers from the entire range,
 *   including +/- infinity and NaN. Use double* for more control.
 */
clojure.test.check.generators.double$ = clojure.test.check.generators.double_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Generates character from 0-255.
 */
clojure.test.check.generators.char$ = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.choose.call(null,(0),(255)));
/**
 * Generates only ascii characters.
 */
clojure.test.check.generators.char_ascii = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.choose.call(null,(32),(126)));
/**
 * Generates alphanumeric characters.
 */
clojure.test.check.generators.char_alphanumeric = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.choose.call(null,(48),(57)),clojure.test.check.generators.choose.call(null,(65),(90)),clojure.test.check.generators.choose.call(null,(97),(122))], null)));
/**
 * Deprecated - use char-alphanumeric instead.
 * 
 *   Generates alphanumeric characters.
 */
clojure.test.check.generators.char_alpha_numeric = clojure.test.check.generators.char_alphanumeric;
/**
 * Generates alpha characters.
 */
clojure.test.check.generators.char_alpha = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.choose.call(null,(65),(90)),clojure.test.check.generators.choose.call(null,(97),(122))], null)));
/**
 * Generates non-alphanumeric characters that can be in a symbol.
 */
clojure.test.check.generators.char_symbol_special = clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*","+","!","-","_","?","."], null));
/**
 * Generates characters that can be the char following first of a keyword or symbol.
 */
clojure.test.check.generators.char_symbol_noninitial = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),clojure.test.check.generators.char_alphanumeric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),clojure.test.check.generators.char_symbol_special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,":")], null)], null));
/**
 * Generates characters that can be the first char of a keyword or symbol.
 */
clojure.test.check.generators.char_symbol_initial = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),clojure.test.check.generators.char_alpha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.char_symbol_special], null)], null));
/**
 * Generates strings. May generate unprintable characters.
 */
clojure.test.check.generators.string = clojure.test.check.generators.fmap.call(null,clojure.string.join,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char$));
/**
 * Generates ascii strings.
 */
clojure.test.check.generators.string_ascii = clojure.test.check.generators.fmap.call(null,clojure.string.join,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_ascii));
/**
 * Generates alphanumeric strings.
 */
clojure.test.check.generators.string_alphanumeric = clojure.test.check.generators.fmap.call(null,clojure.string.join,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_alphanumeric));
/**
 * Deprecated - use string-alphanumeric instead.
 * 
 *   Generates alphanumeric strings.
 */
clojure.test.check.generators.string_alpha_numeric = clojure.test.check.generators.string_alphanumeric;
clojure.test.check.generators.digit_QMARK_ = (function clojure$test$check$generators$digit_QMARK_(d){
return goog.string.isNumeric(d);
});
/**
 * Returns true if c is \+ or \- and d is non-nil and a digit.
 * 
 *   Symbols that start with +3 or -2 are not readable because they look
 *   like numbers.
 */
clojure.test.check.generators._PLUS__or___digit_QMARK_ = (function clojure$test$check$generators$_PLUS__or___digit_QMARK_(c,d){
return cljs.core.boolean$.call(null,(function (){var and__4120__auto__ = d;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = ((("+" === c)) || (("-" === c)));
if(and__4120__auto____$1){
return clojure.test.check.generators.digit_QMARK_.call(null,d);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})());
});
/**
 * Generates a namespace string for a symbol/keyword.
 */
clojure.test.check.generators.symbol_name_or_namespace = clojure.test.check.generators.fmap.call(null,(function (p__4430){
var vec__4431 = p__4430;
var c = cljs.core.nth.call(null,vec__4431,(0),null);
var cs = cljs.core.nth.call(null,vec__4431,(1),null);
var s = clojure.string.join.call(null,cljs.core.cons.call(null,c,cs));
return clojure.string.replace.call(null,clojure.string.replace.call(null,s,/:{2,}/,":"),/:$/,"");
}),clojure.test.check.generators.such_that.call(null,(function (p__4434){
var vec__4435 = p__4434;
var c = cljs.core.nth.call(null,vec__4435,(0),null);
var vec__4438 = cljs.core.nth.call(null,vec__4435,(1),null);
var d = cljs.core.nth.call(null,vec__4438,(0),null);
return (!(clojure.test.check.generators._PLUS__or___digit_QMARK_.call(null,c,d)));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.char_symbol_initial,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_symbol_noninitial))));
/**
 * Scales the sizing down on a keyword or symbol generator so as to
 *   make it reasonable.
 */
clojure.test.check.generators.resize_symbolish_generator = (function clojure$test$check$generators$resize_symbolish_generator(g){
return clojure.test.check.generators.scale.call(null,(function (p1__4441_SHARP_){
return cljs.core.long$.call(null,Math.pow(p1__4441_SHARP_,0.6));
}),g);
});
/**
 * Generates keywords without namespaces.
 */
clojure.test.check.generators.keyword = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.resize_symbolish_generator.call(null,clojure.test.check.generators.fmap.call(null,cljs.core.keyword,clojure.test.check.generators.symbol_name_or_namespace))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,new cljs.core.Keyword(null,"/","/",1282502798))], null)], null));
/**
 * Generates keywords with namespaces.
 */
clojure.test.check.generators.keyword_ns = clojure.test.check.generators.resize_symbolish_generator.call(null,clojure.test.check.generators.fmap.call(null,(function (p__4442){
var vec__4443 = p__4442;
var ns = cljs.core.nth.call(null,vec__4443,(0),null);
var name = cljs.core.nth.call(null,vec__4443,(1),null);
return cljs.core.keyword.call(null,ns,name);
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.symbol_name_or_namespace,clojure.test.check.generators.symbol_name_or_namespace)));
/**
 * Generates symbols without namespaces.
 */
clojure.test.check.generators.symbol = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.resize_symbolish_generator.call(null,clojure.test.check.generators.fmap.call(null,cljs.core.symbol,clojure.test.check.generators.symbol_name_or_namespace))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,new cljs.core.Symbol(null,"/","/",-1371932971,null))], null)], null));
/**
 * Generates symbols with namespaces.
 */
clojure.test.check.generators.symbol_ns = clojure.test.check.generators.resize_symbolish_generator.call(null,clojure.test.check.generators.fmap.call(null,(function (p__4446){
var vec__4447 = p__4446;
var ns = cljs.core.nth.call(null,vec__4447,(0),null);
var name = cljs.core.nth.call(null,vec__4447,(1),null);
return cljs.core.symbol.call(null,ns,name);
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.symbol_name_or_namespace,clojure.test.check.generators.symbol_name_or_namespace)));
/**
 * Generates a small ratio (or integer) using gen/small-integer. Shrinks
 *   toward simpler ratios, which may be larger or smaller.
 */
clojure.test.check.generators.ratio = clojure.test.check.generators.fmap.call(null,(function (p__4450){
var vec__4451 = p__4450;
var a = cljs.core.nth.call(null,vec__4451,(0),null);
var b = cljs.core.nth.call(null,vec__4451,(1),null);
return (a / b);
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.small_integer,clojure.test.check.generators.fmap.call(null,cljs.core.inc,clojure.test.check.generators.nat)));
/**
 * Generates a random type-4 UUID. Does not shrink.
 */
clojure.test.check.generators.uuid = clojure.test.check.generators.no_shrink.call(null,clojure.test.check.generators.fmap.call(null,(function (nibbles){
var hex = (function clojure$test$check$generators$hex(idx){
return nibbles.call(null,idx).toString((16));
});
var rhex = ((nibbles.call(null,(15)) & (3)) + (8)).toString((16));
return cljs.core.uuid.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(3))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(5))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(6))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(7))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(8))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(9))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(10))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(11))),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(12))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(13))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(14))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(16))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(17))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(18))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(19))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(20))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(21))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(22))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(23))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(24))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(25))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(26))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(27))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(28))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(29))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(30)))].join(''));
}),clojure.test.check.generators.vector.call(null,clojure.test.check.generators.choose.call(null,(0),(15)),(31))));
clojure.test.check.generators.base_simple_type = (function clojure$test$check$generators$base_simple_type(double_gen,char_gen,string_gen){
return clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.int$,clojure.test.check.generators.large_integer,double_gen,char_gen,string_gen,clojure.test.check.generators.ratio,clojure.test.check.generators.boolean$,clojure.test.check.generators.keyword,clojure.test.check.generators.keyword_ns,clojure.test.check.generators.symbol,clojure.test.check.generators.symbol_ns,clojure.test.check.generators.uuid], null));
});
/**
 * Generates a variety of scalar types.
 */
clojure.test.check.generators.simple_type = clojure.test.check.generators.base_simple_type.call(null,clojure.test.check.generators.double$,clojure.test.check.generators.char$,clojure.test.check.generators.string);
/**
 * Generates a variety of scalar types, with printable strings.
 */
clojure.test.check.generators.simple_type_printable = clojure.test.check.generators.base_simple_type.call(null,clojure.test.check.generators.double$,clojure.test.check.generators.char_ascii,clojure.test.check.generators.string_ascii);
/**
 * Like gen/simple-type, but only generates objects that can be
 *   equal to other objects (e.g., not a NaN).
 */
clojure.test.check.generators.simple_type_equatable = clojure.test.check.generators.base_simple_type.call(null,clojure.test.check.generators.double_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),false], null)),clojure.test.check.generators.char$,clojure.test.check.generators.string);
/**
 * Like gen/simple-type-printable, but only generates objects that
 *   can be equal to other objects (e.g., not a NaN).
 */
clojure.test.check.generators.simple_type_printable_equatable = clojure.test.check.generators.base_simple_type.call(null,clojure.test.check.generators.double_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),false], null)),clojure.test.check.generators.char_ascii,clojure.test.check.generators.string_ascii);
clojure.test.check.generators.hashable_QMARK_ = (function clojure$test$check$generators$hashable_QMARK_(x){
if(typeof x === 'number'){
return cljs.core.not.call(null,(function (){var or__4131__auto__ = isNaN(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((cljs.core._EQ_.call(null,clojure.test.check.generators.NEG_INFINITY,x)) || (cljs.core._EQ_.call(null,clojure.test.check.generators.POS_INFINITY,x)));
}
})());
} else {
return true;
}
});
clojure.test.check.generators.container_type = (function clojure$test$check$generators$container_type(inner_type){
return clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.vector.call(null,inner_type),clojure.test.check.generators.list.call(null,inner_type),clojure.test.check.generators.set.call(null,clojure.test.check.generators.such_that.call(null,clojure.test.check.generators.hashable_QMARK_,inner_type)),clojure.test.check.generators.scale.call(null,(function (p1__4454_SHARP_){
return cljs.core.quot.call(null,p1__4454_SHARP_,(2));
}),clojure.test.check.generators.map.call(null,clojure.test.check.generators.such_that.call(null,clojure.test.check.generators.hashable_QMARK_,inner_type),inner_type))], null));
});
clojure.test.check.generators.size__GT_max_leaf_count = (function clojure$test$check$generators$size__GT_max_leaf_count(size){
return cljs.core.long$.call(null,Math.pow(size,1.1));
});
var log2_4458 = Math.log((2));
/**
 * Returns (not generates) a random collection of integers `xs`
 *   greater than 1 such that (<= (apply * xs) n).
 */
clojure.test.check.generators.random_pseudofactoring = ((function (log2_4458){
return (function clojure$test$check$generators$random_pseudofactoring(n,rng){
if((n <= (2))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null);
} else {
var log = Math.log(n);
var vec__4455 = clojure.test.check.random.split.call(null,rng);
var r1 = cljs.core.nth.call(null,vec__4455,(0),null);
var r2 = cljs.core.nth.call(null,vec__4455,(1),null);
var n1 = cljs.core.long$.call(null,Math.exp(((clojure.test.check.random.rand_double.call(null,r1) * (log - log2_4458)) + log2_4458)));
var n2 = cljs.core.quot.call(null,n,n1);
if(((((1) < n1)) && (((1) < n2)))){
return cljs.core.cons.call(null,n1,clojure.test.check.generators.random_pseudofactoring.call(null,n2,r2));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null);
}
}
});})(log2_4458))
;
/**
 * Like sized, but passes an rng instead of a size.
 */
clojure.test.check.generators.randomized = (function clojure$test$check$generators$randomized(func){
return clojure.test.check.generators.make_gen.call(null,(function (rng,size){
var vec__4459 = clojure.test.check.random.split.call(null,rng);
var r1 = cljs.core.nth.call(null,vec__4459,(0),null);
var r2 = cljs.core.nth.call(null,vec__4459,(1),null);
return clojure.test.check.generators.call_gen.call(null,func.call(null,r1),r2,size);
}));
});
/**
 * This is a helper for writing recursive (tree-shaped) generators. The first
 *   argument should be a function that takes a generator as an argument, and
 *   produces another generator that 'contains' that generator. The vector function
 *   in this namespace is a simple example. The second argument is a scalar
 *   generator, like boolean. For example, to produce a tree of booleans:
 * 
 *  (gen/recursive-gen gen/vector gen/boolean)
 * 
 *   Vectors or maps either recurring or containing booleans or integers:
 * 
 *  (gen/recursive-gen (fn [inner] (gen/one-of [(gen/vector inner)
 *                                              (gen/map inner inner)]))
 *                     (gen/one-of [gen/boolean gen/small-integer]))
 * 
 *   Note that raw scalar values will be generated as well. To prevent this, you
 *   can wrap the returned generator with the function passed as the first arg,
 *   e.g.:
 * 
 *  (gen/vector (gen/recursive-gen gen/vector gen/boolean))
 */
clojure.test.check.generators.recursive_gen = (function clojure$test$check$generators$recursive_gen(container_gen_fn,scalar_gen){
if(clojure.test.check.generators.generator_QMARK_.call(null,scalar_gen)){
} else {
throw (new Error(["Assert failed: ","Second arg to recursive-gen must be a generator","\n","(generator? scalar-gen)"].join('')));
}

return clojure.test.check.generators.sized.call(null,(function (size){
return clojure.test.check.generators.bind.call(null,clojure.test.check.generators.choose.call(null,(0),clojure.test.check.generators.size__GT_max_leaf_count.call(null,size)),(function (max_leaf_count){
return clojure.test.check.generators.randomized.call(null,(function (rng){
var sizes = clojure.test.check.generators.random_pseudofactoring.call(null,max_leaf_count,rng);
var sized_scalar_gen = clojure.test.check.generators.resize.call(null,size,scalar_gen);
return cljs.core.reduce.call(null,((function (sizes,sized_scalar_gen){
return (function (g,size__$1){
return clojure.test.check.generators.bind.call(null,clojure.test.check.generators.choose.call(null,(0),(10)),((function (sizes,sized_scalar_gen){
return (function (x){
if((x === (0))){
return sized_scalar_gen;
} else {
return clojure.test.check.generators.resize.call(null,size__$1,container_gen_fn.call(null,g));
}
});})(sizes,sized_scalar_gen))
);
});})(sizes,sized_scalar_gen))
,sized_scalar_gen,sizes);
}));
}));
}));
});
/**
 * A recursive generator that will generate many different, often nested, values
 */
clojure.test.check.generators.any = clojure.test.check.generators.recursive_gen.call(null,clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type);
/**
 * Like any, but avoids characters that the shell will interpret as actions,
 *   like 7 and 14 (bell and alternate character set command)
 */
clojure.test.check.generators.any_printable = clojure.test.check.generators.recursive_gen.call(null,clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type_printable);
/**
 * Like any, but only generates objects that can be equal to other objects (e.g., do
 *   not contain a NaN)
 */
clojure.test.check.generators.any_equatable = clojure.test.check.generators.recursive_gen.call(null,clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type_equatable);
/**
 * Like any, but avoids characters that the shell will interpret as actions,
 *   like 7 and 14 (bell and alternate character set command), and only generates
 *   objects that can be equal to other objects (e.g., do not contain a NaN)
 */
clojure.test.check.generators.any_printable_equatable = clojure.test.check.generators.recursive_gen.call(null,clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type_printable_equatable);
var ret__4776__auto___4470 = (function (){
/**
 * Macro for building generators using values from other generators.
 *   Uses a binding vector with the same syntax as clojure.core/let,
 *   where the right-hand side of the binding pairs are generators, and
 *   the left-hand side are names (or destructuring forms) for generated
 *   values.
 * 
 *   Subsequent generator expressions can refer to the previously bound
 *   values, in the same way as clojure.core/let.
 * 
 *   The body of the let can be either a value or a generator, and does
 *   the expected thing in either case. In this way let provides the
 *   functionality of both `bind` and `fmap`.
 * 
 *   Examples:
 * 
 *  (gen/let [strs (gen/not-empty (gen/list gen/string))
 *            s (gen/elements strs)]
 *    {:some-strings strs
 *     :one-of-those-strings s})
 * 
 *  ;; generates collections of "users" that have integer IDs
 *  ;; from 0...N-1, but are in a random order
 *  (gen/let [users (gen/list (gen/hash-map :name gen/string-ascii
 *                                          :age gen/nat))]
 *    (->> users
 *         (map #(assoc %2 :id %1) (range))
 *         (gen/shuffle)))
 */
clojure.test.check.generators.let$ = (function clojure$test$check$generators$let(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4471 = arguments.length;
var i__4731__auto___4472 = (0);
while(true){
if((i__4731__auto___4472 < len__4730__auto___4471)){
args__4736__auto__.push((arguments[i__4731__auto___4472]));

var G__4473 = (i__4731__auto___4472 + (1));
i__4731__auto___4472 = G__4473;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw (new Error(["Assert failed: ","First arg to gen/let must be a vector of bindings.","\n","(vector? bindings)"].join('')));
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw (new Error(["Assert failed: ","gen/let requires an even number of forms in binding vector","\n","(even? (count bindings))"].join('')));
}

if(cljs.core.empty_QMARK_.call(null,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"val__4462__auto__","val__4462__auto__",-526222591,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"val__4462__auto__","val__4462__auto__",-526222591,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"val__4462__auto__","val__4462__auto__",-526222591,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"val__4462__auto__","val__4462__auto__",-526222591,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
var vec__4467 = bindings;
var seq__4468 = cljs.core.seq.call(null,vec__4467);
var first__4469 = cljs.core.first.call(null,seq__4468);
var seq__4468__$1 = cljs.core.next.call(null,seq__4468);
var binding = first__4469;
var first__4469__$1 = cljs.core.first.call(null,seq__4468__$1);
var seq__4468__$2 = cljs.core.next.call(null,seq__4468__$1);
var gen = first__4469__$1;
var more = seq__4468__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null),null,(1),null)),(new cljs.core.List(null,gen,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,binding,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.test.check.generators","let","clojure.test.check.generators/let",-2079390126,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,more)))),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
}
});

clojure.test.check.generators.let$.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clojure.test.check.generators.let$.cljs$lang$applyTo = (function (seq4463){
var G__4464 = cljs.core.first.call(null,seq4463);
var seq4463__$1 = cljs.core.next.call(null,seq4463);
var G__4465 = cljs.core.first.call(null,seq4463__$1);
var seq4463__$2 = cljs.core.next.call(null,seq4463__$1);
var G__4466 = cljs.core.first.call(null,seq4463__$2);
var seq4463__$3 = cljs.core.next.call(null,seq4463__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4464,G__4465,G__4466,seq4463__$3);
});

return null;
})()
;
clojure.test.check.generators.let$.cljs$lang$macro = true;


//# sourceMappingURL=generators.js.map
