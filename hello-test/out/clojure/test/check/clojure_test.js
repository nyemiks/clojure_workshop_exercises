// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.test.check.clojure_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('clojure.test.check');
goog.require('clojure.test.check.clojure_test.assertions');
goog.require('clojure.test.check.impl');
clojure.test.check.clojure_test.assert_check = (function clojure$test$check$clojure_test$assert_check(p__4699){
var map__4700 = p__4699;
var map__4700__$1 = (((((!((map__4700 == null))))?(((((map__4700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4700):map__4700);
var m = map__4700__$1;
var result = cljs.core.get.call(null,map__4700__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var result_data = cljs.core.get.call(null,map__4700__$1,new cljs.core.Keyword(null,"result-data","result-data",-1724248844));
var temp__5718__auto__ = new cljs.core.Keyword("clojure.test.check.properties","error","clojure.test.check.properties/error",483933635).cljs$core$IFn$_invoke$arity$1(result_data);
if(cljs.core.truth_(temp__5718__auto__)){
var error = temp__5718__auto__;
throw error;
} else {
try{var m__2318__auto__ = m;
return clojure.test.check.clojure_test.assertions.check_results.call(null,m__2318__auto__);
}catch (e4702){var t__2089__auto__ = e4702;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.test.check.clojure-test","check?","clojure.test.check.clojure-test/check?",1276552392,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__2089__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}
});
clojure.test.check.clojure_test._STAR_default_test_count_STAR_ = (100);
/**
 * Default function passed as the :reporter-fn to clojure.test.check/quick-check.
 *   Delegates to clojure.test/report.
 */
clojure.test.check.clojure_test.default_reporter_fn = (function clojure$test$check$clojure_test$default_reporter_fn(p__4703){
var map__4704 = p__4703;
var map__4704__$1 = (((((!((map__4704 == null))))?(((((map__4704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4704):map__4704);
var args = map__4704__$1;
var type = cljs.core.get.call(null,map__4704__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__4706 = type;
var G__4706__$1 = (((G__4706 instanceof cljs.core.Keyword))?G__4706.fqn:null);
switch (G__4706__$1) {
case "complete":
var testing_vars = new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150).cljs$core$IFn$_invoke$arity$1(cljs.test._STAR_current_env_STAR_);
var params = cljs.core.merge.call(null,cljs.core.select_keys.call(null,args,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"time-elapsed-ms","time-elapsed-ms",-755913315)], null)),((cljs.core.seq.call(null,testing_vars))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test-var","test-var",-1105918373),cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.first.call(null,testing_vars))))], null):null));
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("clojure.test.check.clojure-test","complete","clojure.test.check.clojure-test/complete",909321646),new cljs.core.Keyword("clojure.test.check.clojure-test","property","clojure.test.check.clojure-test/property",1356517781),new cljs.core.Keyword(null,"property","property",-1114278232).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword("clojure.test.check.clojure-test","complete","clojure.test.check.clojure-test/complete",909321646),params], null));

break;
case "trial":
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",866433060),new cljs.core.Keyword("clojure.test.check.clojure-test","property","clojure.test.check.clojure-test/property",1356517781),new cljs.core.Keyword(null,"property","property",-1114278232).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",866433060),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"num-tests-total","num-tests-total",-2113009946).cljs$core$IFn$_invoke$arity$1(args)], null)], null));

break;
case "failure":
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("clojure.test.check.clojure-test","shrinking","clojure.test.check.clojure-test/shrinking",372289399),new cljs.core.Keyword("clojure.test.check.clojure-test","property","clojure.test.check.clojure-test/property",1356517781),new cljs.core.Keyword(null,"property","property",-1114278232).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword("clojure.test.check.clojure-test","params","clojure.test.check.clojure-test/params",1851720992),cljs.core.vec.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(args))], null));

break;
case "shrunk":
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("clojure.test.check.clojure-test","shrunk","clojure.test.check.clojure-test/shrunk",1515242807),new cljs.core.Keyword("clojure.test.check.clojure-test","property","clojure.test.check.clojure-test/property",1356517781),new cljs.core.Keyword(null,"property","property",-1114278232).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword("clojure.test.check.clojure-test","params","clojure.test.check.clojure-test/params",1851720992),cljs.core.vec.call(null,new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(args)))], null));

