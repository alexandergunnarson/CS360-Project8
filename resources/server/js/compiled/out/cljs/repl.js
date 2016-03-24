// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22955_22959 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22956_22960 = null;
var count__22957_22961 = (0);
var i__22958_22962 = (0);
while(true){
if((i__22958_22962 < count__22957_22961)){
var f_22963 = cljs.core._nth.call(null,chunk__22956_22960,i__22958_22962);
cljs.core.println.call(null,"  ",f_22963);

var G__22964 = seq__22955_22959;
var G__22965 = chunk__22956_22960;
var G__22966 = count__22957_22961;
var G__22967 = (i__22958_22962 + (1));
seq__22955_22959 = G__22964;
chunk__22956_22960 = G__22965;
count__22957_22961 = G__22966;
i__22958_22962 = G__22967;
continue;
} else {
var temp__4425__auto___22968 = cljs.core.seq.call(null,seq__22955_22959);
if(temp__4425__auto___22968){
var seq__22955_22969__$1 = temp__4425__auto___22968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22955_22969__$1)){
var c__17606__auto___22970 = cljs.core.chunk_first.call(null,seq__22955_22969__$1);
var G__22971 = cljs.core.chunk_rest.call(null,seq__22955_22969__$1);
var G__22972 = c__17606__auto___22970;
var G__22973 = cljs.core.count.call(null,c__17606__auto___22970);
var G__22974 = (0);
seq__22955_22959 = G__22971;
chunk__22956_22960 = G__22972;
count__22957_22961 = G__22973;
i__22958_22962 = G__22974;
continue;
} else {
var f_22975 = cljs.core.first.call(null,seq__22955_22969__$1);
cljs.core.println.call(null,"  ",f_22975);

var G__22976 = cljs.core.next.call(null,seq__22955_22969__$1);
var G__22977 = null;
var G__22978 = (0);
var G__22979 = (0);
seq__22955_22959 = G__22976;
chunk__22956_22960 = G__22977;
count__22957_22961 = G__22978;
i__22958_22962 = G__22979;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22980 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16803__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16803__auto__)){
return or__16803__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22980);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22980)))?cljs.core.second.call(null,arglists_22980):arglists_22980));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22945 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22946 = null;
var count__22947 = (0);
var i__22948 = (0);
while(true){
if((i__22948 < count__22947)){
var vec__22949 = cljs.core._nth.call(null,chunk__22946,i__22948);
var name = cljs.core.nth.call(null,vec__22949,(0),null);
var map__22950 = cljs.core.nth.call(null,vec__22949,(1),null);
var map__22950__$1 = ((((!((map__22950 == null)))?((((map__22950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22950):map__22950);
var doc = cljs.core.get.call(null,map__22950__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22950__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22981 = seq__22945;
var G__22982 = chunk__22946;
var G__22983 = count__22947;
var G__22984 = (i__22948 + (1));
seq__22945 = G__22981;
chunk__22946 = G__22982;
count__22947 = G__22983;
i__22948 = G__22984;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22945);
if(temp__4425__auto__){
var seq__22945__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22945__$1)){
var c__17606__auto__ = cljs.core.chunk_first.call(null,seq__22945__$1);
var G__22985 = cljs.core.chunk_rest.call(null,seq__22945__$1);
var G__22986 = c__17606__auto__;
var G__22987 = cljs.core.count.call(null,c__17606__auto__);
var G__22988 = (0);
seq__22945 = G__22985;
chunk__22946 = G__22986;
count__22947 = G__22987;
i__22948 = G__22988;
continue;
} else {
var vec__22952 = cljs.core.first.call(null,seq__22945__$1);
var name = cljs.core.nth.call(null,vec__22952,(0),null);
var map__22953 = cljs.core.nth.call(null,vec__22952,(1),null);
var map__22953__$1 = ((((!((map__22953 == null)))?((((map__22953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22953):map__22953);
var doc = cljs.core.get.call(null,map__22953__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22953__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22989 = cljs.core.next.call(null,seq__22945__$1);
var G__22990 = null;
var G__22991 = (0);
var G__22992 = (0);
seq__22945 = G__22989;
chunk__22946 = G__22990;
count__22947 = G__22991;
i__22948 = G__22992;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1457999283772