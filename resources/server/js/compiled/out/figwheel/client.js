// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23364 = cljs.core._EQ_;
var expr__23365 = (function (){var or__16803__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e23368){if((e23368 instanceof Error)){
var e = e23368;
return false;
} else {
throw e23368;

}
}})();
if(cljs.core.truth_(or__16803__auto__)){
return or__16803__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23364.call(null,"true",expr__23365))){
return true;
} else {
if(cljs.core.truth_(pred__23364.call(null,"false",expr__23365))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23365)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e23370){if((e23370 instanceof Error)){
var e = e23370;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e23370;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17868__auto__ = [];
var len__17861__auto___23372 = arguments.length;
var i__17862__auto___23373 = (0);
while(true){
if((i__17862__auto___23373 < len__17861__auto___23372)){
args__17868__auto__.push((arguments[i__17862__auto___23373]));

var G__23374 = (i__17862__auto___23373 + (1));
i__17862__auto___23373 = G__23374;
continue;
} else {
}
break;
}

var argseq__17869__auto__ = ((((0) < args__17868__auto__.length))?(new cljs.core.IndexedSeq(args__17868__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17869__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq23371){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23371));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23375){
var map__23378 = p__23375;
var map__23378__$1 = ((((!((map__23378 == null)))?((((map__23378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23378):map__23378);
var message = cljs.core.get.call(null,map__23378__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23378__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16803__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16803__auto__)){
return or__16803__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16791__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16791__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16791__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18978__auto___23540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto___23540,ch){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto___23540,ch){
return (function (state_23509){
var state_val_23510 = (state_23509[(1)]);
if((state_val_23510 === (7))){
var inst_23505 = (state_23509[(2)]);
var state_23509__$1 = state_23509;
var statearr_23511_23541 = state_23509__$1;
(statearr_23511_23541[(2)] = inst_23505);

(statearr_23511_23541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23510 === (1))){
var state_23509__$1 = state_23509;
var statearr_23512_23542 = state_23509__$1;
(statearr_23512_23542[(2)] = null);

(statearr_23512_23542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23510 === (4))){
var inst_23462 = (state_23509[(7)]);
var inst_23462__$1 = (state_23509[(2)]);
var state_23509__$1 = (function (){var statearr_23513 = state_23509;
(statearr_23513[(7)] = inst_23462__$1);

return statearr_23513;
})();
if(cljs.core.truth_(inst_23462__$1)){
var statearr_23514_23543 = state_23509__$1;
(statearr_23514_23543[(1)] = (5));

} else {
var statearr_23515_23544 = state_23509__$1;
(statearr_23515_23544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23510 === (15))){
var inst_23469 = (state_23509[(8)]);
var inst_23484 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23469);
var inst_23485 = cljs.core.first.call(null,inst_23484);
var inst_23486 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23485);
var inst_23487 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23486)].join('');
var inst_23488 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23487);
var state_23509__$1 = state_23509;
var statearr_23516_23545 = state_23509__$1;
(statearr_23516_23545[(2)] = inst_23488);

(statearr_23516_23545[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23510 === (13))){
var inst_23493 = (state_23509[(2)]);
var state_23509__$1 = state_23509;
var statearr_23517_23546 = state_23509__$1;
(statearr_23517_23546[(2)] = inst_23493);

(statearr_23517_23546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23510 === (6))){
var state_23509__$1 = state_23509;
var statearr_23518_23547 = state_23509__$1;
(statearr_23518_23547[(2)] = null);

(statearr_23518_23547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23510 === (17))){
var inst_23491 = (state_23509[(2)]);
var state_23509__$1 = state_23509;
var statearr_23519_23548 = state_23509__$1;
(statearr_23519_23548[(2)] = inst_23491);

(statearr_23519_23548[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23510 === (3))){
var inst_23507 = (state_23509[(2)]);
var state_23509__$1 = state_23509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23509__$1,inst_23507);
} else {
if((state_val_23510 === (12))){
var inst_23468 = (state_23509[(9)]);
var inst_23482 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23468,opts);
var state_23509__$1 = state_23509;
if(cljs.core.truth_(inst_23482)){
var statearr_23520_23549 = state_23509__$1;
(statearr_23520_23549[(1)] = (15));

} else {
var statearr_23521_23550 = state_23509__$1;
(statearr_23521_23550[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23510 === (2))){
var state_23509__$1 = state_23509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23509__$1,(4),ch);
} else {
if((state_val_23510 === (11))){
var inst_23469 = (state_23509[(8)]);
var inst_23474 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23475 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23469);
var inst_23476 = cljs.core.async.timeout.call(null,(1000));
var inst_23477 = [inst_23475,inst_23476];
var inst_23478 = (new cljs.core.PersistentVector(null,2,(5),inst_23474,inst_23477,null));
var state_23509__$1 = state_23509;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23509__$1,(14),inst_23478);
} else {
if((state_val_23510 === (9))){
var inst_23469 = (state_23509[(8)]);
var inst_23495 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23496 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23469);
var inst_23497 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23496);
var inst_23498 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23497)].join('');
var inst_23499 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23498);
var state_23509__$1 = (function (){var statearr_23522 = state_23509;
(statearr_23522[(10)] = inst_23495);

return statearr_23522;
})();
var statearr_23523_23551 = state_23509__$1;
(statearr_23523_23551[(2)] = inst_23499);

(statearr_23523_23551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23510 === (5))){
var inst_23462 = (state_23509[(7)]);
var inst_23464 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23465 = (new cljs.core.PersistentArrayMap(null,2,inst_23464,null));
var inst_23466 = (new cljs.core.PersistentHashSet(null,inst_23465,null));
var inst_23467 = figwheel.client.focus_msgs.call(null,inst_23466,inst_23462);
var inst_23468 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23467);
var inst_23469 = cljs.core.first.call(null,inst_23467);
var inst_23470 = figwheel.client.autoload_QMARK_.call(null);
var state_23509__$1 = (function (){var statearr_23524 = state_23509;
(statearr_23524[(9)] = inst_23468);

(statearr_23524[(8)] = inst_23469);

return statearr_23524;
})();
if(cljs.core.truth_(inst_23470)){
var statearr_23525_23552 = state_23509__$1;
(statearr_23525_23552[(1)] = (8));

} else {
var statearr_23526_23553 = state_23509__$1;
(statearr_23526_23553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23510 === (14))){
var inst_23480 = (state_23509[(2)]);
var state_23509__$1 = state_23509;
var statearr_23527_23554 = state_23509__$1;
(statearr_23527_23554[(2)] = inst_23480);

(statearr_23527_23554[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23510 === (16))){
var state_23509__$1 = state_23509;
var statearr_23528_23555 = state_23509__$1;
(statearr_23528_23555[(2)] = null);

(statearr_23528_23555[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23510 === (10))){
var inst_23501 = (state_23509[(2)]);
var state_23509__$1 = (function (){var statearr_23529 = state_23509;
(statearr_23529[(11)] = inst_23501);

return statearr_23529;
})();
var statearr_23530_23556 = state_23509__$1;
(statearr_23530_23556[(2)] = null);

(statearr_23530_23556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23510 === (8))){
var inst_23468 = (state_23509[(9)]);
var inst_23472 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23468,opts);
var state_23509__$1 = state_23509;
if(cljs.core.truth_(inst_23472)){
var statearr_23531_23557 = state_23509__$1;
(statearr_23531_23557[(1)] = (11));

} else {
var statearr_23532_23558 = state_23509__$1;
(statearr_23532_23558[(1)] = (12));

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
});})(c__18978__auto___23540,ch))
;
return ((function (switch__18866__auto__,c__18978__auto___23540,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18867__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18867__auto____0 = (function (){
var statearr_23536 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23536[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18867__auto__);

(statearr_23536[(1)] = (1));

return statearr_23536;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18867__auto____1 = (function (state_23509){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_23509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e23537){if((e23537 instanceof Object)){
var ex__18870__auto__ = e23537;
var statearr_23538_23559 = state_23509;
(statearr_23538_23559[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23560 = state_23509;
state_23509 = G__23560;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18867__auto__ = function(state_23509){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18867__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18867__auto____1.call(this,state_23509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18867__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18867__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto___23540,ch))
})();
var state__18980__auto__ = (function (){var statearr_23539 = f__18979__auto__.call(null);
(statearr_23539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto___23540);

return statearr_23539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto___23540,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23561_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23561_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_23568 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23568){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23566 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23567 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23567;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23566;
}}catch (e23565){if((e23565 instanceof Error)){
var e = e23565;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23568], null));
} else {
var e = e23565;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23568))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23569){
var map__23576 = p__23569;
var map__23576__$1 = ((((!((map__23576 == null)))?((((map__23576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23576):map__23576);
var opts = map__23576__$1;
var build_id = cljs.core.get.call(null,map__23576__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23576,map__23576__$1,opts,build_id){
return (function (p__23578){
var vec__23579 = p__23578;
var map__23580 = cljs.core.nth.call(null,vec__23579,(0),null);
var map__23580__$1 = ((((!((map__23580 == null)))?((((map__23580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23580):map__23580);
var msg = map__23580__$1;
var msg_name = cljs.core.get.call(null,map__23580__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23579,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23579,map__23580,map__23580__$1,msg,msg_name,_,map__23576,map__23576__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23579,map__23580,map__23580__$1,msg,msg_name,_,map__23576,map__23576__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23576,map__23576__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23586){
var vec__23587 = p__23586;
var map__23588 = cljs.core.nth.call(null,vec__23587,(0),null);
var map__23588__$1 = ((((!((map__23588 == null)))?((((map__23588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23588):map__23588);
var msg = map__23588__$1;
var msg_name = cljs.core.get.call(null,map__23588__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23587,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23590){
var map__23600 = p__23590;
var map__23600__$1 = ((((!((map__23600 == null)))?((((map__23600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23600):map__23600);
var on_compile_warning = cljs.core.get.call(null,map__23600__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23600__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23600,map__23600__$1,on_compile_warning,on_compile_fail){
return (function (p__23602){
var vec__23603 = p__23602;
var map__23604 = cljs.core.nth.call(null,vec__23603,(0),null);
var map__23604__$1 = ((((!((map__23604 == null)))?((((map__23604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23604):map__23604);
var msg = map__23604__$1;
var msg_name = cljs.core.get.call(null,map__23604__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23603,(1));
var pred__23606 = cljs.core._EQ_;
var expr__23607 = msg_name;
if(cljs.core.truth_(pred__23606.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23607))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23606.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23607))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23600,map__23600__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto__,msg_hist,msg_names,msg){
return (function (state_23823){
var state_val_23824 = (state_23823[(1)]);
if((state_val_23824 === (7))){
var inst_23747 = (state_23823[(2)]);
var state_23823__$1 = state_23823;
if(cljs.core.truth_(inst_23747)){
var statearr_23825_23871 = state_23823__$1;
(statearr_23825_23871[(1)] = (8));

} else {
var statearr_23826_23872 = state_23823__$1;
(statearr_23826_23872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (20))){
var inst_23817 = (state_23823[(2)]);
var state_23823__$1 = state_23823;
var statearr_23827_23873 = state_23823__$1;
(statearr_23827_23873[(2)] = inst_23817);

(statearr_23827_23873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (27))){
var inst_23813 = (state_23823[(2)]);
var state_23823__$1 = state_23823;
var statearr_23828_23874 = state_23823__$1;
(statearr_23828_23874[(2)] = inst_23813);

(statearr_23828_23874[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (1))){
var inst_23740 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23823__$1 = state_23823;
if(cljs.core.truth_(inst_23740)){
var statearr_23829_23875 = state_23823__$1;
(statearr_23829_23875[(1)] = (2));

} else {
var statearr_23830_23876 = state_23823__$1;
(statearr_23830_23876[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (24))){
var inst_23815 = (state_23823[(2)]);
var state_23823__$1 = state_23823;
var statearr_23831_23877 = state_23823__$1;
(statearr_23831_23877[(2)] = inst_23815);

(statearr_23831_23877[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (4))){
var inst_23821 = (state_23823[(2)]);
var state_23823__$1 = state_23823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23823__$1,inst_23821);
} else {
if((state_val_23824 === (15))){
var inst_23819 = (state_23823[(2)]);
var state_23823__$1 = state_23823;
var statearr_23832_23878 = state_23823__$1;
(statearr_23832_23878[(2)] = inst_23819);

(statearr_23832_23878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (21))){
var inst_23778 = (state_23823[(2)]);
var state_23823__$1 = state_23823;
var statearr_23833_23879 = state_23823__$1;
(statearr_23833_23879[(2)] = inst_23778);

(statearr_23833_23879[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (31))){
var inst_23802 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23823__$1 = state_23823;
if(cljs.core.truth_(inst_23802)){
var statearr_23834_23880 = state_23823__$1;
(statearr_23834_23880[(1)] = (34));

} else {
var statearr_23835_23881 = state_23823__$1;
(statearr_23835_23881[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (32))){
var inst_23811 = (state_23823[(2)]);
var state_23823__$1 = state_23823;
var statearr_23836_23882 = state_23823__$1;
(statearr_23836_23882[(2)] = inst_23811);

(statearr_23836_23882[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (33))){
var inst_23800 = (state_23823[(2)]);
var state_23823__$1 = state_23823;
var statearr_23837_23883 = state_23823__$1;
(statearr_23837_23883[(2)] = inst_23800);

(statearr_23837_23883[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (13))){
var inst_23761 = figwheel.client.heads_up.clear.call(null);
var state_23823__$1 = state_23823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23823__$1,(16),inst_23761);
} else {
if((state_val_23824 === (22))){
var inst_23782 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23783 = figwheel.client.heads_up.append_message.call(null,inst_23782);
var state_23823__$1 = state_23823;
var statearr_23838_23884 = state_23823__$1;
(statearr_23838_23884[(2)] = inst_23783);

(statearr_23838_23884[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (36))){
var inst_23809 = (state_23823[(2)]);
var state_23823__$1 = state_23823;
var statearr_23839_23885 = state_23823__$1;
(statearr_23839_23885[(2)] = inst_23809);

(statearr_23839_23885[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (29))){
var inst_23793 = (state_23823[(2)]);
var state_23823__$1 = state_23823;
var statearr_23840_23886 = state_23823__$1;
(statearr_23840_23886[(2)] = inst_23793);

(statearr_23840_23886[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (6))){
var inst_23742 = (state_23823[(7)]);
var state_23823__$1 = state_23823;
var statearr_23841_23887 = state_23823__$1;
(statearr_23841_23887[(2)] = inst_23742);

(statearr_23841_23887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (28))){
var inst_23789 = (state_23823[(2)]);
var inst_23790 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23791 = figwheel.client.heads_up.display_warning.call(null,inst_23790);
var state_23823__$1 = (function (){var statearr_23842 = state_23823;
(statearr_23842[(8)] = inst_23789);

return statearr_23842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23823__$1,(29),inst_23791);
} else {
if((state_val_23824 === (25))){
var inst_23787 = figwheel.client.heads_up.clear.call(null);
var state_23823__$1 = state_23823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23823__$1,(28),inst_23787);
} else {
if((state_val_23824 === (34))){
var inst_23804 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23823__$1 = state_23823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23823__$1,(37),inst_23804);
} else {
if((state_val_23824 === (17))){
var inst_23769 = (state_23823[(2)]);
var state_23823__$1 = state_23823;
var statearr_23843_23888 = state_23823__$1;
(statearr_23843_23888[(2)] = inst_23769);

(statearr_23843_23888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (3))){
var inst_23759 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23823__$1 = state_23823;
if(cljs.core.truth_(inst_23759)){
var statearr_23844_23889 = state_23823__$1;
(statearr_23844_23889[(1)] = (13));

} else {
var statearr_23845_23890 = state_23823__$1;
(statearr_23845_23890[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (12))){
var inst_23755 = (state_23823[(2)]);
var state_23823__$1 = state_23823;
var statearr_23846_23891 = state_23823__$1;
(statearr_23846_23891[(2)] = inst_23755);

(statearr_23846_23891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (2))){
var inst_23742 = (state_23823[(7)]);
var inst_23742__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_23823__$1 = (function (){var statearr_23847 = state_23823;
(statearr_23847[(7)] = inst_23742__$1);

return statearr_23847;
})();
if(cljs.core.truth_(inst_23742__$1)){
var statearr_23848_23892 = state_23823__$1;
(statearr_23848_23892[(1)] = (5));

} else {
var statearr_23849_23893 = state_23823__$1;
(statearr_23849_23893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (23))){
var inst_23785 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23823__$1 = state_23823;
if(cljs.core.truth_(inst_23785)){
var statearr_23850_23894 = state_23823__$1;
(statearr_23850_23894[(1)] = (25));

} else {
var statearr_23851_23895 = state_23823__$1;
(statearr_23851_23895[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (35))){
var state_23823__$1 = state_23823;
var statearr_23852_23896 = state_23823__$1;
(statearr_23852_23896[(2)] = null);

(statearr_23852_23896[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (19))){
var inst_23780 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23823__$1 = state_23823;
if(cljs.core.truth_(inst_23780)){
var statearr_23853_23897 = state_23823__$1;
(statearr_23853_23897[(1)] = (22));

} else {
var statearr_23854_23898 = state_23823__$1;
(statearr_23854_23898[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (11))){
var inst_23751 = (state_23823[(2)]);
var state_23823__$1 = state_23823;
var statearr_23855_23899 = state_23823__$1;
(statearr_23855_23899[(2)] = inst_23751);

(statearr_23855_23899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (9))){
var inst_23753 = figwheel.client.heads_up.clear.call(null);
var state_23823__$1 = state_23823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23823__$1,(12),inst_23753);
} else {
if((state_val_23824 === (5))){
var inst_23744 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23823__$1 = state_23823;
var statearr_23856_23900 = state_23823__$1;
(statearr_23856_23900[(2)] = inst_23744);

(statearr_23856_23900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (14))){
var inst_23771 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23823__$1 = state_23823;
if(cljs.core.truth_(inst_23771)){
var statearr_23857_23901 = state_23823__$1;
(statearr_23857_23901[(1)] = (18));

} else {
var statearr_23858_23902 = state_23823__$1;
(statearr_23858_23902[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (26))){
var inst_23795 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23823__$1 = state_23823;
if(cljs.core.truth_(inst_23795)){
var statearr_23859_23903 = state_23823__$1;
(statearr_23859_23903[(1)] = (30));

} else {
var statearr_23860_23904 = state_23823__$1;
(statearr_23860_23904[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (16))){
var inst_23763 = (state_23823[(2)]);
var inst_23764 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23765 = figwheel.client.format_messages.call(null,inst_23764);
var inst_23766 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23767 = figwheel.client.heads_up.display_error.call(null,inst_23765,inst_23766);
var state_23823__$1 = (function (){var statearr_23861 = state_23823;
(statearr_23861[(9)] = inst_23763);

return statearr_23861;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23823__$1,(17),inst_23767);
} else {
if((state_val_23824 === (30))){
var inst_23797 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23798 = figwheel.client.heads_up.display_warning.call(null,inst_23797);
var state_23823__$1 = state_23823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23823__$1,(33),inst_23798);
} else {
if((state_val_23824 === (10))){
var inst_23757 = (state_23823[(2)]);
var state_23823__$1 = state_23823;
var statearr_23862_23905 = state_23823__$1;
(statearr_23862_23905[(2)] = inst_23757);

(statearr_23862_23905[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (18))){
var inst_23773 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23774 = figwheel.client.format_messages.call(null,inst_23773);
var inst_23775 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23776 = figwheel.client.heads_up.display_error.call(null,inst_23774,inst_23775);
var state_23823__$1 = state_23823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23823__$1,(21),inst_23776);
} else {
if((state_val_23824 === (37))){
var inst_23806 = (state_23823[(2)]);
var state_23823__$1 = state_23823;
var statearr_23863_23906 = state_23823__$1;
(statearr_23863_23906[(2)] = inst_23806);

(statearr_23863_23906[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23824 === (8))){
var inst_23749 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23823__$1 = state_23823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23823__$1,(11),inst_23749);
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
});})(c__18978__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18866__auto__,c__18978__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18867__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18867__auto____0 = (function (){
var statearr_23867 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23867[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18867__auto__);

(statearr_23867[(1)] = (1));

return statearr_23867;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18867__auto____1 = (function (state_23823){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_23823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e23868){if((e23868 instanceof Object)){
var ex__18870__auto__ = e23868;
var statearr_23869_23907 = state_23823;
(statearr_23869_23907[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23908 = state_23823;
state_23823 = G__23908;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18867__auto__ = function(state_23823){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18867__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18867__auto____1.call(this,state_23823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18867__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18867__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto__,msg_hist,msg_names,msg))
})();
var state__18980__auto__ = (function (){var statearr_23870 = f__18979__auto__.call(null);
(statearr_23870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto__);

return statearr_23870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto__,msg_hist,msg_names,msg))
);

return c__18978__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18978__auto___23971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto___23971,ch){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto___23971,ch){
return (function (state_23954){
var state_val_23955 = (state_23954[(1)]);
if((state_val_23955 === (1))){
var state_23954__$1 = state_23954;
var statearr_23956_23972 = state_23954__$1;
(statearr_23956_23972[(2)] = null);

(statearr_23956_23972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23955 === (2))){
var state_23954__$1 = state_23954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23954__$1,(4),ch);
} else {
if((state_val_23955 === (3))){
var inst_23952 = (state_23954[(2)]);
var state_23954__$1 = state_23954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23954__$1,inst_23952);
} else {
if((state_val_23955 === (4))){
var inst_23942 = (state_23954[(7)]);
var inst_23942__$1 = (state_23954[(2)]);
var state_23954__$1 = (function (){var statearr_23957 = state_23954;
(statearr_23957[(7)] = inst_23942__$1);

return statearr_23957;
})();
if(cljs.core.truth_(inst_23942__$1)){
var statearr_23958_23973 = state_23954__$1;
(statearr_23958_23973[(1)] = (5));

} else {
var statearr_23959_23974 = state_23954__$1;
(statearr_23959_23974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23955 === (5))){
var inst_23942 = (state_23954[(7)]);
var inst_23944 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_23942);
var state_23954__$1 = state_23954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23954__$1,(8),inst_23944);
} else {
if((state_val_23955 === (6))){
var state_23954__$1 = state_23954;
var statearr_23960_23975 = state_23954__$1;
(statearr_23960_23975[(2)] = null);

(statearr_23960_23975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23955 === (7))){
var inst_23950 = (state_23954[(2)]);
var state_23954__$1 = state_23954;
var statearr_23961_23976 = state_23954__$1;
(statearr_23961_23976[(2)] = inst_23950);

(statearr_23961_23976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23955 === (8))){
var inst_23946 = (state_23954[(2)]);
var state_23954__$1 = (function (){var statearr_23962 = state_23954;
(statearr_23962[(8)] = inst_23946);

return statearr_23962;
})();
var statearr_23963_23977 = state_23954__$1;
(statearr_23963_23977[(2)] = null);

(statearr_23963_23977[(1)] = (2));


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
});})(c__18978__auto___23971,ch))
;
return ((function (switch__18866__auto__,c__18978__auto___23971,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18867__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18867__auto____0 = (function (){
var statearr_23967 = [null,null,null,null,null,null,null,null,null];
(statearr_23967[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18867__auto__);

(statearr_23967[(1)] = (1));

return statearr_23967;
});
var figwheel$client$heads_up_plugin_$_state_machine__18867__auto____1 = (function (state_23954){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_23954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e23968){if((e23968 instanceof Object)){
var ex__18870__auto__ = e23968;
var statearr_23969_23978 = state_23954;
(statearr_23969_23978[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23979 = state_23954;
state_23954 = G__23979;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18867__auto__ = function(state_23954){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18867__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18867__auto____1.call(this,state_23954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18867__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18867__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto___23971,ch))
})();
var state__18980__auto__ = (function (){var statearr_23970 = f__18979__auto__.call(null);
(statearr_23970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto___23971);

return statearr_23970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto___23971,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto__){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto__){
return (function (state_24000){
var state_val_24001 = (state_24000[(1)]);
if((state_val_24001 === (1))){
var inst_23995 = cljs.core.async.timeout.call(null,(3000));
var state_24000__$1 = state_24000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24000__$1,(2),inst_23995);
} else {
if((state_val_24001 === (2))){
var inst_23997 = (state_24000[(2)]);
var inst_23998 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24000__$1 = (function (){var statearr_24002 = state_24000;
(statearr_24002[(7)] = inst_23997);

return statearr_24002;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24000__$1,inst_23998);
} else {
return null;
}
}
});})(c__18978__auto__))
;
return ((function (switch__18866__auto__,c__18978__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18867__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18867__auto____0 = (function (){
var statearr_24006 = [null,null,null,null,null,null,null,null];
(statearr_24006[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18867__auto__);

(statearr_24006[(1)] = (1));

return statearr_24006;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18867__auto____1 = (function (state_24000){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_24000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e24007){if((e24007 instanceof Object)){
var ex__18870__auto__ = e24007;
var statearr_24008_24010 = state_24000;
(statearr_24008_24010[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24011 = state_24000;
state_24000 = G__24011;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18867__auto__ = function(state_24000){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18867__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18867__auto____1.call(this,state_24000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18867__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18867__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto__))
})();
var state__18980__auto__ = (function (){var statearr_24009 = f__18979__auto__.call(null);
(statearr_24009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto__);

return statearr_24009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto__))
);

return c__18978__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24012){
var map__24019 = p__24012;
var map__24019__$1 = ((((!((map__24019 == null)))?((((map__24019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24019):map__24019);
var ed = map__24019__$1;
var formatted_exception = cljs.core.get.call(null,map__24019__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24019__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24019__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24021_24025 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24022_24026 = null;
var count__24023_24027 = (0);
var i__24024_24028 = (0);
while(true){
if((i__24024_24028 < count__24023_24027)){
var msg_24029 = cljs.core._nth.call(null,chunk__24022_24026,i__24024_24028);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24029);

var G__24030 = seq__24021_24025;
var G__24031 = chunk__24022_24026;
var G__24032 = count__24023_24027;
var G__24033 = (i__24024_24028 + (1));
seq__24021_24025 = G__24030;
chunk__24022_24026 = G__24031;
count__24023_24027 = G__24032;
i__24024_24028 = G__24033;
continue;
} else {
var temp__4425__auto___24034 = cljs.core.seq.call(null,seq__24021_24025);
if(temp__4425__auto___24034){
var seq__24021_24035__$1 = temp__4425__auto___24034;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24021_24035__$1)){
var c__17606__auto___24036 = cljs.core.chunk_first.call(null,seq__24021_24035__$1);
var G__24037 = cljs.core.chunk_rest.call(null,seq__24021_24035__$1);
var G__24038 = c__17606__auto___24036;
var G__24039 = cljs.core.count.call(null,c__17606__auto___24036);
var G__24040 = (0);
seq__24021_24025 = G__24037;
chunk__24022_24026 = G__24038;
count__24023_24027 = G__24039;
i__24024_24028 = G__24040;
continue;
} else {
var msg_24041 = cljs.core.first.call(null,seq__24021_24035__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24041);

var G__24042 = cljs.core.next.call(null,seq__24021_24035__$1);
var G__24043 = null;
var G__24044 = (0);
var G__24045 = (0);
seq__24021_24025 = G__24042;
chunk__24022_24026 = G__24043;
count__24023_24027 = G__24044;
i__24024_24028 = G__24045;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24046){
var map__24049 = p__24046;
var map__24049__$1 = ((((!((map__24049 == null)))?((((map__24049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24049):map__24049);
var w = map__24049__$1;
var message = cljs.core.get.call(null,map__24049__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16791__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16791__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16791__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24057 = cljs.core.seq.call(null,plugins);
var chunk__24058 = null;
var count__24059 = (0);
var i__24060 = (0);
while(true){
if((i__24060 < count__24059)){
var vec__24061 = cljs.core._nth.call(null,chunk__24058,i__24060);
var k = cljs.core.nth.call(null,vec__24061,(0),null);
var plugin = cljs.core.nth.call(null,vec__24061,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24063 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24057,chunk__24058,count__24059,i__24060,pl_24063,vec__24061,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24063.call(null,msg_hist);
});})(seq__24057,chunk__24058,count__24059,i__24060,pl_24063,vec__24061,k,plugin))
);
} else {
}

var G__24064 = seq__24057;
var G__24065 = chunk__24058;
var G__24066 = count__24059;
var G__24067 = (i__24060 + (1));
seq__24057 = G__24064;
chunk__24058 = G__24065;
count__24059 = G__24066;
i__24060 = G__24067;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24057);
if(temp__4425__auto__){
var seq__24057__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24057__$1)){
var c__17606__auto__ = cljs.core.chunk_first.call(null,seq__24057__$1);
var G__24068 = cljs.core.chunk_rest.call(null,seq__24057__$1);
var G__24069 = c__17606__auto__;
var G__24070 = cljs.core.count.call(null,c__17606__auto__);
var G__24071 = (0);
seq__24057 = G__24068;
chunk__24058 = G__24069;
count__24059 = G__24070;
i__24060 = G__24071;
continue;
} else {
var vec__24062 = cljs.core.first.call(null,seq__24057__$1);
var k = cljs.core.nth.call(null,vec__24062,(0),null);
var plugin = cljs.core.nth.call(null,vec__24062,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24072 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24057,chunk__24058,count__24059,i__24060,pl_24072,vec__24062,k,plugin,seq__24057__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24072.call(null,msg_hist);
});})(seq__24057,chunk__24058,count__24059,i__24060,pl_24072,vec__24062,k,plugin,seq__24057__$1,temp__4425__auto__))
);
} else {
}

var G__24073 = cljs.core.next.call(null,seq__24057__$1);
var G__24074 = null;
var G__24075 = (0);
var G__24076 = (0);
seq__24057 = G__24073;
chunk__24058 = G__24074;
count__24059 = G__24075;
i__24060 = G__24076;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24077 = [];
var len__17861__auto___24080 = arguments.length;
var i__17862__auto___24081 = (0);
while(true){
if((i__17862__auto___24081 < len__17861__auto___24080)){
args24077.push((arguments[i__17862__auto___24081]));

var G__24082 = (i__17862__auto___24081 + (1));
i__17862__auto___24081 = G__24082;
continue;
} else {
}
break;
}

var G__24079 = args24077.length;
switch (G__24079) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24077.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17868__auto__ = [];
var len__17861__auto___24088 = arguments.length;
var i__17862__auto___24089 = (0);
while(true){
if((i__17862__auto___24089 < len__17861__auto___24088)){
args__17868__auto__.push((arguments[i__17862__auto___24089]));

var G__24090 = (i__17862__auto___24089 + (1));
i__17862__auto___24089 = G__24090;
continue;
} else {
}
break;
}

var argseq__17869__auto__ = ((((0) < args__17868__auto__.length))?(new cljs.core.IndexedSeq(args__17868__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17869__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24085){
var map__24086 = p__24085;
var map__24086__$1 = ((((!((map__24086 == null)))?((((map__24086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24086):map__24086);
var opts = map__24086__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24084){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24084));
});

//# sourceMappingURL=client.js.map?rel=1457999284834