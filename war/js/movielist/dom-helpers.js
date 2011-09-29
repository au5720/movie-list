goog.provide('movelist.dom_helpers');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.style');
/**
* Return the element with the passed id.
*/
movelist.dom_helpers.get_element = (function get_element(id){
return goog.dom.getElement.call(null,cljs.core.name.call(null,id));
});
/**
* Append all children to parent.
* @param {...*} var_args
*/
movelist.dom_helpers.append = (function() { 
var append__delegate = function (parent,children){
var G__3169__3170 = cljs.core.seq.call(null,children);

while(true){
if(cljs.core.truth_(G__3169__3170))
{var child__3171 = cljs.core.first.call(null,G__3169__3170);

goog.dom.appendChild.call(null,parent,child__3171);
{
var G__3172 = cljs.core.next.call(null,G__3169__3170);
G__3169__3170 = G__3172;
continue;
}
} else
{}
break;
}
return parent;
};
var append = function (parent,var_args){
var children = null;
if (goog.isDef(var_args)) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return append__delegate.call(this, parent, children);
};
append.cljs$lang$maxFixedArity = 1;
append.cljs$lang$applyTo = (function (arglist__3173){
var parent = cljs.core.first(arglist__3173);
var children = cljs.core.rest(arglist__3173);
return append__delegate.call(this, parent, children);
});
return append;
})()
;
/**
* Set the text content for the passed element returning the
* element. If a keyword is passed in the place of e, the element with
* that id will be used and returned.
*/
movelist.dom_helpers.set_text = (function set_text(e,s){
var e__3175 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,e))?movelist.dom_helpers.get_element.call(null,e):e);

var G__3176__3177 = e__3175;

goog.dom.setTextContent.call(null,G__3176__3177,s);
return G__3176__3177;
});
movelist.dom_helpers.normalize_args = (function normalize_args(tag,args){
var parts__3181 = clojure.string.split.call(null,tag,/(\.|#)/);
var vec__3180__3182 = cljs.core.Vector.fromArray([cljs.core.first.call(null,parts__3181),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.map.call(null,(function (p1__3174_SHARP_){
if(cljs.core.truth_(cljs.core._EQ_.call(null,p1__3174_SHARP_,".")))
{return "﷐'class";
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,p1__3174_SHARP_,"#")))
{return "﷐'id";
} else
{if(cljs.core.truth_("﷐'else"))
{return p1__3174_SHARP_;
} else
{return null;
}
}
}
}),cljs.core.rest.call(null,parts__3181)))]);
var tag__3183 = cljs.core.nth.call(null,vec__3180__3182,0,null);
var attrs__3184 = cljs.core.nth.call(null,vec__3180__3182,1,null);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{return cljs.core.Vector.fromArray([tag__3183,cljs.core.merge.call(null,attrs__3184,cljs.core.first.call(null,args)),cljs.core.rest.call(null,args)]);
} else
{return cljs.core.Vector.fromArray([tag__3183,attrs__3184,args]);
}
});
/**
* Create a dom element using a keyword for the element name and a map
* for the attributes. Append all children to parent. If the first
* child is a string then the string will be set as the text content of
* the parent and all remaining children will be appended.
* @param {...*} var_args
*/
movelist.dom_helpers.element = (function() { 
var element__delegate = function (tag,args){
var vec__3185__3187 = movelist.dom_helpers.normalize_args.call(null,tag,args);
var tag__3188 = cljs.core.nth.call(null,vec__3185__3187,0,null);
var attrs__3189 = cljs.core.nth.call(null,vec__3185__3187,1,null);
var children__3190 = cljs.core.nth.call(null,vec__3185__3187,2,null);
var parent__3196 = goog.dom.createDom.call(null,cljs.core.name.call(null,tag__3188),cljs.core.reduce.call(null,(function (m,p__3191){
var vec__3192__3193 = p__3191;
var k__3194 = cljs.core.nth.call(null,vec__3192__3193,0,null);
var v__3195 = cljs.core.nth.call(null,vec__3192__3193,1,null);

return cljs.core.assoc.call(null,m,k__3194,v__3195);
}),cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p1__3178_SHARP_,p2__3179_SHARP_){
return cljs.core.vector.call(null,cljs.core.name.call(null,p1__3178_SHARP_),p2__3179_SHARP_);
}),cljs.core.keys.call(null,attrs__3189),cljs.core.vals.call(null,attrs__3189))).strobj);
var vec__3186__3197 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,cljs.core.first.call(null,children__3190)))?cljs.core.Vector.fromArray([movelist.dom_helpers.set_text.call(null,element.call(null,tag__3188,attrs__3189),cljs.core.first.call(null,children__3190)),cljs.core.rest.call(null,children__3190)]):cljs.core.Vector.fromArray([parent__3196,children__3190]));
var parent__3198 = cljs.core.nth.call(null,vec__3186__3197,0,null);
var children__3199 = cljs.core.nth.call(null,vec__3186__3197,1,null);

