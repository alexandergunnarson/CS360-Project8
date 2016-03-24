// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16803__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16803__auto__){
return or__16803__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16803__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16803__auto__)){
return or__16803__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__21921_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__21921_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__21926 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__21927 = null;
var count__21928 = (0);
var i__21929 = (0);
while(true){
if((i__21929 < count__21928)){
var n = cljs.core._nth.call(null,chunk__21927,i__21929);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21930 = seq__21926;
var G__21931 = chunk__21927;
var G__21932 = count__21928;
var G__21933 = (i__21929 + (1));
seq__21926 = G__21930;
chunk__21927 = G__21931;
count__21928 = G__21932;
i__21929 = G__21933;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21926);
if(temp__4425__auto__){
var seq__21926__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21926__$1)){
var c__17606__auto__ = cljs.core.chunk_first.call(null,seq__21926__$1);
var G__21934 = cljs.core.chunk_rest.call(null,seq__21926__$1);
var G__21935 = c__17606__auto__;
var G__21936 = cljs.core.count.call(null,c__17606__auto__);
var G__21937 = (0);
seq__21926 = G__21934;
chunk__21927 = G__21935;
count__21928 = G__21936;
i__21929 = G__21937;
continue;
} else {
var n = cljs.core.first.call(null,seq__21926__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21938 = cljs.core.next.call(null,seq__21926__$1);
var G__21939 = null;
var G__21940 = (0);
var G__21941 = (0);
seq__21926 = G__21938;
chunk__21927 = G__21939;
count__21928 = G__21940;
i__21929 = G__21941;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__21980_21987 = cljs.core.seq.call(null,deps);
var chunk__21981_21988 = null;
var count__21982_21989 = (0);
var i__21983_21990 = (0);
while(true){
if((i__21983_21990 < count__21982_21989)){
var dep_21991 = cljs.core._nth.call(null,chunk__21981_21988,i__21983_21990);
topo_sort_helper_STAR_.call(null,dep_21991,(depth + (1)),state);

var G__21992 = seq__21980_21987;
var G__21993 = chunk__21981_21988;
var G__21994 = count__21982_21989;
var G__21995 = (i__21983_21990 + (1));
seq__21980_21987 = G__21992;
chunk__21981_21988 = G__21993;
count__21982_21989 = G__21994;
i__21983_21990 = G__21995;
continue;
} else {
var temp__4425__auto___21996 = cljs.core.seq.call(null,seq__21980_21987);
if(temp__4425__auto___21996){
var seq__21980_21997__$1 = temp__4425__auto___21996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21980_21997__$1)){
var c__17606__auto___21998 = cljs.core.chunk_first.call(null,seq__21980_21997__$1);
var G__21999 = cljs.core.chunk_rest.call(null,seq__21980_21997__$1);
var G__22000 = c__17606__auto___21998;
var G__22001 = cljs.core.count.call(null,c__17606__auto___21998);
var G__22002 = (0);
seq__21980_21987 = G__21999;
chunk__21981_21988 = G__22000;
count__21982_21989 = G__22001;
i__21983_21990 = G__22002;
continue;
} else {
var dep_22003 = cljs.core.first.call(null,seq__21980_21997__$1);
topo_sort_helper_STAR_.call(null,dep_22003,(depth + (1)),state);

var G__22004 = cljs.core.next.call(null,seq__21980_21997__$1);
var G__22005 = null;
var G__22006 = (0);
var G__22007 = (0);
seq__21980_21987 = G__22004;
chunk__21981_21988 = G__22005;
count__21982_21989 = G__22006;
i__21983_21990 = G__22007;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__21984){
var vec__21986 = p__21984;
var x = cljs.core.nth.call(null,vec__21986,(0),null);
var xs = cljs.core.nthnext.call(null,vec__21986,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__21986,x,xs,get_deps__$1){
return (function (p1__21942_SHARP_){
return clojure.set.difference.call(null,p1__21942_SHARP_,x);
});})(vec__21986,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22020 = cljs.core.seq.call(null,provides);
var chunk__22021 = null;
var count__22022 = (0);
var i__22023 = (0);
while(true){
if((i__22023 < count__22022)){
var prov = cljs.core._nth.call(null,chunk__22021,i__22023);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22024_22032 = cljs.core.seq.call(null,requires);
var chunk__22025_22033 = null;
var count__22026_22034 = (0);
var i__22027_22035 = (0);
while(true){
if((i__22027_22035 < count__22026_22034)){
var req_22036 = cljs.core._nth.call(null,chunk__22025_22033,i__22027_22035);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22036,prov);

var G__22037 = seq__22024_22032;
var G__22038 = chunk__22025_22033;
var G__22039 = count__22026_22034;
var G__22040 = (i__22027_22035 + (1));
seq__22024_22032 = G__22037;
chunk__22025_22033 = G__22038;
count__22026_22034 = G__22039;
i__22027_22035 = G__22040;
continue;
} else {
var temp__4425__auto___22041 = cljs.core.seq.call(null,seq__22024_22032);
if(temp__4425__auto___22041){
var seq__22024_22042__$1 = temp__4425__auto___22041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22024_22042__$1)){
var c__17606__auto___22043 = cljs.core.chunk_first.call(null,seq__22024_22042__$1);
var G__22044 = cljs.core.chunk_rest.call(null,seq__22024_22042__$1);
var G__22045 = c__17606__auto___22043;
var G__22046 = cljs.core.count.call(null,c__17606__auto___22043);
var G__22047 = (0);
seq__22024_22032 = G__22044;
chunk__22025_22033 = G__22045;
count__22026_22034 = G__22046;
i__22027_22035 = G__22047;
continue;
} else {
var req_22048 = cljs.core.first.call(null,seq__22024_22042__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22048,prov);

var G__22049 = cljs.core.next.call(null,seq__22024_22042__$1);
var G__22050 = null;
var G__22051 = (0);
var G__22052 = (0);
seq__22024_22032 = G__22049;
chunk__22025_22033 = G__22050;
count__22026_22034 = G__22051;
i__22027_22035 = G__22052;
continue;
}
} else {
}
}
break;
}

var G__22053 = seq__22020;
var G__22054 = chunk__22021;
var G__22055 = count__22022;
var G__22056 = (i__22023 + (1));
seq__22020 = G__22053;
chunk__22021 = G__22054;
count__22022 = G__22055;
i__22023 = G__22056;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22020);
if(temp__4425__auto__){
var seq__22020__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22020__$1)){
var c__17606__auto__ = cljs.core.chunk_first.call(null,seq__22020__$1);
var G__22057 = cljs.core.chunk_rest.call(null,seq__22020__$1);
var G__22058 = c__17606__auto__;
var G__22059 = cljs.core.count.call(null,c__17606__auto__);
var G__22060 = (0);
seq__22020 = G__22057;
chunk__22021 = G__22058;
count__22022 = G__22059;
i__22023 = G__22060;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22020__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22028_22061 = cljs.core.seq.call(null,requires);
var chunk__22029_22062 = null;
var count__22030_22063 = (0);
var i__22031_22064 = (0);
while(true){
if((i__22031_22064 < count__22030_22063)){
var req_22065 = cljs.core._nth.call(null,chunk__22029_22062,i__22031_22064);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22065,prov);

var G__22066 = seq__22028_22061;
var G__22067 = chunk__22029_22062;
var G__22068 = count__22030_22063;
var G__22069 = (i__22031_22064 + (1));
seq__22028_22061 = G__22066;
chunk__22029_22062 = G__22067;
count__22030_22063 = G__22068;
i__22031_22064 = G__22069;
continue;
} else {
var temp__4425__auto___22070__$1 = cljs.core.seq.call(null,seq__22028_22061);
if(temp__4425__auto___22070__$1){
var seq__22028_22071__$1 = temp__4425__auto___22070__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22028_22071__$1)){
var c__17606__auto___22072 = cljs.core.chunk_first.call(null,seq__22028_22071__$1);
var G__22073 = cljs.core.chunk_rest.call(null,seq__22028_22071__$1);
var G__22074 = c__17606__auto___22072;
var G__22075 = cljs.core.count.call(null,c__17606__auto___22072);
var G__22076 = (0);
seq__22028_22061 = G__22073;
chunk__22029_22062 = G__22074;
count__22030_22063 = G__22075;
i__22031_22064 = G__22076;
continue;
} else {
var req_22077 = cljs.core.first.call(null,seq__22028_22071__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22077,prov);

var G__22078 = cljs.core.next.call(null,seq__22028_22071__$1);
var G__22079 = null;
var G__22080 = (0);
var G__22081 = (0);
seq__22028_22061 = G__22078;
chunk__22029_22062 = G__22079;
count__22030_22063 = G__22080;
i__22031_22064 = G__22081;
continue;
}
} else {
}
}
break;
}