break;
default:
return null;

}
});
/**
 * The default options passed to clojure.test.check/quick-check
 *   by defspec.
 */
clojure.test.check.clojure_test._STAR_default_opts_STAR_ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reporter-fn","reporter-fn",1280520247),clojure.test.check.clojure_test.default_reporter_fn], null);
clojure.test.check.clojure_test.process_options = (function clojure$test$check$clojure_test$process_options(options){
if((options == null)){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),clojure.test.check.clojure_test._STAR_default_test_count_STAR_], null),clojure.test.check.clojure_test._STAR_default_opts_STAR_);
} else {
if(typeof options === 'number'){
return cljs.core.assoc.call(null,clojure.test.check.clojure_test._STAR_default_opts_STAR_,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),options);
} else {
if(cljs.core.map_QMARK_.call(null,options)){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),clojure.test.check.clojure_test._STAR_default_test_count_STAR_], null),clojure.test.check.clojure_test._STAR_default_opts_STAR_,options);
} else {
throw cljs.core.ex_info.call(null,["Invalid defspec options: ",cljs.core.pr_str.call(null,options)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bad-options","bad-options",-1002783472),options], null));

}
}
}
});
var ret__4776__auto___4713 = (function (){
/**
 * Defines a new clojure.test test var that uses `quick-check` to verify the
 *   property, running num-times trials by default.  You can call the function defined as `name`
 *   with no arguments to trigger this test directly (i.e., without starting a
 *   wider clojure.test run).  If called with arguments, the first argument is the number of
 *   trials, optionally followed by keyword arguments as defined for `quick-check`.
 */
clojure.test.check.clojure_test.defspec = (function clojure$test$check$clojure_test$defspec(var_args){
var G__4712 = arguments.length;
switch (G__4712) {
case 4:
return clojure.test.check.clojure_test.defspec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.test.check.clojure_test.defspec.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

clojure.test.check.clojure_test.defspec.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,name,property){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.test.check.clojure-test","defspec","clojure.test.check.clojure-test/defspec",338075096,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,property,null,(1),null)))));
});

clojure.test.check.clojure_test.defspec.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,name,options,property){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword("clojure.test.check.clojure-test","defspec","clojure.test.check.clojure-test/defspec",-1302456431),true,new cljs.core.Keyword(null,"test","test",577538877),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.test.check.clojure-test","assert-check","clojure.test.check.clojure-test/assert-check",-1286172103,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"test-var","test-var",-1105918373),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num-tests","num-tests",-604394415,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seed","seed",1709144854,null),new cljs.core.Symbol(null,"max-size","max-size",765565395,null),new cljs.core.Symbol(null,"reporter-fn","reporter-fn",-1373915522,null)], null)], null)], null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"options__4708__auto__","options__4708__auto__",1220967510,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.test.check.clojure-test","process-options","clojure.test.check.clojure-test/process-options",-1863241522,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__4708__auto__","options__4708__auto__",1220967510,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__4708__auto__","options__4708__auto__",1220967510,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"times__4709__auto__","times__4709__auto__",1669222985,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"as","as",1148689641),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"quick-check-opts__4710__auto__","quick-check-opts__4710__auto__",-29207872,null),null,(1),null)))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"options__4708__auto__","options__4708__auto__",1220967510,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","merge","cljs.core/merge",-822184067,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.test.check.clojure-test","process-options","clojure.test.check.clojure-test/process-options",-1863241522,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"quick-check-opts__4710__auto__","quick-check-opts__4710__auto__",-29207872,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__4709__auto__","times__4709__auto__",1669222985,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vary-meta","cljs.core/vary-meta",-938366546,null),null,(1),null)),(new cljs.core.List(null,property,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__4708__auto__","options__4708__auto__",1220967510,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

clojure.test.check.clojure_test.defspec.cljs$lang$maxFixedArity = 5;

return null;
})()
;
clojure.test.check.clojure_test.defspec.cljs$lang$macro = true;