return cljs.core.apply.call(null,movelist.dom_helpers.append,parent__3198,children__3199);
};
var element = function (tag,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return element__delegate.call(this, tag, args);
};
element.cljs$lang$maxFixedArity = 1;
element.cljs$lang$applyTo = (function (arglist__3200){
var tag = cljs.core.first(arglist__3200);
var args = cljs.core.rest(arglist__3200);
return element__delegate.call(this, tag, args);
});
return element;
})()
;
/**
* Remove all children from the element with the passed id.
*/
movelist.dom_helpers.remove_children = (function remove_children(id){
var parent__3201 = goog.dom.getElement.call(null,cljs.core.name.call(null,id));

return goog.dom.removeChildren.call(null,parent__3201);
});
/**
* Create a dom element from an html string.
*/
movelist.dom_helpers.html = (function html(s){
return goog.dom.htmlToDocumentFragment.call(null,s);
});
movelist.dom_helpers.element_arg_QMARK_ = (function element_arg_QMARK_(x){
var or__3548__auto____3202 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3202))
{return or__3548__auto____3202;
} else
{var or__3548__auto____3203 = cljs.core.map_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3203))
{return or__3548__auto____3203;
} else
{return cljs.core.string_QMARK_.call(null,x);
}
}
});
/**
* Build up a dom element from nested vectors.
*/
movelist.dom_helpers.build = (function build(x){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,x)))
{var vec__3204__3205 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,cljs.core.first.call(null,x)))?cljs.core.Vector.fromArray([cljs.core.apply.call(null,movelist.dom_helpers.element,cljs.core.take_while.call(null,movelist.dom_helpers.element_arg_QMARK_,x)),cljs.core.drop_while.call(null,movelist.dom_helpers.element_arg_QMARK_,x)]):cljs.core.Vector.fromArray([cljs.core.first.call(null,x),cljs.core.rest.call(null,x)]));
var parent__3206 = cljs.core.nth.call(null,vec__3204__3205,0,null);
var children__3207 = cljs.core.nth.call(null,vec__3204__3205,1,null);
var children__3208 = cljs.core.map.call(null,build,children__3207);

return cljs.core.apply.call(null,movelist.dom_helpers.append,parent__3206,children__3208);
} else
{return x;
}
});
/**
* Insert a child element at a specific location.
*/
movelist.dom_helpers.insert_at = (function insert_at(parent,child,index){
return goog.dom.insertChildAt.call(null,parent,child,index);
});
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
movelist.dom_helpers.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,x)))
{return cljs.core.reduce.call(null,(function (m,p__3209){
var vec__3210__3211 = p__3209;
var k__3212 = cljs.core.nth.call(null,vec__3210__3211,0,null);
var v__3213 = cljs.core.nth.call(null,vec__3210__3211,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__3212),clj__GT_js.call(null,v__3213));
}),cljs.core.ObjMap.fromObject([],{}),x).strobj;
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});
/**
* Set the give style using the map supplied
*/
movelist.dom_helpers.set_style = (function set_style(e,m){
return goog.style.setStyle.call(null,movelist.dom_helpers.get_element.call(null,e),movelist.dom_helpers.clj__GT_js.call(null,m));
});