var G__22082 = cljs.core.next.call(null,seq__22020__$1);
var G__22083 = null;
var G__22084 = (0);
var G__22085 = (0);
seq__22020 = G__22082;
chunk__22021 = G__22083;
count__22022 = G__22084;
i__22023 = G__22085;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22090_22094 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22091_22095 = null;
var count__22092_22096 = (0);
var i__22093_22097 = (0);
while(true){
if((i__22093_22097 < count__22092_22096)){
var ns_22098 = cljs.core._nth.call(null,chunk__22091_22095,i__22093_22097);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22098);

var G__22099 = seq__22090_22094;
var G__22100 = chunk__22091_22095;
var G__22101 = count__22092_22096;
var G__22102 = (i__22093_22097 + (1));
seq__22090_22094 = G__22099;
chunk__22091_22095 = G__22100;
count__22092_22096 = G__22101;
i__22093_22097 = G__22102;
continue;
} else {
var temp__4425__auto___22103 = cljs.core.seq.call(null,seq__22090_22094);
if(temp__4425__auto___22103){
var seq__22090_22104__$1 = temp__4425__auto___22103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22090_22104__$1)){
var c__17606__auto___22105 = cljs.core.chunk_first.call(null,seq__22090_22104__$1);
var G__22106 = cljs.core.chunk_rest.call(null,seq__22090_22104__$1);
var G__22107 = c__17606__auto___22105;
var G__22108 = cljs.core.count.call(null,c__17606__auto___22105);
var G__22109 = (0);
seq__22090_22094 = G__22106;
chunk__22091_22095 = G__22107;
count__22092_22096 = G__22108;
i__22093_22097 = G__22109;
continue;
} else {
var ns_22110 = cljs.core.first.call(null,seq__22090_22104__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22110);

var G__22111 = cljs.core.next.call(null,seq__22090_22104__$1);
var G__22112 = null;
var G__22113 = (0);
var G__22114 = (0);
seq__22090_22094 = G__22111;
chunk__22091_22095 = G__22112;
count__22092_22096 = G__22113;
i__22093_22097 = G__22114;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16803__auto__ = goog.require__;
if(cljs.core.truth_(or__16803__auto__)){
return or__16803__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22115__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22116__i = 0, G__22116__a = new Array(arguments.length -  0);
while (G__22116__i < G__22116__a.length) {G__22116__a[G__22116__i] = arguments[G__22116__i + 0]; ++G__22116__i;}
  args = new cljs.core.IndexedSeq(G__22116__a,0);
} 
return G__22115__delegate.call(this,args);};
G__22115.cljs$lang$maxFixedArity = 0;
G__22115.cljs$lang$applyTo = (function (arglist__22117){
var args = cljs.core.seq(arglist__22117);
return G__22115__delegate(args);
});
G__22115.cljs$core$IFn$_invoke$arity$variadic = G__22115__delegate;
return G__22115;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22119 = cljs.core._EQ_;
var expr__22120 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22119.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22120))){
var path_parts = ((function (pred__22119,expr__22120){
return (function (p1__22118_SHARP_){
return clojure.string.split.call(null,p1__22118_SHARP_,/[\/\\]/);
});})(pred__22119,expr__22120))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22119,expr__22120){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22122){if((e22122 instanceof Error)){
var e = e22122;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22122;

}
}})());
});
;})(path_parts,sep,root,pred__22119,expr__22120))
} else {
if(cljs.core.truth_(pred__22119.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22120))){
return ((function (pred__22119,expr__22120){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22119,expr__22120){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22119,expr__22120))
);

return deferred.addErrback(((function (deferred,pred__22119,expr__22120){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22119,expr__22120))
);
});
;})(pred__22119,expr__22120))
} else {
return ((function (pred__22119,expr__22120){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22119,expr__22120))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22123,callback){
var map__22126 = p__22123;
var map__22126__$1 = ((((!((map__22126 == null)))?((((map__22126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22126):map__22126);
var file_msg = map__22126__$1;
var request_url = cljs.core.get.call(null,map__22126__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22126,map__22126__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22126,map__22126__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__18978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto__){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto__){
return (function (state_22150){
var state_val_22151 = (state_22150[(1)]);
if((state_val_22151 === (7))){
var inst_22146 = (state_22150[(2)]);
var state_22150__$1 = state_22150;
var statearr_22152_22172 = state_22150__$1;
(statearr_22152_22172[(2)] = inst_22146);

(statearr_22152_22172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22151 === (1))){
var state_22150__$1 = state_22150;
var statearr_22153_22173 = state_22150__$1;
(statearr_22153_22173[(2)] = null);

(statearr_22153_22173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22151 === (4))){
var inst_22130 = (state_22150[(7)]);
var inst_22130__$1 = (state_22150[(2)]);
var state_22150__$1 = (function (){var statearr_22154 = state_22150;
(statearr_22154[(7)] = inst_22130__$1);

return statearr_22154;
})();
if(cljs.core.truth_(inst_22130__$1)){
var statearr_22155_22174 = state_22150__$1;
(statearr_22155_22174[(1)] = (5));

} else {
var statearr_22156_22175 = state_22150__$1;
(statearr_22156_22175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22151 === (6))){
var state_22150__$1 = state_22150;
var statearr_22157_22176 = state_22150__$1;
(statearr_22157_22176[(2)] = null);

(statearr_22157_22176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22151 === (3))){
var inst_22148 = (state_22150[(2)]);
var state_22150__$1 = state_22150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22150__$1,inst_22148);
} else {
if((state_val_22151 === (2))){
var state_22150__$1 = state_22150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22150__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22151 === (11))){
var inst_22142 = (state_22150[(2)]);
var state_22150__$1 = (function (){var statearr_22158 = state_22150;
(statearr_22158[(8)] = inst_22142);

return statearr_22158;
})();
var statearr_22159_22177 = state_22150__$1;
(statearr_22159_22177[(2)] = null);

(statearr_22159_22177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22151 === (9))){
var inst_22136 = (state_22150[(9)]);
var inst_22134 = (state_22150[(10)]);
var inst_22138 = inst_22136.call(null,inst_22134);
var state_22150__$1 = state_22150;
var statearr_22160_22178 = state_22150__$1;
(statearr_22160_22178[(2)] = inst_22138);

(statearr_22160_22178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22151 === (5))){
var inst_22130 = (state_22150[(7)]);
var inst_22132 = figwheel.client.file_reloading.blocking_load.call(null,inst_22130);
var state_22150__$1 = state_22150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22150__$1,(8),inst_22132);
} else {
if((state_val_22151 === (10))){
var inst_22134 = (state_22150[(10)]);
var inst_22140 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22134);
var state_22150__$1 = state_22150;
var statearr_22161_22179 = state_22150__$1;
(statearr_22161_22179[(2)] = inst_22140);

(statearr_22161_22179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22151 === (8))){
var inst_22136 = (state_22150[(9)]);
var inst_22130 = (state_22150[(7)]);
var inst_22134 = (state_22150[(2)]);
var inst_22135 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22136__$1 = cljs.core.get.call(null,inst_22135,inst_22130);
var state_22150__$1 = (function (){var statearr_22162 = state_22150;
(statearr_22162[(9)] = inst_22136__$1);

(statearr_22162[(10)] = inst_22134);

return statearr_22162;
})();
if(cljs.core.truth_(inst_22136__$1)){
var statearr_22163_22180 = state_22150__$1;
(statearr_22163_22180[(1)] = (9));

} else {
var statearr_22164_22181 = state_22150__$1;
(statearr_22164_22181[(1)] = (10));

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
});})(c__18978__auto__))
;
return ((function (switch__18866__auto__,c__18978__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18867__auto__ = null;
var figwheel$client$file_reloading$state_machine__18867__auto____0 = (function (){
var statearr_22168 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22168[(0)] = figwheel$client$file_reloading$state_machine__18867__auto__);

(statearr_22168[(1)] = (1));

return statearr_22168;
});
var figwheel$client$file_reloading$state_machine__18867__auto____1 = (function (state_22150){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_22150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e22169){if((e22169 instanceof Object)){
var ex__18870__auto__ = e22169;
var statearr_22170_22182 = state_22150;
(statearr_22170_22182[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22183 = state_22150;
state_22150 = G__22183;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18867__auto__ = function(state_22150){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18867__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18867__auto____1.call(this,state_22150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18867__auto____0;
figwheel$client$file_reloading$state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18867__auto____1;
return figwheel$client$file_reloading$state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto__))
})();
var state__18980__auto__ = (function (){var statearr_22171 = f__18979__auto__.call(null);
(statearr_22171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto__);

return statearr_22171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto__))
);

return c__18978__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22184,callback){
var map__22187 = p__22184;
var map__22187__$1 = ((((!((map__22187 == null)))?((((map__22187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22187):map__22187);
var file_msg = map__22187__$1;
var namespace = cljs.core.get.call(null,map__22187__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22187,map__22187__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22187,map__22187__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22189){
var map__22192 = p__22189;
var map__22192__$1 = ((((!((map__22192 == null)))?((((map__22192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22192):map__22192);
var file_msg = map__22192__$1;
var namespace = cljs.core.get.call(null,map__22192__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16791__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16791__auto__){
var or__16803__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16803__auto__)){
return or__16803__auto__;
} else {
var or__16803__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16803__auto____$1)){
return or__16803__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16791__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22194,callback){
var map__22197 = p__22194;
var map__22197__$1 = ((((!((map__22197 == null)))?((((map__22197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22197):map__22197);
var file_msg = map__22197__$1;
var request_url = cljs.core.get.call(null,map__22197__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22197__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18978__auto___22285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto___22285,out){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto___22285,out){
return (function (state_22267){
var state_val_22268 = (state_22267[(1)]);
if((state_val_22268 === (1))){
var inst_22245 = cljs.core.nth.call(null,files,(0),null);
var inst_22246 = cljs.core.nthnext.call(null,files,(1));
var inst_22247 = files;
var state_22267__$1 = (function (){var statearr_22269 = state_22267;
(statearr_22269[(7)] = inst_22247);

(statearr_22269[(9)] = inst_22245);

(statearr_22269[(10)] = inst_22246);

return statearr_22269;
})();
var statearr_22270_22286 = state_22267__$1;
(statearr_22270_22286[(2)] = null);

(statearr_22270_22286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22268 === (2))){
var inst_22247 = (state_22267[(7)]);
var inst_22250 = (state_22267[(8)]);
var inst_22250__$1 = cljs.core.nth.call(null,inst_22247,(0),null);
var inst_22251 = cljs.core.nthnext.call(null,inst_22247,(1));
var inst_22252 = (inst_22250__$1 == null);
var inst_22253 = cljs.core.not.call(null,inst_22252);
var state_22267__$1 = (function (){var statearr_22271 = state_22267;
(statearr_22271[(8)] = inst_22250__$1);

(statearr_22271[(11)] = inst_22251);

return statearr_22271;
})();
if(inst_22253){
var statearr_22272_22287 = state_22267__$1;
(statearr_22272_22287[(1)] = (4));

} else {
var statearr_22273_22288 = state_22267__$1;
(statearr_22273_22288[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22268 === (3))){
var inst_22265 = (state_22267[(2)]);
var state_22267__$1 = state_22267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22267__$1,inst_22265);
} else {
if((state_val_22268 === (4))){
var inst_22250 = (state_22267[(8)]);
var inst_22255 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22250);
var state_22267__$1 = state_22267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22267__$1,(7),inst_22255);
} else {
if((state_val_22268 === (5))){
var inst_22261 = cljs.core.async.close_BANG_.call(null,out);
var state_22267__$1 = state_22267;
var statearr_22274_22289 = state_22267__$1;
(statearr_22274_22289[(2)] = inst_22261);

(statearr_22274_22289[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22268 === (6))){
var inst_22263 = (state_22267[(2)]);
var state_22267__$1 = state_22267;
var statearr_22275_22290 = state_22267__$1;
(statearr_22275_22290[(2)] = inst_22263);

(statearr_22275_22290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22268 === (7))){
var inst_22251 = (state_22267[(11)]);
var inst_22257 = (state_22267[(2)]);
var inst_22258 = cljs.core.async.put_BANG_.call(null,out,inst_22257);
var inst_22247 = inst_22251;
var state_22267__$1 = (function (){var statearr_22276 = state_22267;
(statearr_22276[(7)] = inst_22247);

(statearr_22276[(12)] = inst_22258);

return statearr_22276;
})();
var statearr_22277_22291 = state_22267__$1;
(statearr_22277_22291[(2)] = null);

(statearr_22277_22291[(1)] = (2));


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
});})(c__18978__auto___22285,out))
;
return ((function (switch__18866__auto__,c__18978__auto___22285,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18867__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18867__auto____0 = (function (){
var statearr_22281 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22281[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18867__auto__);

(statearr_22281[(1)] = (1));

return statearr_22281;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18867__auto____1 = (function (state_22267){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_22267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e22282){if((e22282 instanceof Object)){
var ex__18870__auto__ = e22282;
var statearr_22283_22292 = state_22267;
(statearr_22283_22292[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22293 = state_22267;
state_22267 = G__22293;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18867__auto__ = function(state_22267){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18867__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18867__auto____1.call(this,state_22267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18867__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18867__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto___22285,out))
})();
var state__18980__auto__ = (function (){var statearr_22284 = f__18979__auto__.call(null);
(statearr_22284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto___22285);

return statearr_22284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto___22285,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22294,opts){
var map__22298 = p__22294;
var map__22298__$1 = ((((!((map__22298 == null)))?((((map__22298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22298):map__22298);
var eval_body__$1 = cljs.core.get.call(null,map__22298__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22298__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16791__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16791__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16791__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22300){var e = e22300;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22301_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22301_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22306){
var vec__22307 = p__22306;
var k = cljs.core.nth.call(null,vec__22307,(0),null);
var v = cljs.core.nth.call(null,vec__22307,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22308){
var vec__22309 = p__22308;
var k = cljs.core.nth.call(null,vec__22309,(0),null);
var v = cljs.core.nth.call(null,vec__22309,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22313,p__22314){
var map__22561 = p__22313;
var map__22561__$1 = ((((!((map__22561 == null)))?((((map__22561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22561):map__22561);
var opts = map__22561__$1;
var before_jsload = cljs.core.get.call(null,map__22561__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22561__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22561__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22562 = p__22314;
var map__22562__$1 = ((((!((map__22562 == null)))?((((map__22562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22562):map__22562);
var msg = map__22562__$1;
var files = cljs.core.get.call(null,map__22562__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22562__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22562__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18979__auto__ = (function (){var switch__18866__auto__ = ((function (c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_22715){
var state_val_22716 = (state_22715[(1)]);
if((state_val_22716 === (7))){
var inst_22577 = (state_22715[(7)]);
var inst_22578 = (state_22715[(8)]);
var inst_22576 = (state_22715[(9)]);
var inst_22579 = (state_22715[(10)]);
var inst_22584 = cljs.core._nth.call(null,inst_22577,inst_22579);
var inst_22585 = figwheel.client.file_reloading.eval_body.call(null,inst_22584,opts);
var inst_22586 = (inst_22579 + (1));
var tmp22717 = inst_22577;
var tmp22718 = inst_22578;
var tmp22719 = inst_22576;
var inst_22576__$1 = tmp22719;
var inst_22577__$1 = tmp22717;
var inst_22578__$1 = tmp22718;
var inst_22579__$1 = inst_22586;
var state_22715__$1 = (function (){var statearr_22720 = state_22715;
(statearr_22720[(7)] = inst_22577__$1);

(statearr_22720[(8)] = inst_22578__$1);

(statearr_22720[(9)] = inst_22576__$1);

(statearr_22720[(10)] = inst_22579__$1);

(statearr_22720[(14)] = inst_22585);

return statearr_22720;
})();
var statearr_22721_22807 = state_22715__$1;
(statearr_22721_22807[(2)] = null);

(statearr_22721_22807[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (20))){
var inst_22619 = (state_22715[(11)]);
var inst_22627 = figwheel.client.file_reloading.sort_files.call(null,inst_22619);
var state_22715__$1 = state_22715;
var statearr_22722_22808 = state_22715__$1;
(statearr_22722_22808[(2)] = inst_22627);

(statearr_22722_22808[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (27))){
var state_22715__$1 = state_22715;
var statearr_22723_22809 = state_22715__$1;
(statearr_22723_22809[(2)] = null);

(statearr_22723_22809[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (1))){
var inst_22568 = (state_22715[(12)]);
var inst_22565 = before_jsload.call(null,files);
var inst_22566 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22567 = (function (){return ((function (inst_22568,inst_22565,inst_22566,state_val_22716,c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22310_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22310_SHARP_);
});
;})(inst_22568,inst_22565,inst_22566,state_val_22716,c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22568__$1 = cljs.core.filter.call(null,inst_22567,files);
var inst_22569 = cljs.core.not_empty.call(null,inst_22568__$1);
var state_22715__$1 = (function (){var statearr_22724 = state_22715;
(statearr_22724[(13)] = inst_22565);

(statearr_22724[(16)] = inst_22566);

(statearr_22724[(12)] = inst_22568__$1);

return statearr_22724;
})();
if(cljs.core.truth_(inst_22569)){
var statearr_22725_22810 = state_22715__$1;
(statearr_22725_22810[(1)] = (2));

} else {
var statearr_22726_22811 = state_22715__$1;
(statearr_22726_22811[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (24))){
var state_22715__$1 = state_22715;
var statearr_22727_22812 = state_22715__$1;
(statearr_22727_22812[(2)] = null);

(statearr_22727_22812[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (39))){
var inst_22669 = (state_22715[(15)]);
var state_22715__$1 = state_22715;
var statearr_22728_22813 = state_22715__$1;
(statearr_22728_22813[(2)] = inst_22669);

(statearr_22728_22813[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (46))){
var inst_22710 = (state_22715[(2)]);
var state_22715__$1 = state_22715;
var statearr_22729_22814 = state_22715__$1;
(statearr_22729_22814[(2)] = inst_22710);

(statearr_22729_22814[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (4))){
var inst_22613 = (state_22715[(2)]);
var inst_22614 = cljs.core.List.EMPTY;
var inst_22615 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_22614);
var inst_22616 = (function (){return ((function (inst_22613,inst_22614,inst_22615,state_val_22716,c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22311_SHARP_){
var and__16791__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22311_SHARP_);
if(cljs.core.truth_(and__16791__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22311_SHARP_));
} else {
return and__16791__auto__;
}
});
;})(inst_22613,inst_22614,inst_22615,state_val_22716,c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22617 = cljs.core.filter.call(null,inst_22616,files);
var inst_22618 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_22619 = cljs.core.concat.call(null,inst_22617,inst_22618);
var state_22715__$1 = (function (){var statearr_22730 = state_22715;
(statearr_22730[(17)] = inst_22615);

(statearr_22730[(19)] = inst_22613);

(statearr_22730[(11)] = inst_22619);

return statearr_22730;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_22731_22815 = state_22715__$1;
(statearr_22731_22815[(1)] = (16));

} else {
var statearr_22732_22816 = state_22715__$1;
(statearr_22732_22816[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (15))){
var inst_22603 = (state_22715[(2)]);
var state_22715__$1 = state_22715;
var statearr_22733_22817 = state_22715__$1;
(statearr_22733_22817[(2)] = inst_22603);

(statearr_22733_22817[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (21))){
var inst_22629 = (state_22715[(18)]);
var inst_22629__$1 = (state_22715[(2)]);
var inst_22630 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22629__$1);
var state_22715__$1 = (function (){var statearr_22734 = state_22715;
(statearr_22734[(18)] = inst_22629__$1);

return statearr_22734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22715__$1,(22),inst_22630);
} else {
if((state_val_22716 === (31))){
var inst_22713 = (state_22715[(2)]);
var state_22715__$1 = state_22715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22715__$1,inst_22713);
} else {
if((state_val_22716 === (32))){
var inst_22669 = (state_22715[(15)]);
var inst_22674 = inst_22669.cljs$lang$protocol_mask$partition0$;
var inst_22675 = (inst_22674 & (64));
var inst_22676 = inst_22669.cljs$core$ISeq$;
var inst_22677 = (inst_22675) || (inst_22676);
var state_22715__$1 = state_22715;
if(cljs.core.truth_(inst_22677)){
var statearr_22735_22818 = state_22715__$1;
(statearr_22735_22818[(1)] = (35));

} else {
var statearr_22736_22819 = state_22715__$1;
(statearr_22736_22819[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (40))){
var inst_22690 = (state_22715[(20)]);
var inst_22689 = (state_22715[(2)]);
var inst_22690__$1 = cljs.core.get.call(null,inst_22689,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22691 = cljs.core.get.call(null,inst_22689,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22692 = cljs.core.not_empty.call(null,inst_22690__$1);
var state_22715__$1 = (function (){var statearr_22737 = state_22715;
(statearr_22737[(21)] = inst_22691);

(statearr_22737[(20)] = inst_22690__$1);

return statearr_22737;
})();
if(cljs.core.truth_(inst_22692)){
var statearr_22738_22820 = state_22715__$1;
(statearr_22738_22820[(1)] = (41));

} else {
var statearr_22739_22821 = state_22715__$1;
(statearr_22739_22821[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (33))){
var state_22715__$1 = state_22715;
var statearr_22740_22822 = state_22715__$1;
(statearr_22740_22822[(2)] = false);

(statearr_22740_22822[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (13))){
var inst_22589 = (state_22715[(22)]);
var inst_22593 = cljs.core.chunk_first.call(null,inst_22589);
var inst_22594 = cljs.core.chunk_rest.call(null,inst_22589);
var inst_22595 = cljs.core.count.call(null,inst_22593);
var inst_22576 = inst_22594;
var inst_22577 = inst_22593;
var inst_22578 = inst_22595;
var inst_22579 = (0);
var state_22715__$1 = (function (){var statearr_22741 = state_22715;
(statearr_22741[(7)] = inst_22577);

(statearr_22741[(8)] = inst_22578);

(statearr_22741[(9)] = inst_22576);

(statearr_22741[(10)] = inst_22579);

return statearr_22741;
})();
var statearr_22742_22823 = state_22715__$1;
(statearr_22742_22823[(2)] = null);

(statearr_22742_22823[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (22))){
var inst_22629 = (state_22715[(18)]);
var inst_22637 = (state_22715[(23)]);
var inst_22632 = (state_22715[(24)]);
var inst_22633 = (state_22715[(25)]);
var inst_22632__$1 = (state_22715[(2)]);
var inst_22633__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22632__$1);
var inst_22634 = (function (){var all_files = inst_22629;
var res_SINGLEQUOTE_ = inst_22632__$1;
var res = inst_22633__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_22629,inst_22637,inst_22632,inst_22633,inst_22632__$1,inst_22633__$1,state_val_22716,c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22312_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22312_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_22629,inst_22637,inst_22632,inst_22633,inst_22632__$1,inst_22633__$1,state_val_22716,c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22635 = cljs.core.filter.call(null,inst_22634,inst_22632__$1);
var inst_22636 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22637__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22636);
var inst_22638 = cljs.core.not_empty.call(null,inst_22637__$1);
var state_22715__$1 = (function (){var statearr_22743 = state_22715;
(statearr_22743[(23)] = inst_22637__$1);

(statearr_22743[(26)] = inst_22635);

(statearr_22743[(24)] = inst_22632__$1);

(statearr_22743[(25)] = inst_22633__$1);

return statearr_22743;
})();
if(cljs.core.truth_(inst_22638)){
var statearr_22744_22824 = state_22715__$1;
(statearr_22744_22824[(1)] = (23));

} else {
var statearr_22745_22825 = state_22715__$1;
(statearr_22745_22825[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (36))){
var state_22715__$1 = state_22715;
var statearr_22746_22826 = state_22715__$1;
(statearr_22746_22826[(2)] = false);

(statearr_22746_22826[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (41))){
var inst_22690 = (state_22715[(20)]);
var inst_22694 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22695 = cljs.core.map.call(null,inst_22694,inst_22690);
var inst_22696 = cljs.core.pr_str.call(null,inst_22695);
var inst_22697 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_22696)].join('');
var inst_22698 = figwheel.client.utils.log.call(null,inst_22697);
var state_22715__$1 = state_22715;
var statearr_22747_22827 = state_22715__$1;
(statearr_22747_22827[(2)] = inst_22698);

(statearr_22747_22827[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (43))){
var inst_22691 = (state_22715[(21)]);
var inst_22701 = (state_22715[(2)]);
var inst_22702 = cljs.core.not_empty.call(null,inst_22691);
var state_22715__$1 = (function (){var statearr_22748 = state_22715;
(statearr_22748[(27)] = inst_22701);

return statearr_22748;
})();
if(cljs.core.truth_(inst_22702)){
var statearr_22749_22828 = state_22715__$1;
(statearr_22749_22828[(1)] = (44));

} else {
var statearr_22750_22829 = state_22715__$1;
(statearr_22750_22829[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (29))){
var inst_22629 = (state_22715[(18)]);
var inst_22637 = (state_22715[(23)]);
var inst_22635 = (state_22715[(26)]);
var inst_22632 = (state_22715[(24)]);
var inst_22669 = (state_22715[(15)]);
var inst_22633 = (state_22715[(25)]);
var inst_22665 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22668 = (function (){var all_files = inst_22629;
var res_SINGLEQUOTE_ = inst_22632;
var res = inst_22633;
var files_not_loaded = inst_22635;
var dependencies_that_loaded = inst_22637;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22629,inst_22637,inst_22635,inst_22632,inst_22669,inst_22633,inst_22665,state_val_22716,c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22667){
var map__22751 = p__22667;
var map__22751__$1 = ((((!((map__22751 == null)))?((((map__22751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22751):map__22751);
var namespace = cljs.core.get.call(null,map__22751__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22629,inst_22637,inst_22635,inst_22632,inst_22669,inst_22633,inst_22665,state_val_22716,c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22669__$1 = cljs.core.group_by.call(null,inst_22668,inst_22635);
var inst_22671 = (inst_22669__$1 == null);
var inst_22672 = cljs.core.not.call(null,inst_22671);
var state_22715__$1 = (function (){var statearr_22753 = state_22715;
(statearr_22753[(15)] = inst_22669__$1);

(statearr_22753[(28)] = inst_22665);

return statearr_22753;
})();
if(inst_22672){
var statearr_22754_22830 = state_22715__$1;
(statearr_22754_22830[(1)] = (32));

} else {
var statearr_22755_22831 = state_22715__$1;
(statearr_22755_22831[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (44))){
var inst_22691 = (state_22715[(21)]);
var inst_22704 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22691);
var inst_22705 = cljs.core.pr_str.call(null,inst_22704);
var inst_22706 = [cljs.core.str("not required: "),cljs.core.str(inst_22705)].join('');
var inst_22707 = figwheel.client.utils.log.call(null,inst_22706);
var state_22715__$1 = state_22715;
var statearr_22756_22832 = state_22715__$1;
(statearr_22756_22832[(2)] = inst_22707);

(statearr_22756_22832[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (6))){
var inst_22610 = (state_22715[(2)]);
var state_22715__$1 = state_22715;
var statearr_22757_22833 = state_22715__$1;
(statearr_22757_22833[(2)] = inst_22610);

(statearr_22757_22833[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (28))){
var inst_22635 = (state_22715[(26)]);
var inst_22662 = (state_22715[(2)]);
var inst_22663 = cljs.core.not_empty.call(null,inst_22635);
var state_22715__$1 = (function (){var statearr_22758 = state_22715;
(statearr_22758[(29)] = inst_22662);

return statearr_22758;
})();
if(cljs.core.truth_(inst_22663)){
var statearr_22759_22834 = state_22715__$1;
(statearr_22759_22834[(1)] = (29));

} else {
var statearr_22760_22835 = state_22715__$1;
(statearr_22760_22835[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (25))){
var inst_22633 = (state_22715[(25)]);
var inst_22649 = (state_22715[(2)]);
var inst_22650 = cljs.core.not_empty.call(null,inst_22633);
var state_22715__$1 = (function (){var statearr_22761 = state_22715;
(statearr_22761[(30)] = inst_22649);

return statearr_22761;
})();
if(cljs.core.truth_(inst_22650)){
var statearr_22762_22836 = state_22715__$1;
(statearr_22762_22836[(1)] = (26));

} else {
var statearr_22763_22837 = state_22715__$1;
(statearr_22763_22837[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (34))){
var inst_22684 = (state_22715[(2)]);
var state_22715__$1 = state_22715;
if(cljs.core.truth_(inst_22684)){
var statearr_22764_22838 = state_22715__$1;
(statearr_22764_22838[(1)] = (38));

} else {
var statearr_22765_22839 = state_22715__$1;
(statearr_22765_22839[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (17))){
var state_22715__$1 = state_22715;
var statearr_22766_22840 = state_22715__$1;
(statearr_22766_22840[(2)] = recompile_dependents);

(statearr_22766_22840[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (3))){
var state_22715__$1 = state_22715;
var statearr_22767_22841 = state_22715__$1;
(statearr_22767_22841[(2)] = null);

(statearr_22767_22841[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (12))){
var inst_22606 = (state_22715[(2)]);
var state_22715__$1 = state_22715;
var statearr_22768_22842 = state_22715__$1;
(statearr_22768_22842[(2)] = inst_22606);

(statearr_22768_22842[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (2))){
var inst_22568 = (state_22715[(12)]);
var inst_22575 = cljs.core.seq.call(null,inst_22568);
var inst_22576 = inst_22575;
var inst_22577 = null;
var inst_22578 = (0);
var inst_22579 = (0);
var state_22715__$1 = (function (){var statearr_22769 = state_22715;
(statearr_22769[(7)] = inst_22577);

(statearr_22769[(8)] = inst_22578);

(statearr_22769[(9)] = inst_22576);

(statearr_22769[(10)] = inst_22579);

return statearr_22769;
})();
var statearr_22770_22843 = state_22715__$1;
(statearr_22770_22843[(2)] = null);

(statearr_22770_22843[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (23))){
var inst_22629 = (state_22715[(18)]);
var inst_22637 = (state_22715[(23)]);
var inst_22635 = (state_22715[(26)]);
var inst_22632 = (state_22715[(24)]);
var inst_22633 = (state_22715[(25)]);
var inst_22640 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22642 = (function (){var all_files = inst_22629;
var res_SINGLEQUOTE_ = inst_22632;
var res = inst_22633;
var files_not_loaded = inst_22635;
var dependencies_that_loaded = inst_22637;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22629,inst_22637,inst_22635,inst_22632,inst_22633,inst_22640,state_val_22716,c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22641){
var map__22771 = p__22641;
var map__22771__$1 = ((((!((map__22771 == null)))?((((map__22771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22771):map__22771);
var request_url = cljs.core.get.call(null,map__22771__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22629,inst_22637,inst_22635,inst_22632,inst_22633,inst_22640,state_val_22716,c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22643 = cljs.core.reverse.call(null,inst_22637);
var inst_22644 = cljs.core.map.call(null,inst_22642,inst_22643);
var inst_22645 = cljs.core.pr_str.call(null,inst_22644);
var inst_22646 = figwheel.client.utils.log.call(null,inst_22645);
var state_22715__$1 = (function (){var statearr_22773 = state_22715;
(statearr_22773[(31)] = inst_22640);

return statearr_22773;
})();
var statearr_22774_22844 = state_22715__$1;
(statearr_22774_22844[(2)] = inst_22646);

(statearr_22774_22844[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (35))){
var state_22715__$1 = state_22715;
var statearr_22775_22845 = state_22715__$1;
(statearr_22775_22845[(2)] = true);

(statearr_22775_22845[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (19))){
var inst_22619 = (state_22715[(11)]);
var inst_22625 = figwheel.client.file_reloading.expand_files.call(null,inst_22619);
var state_22715__$1 = state_22715;
var statearr_22776_22846 = state_22715__$1;
(statearr_22776_22846[(2)] = inst_22625);

(statearr_22776_22846[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (11))){
var state_22715__$1 = state_22715;
var statearr_22777_22847 = state_22715__$1;
(statearr_22777_22847[(2)] = null);

(statearr_22777_22847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (9))){
var inst_22608 = (state_22715[(2)]);
var state_22715__$1 = state_22715;
var statearr_22778_22848 = state_22715__$1;
(statearr_22778_22848[(2)] = inst_22608);

(statearr_22778_22848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (5))){
var inst_22578 = (state_22715[(8)]);
var inst_22579 = (state_22715[(10)]);
var inst_22581 = (inst_22579 < inst_22578);
var inst_22582 = inst_22581;
var state_22715__$1 = state_22715;
if(cljs.core.truth_(inst_22582)){
var statearr_22779_22849 = state_22715__$1;
(statearr_22779_22849[(1)] = (7));

} else {
var statearr_22780_22850 = state_22715__$1;
(statearr_22780_22850[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (14))){
var inst_22589 = (state_22715[(22)]);
var inst_22598 = cljs.core.first.call(null,inst_22589);
var inst_22599 = figwheel.client.file_reloading.eval_body.call(null,inst_22598,opts);
var inst_22600 = cljs.core.next.call(null,inst_22589);
var inst_22576 = inst_22600;
var inst_22577 = null;
var inst_22578 = (0);
var inst_22579 = (0);
var state_22715__$1 = (function (){var statearr_22781 = state_22715;
(statearr_22781[(7)] = inst_22577);

(statearr_22781[(8)] = inst_22578);

(statearr_22781[(9)] = inst_22576);

(statearr_22781[(10)] = inst_22579);

(statearr_22781[(33)] = inst_22599);

return statearr_22781;
})();
var statearr_22782_22851 = state_22715__$1;
(statearr_22782_22851[(2)] = null);

(statearr_22782_22851[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (45))){
var state_22715__$1 = state_22715;
var statearr_22783_22852 = state_22715__$1;
(statearr_22783_22852[(2)] = null);

(statearr_22783_22852[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (26))){
var inst_22629 = (state_22715[(18)]);
var inst_22637 = (state_22715[(23)]);
var inst_22635 = (state_22715[(26)]);
var inst_22632 = (state_22715[(24)]);
var inst_22633 = (state_22715[(25)]);
var inst_22652 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22654 = (function (){var all_files = inst_22629;
var res_SINGLEQUOTE_ = inst_22632;
var res = inst_22633;
var files_not_loaded = inst_22635;
var dependencies_that_loaded = inst_22637;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22629,inst_22637,inst_22635,inst_22632,inst_22633,inst_22652,state_val_22716,c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22653){
var map__22784 = p__22653;
var map__22784__$1 = ((((!((map__22784 == null)))?((((map__22784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22784):map__22784);
var namespace = cljs.core.get.call(null,map__22784__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22784__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22629,inst_22637,inst_22635,inst_22632,inst_22633,inst_22652,state_val_22716,c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22655 = cljs.core.map.call(null,inst_22654,inst_22633);
var inst_22656 = cljs.core.pr_str.call(null,inst_22655);
var inst_22657 = figwheel.client.utils.log.call(null,inst_22656);
var inst_22658 = (function (){var all_files = inst_22629;
var res_SINGLEQUOTE_ = inst_22632;
var res = inst_22633;
var files_not_loaded = inst_22635;
var dependencies_that_loaded = inst_22637;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22629,inst_22637,inst_22635,inst_22632,inst_22633,inst_22652,inst_22654,inst_22655,inst_22656,inst_22657,state_val_22716,c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22629,inst_22637,inst_22635,inst_22632,inst_22633,inst_22652,inst_22654,inst_22655,inst_22656,inst_22657,state_val_22716,c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22659 = setTimeout(inst_22658,(10));
var state_22715__$1 = (function (){var statearr_22786 = state_22715;
(statearr_22786[(32)] = inst_22652);

(statearr_22786[(34)] = inst_22657);

return statearr_22786;
})();
var statearr_22787_22853 = state_22715__$1;
(statearr_22787_22853[(2)] = inst_22659);

(statearr_22787_22853[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (16))){
var state_22715__$1 = state_22715;
var statearr_22788_22854 = state_22715__$1;
(statearr_22788_22854[(2)] = reload_dependents);

(statearr_22788_22854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (38))){
var inst_22669 = (state_22715[(15)]);
var inst_22686 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22669);
var state_22715__$1 = state_22715;
var statearr_22789_22855 = state_22715__$1;
(statearr_22789_22855[(2)] = inst_22686);

(statearr_22789_22855[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (30))){
var state_22715__$1 = state_22715;
var statearr_22790_22856 = state_22715__$1;
(statearr_22790_22856[(2)] = null);

(statearr_22790_22856[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (10))){
var inst_22589 = (state_22715[(22)]);
var inst_22591 = cljs.core.chunked_seq_QMARK_.call(null,inst_22589);
var state_22715__$1 = state_22715;
if(inst_22591){
var statearr_22791_22857 = state_22715__$1;
(statearr_22791_22857[(1)] = (13));

} else {
var statearr_22792_22858 = state_22715__$1;
(statearr_22792_22858[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (18))){
var inst_22623 = (state_22715[(2)]);
var state_22715__$1 = state_22715;
if(cljs.core.truth_(inst_22623)){
var statearr_22793_22859 = state_22715__$1;
(statearr_22793_22859[(1)] = (19));

} else {
var statearr_22794_22860 = state_22715__$1;
(statearr_22794_22860[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (42))){
var state_22715__$1 = state_22715;
var statearr_22795_22861 = state_22715__$1;
(statearr_22795_22861[(2)] = null);

(statearr_22795_22861[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (37))){
var inst_22681 = (state_22715[(2)]);
var state_22715__$1 = state_22715;
var statearr_22796_22862 = state_22715__$1;
(statearr_22796_22862[(2)] = inst_22681);

(statearr_22796_22862[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22716 === (8))){
var inst_22576 = (state_22715[(9)]);
var inst_22589 = (state_22715[(22)]);
var inst_22589__$1 = cljs.core.seq.call(null,inst_22576);
var state_22715__$1 = (function (){var statearr_22797 = state_22715;
(statearr_22797[(22)] = inst_22589__$1);

return statearr_22797;
})();
if(inst_22589__$1){
var statearr_22798_22863 = state_22715__$1;
(statearr_22798_22863[(1)] = (10));

} else {
var statearr_22799_22864 = state_22715__$1;
(statearr_22799_22864[(1)] = (11));

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
});})(c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18866__auto__,c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18867__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18867__auto____0 = (function (){
var statearr_22803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22803[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18867__auto__);

(statearr_22803[(1)] = (1));

return statearr_22803;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18867__auto____1 = (function (state_22715){
while(true){
var ret_value__18868__auto__ = (function (){try{while(true){
var result__18869__auto__ = switch__18866__auto__.call(null,state_22715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18869__auto__;
}
break;
}
}catch (e22804){if((e22804 instanceof Object)){
var ex__18870__auto__ = e22804;
var statearr_22805_22865 = state_22715;
(statearr_22805_22865[(5)] = ex__18870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22866 = state_22715;
state_22715 = G__22866;
continue;
} else {
return ret_value__18868__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18867__auto__ = function(state_22715){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18867__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18867__auto____1.call(this,state_22715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18867__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18867__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18867__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18867__auto__;
})()
;})(switch__18866__auto__,c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18980__auto__ = (function (){var statearr_22806 = f__18979__auto__.call(null);
(statearr_22806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18978__auto__);

return statearr_22806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18980__auto__);
});})(c__18978__auto__,map__22561,map__22561__$1,opts,before_jsload,on_jsload,reload_dependents,map__22562,map__22562__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18978__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22869,link){
var map__22872 = p__22869;
var map__22872__$1 = ((((!((map__22872 == null)))?((((map__22872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22872):map__22872);
var file = cljs.core.get.call(null,map__22872__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__22872,map__22872__$1,file){
return (function (p1__22867_SHARP_,p2__22868_SHARP_){
if(cljs.core._EQ_.call(null,p1__22867_SHARP_,p2__22868_SHARP_)){
return p1__22867_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__22872,map__22872__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22878){
var map__22879 = p__22878;
var map__22879__$1 = ((((!((map__22879 == null)))?((((map__22879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22879):map__22879);
var match_length = cljs.core.get.call(null,map__22879__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22879__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22874_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22874_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args22881 = [];
var len__17861__auto___22884 = arguments.length;
var i__17862__auto___22885 = (0);
while(true){
if((i__17862__auto___22885 < len__17861__auto___22884)){
args22881.push((arguments[i__17862__auto___22885]));

var G__22886 = (i__17862__auto___22885 + (1));
i__17862__auto___22885 = G__22886;
continue;
} else {
}
break;
}

var G__22883 = args22881.length;
switch (G__22883) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22881.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__22888_SHARP_,p2__22889_SHARP_){
return cljs.core.assoc.call(null,p1__22888_SHARP_,cljs.core.get.call(null,p2__22889_SHARP_,key),p2__22889_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__22890){
var map__22893 = p__22890;
var map__22893__$1 = ((((!((map__22893 == null)))?((((map__22893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22893):map__22893);
var f_data = map__22893__$1;
var file = cljs.core.get.call(null,map__22893__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22895,files_msg){
var map__22902 = p__22895;
var map__22902__$1 = ((((!((map__22902 == null)))?((((map__22902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22902):map__22902);
var opts = map__22902__$1;
var on_cssload = cljs.core.get.call(null,map__22902__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__22904_22908 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__22905_22909 = null;
var count__22906_22910 = (0);
var i__22907_22911 = (0);
while(true){
if((i__22907_22911 < count__22906_22910)){
var f_22912 = cljs.core._nth.call(null,chunk__22905_22909,i__22907_22911);
figwheel.client.file_reloading.reload_css_file.call(null,f_22912);

var G__22913 = seq__22904_22908;
var G__22914 = chunk__22905_22909;
var G__22915 = count__22906_22910;
var G__22916 = (i__22907_22911 + (1));
seq__22904_22908 = G__22913;
chunk__22905_22909 = G__22914;
count__22906_22910 = G__22915;
i__22907_22911 = G__22916;
continue;
} else {
var temp__4425__auto___22917 = cljs.core.seq.call(null,seq__22904_22908);
if(temp__4425__auto___22917){
var seq__22904_22918__$1 = temp__4425__auto___22917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22904_22918__$1)){
var c__17606__auto___22919 = cljs.core.chunk_first.call(null,seq__22904_22918__$1);
var G__22920 = cljs.core.chunk_rest.call(null,seq__22904_22918__$1);
var G__22921 = c__17606__auto___22919;
var G__22922 = cljs.core.count.call(null,c__17606__auto___22919);
var G__22923 = (0);
seq__22904_22908 = G__22920;
chunk__22905_22909 = G__22921;
count__22906_22910 = G__22922;
i__22907_22911 = G__22923;
continue;
} else {
var f_22924 = cljs.core.first.call(null,seq__22904_22918__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_22924);

var G__22925 = cljs.core.next.call(null,seq__22904_22918__$1);
var G__22926 = null;
var G__22927 = (0);
var G__22928 = (0);
seq__22904_22908 = G__22925;
chunk__22905_22909 = G__22926;
count__22906_22910 = G__22927;
i__22907_22911 = G__22928;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__22902,map__22902__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__22902,map__22902__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1457999283669