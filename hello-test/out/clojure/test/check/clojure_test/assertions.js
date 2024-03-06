// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.test.check.clojure_test.assertions');
goog.require('cljs.core');
goog.require('cljs.test');
clojure.test.check.clojure_test.assertions.check_results = (function clojure$test$check$clojure_test$assertions$check_results(m){
if(cljs.core.truth_(new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"result","result",1415092211))], null));
} else {
return cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),true], null),new cljs.core.Keyword(null,"actual","actual",107306363),m], null),cljs.test.file_and_line.call(null,(new Error()),(4))));
}
});
clojure.test.check.clojure_test.assertions.check_QMARK_ = (function clojure$test$check$clojure_test$assertions$check_QMARK_(_,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"m__2331__auto__","m__2331__auto__",-829480667,null),null,(1),null)),(new cljs.core.List(null,cljs.core.nth.call(null,form,(1)),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.test.check.clojure-test.assertions","check-results","clojure.test.check.clojure-test.assertions/check-results",-1487737126,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__2331__auto__","m__2331__auto__",-829480667,null),null,(1),null))))),null,(1),null)))));
});
if((typeof cljs !== 'undefined') && (typeof cljs.test$macros !== 'undefined')){
cljs.core._add_method.call(null,cljs.test$macros.assert_expr,new cljs.core.Symbol("clojure.test.check.clojure-test","check?","clojure.test.check.clojure-test/check?",1276552392,null),(function (_,msg,form){
return clojure.test.check.clojure_test.assertions.check_QMARK_.call(null,msg,form);
}));
} else {
}

//# sourceMappingURL=assertions.js.map