/**
 * Controls whether property trials should be reported via clojure.test/report.
 *   Valid values include:
 * 
 *   * false - no reporting of trials (default)
 *   * a function - will be passed a clojure.test/report-style map containing
 *   :clojure.test.check/property and :clojure.test.check/trial slots
 *   * true - provides quickcheck-style trial reporting (dots) via
 *   `trial-report-dots`
 * 
 *   (Note that all reporting requires running `quick-check` within the scope of a
 *   clojure.test run (via `test-ns`, `test-all-vars`, etc.))
 * 
 *   Reporting functions offered by clojure.test.check include `trial-report-dots` and
 *   `trial-report-periodic` (which prints more verbose trial progress information
 *   every `*trial-report-period*` milliseconds).
 */
clojure.test.check.clojure_test._STAR_report_trials_STAR_ = false;
/**
 * If true, a verbose report of the property being tested, the
 *   failing return value, and the arguments provoking that failure is emitted
 *   prior to the start of the shrinking search.
 */
clojure.test.check.clojure_test._STAR_report_shrinking_STAR_ = false;
/**
 * Milliseconds between reports emitted by `trial-report-periodic`.
 */
clojure.test.check.clojure_test._STAR_trial_report_period_STAR_ = (10000);
clojure.test.check.clojure_test.last_trial_report = cljs.core.atom.call(null,(0));
clojure.test.check.clojure_test.get_property_name = (function clojure$test$check$clojure_test$get_property_name(p__4715){
var map__4716 = p__4715;
var map__4716__$1 = (((((!((map__4716 == null))))?(((((map__4716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4716):map__4716);
var report_map = map__4716__$1;
var property_fun = cljs.core.get.call(null,map__4716__$1,new cljs.core.Keyword("clojure.test.check.clojure-test","property","clojure.test.check.clojure-test/property",1356517781));
var or__4131__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,property_fun));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.test.testing_vars_str.call(null,report_map);
}
});
clojure.test.check.clojure_test.with_test_out_STAR_ = (function clojure$test$check$clojure_test$with_test_out_STAR_(f){
return f.call(null);
});
/**
 * Intended to be bound as the value of `*report-trials*`; will emit a verbose
 *   status every `*trial-report-period*` milliseconds, like this one:
 * 
 *   Passing trial 3286 / 5000 for (your-test-var-name-here) (:)
 */
clojure.test.check.clojure_test.trial_report_periodic = (function clojure$test$check$clojure_test$trial_report_periodic(m){
var t = clojure.test.check.impl.get_current_time_millis.call(null);
if(((t - clojure.test.check.clojure_test._STAR_trial_report_period_STAR_) > cljs.core.deref.call(null,clojure.test.check.clojure_test.last_trial_report))){
clojure.test.check.clojure_test.with_test_out_STAR_.call(null,((function (t){
return (function (){
return cljs.core.println.call(null,"Passing trial",cljs.core.first.call(null,new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",866433060).cljs$core$IFn$_invoke$arity$1(m)),"/",cljs.core.second.call(null,new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",866433060).cljs$core$IFn$_invoke$arity$1(m)),"for",clojure.test.check.clojure_test.get_property_name.call(null,m));
});})(t))
);

return cljs.core.reset_BANG_.call(null,clojure.test.check.clojure_test.last_trial_report,t);
} else {
return null;
}
});
/**
 * Intended to be bound as the value of `*report-trials*`; will emit a single
 *   dot every 1000 trials reported.
 */
clojure.test.check.clojure_test.trial_report_dots = (function clojure$test$check$clojure_test$trial_report_dots(p__4718){
var map__4719 = p__4718;
var map__4719__$1 = (((((!((map__4719 == null))))?(((((map__4719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4719):map__4719);
var vec__4720 = cljs.core.get.call(null,map__4719__$1,new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",866433060));
var so_far = cljs.core.nth.call(null,vec__4720,(0),null);
var total = cljs.core.nth.call(null,vec__4720,(1),null);
if((so_far > (0))){
if((cljs.core.mod.call(null,so_far,(1000)) === (0))){
cljs.core.print.call(null,".");

cljs.core.flush.call(null);
} else {
}

if((so_far === total)){
return cljs.core.println.call(null);
} else {
return null;
}
} else {
return null;
}
});
/**
 * If true, completed tests report test-var, num-tests and seed. Failed tests
 *   report shrunk results. Defaults to true.
 */
clojure.test.check.clojure_test._STAR_report_completion_STAR_ = true;
if(cljs.core.not.call(null,(function (){var and__4120__auto__ = cljs.core._STAR_ns_STAR_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.re_matches.call(null,/.*\$macros/,cljs.core.name.call(null,cljs.core.ns_name.call(null,cljs.core._STAR_ns_STAR_)));
} else {
return and__4120__auto__;
}
})())){
if((!((cljs.test.report instanceof cljs.core.MultiFn)))){
var _STAR_out_STAR__orig_val__4724_4726 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__4725_4727 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__4725_4727;

try{cljs.core.println.call(null,"clojure.test/report is not a multimethod, some reporting functions have been disabled.");
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__4724_4726;
}} else {
var begin_test_var_method_4728 = cljs.core.get_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100)], null));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100)], null),((function (begin_test_var_method_4728){
return (function (m){
cljs.core.reset_BANG_.call(null,clojure.test.check.clojure_test.last_trial_report,clojure.test.check.impl.get_current_time_millis.call(null));

if(cljs.core.truth_(begin_test_var_method_4728)){
return begin_test_var_method_4728.call(null,m);
} else {
return null;
}
});})(begin_test_var_method_4728))
);

cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",866433060)], null),((function (begin_test_var_method_4728){
return (function (m){
var temp__5720__auto__ = (function (){var and__4120__auto__ = clojure.test.check.clojure_test._STAR_report_trials_STAR_;
if(and__4120__auto__){
if(clojure.test.check.clojure_test._STAR_report_trials_STAR_ === true){
return clojure.test.check.clojure_test.trial_report_dots;
} else {
return clojure.test.check.clojure_test._STAR_report_trials_STAR_;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var trial_report_fn = temp__5720__auto__;
return trial_report_fn.call(null,m);
} else {
return null;
}
});})(begin_test_var_method_4728))
);

cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword("clojure.test.check.clojure-test","shrinking","clojure.test.check.clojure-test/shrinking",372289399)], null),((function (begin_test_var_method_4728){
return (function (m){
if(clojure.test.check.clojure_test._STAR_report_shrinking_STAR_){
return clojure.test.check.clojure_test.with_test_out_STAR_.call(null,((function (begin_test_var_method_4728){
return (function (){
return cljs.core.println.call(null,"Shrinking",clojure.test.check.clojure_test.get_property_name.call(null,m),"starting with parameters",cljs.core.pr_str.call(null,new cljs.core.Keyword("clojure.test.check.clojure-test","params","clojure.test.check.clojure-test/params",1851720992).cljs$core$IFn$_invoke$arity$1(m)));
});})(begin_test_var_method_4728))
);
} else {
return null;
}
});})(begin_test_var_method_4728))
);

cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword("clojure.test.check.clojure-test","complete","clojure.test.check.clojure-test/complete",909321646)], null),((function (begin_test_var_method_4728){
return (function (m){
if(clojure.test.check.clojure_test._STAR_report_completion_STAR_){
return cljs.core.prn.call(null,new cljs.core.Keyword("clojure.test.check.clojure-test","complete","clojure.test.check.clojure-test/complete",909321646).cljs$core$IFn$_invoke$arity$1(m));
} else {
return null;
}
});})(begin_test_var_method_4728))
);

cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword("clojure.test.check.clojure-test","shrunk","clojure.test.check.clojure-test/shrunk",1515242807)], null),((function (begin_test_var_method_4728){
return (function (m){
if(clojure.test.check.clojure_test._STAR_report_completion_STAR_){
return clojure.test.check.clojure_test.with_test_out_STAR_.call(null,((function (begin_test_var_method_4728){
return (function (){
return cljs.core.prn.call(null,m);
});})(begin_test_var_method_4728))
);
} else {
return null;
}
});})(begin_test_var_method_4728))
);
}
} else {
}

//# sourceMappingURL=clojure_test.js.map
