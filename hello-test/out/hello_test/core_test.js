// Compiled by ClojureScript 1.10.520 {}
goog.provide('hello_test.core_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('clojure.test.check.generators');
goog.require('clojure.test.check.properties');
goog.require('clojure.test.check.clojure_test');
goog.require('cuerdas.core');
goog.require('hello_test.core');
hello_test.core_test.profanity_filter_test = (function hello_test$core_test$profanity_filter_test(){
return cljs.test.test_var.call(null,hello_test.core_test.profanity_filter_test.cljs$lang$var);
});
hello_test.core_test.profanity_filter_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Filter replaced bad word");

try{try{var values__876__auto___6628 = (new cljs.core.List(null,"Clojure is great",(new cljs.core.List(null,hello_test.core.profanity_filter.call(null,"Clojure is bad"),null,(1),null)),(2),null));
var result__877__auto___6629 = cljs.core.apply.call(null,cljs.core._EQ_,values__876__auto___6628);
if(cljs.core.truth_(result__877__auto___6629)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Clojure is great",cljs.core.list(new cljs.core.Symbol(null,"profanity-filter","profanity-filter",349388657,null),"Clojure is bad")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__876__auto___6628),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Clojure is great",cljs.core.list(new cljs.core.Symbol(null,"profanity-filter","profanity-filter",349388657,null),"Clojure is bad")),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__876__auto___6628),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e6625){var t__921__auto___6630 = e6625;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Clojure is great",cljs.core.list(new cljs.core.Symbol(null,"profanity-filter","profanity-filter",349388657,null),"Clojure is bad")),new cljs.core.Keyword(null,"actual","actual",107306363),t__921__auto___6630,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Filter does not replace good words");

try{try{var values__876__auto___6631 = (new cljs.core.List(null,"Clojure is great",(new cljs.core.List(null,hello_test.core.profanity_filter.call(null,"Clojure is great"),null,(1),null)),(2),null));
var result__877__auto___6632 = cljs.core.apply.call(null,cljs.core._EQ_,values__876__auto___6631);
if(cljs.core.truth_(result__877__auto___6632)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Clojure is great",cljs.core.list(new cljs.core.Symbol(null,"profanity-filter","profanity-filter",349388657,null),"Clojure is great")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__876__auto___6631),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Clojure is great",cljs.core.list(new cljs.core.Symbol(null,"profanity-filter","profanity-filter",349388657,null),"Clojure is great")),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__876__auto___6631),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e6626){var t__921__auto___6633 = e6626;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Clojure is great",cljs.core.list(new cljs.core.Symbol(null,"profanity-filter","profanity-filter",349388657,null),"Clojure is great")),new cljs.core.Keyword(null,"actual","actual",107306363),t__921__auto___6633,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__876__auto__ = (new cljs.core.List(null,"Clojure is brilliant",(new cljs.core.List(null,hello_test.core.profanity_filter.call(null,"Clojure is brilliant"),null,(1),null)),(2),null));
var result__877__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__876__auto__);
if(cljs.core.truth_(result__877__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Clojure is brilliant",cljs.core.list(new cljs.core.Symbol(null,"profanity-filter","profanity-filter",349388657,null),"Clojure is brilliant")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__876__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Clojure is brilliant",cljs.core.list(new cljs.core.Symbol(null,"profanity-filter","profanity-filter",349388657,null),"Clojure is brilliant")),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__876__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__877__auto__;
}catch (e6627){var t__921__auto__ = e6627;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Clojure is brilliant",cljs.core.list(new cljs.core.Symbol(null,"profanity-filter","profanity-filter",349388657,null),"Clojure is brilliant")),new cljs.core.Keyword(null,"actual","actual",107306363),t__921__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

hello_test.core_test.profanity_filter_test.cljs$lang$var = new cljs.core.Var(function(){return hello_test.core_test.profanity_filter_test;},new cljs.core.Symbol("hello-test.core-test","profanity-filter-test","hello-test.core-test/profanity-filter-test",-99666698,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hello-test.core-test","hello-test.core-test",1308163442,null),new cljs.core.Symbol(null,"profanity-filter-test","profanity-filter-test",730363639,null),"C:\\Users\\nyemi\\Documents\\clojure\\workshop_activity\\hello-test\\test\\hello_test\\core_test.cljs",31,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(hello_test.core_test.profanity_filter_test)?hello_test.core_test.profanity_filter_test.cljs$lang$test:null)]));
hello_test.core_test.capitalize_test_is = (function hello_test$core_test$capitalize_test_is(){
return cljs.test.test_var.call(null,hello_test.core_test.capitalize_test_is.cljs$lang$var);
});
hello_test.core_test.capitalize_test_is.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Test capitalize? function using is macro");

try{try{var values__876__auto___6637 = (new cljs.core.List(null,"Katy",(new cljs.core.List(null,cuerdas.core.capitalize.call(null,"katy"),null,(1),null)),(2),null));
var result__877__auto___6638 = cljs.core.apply.call(null,cljs.core._EQ_,values__876__auto___6637);
if(cljs.core.truth_(result__877__auto___6638)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Katy",cljs.core.list(new cljs.core.Symbol("str","capitalize","str/capitalize",-2143095467,null),"katy")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__876__auto___6637),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Katy",cljs.core.list(new cljs.core.Symbol("str","capitalize","str/capitalize",-2143095467,null),"katy")),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__876__auto___6637),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e6634){var t__921__auto___6639 = e6634;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Katy",cljs.core.list(new cljs.core.Symbol("str","capitalize","str/capitalize",-2143095467,null),"katy")),new cljs.core.Keyword(null,"actual","actual",107306363),t__921__auto___6639,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__876__auto___6640 = (new cljs.core.List(null,"John",(new cljs.core.List(null,cuerdas.core.capital.call(null,"john"),null,(1),null)),(2),null));
var result__877__auto___6641 = cljs.core.apply.call(null,cljs.core._EQ_,values__876__auto___6640);
if(cljs.core.truth_(result__877__auto___6641)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"John",cljs.core.list(new cljs.core.Symbol("str","capital","str/capital",-1026329823,null),"john")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__876__auto___6640),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"John",cljs.core.list(new cljs.core.Symbol("str","capital","str/capital",-1026329823,null),"john")),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__876__auto___6640),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e6635){var t__921__auto___6642 = e6635;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"John",cljs.core.list(new cljs.core.Symbol("str","capital","str/capital",-1026329823,null),"john")),new cljs.core.Keyword(null,"actual","actual",107306363),t__921__auto___6642,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__876__auto__ = (new cljs.core.List(null,"Mike",(new cljs.core.List(null,cuerdas.core.capitalize.call(null,"mike"),null,(1),null)),(2),null));
var result__877__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__876__auto__);
if(cljs.core.truth_(result__877__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Mike",cljs.core.list(new cljs.core.Symbol("str","capitalize","str/capitalize",-2143095467,null),"mike")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__876__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Mike",cljs.core.list(new cljs.core.Symbol("str","capitalize","str/capitalize",-2143095467,null),"mike")),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__876__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__877__auto__;
}catch (e6636){var t__921__auto__ = e6636;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Mike",cljs.core.list(new cljs.core.Symbol("str","capitalize","str/capitalize",-2143095467,null),"mike")),new cljs.core.Keyword(null,"actual","actual",107306363),t__921__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

hello_test.core_test.capitalize_test_is.cljs$lang$var = new cljs.core.Var(function(){return hello_test.core_test.capitalize_test_is;},new cljs.core.Symbol("hello-test.core-test","capitalize-test-is","hello-test.core-test/capitalize-test-is",-1892864996,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hello-test.core-test","hello-test.core-test",1308163442,null),new cljs.core.Symbol(null,"capitalize-test-is","capitalize-test-is",-559518179,null),"C:\\Users\\nyemi\\Documents\\clojure\\workshop_activity\\hello-test\\test\\hello_test\\core_test.cljs",28,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(hello_test.core_test.capitalize_test_is)?hello_test.core_test.capitalize_test_is.cljs$lang$test:null)]));
hello_test.core_test.error_thrown_test = (function hello_test$core_test$error_thrown_test(){
return cljs.test.test_var.call(null,hello_test.core_test.error_thrown_test.cljs$lang$var);
});
hello_test.core_test.error_thrown_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Catching errors in ClojureScript");

try{try{try{cljs.core.assoc.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dog","cat","parrot"], null),(4),"apple");

return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dog","cat","parrot"], null),(4),"apple")),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}catch (e6644){if((e6644 instanceof Error)){
var e__910__auto__ = e6644;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dog","cat","parrot"], null),(4),"apple")),new cljs.core.Keyword(null,"actual","actual",107306363),e__910__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));

return e__910__auto__;
} else {
throw e6644;

}
}}catch (e6643){var t__921__auto__ = e6643;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dog","cat","parrot"], null),(4),"apple")),new cljs.core.Keyword(null,"actual","actual",107306363),t__921__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

hello_test.core_test.error_thrown_test.cljs$lang$var = new cljs.core.Var(function(){return hello_test.core_test.error_thrown_test;},new cljs.core.Symbol("hello-test.core-test","error-thrown-test","hello-test.core-test/error-thrown-test",-1047363949,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hello-test.core-test","hello-test.core-test",1308163442,null),new cljs.core.Symbol(null,"error-thrown-test","error-thrown-test",-1877295982,null),"C:\\Users\\nyemi\\Documents\\clojure\\workshop_activity\\hello-test\\test\\hello_test\\core_test.cljs",27,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(hello_test.core_test.error_thrown_test)?hello_test.core_test.error_thrown_test.cljs$lang$test:null)]));
hello_test.core_test.http_get_test = (function hello_test$core_test$http_get_test(){
return cljs.test.test_var.call(null,hello_test.core_test.http_get_test.cljs$lang$var);
});
hello_test.core_test.http_get_test.cljs$lang$test = (function (){
if((typeof hello_test !== 'undefined') && (typeof hello_test.core_test !== 'undefined') && (typeof hello_test.core_test.t_hello_test$core_test6645 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
hello_test.core_test.t_hello_test$core_test6645 = (function (meta6646){
this.meta6646 = meta6646;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
hello_test.core_test.t_hello_test$core_test6645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6647,meta6646__$1){
var self__ = this;
var _6647__$1 = this;
return (new hello_test.core_test.t_hello_test$core_test6645(meta6646__$1));
});

hello_test.core_test.t_hello_test$core_test6645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6647){
var self__ = this;
var _6647__$1 = this;
return self__.meta6646;
});

hello_test.core_test.t_hello_test$core_test6645.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

hello_test.core_test.t_hello_test$core_test6645.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___951__auto__ = self____$1;
return hello_test.core.http_get.call(null,"https://api.github.com/users",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"queryparams","queryparams",607245222),new cljs.core.PersistentArrayMap(null, 1, ["since",(135)], null)], null),((function (___951__auto__,self____$1){
return (function (response){
try{var values__876__auto___6651 = (new cljs.core.List(null,(200),(new cljs.core.List(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response),null,(1),null)),(2),null));
var result__877__auto___6652 = cljs.core.apply.call(null,cljs.core._EQ_,values__876__auto___6651);
if(cljs.core.truth_(result__877__auto___6652)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(200),cljs.core.list(new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Symbol(null,"response","response",572107335,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__876__auto___6651),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(200),cljs.core.list(new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Symbol(null,"response","response",572107335,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__876__auto___6651),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e6649){var t__921__auto___6653 = e6649;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(200),cljs.core.list(new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Symbol(null,"response","response",572107335,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__921__auto___6653,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return done.call(null);
});})(___951__auto__,self____$1))
);
});

hello_test.core_test.t_hello_test$core_test6645.prototype.apply = (function (self__,args6648){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6648)));
});

hello_test.core_test.t_hello_test$core_test6645.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___951__auto__ = this;
return hello_test.core.http_get.call(null,"https://api.github.com/users",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"queryparams","queryparams",607245222),new cljs.core.PersistentArrayMap(null, 1, ["since",(135)], null)], null),((function (___951__auto__){
return (function (response){
try{var values__876__auto___6654 = (new cljs.core.List(null,(200),(new cljs.core.List(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response),null,(1),null)),(2),null));
var result__877__auto___6655 = cljs.core.apply.call(null,cljs.core._EQ_,values__876__auto___6654);
if(cljs.core.truth_(result__877__auto___6655)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(200),cljs.core.list(new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Symbol(null,"response","response",572107335,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__876__auto___6654),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(200),cljs.core.list(new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Symbol(null,"response","response",572107335,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__876__auto___6654),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e6650){var t__921__auto___6656 = e6650;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(200),cljs.core.list(new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Symbol(null,"response","response",572107335,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__921__auto___6656,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return done.call(null);
});})(___951__auto__))
);
});

hello_test.core_test.t_hello_test$core_test6645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta6646","meta6646",1370820458,null)], null);
});

hello_test.core_test.t_hello_test$core_test6645.cljs$lang$type = true;

hello_test.core_test.t_hello_test$core_test6645.cljs$lang$ctorStr = "hello-test.core-test/t_hello_test$core_test6645";

hello_test.core_test.t_hello_test$core_test6645.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"hello-test.core-test/t_hello_test$core_test6645");
});

/**
 * Positional factory function for hello-test.core-test/t_hello_test$core_test6645.
 */
hello_test.core_test.__GT_t_hello_test$core_test6645 = (function hello_test$core_test$__GT_t_hello_test$core_test6645(meta6646){
return (new hello_test.core_test.t_hello_test$core_test6645(meta6646));
});

}

