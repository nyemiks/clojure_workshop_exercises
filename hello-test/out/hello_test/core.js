// Compiled by ClojureScript 1.10.520 {}
goog.provide('hello_test.core');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
hello_test.core.adder = (function hello_test$core$adder(x,y){
return (x + y);
});
hello_test.core.profanity_filter = (function hello_test$core$profanity_filter(string){
if(cljs.core.truth_(cuerdas.core.includes_QMARK_.call(null,string,"bad"))){
return cuerdas.core.replace.call(null,string,"bad","great");
} else {
return string;
}
});
hello_test.core.http_get = (function hello_test$core$http_get(url,params,callback){
var c__4283__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4283__auto__){
return (function (){
var f__4284__auto__ = (function (){var switch__4188__auto__ = ((function (c__4283__auto__){
return (function (state_6519){
var state_val_6520 = (state_6519[(1)]);
if((state_val_6520 === (1))){
var inst_6514 = cljs_http.client.get.call(null,url,params);
var state_6519__$1 = state_6519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6519__$1,(2),inst_6514);
} else {
if((state_val_6520 === (2))){
var inst_6516 = (state_6519[(2)]);
var inst_6517 = callback.call(null,inst_6516);
var state_6519__$1 = state_6519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6519__$1,inst_6517);
} else {
return null;
}
}
});})(c__4283__auto__))
;
return ((function (switch__4188__auto__,c__4283__auto__){
return (function() {
var hello_test$core$http_get_$_state_machine__4189__auto__ = null;
var hello_test$core$http_get_$_state_machine__4189__auto____0 = (function (){
var statearr_6521 = [null,null,null,null,null,null,null];
(statearr_6521[(0)] = hello_test$core$http_get_$_state_machine__4189__auto__);

(statearr_6521[(1)] = (1));

return statearr_6521;
});
var hello_test$core$http_get_$_state_machine__4189__auto____1 = (function (state_6519){
while(true){
var ret_value__4190__auto__ = (function (){try{while(true){
var result__4191__auto__ = switch__4188__auto__.call(null,state_6519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4191__auto__;
}
break;
}
}catch (e6522){if((e6522 instanceof Object)){
var ex__4192__auto__ = e6522;
var statearr_6523_6525 = state_6519;
(statearr_6523_6525[(5)] = ex__4192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6526 = state_6519;
state_6519 = G__6526;
continue;
} else {
return ret_value__4190__auto__;
}
break;
}
});
hello_test$core$http_get_$_state_machine__4189__auto__ = function(state_6519){
switch(arguments.length){
case 0:
return hello_test$core$http_get_$_state_machine__4189__auto____0.call(this);
case 1:
return hello_test$core$http_get_$_state_machine__4189__auto____1.call(this,state_6519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_test$core$http_get_$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$0 = hello_test$core$http_get_$_state_machine__4189__auto____0;
hello_test$core$http_get_$_state_machine__4189__auto__.cljs$core$IFn$_invoke$arity$1 = hello_test$core$http_get_$_state_machine__4189__auto____1;
return hello_test$core$http_get_$_state_machine__4189__auto__;
})()
;})(switch__4188__auto__,c__4283__auto__))
})();
var state__4285__auto__ = (function (){var statearr_6524 = f__4284__auto__.call(null);
(statearr_6524[(6)] = c__4283__auto__);

return statearr_6524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4285__auto__);
});})(c__4283__auto__))
);

return c__4283__auto__;
});

//# sourceMappingURL=core.js.map
