// Compiled by ClojureScript 1.10.520 {}
goog.provide('fipp.clojure');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('fipp.visit');
goog.require('fipp.edn');
fipp.clojure.block = (function fipp$clojure$block(nodes){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),nodes)], null);
});
fipp.clojure.list_group = (function fipp$clojure$list_group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___2805 = arguments.length;
var i__4731__auto___2806 = (0);
while(true){
if((i__4731__auto___2806 < len__4730__auto___2805)){
args__4736__auto__.push((arguments[i__4731__auto___2806]));

var G__2807 = (i__4731__auto___2806 + (1));
i__4731__auto___2806 = G__2807;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"(",nodes,")"], null);
});

fipp.clojure.list_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fipp.clojure.list_group.cljs$lang$applyTo = (function (seq2804){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2804));
});

fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__2808){
var vec__2809 = p__2808;
var test = cljs.core.nth.call(null,vec__2809,(0),null);
var result = cljs.core.nth.call(null,vec__2809,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__2813){
var vec__2814 = p__2813;
var seq__2815 = cljs.core.seq.call(null,vec__2814);
var first__2816 = cljs.core.first.call(null,seq__2815);
var seq__2815__$1 = cljs.core.next.call(null,seq__2815);
var head = first__2816;
var first__2816__$1 = cljs.core.first.call(null,seq__2815__$1);
var seq__2815__$2 = cljs.core.next.call(null,seq__2815__$1);
var expr = first__2816__$1;
var more = seq__2815__$2;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__2814,seq__2815,first__2816,seq__2815__$1,head,first__2816__$1,seq__2815__$2,expr,more){
return (function (p1__2812_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__2812_SHARP_);
});})(clauses,default$,vec__2814,seq__2815,first__2816,seq__2815__$1,head,first__2816__$1,seq__2815__$2,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__2818){
var vec__2819 = p__2818;
var seq__2820 = cljs.core.seq.call(null,vec__2819);
var first__2821 = cljs.core.first.call(null,seq__2820);
var seq__2820__$1 = cljs.core.next.call(null,seq__2820);
var head = first__2821;
var more = seq__2820__$1;
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__2819,seq__2820,first__2821,seq__2820__$1,head,more){
return (function (p1__2817_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__2817_SHARP_);
});})(clauses,vec__2819,seq__2820,first__2821,seq__2820__$1,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__2823){
var vec__2824 = p__2823;
var seq__2825 = cljs.core.seq.call(null,vec__2824);
var first__2826 = cljs.core.first.call(null,seq__2825);
var seq__2825__$1 = cljs.core.next.call(null,seq__2825);
var head = first__2826;
var first__2826__$1 = cljs.core.first.call(null,seq__2825__$1);
var seq__2825__$2 = cljs.core.next.call(null,seq__2825__$1);
var pred = first__2826__$1;
var first__2826__$2 = cljs.core.first.call(null,seq__2825__$2);
var seq__2825__$3 = cljs.core.next.call(null,seq__2825__$2);
var expr = first__2826__$2;
var more = seq__2825__$3;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__2824,seq__2825,first__2826,seq__2825__$1,head,first__2826__$1,seq__2825__$2,pred,first__2826__$2,seq__2825__$3,expr,more){
return (function (p1__2822_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__2822_SHARP_);
});})(clauses,default$,vec__2824,seq__2825,first__2826,seq__2825__$1,head,first__2826__$1,seq__2825__$2,pred,first__2826__$2,seq__2825__$3,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__2828){
var vec__2829 = p__2828;
var seq__2830 = cljs.core.seq.call(null,vec__2829);
var first__2831 = cljs.core.first.call(null,seq__2830);
var seq__2830__$1 = cljs.core.next.call(null,seq__2830);
var head = first__2831;
var stmts = seq__2830__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__2829,seq__2830,first__2831,seq__2830__$1,head,stmts){
return (function (p1__2827_SHARP_){
return fipp.visit.visit.call(null,p,p1__2827_SHARP_);
});})(vec__2829,seq__2830,first__2831,seq__2830__$1,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__2833){
var vec__2834 = p__2833;
var seq__2835 = cljs.core.seq.call(null,vec__2834);
var first__2836 = cljs.core.first.call(null,seq__2835);
var seq__2835__$1 = cljs.core.next.call(null,seq__2835);
var head = first__2836;
var first__2836__$1 = cljs.core.first.call(null,seq__2835__$1);
var seq__2835__$2 = cljs.core.next.call(null,seq__2835__$1);
var test = first__2836__$1;
var more = seq__2835__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__2834,seq__2835,first__2836,seq__2835__$1,head,first__2836__$1,seq__2835__$2,test,more){
return (function (p1__2832_SHARP_){
return fipp.visit.visit.call(null,p,p1__2832_SHARP_);
});})(vec__2834,seq__2835,first__2836,seq__2835__$1,head,first__2836__$1,seq__2835__$2,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__2838){
var vec__2839 = p__2838;
var seq__2840 = cljs.core.seq.call(null,vec__2839);
var first__2841 = cljs.core.first.call(null,seq__2840);
var seq__2840__$1 = cljs.core.next.call(null,seq__2840);
var params = first__2841;
var body = seq__2840__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__2839,seq__2840,first__2841,seq__2840__$1,params,body){
return (function (p1__2837_SHARP_){
return fipp.visit.visit.call(null,p,p1__2837_SHARP_);
});})(vec__2839,seq__2840,first__2841,seq__2840__$1,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__2844){
var vec__2845 = p__2844;
var seq__2846 = cljs.core.seq.call(null,vec__2845);
var first__2847 = cljs.core.first.call(null,seq__2846);
var seq__2846__$1 = cljs.core.next.call(null,seq__2846);
var head = first__2847;
var first__2847__$1 = cljs.core.first.call(null,seq__2846__$1);
var seq__2846__$2 = cljs.core.next.call(null,seq__2846__$1);
var fn_name = first__2847__$1;
var more = seq__2846__$2;
var vec__2848 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__2848,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__2848,(1),null);
var vec__2851 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__2851,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__2851,(1),null);
var vec__2854 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__2854,(0),null);
var body = cljs.core.nth.call(null,vec__2854,(1),null);
var params_on_first_line_QMARK_ = (function (){var and__4120__auto__ = params;
if(cljs.core.truth_(and__4120__auto__)){
return (((docstring == null)) && ((attr_map == null)));
} else {
return and__4120__auto__;
}
})();
var params_after_attr_map_QMARK_ = (function (){var and__4120__auto__ = params;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,params_on_first_line_QMARK_);
} else {
return and__4120__auto__;
}
})();
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__2848,docstring,more__$1,vec__2851,attr_map,more__$2,vec__2854,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__2845,seq__2846,first__2847,seq__2846__$1,head,first__2847__$1,seq__2846__$2,fn_name,more){
return (function (p1__2842_SHARP_){
return fipp.visit.visit.call(null,p,p1__2842_SHARP_);
});})(vec__2848,docstring,more__$1,vec__2851,attr_map,more__$2,vec__2854,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__2845,seq__2846,first__2847,seq__2846__$1,head,first__2847__$1,seq__2846__$2,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__2848,docstring,more__$1,vec__2851,attr_map,more__$2,vec__2854,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__2845,seq__2846,first__2847,seq__2846__$1,head,first__2847__$1,seq__2846__$2,fn_name,more){
return (function (p1__2843_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__2843_SHARP_);
});})(vec__2848,docstring,more__$1,vec__2851,attr_map,more__$2,vec__2854,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__2845,seq__2846,first__2847,seq__2846__$1,head,first__2847__$1,seq__2846__$2,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__2859){
var vec__2860 = p__2859;
var seq__2861 = cljs.core.seq.call(null,vec__2860);
var first__2862 = cljs.core.first.call(null,seq__2861);
var seq__2861__$1 = cljs.core.next.call(null,seq__2861);
var head = first__2862;
var more = seq__2861__$1;
var vec__2863 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__2863,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__2863,(1),null);
var vec__2866 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__2866,(0),null);
var body = cljs.core.nth.call(null,vec__2866,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__2863,fn_name,more__$1,vec__2866,params,body,vec__2860,seq__2861,first__2862,seq__2861__$1,head,more){
return (function (p1__2857_SHARP_){
return fipp.visit.visit.call(null,p,p1__2857_SHARP_);
});})(vec__2863,fn_name,more__$1,vec__2866,params,body,vec__2860,seq__2861,first__2862,seq__2861__$1,head,more))
,body):cljs.core.map.call(null,((function (vec__2863,fn_name,more__$1,vec__2866,params,body,vec__2860,seq__2861,first__2862,seq__2861__$1,head,more){
return (function (p1__2858_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__2858_SHARP_);
});})(vec__2863,fn_name,more__$1,vec__2866,params,body,vec__2860,seq__2861,first__2862,seq__2861__$1,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__2872){
var vec__2873 = p__2872;
var _ = cljs.core.nth.call(null,vec__2873,(0),null);
var params = cljs.core.nth.call(null,vec__2873,(1),null);
var body = cljs.core.nth.call(null,vec__2873,(2),null);
var form = vec__2873;
if(((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body)))){
var vec__2876 = cljs.core.split_with.call(null,((function (vec__2873,_,params,body,form){
return (function (p1__2869_SHARP_){
return cljs.core.not_EQ_.call(null,p1__2869_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__2873,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__2876,(0),null);
var rests = cljs.core.nth.call(null,vec__2876,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)]):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__2876,inits,rests,vec__2873,_,params,body,form){
return (function (p1__2870_SHARP_){
return cljs.core.symbol.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__2870_SHARP_ + (1)))].join(''));
});})(vec__2876,inits,rests,vec__2873,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)]):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__2876,inits,rests,params_STAR_,body_STAR_,vec__2873,_,params,body,form){
return (function (p1__2871_SHARP_){
return fipp.visit.visit.call(null,p,p1__2871_SHARP_);
});})(vec__2876,inits,rests,params_STAR_,body_STAR_,vec__2873,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__2880){
var vec__2881 = p__2880;
var seq__2882 = cljs.core.seq.call(null,vec__2881);
var first__2883 = cljs.core.first.call(null,seq__2882);
var seq__2882__$1 = cljs.core.next.call(null,seq__2882);
var head = first__2883;
var clauses = seq__2882__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__2881,seq__2882,first__2883,seq__2882__$1,head,clauses){
return (function (p1__2879_SHARP_){
return fipp.visit.visit.call(null,p,p1__2879_SHARP_);
});})(vec__2881,seq__2882,first__2883,seq__2882__$1,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__2885){
var vec__2886 = p__2885;
var seq__2887 = cljs.core.seq.call(null,vec__2886);
var first__2888 = cljs.core.first.call(null,seq__2887);
var seq__2887__$1 = cljs.core.next.call(null,seq__2887);
var head = first__2888;
var first__2888__$1 = cljs.core.first.call(null,seq__2887__$1);
var seq__2887__$2 = cljs.core.next.call(null,seq__2887__$1);
var ns_sym = first__2888__$1;
var more = seq__2887__$2;
var vec__2889 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__2889,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__2889,(1),null);
var vec__2892 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__2892,(0),null);
var specs = cljs.core.nth.call(null,vec__2892,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__2889,docstring,more__$1,vec__2892,attr_map,specs,vec__2886,seq__2887,first__2888,seq__2887__$1,head,first__2888__$1,seq__2887__$2,ns_sym,more){
return (function (p1__2884_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__2884_SHARP_);
});})(vec__2889,docstring,more__$1,vec__2892,attr_map,specs,vec__2886,seq__2887,first__2888,seq__2887__$1,head,first__2888__$1,seq__2887__$2,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__2895){
var vec__2896 = p__2895;
var macro = cljs.core.nth.call(null,vec__2896,(0),null);
var arg = cljs.core.nth.call(null,vec__2896,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__2899 = cljs.core.keyword.call(null,cljs.core.name.call(null,macro));
var G__2899__$1 = (((G__2899 instanceof cljs.core.Keyword))?G__2899.fqn:null);
switch (G__2899__$1) {
case "deref":
return "@";

break;
case "quote":
return "'";

break;
case "unquote":
return "~";

break;
case "var":
return "#'";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2899__$1)].join('')));

}
})(),fipp.visit.visit.call(null,p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__4523__auto__ = (function fipp$clojure$pretty_bindings_$_iter__2901(s__2902){
return (new cljs.core.LazySeq(null,(function (){
var s__2902__$1 = s__2902;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__2902__$1);
if(temp__5720__auto__){
var s__2902__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2902__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__2902__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__2904 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__2903 = (0);
while(true){
if((i__2903 < size__4522__auto__)){
var vec__2905 = cljs.core._nth.call(null,c__4521__auto__,i__2903);
var k = cljs.core.nth.call(null,vec__2905,(0),null);
var v = cljs.core.nth.call(null,vec__2905,(1),null);
cljs.core.chunk_append.call(null,b__2904,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__2911 = (i__2903 + (1));
i__2903 = G__2911;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2904),fipp$clojure$pretty_bindings_$_iter__2901.call(null,cljs.core.chunk_rest.call(null,s__2902__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2904),null);
}
} else {
var vec__2908 = cljs.core.first.call(null,s__2902__$2);
var k = cljs.core.nth.call(null,vec__2908,(0),null);
var v = cljs.core.nth.call(null,vec__2908,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__2901.call(null,cljs.core.rest.call(null,s__2902__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.partition.call(null,(2),bvec));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),", "], null),kvps)], null),"]"], null);
});
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__2913){
var vec__2914 = p__2913;
var seq__2915 = cljs.core.seq.call(null,vec__2914);
var first__2916 = cljs.core.first.call(null,seq__2915);
var seq__2915__$1 = cljs.core.next.call(null,seq__2915);
var head = first__2916;
var first__2916__$1 = cljs.core.first.call(null,seq__2915__$1);
var seq__2915__$2 = cljs.core.next.call(null,seq__2915__$1);
var bvec = first__2916__$1;
var body = seq__2915__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__2914,seq__2915,first__2916,seq__2915__$1,head,first__2916__$1,seq__2915__$2,bvec,body){
return (function (p1__2912_SHARP_){
return fipp.visit.visit.call(null,p,p1__2912_SHARP_);
});})(vec__2914,seq__2915,first__2916,seq__2915__$1,head,first__2916__$1,seq__2915__$2,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__2917_SHARP_){
return fipp.visit.visit.call(null,p,p1__2917_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__2918){
var vec__2919 = p__2918;
var seq__2920 = cljs.core.seq.call(null,vec__2919);
var first__2921 = cljs.core.first.call(null,seq__2920);
var seq__2920__$1 = cljs.core.next.call(null,seq__2920);
var head = first__2921;
var first__2921__$1 = cljs.core.first.call(null,seq__2920__$1);
var seq__2920__$2 = cljs.core.next.call(null,seq__2920__$1);
var fields = first__2921__$1;
var opts_PLUS_specs = seq__2920__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__2922){
var vec__2923 = p__2922;
var seq__2924 = cljs.core.seq.call(null,vec__2923);
var first__2925 = cljs.core.first.call(null,seq__2924);
var seq__2924__$1 = cljs.core.next.call(null,seq__2924);
var head = first__2925;
var opts_PLUS_specs = seq__2924__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function fipp$clojure$build_symbol_map_$_iter__2926(s__2927){
return (new cljs.core.LazySeq(null,(function (){
var s__2927__$1 = s__2927;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__2927__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__2934 = cljs.core.first.call(null,xs__6277__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__2934,(0),null);
var syms = cljs.core.nth.call(null,vec__2934,(1),null);
var iterys__4519__auto__ = ((function (s__2927__$1,vec__2934,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__2926_$_iter__2928(s__2929){
return (new cljs.core.LazySeq(null,((function (s__2927__$1,vec__2934,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__2929__$1 = s__2929;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__2929__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var sym = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__2929__$1,s__2927__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__2934,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__2926_$_iter__2928_$_iter__2930(s__2931){
return (new cljs.core.LazySeq(null,((function (s__2929__$1,s__2927__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__2934,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__2931__$1 = s__2931;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__2931__$1);
if(temp__5720__auto____$2){
var s__2931__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2931__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__2931__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__2933 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__2932 = (0);
while(true){
if((i__2932 < size__4522__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__4521__auto__,i__2932);
cljs.core.chunk_append.call(null,b__2933,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__2937 = (i__2932 + (1));
i__2932 = G__2937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2933),fipp$clojure$build_symbol_map_$_iter__2926_$_iter__2928_$_iter__2930.call(null,cljs.core.chunk_rest.call(null,s__2931__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2933),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__2931__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__2926_$_iter__2928_$_iter__2930.call(null,cljs.core.rest.call(null,s__2931__$2)));
}
} else {
return null;
}
break;
}
});})(s__2929__$1,s__2927__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__2934,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__2929__$1,s__2927__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__2934,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,fipp$clojure$build_symbol_map_$_iter__2926_$_iter__2928.call(null,cljs.core.rest.call(null,s__2929__$1)));
} else {
var G__2938 = cljs.core.rest.call(null,s__2929__$1);
s__2929__$1 = G__2938;
continue;
}
} else {
return null;
}
break;
}
});})(s__2927__$1,vec__2934,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__2927__$1,vec__2934,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,syms));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,fipp$clojure$build_symbol_map_$_iter__2926.call(null,cljs.core.rest.call(null,s__2927__$1)));
} else {
var G__2939 = cljs.core.rest.call(null,s__2927__$1);
s__2927__$1 = G__2939;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,dispatch);
})());
});
fipp.clojure.default_symbols = fipp.clojure.build_symbol_map.call(null,cljs.core.PersistentHashMap.fromArrays([fipp.clojure.pretty_fn_STAR_,fipp.clojure.pretty_condp,fipp.clojure.pretty_quote,fipp.clojure.pretty_cond,fipp.clojure.pretty_fn,fipp.clojure.pretty_arrow,fipp.clojure.pretty_reify,fipp.clojure.pretty_let,fipp.clojure.pretty_type,fipp.clojure.pretty_if,fipp.clojure.pretty_defn,fipp.clojure.pretty_ns,fipp.clojure.pretty_case],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condp","condp",1054325175,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),new cljs.core.Symbol(null,"var","var",870848730,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond","cond",1606708055,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"doto","doto",1252536074,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"some->","some->",-1011172200,null),new cljs.core.Symbol(null,"some->>","some->>",-1499987794,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reify","reify",1885539699,null)], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"if-some","if-some",1960677609,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"loop*","loop*",615029416,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"when-some","when-some",1700415903,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defmulti","defmulti",1936112154,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null)], null)]));
fipp.clojure.pprint = (function fipp$clojure$pprint(var_args){
var G__2941 = arguments.length;
switch (G__2941) {
case 1:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.clojure.pprint.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return fipp.edn.pprint.call(null,x,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbols","symbols",1211743),fipp.clojure.default_symbols], null),options));
});

fipp.clojure.pprint.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=clojure.js.map