return (new hello_test.core_test.t_hello_test$core_test6645(null));
});

hello_test.core_test.http_get_test.cljs$lang$var = new cljs.core.Var(function(){return hello_test.core_test.http_get_test;},new cljs.core.Symbol("hello-test.core-test","http-get-test","hello-test.core-test/http-get-test",1095826115,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hello-test.core-test","hello-test.core-test",1308163442,null),new cljs.core.Symbol(null,"http-get-test","http-get-test",371926210,null),"C:\\Users\\nyemi\\Documents\\clojure\\workshop_activity\\hello-test\\test\\hello_test\\core_test.cljs",23,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(hello_test.core_test.http_get_test)?hello_test.core_test.http_get_test.cljs$lang$test:null)]));
hello_test.core_test.simple_test_check = (function hello_test$core_test$simple_test_check(var_args){
var G__6660 = arguments.length;
switch (G__6660) {
case 0:
return hello_test.core_test.simple_test_check.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___6665 = arguments.length;
var i__4731__auto___6666 = (0);
while(true){
if((i__4731__auto___6666 < len__4730__auto___6665)){
args_arr__4751__auto__.push((arguments[i__4731__auto___6666]));

var G__6667 = (i__4731__auto___6666 + (1));
i__4731__auto___6666 = G__6667;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return hello_test.core_test.simple_test_check.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});
hello_test.core_test.simple_test_check.cljs$lang$test = (function (){
return clojure.test.check.clojure_test.assert_check.call(null,cljs.core.assoc.call(null,hello_test.core_test.simple_test_check.call(null),new cljs.core.Keyword(null,"test-var","test-var",-1105918373),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"simple-test-check","simple-test-check",-1094102149,null))));
});

hello_test.core_test.simple_test_check.cljs$core$IFn$_invoke$arity$0 = (function (){
var options__2019__auto__ = clojure.test.check.clojure_test.process_options.call(null,(1000));
return cljs.core.apply.call(null,hello_test.core_test.simple_test_check,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354).cljs$core$IFn$_invoke$arity$1(options__2019__auto__),cljs.core.apply.call(null,cljs.core.concat,options__2019__auto__));
});

hello_test.core_test.simple_test_check.cljs$core$IFn$_invoke$arity$variadic = (function (times__2020__auto__,p__6661){
var map__6662 = p__6661;
var map__6662__$1 = (((((!((map__6662 == null))))?(((((map__6662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6662):map__6662);
var quick_check_opts__2021__auto__ = map__6662__$1;
var options__2019__auto__ = cljs.core.merge.call(null,clojure.test.check.clojure_test.process_options.call(null,(1000)),quick_check_opts__2021__auto__);
return cljs.core.apply.call(null,clojure.test.check.quick_check,times__2020__auto__,cljs.core.vary_meta.call(null,clojure.test.check.properties.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.string_ascii], null),((function (options__2019__auto__,map__6662,map__6662__$1,quick_check_opts__2021__auto__){
return (function (some_string){
return cljs.core._EQ_.call(null,cuerdas.core.replace.call(null,some_string,"bad","great"),hello_test.core.profanity_filter.call(null,hello_test.core_test.somestring));
});})(options__2019__auto__,map__6662,map__6662__$1,quick_check_opts__2021__auto__))
),cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"simple-test-check","simple-test-check",-1094102149,null)),cljs.core.apply.call(null,cljs.core.concat,options__2019__auto__));
});

/** @this {Function} */
hello_test.core_test.simple_test_check.cljs$lang$applyTo = (function (seq6658){
var G__6659 = cljs.core.first.call(null,seq6658);
var seq6658__$1 = cljs.core.next.call(null,seq6658);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6659,seq6658__$1);
});

hello_test.core_test.simple_test_check.cljs$lang$maxFixedArity = (1);


//# sourceMappingURL=core_test.js.map
