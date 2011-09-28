goog.provide('movielist.main');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
goog.require('goog.events.EventType');
goog.require('goog.net.Jsonp');
goog.require('goog.style');
goog.require('goog.structs.Map');
goog.require('goog.now');
goog.require('goog.json');
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
movielist.main.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,x)))
{return cljs.core.reduce.call(null,(function (m,p__4771){
var vec__4772__4773 = p__4771;
var k__4774 = cljs.core.nth.call(null,vec__4772__4773,0,null);
var v__4775 = cljs.core.nth.call(null,vec__4772__4773,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__4774),clj__GT_js.call(null,v__4775));
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
* Set the text content for the passed element returning the
* element. If a keyword is passed in the place of e, the element with
* that id will be used and returned.
*/
movielist.main.set_text = (function set_text(e,s){
var e__4776 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,e))?movielist.main.get_element.call(null,e):e);

var G__4777__4778 = e__4776;

goog.dom.setTextContent.call(null,G__4777__4778,s);
return G__4777__4778;
});
/**
* Return the element with the passed id.
*/
movielist.main.get_element = (function get_element(id){
return goog.dom.getElement.call(null,cljs.core.name.call(null,id));
});
movielist.main.set_style = (function set_style(e,m){
return goog.style.setStyle.call(null,movielist.main.get_element.call(null,e),movielist.main.clj__GT_js.call(null,m));
});
movielist.main.button_bar = cljs.core.Vector.fromArray(["﷐'button",cljs.core.ObjMap.fromObject(["﷐'id"],{"﷐'id":"add-button"})]);
movielist.main.my_builder = (function my_builder(t,m){
return goog.dom.createDom.call(null,cljs.core.name.call(null,t),movielist.main.clj__GT_js.call(null,m));
});
movielist.main.add_to_dom = (function add_to_dom(parent,typ,prop){
var p__4779 = movielist.main.get_element.call(null,parent);
var new_obj__4780 = movielist.main.my_builder.call(null,typ,prop);

return goog.dom.appendChild.call(null,p__4779,new_obj__4780);
});
movielist.main.echo = (function echo(from){
return window.alert.call(null,cljs.core.str.call(null,"hallo ->",from));
});
movielist.main.callback = (function callback(e){
var ans__4781 = e.target.getResponseJson();

return window.alert.call(null,ans__4781.data);
});
movielist.main.xhr = (new goog.net.XhrIo());
/**
* handle the xhrio
*/
movielist.main.handle_search_box = (function handle_search_box(){
var txt__4782 = movielist.main.get_element.call(null,"﷐'search-box");
var mm__4783 = (new goog.structs.Map());
var postData__4784 = "﷑'type=user&first=Bob&last=Evans'";

return movielist.main.xhr.send("/imdb",movielist.main.callback);
});
movielist.main.start = (function start(){
movielist.main.add_to_dom.call(null,"﷐'root","﷐'div",cljs.core.ObjMap.fromObject(["﷐'id"],{"﷐'id":"search-bar"}));
movielist.main.add_to_dom.call(null,"﷐'search-bar","﷐'button",cljs.core.ObjMap.fromObject(["﷐'id","﷐'class","﷐'tabindex"],{"﷐'id":"add-button","﷐'class":"blue","﷐'tabindex":3}));
movielist.main.add_to_dom.call(null,"﷐'search-bar","﷐'button",cljs.core.ObjMap.fromObject(["﷐'id","﷐'class","﷐'tabindex"],{"﷐'id":"lookup-button","﷐'class":"blue","﷐'tabindex":2}));
movielist.main.add_to_dom.call(null,"﷐'search-bar","﷐'input",cljs.core.ObjMap.fromObject(["﷐'id","﷐'type","﷐'tabindex"],{"﷐'id":"search-box","﷐'type":"text","﷐'tabindex":1}));
movielist.main.add_to_dom.call(null,"﷐'search-bar","﷐'span",cljs.core.ObjMap.fromObject(["﷐'id","﷐'tabindex"],{"﷐'id":"search-text","﷐'tabindex":"-1"}));
movielist.main.set_text.call(null,"﷐'lookup-button","?");
movielist.main.set_text.call(null,"﷐'add-button","+");
movielist.main.set_text.call(null,"﷐'search-text","Lookup/Filter Movies");
movielist.main.set_style.call(null,"﷐'search-text",cljs.core.ObjMap.fromObject(["﷐'float","﷐'font-weight","﷐'text-align","﷐'margin-right"],{"﷐'float":"right","﷐'font-weight":"bold","﷐'text-align":"right","﷐'margin-right":"10px"}));
movielist.main.set_style.call(null,"﷐'search-box",cljs.core.ObjMap.fromObject(["﷐'float","﷐'width"],{"﷐'float":"right","﷐'width":"200px"}));
movielist.main.set_style.call(null,"﷐'add-button",cljs.core.ObjMap.fromObject(["﷐'float","﷐'margin-left"],{"﷐'float":"right","﷐'margin-left":"2px"}));
movielist.main.set_style.call(null,"﷐'lookup-button",cljs.core.ObjMap.fromObject(["﷐'float","﷐'margin-left","﷐'width","﷐'height"],{"﷐'float":"right","﷐'margin-left":"2px","﷐'width":"50px","﷐'height":"25px"}));
goog.events.listen.call(null,movielist.main.get_element.call(null,"﷐'lookup-button"),goog.events.EventType.CLICK,movielist.main.handle_search_box);
return goog.events.listen.call(null,movielist.main.get_element.call(null,"﷐'add-button"),goog.events.EventType.CLICK,(function (){
return movielist.main.echo.call(null,"add button");
}));
});
