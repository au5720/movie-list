goog.provide('movielist.main');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
goog.require('goog.events.EventType');
goog.require('goog.net.Jsonp');
goog.require('goog.style');
goog.require('goog.structs.Map');
goog.require('goog.now');
goog.require('goog.json');
/**
* Funtion to Log anything to the Javascript Console
*/
movielist.main.log = (function log(str){
return console.log(str);
});
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
{return cljs.core.reduce.call(null,(function (m,p__2263){
var vec__2264__2265 = p__2263;
var k__2266 = cljs.core.nth.call(null,vec__2264__2265,0,null);
var v__2267 = cljs.core.nth.call(null,vec__2264__2265,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__2266),clj__GT_js.call(null,v__2267));
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
var e__2268 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,e))?movielist.main.get_element.call(null,e):e);

var G__2269__2270 = e__2268;

goog.dom.setTextContent.call(null,G__2269__2270,s);
return G__2269__2270;
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
var p__2271 = movielist.main.get_element.call(null,parent);
var new_obj__2272 = movielist.main.my_builder.call(null,typ,prop);

return goog.dom.appendChild.call(null,p__2271,new_obj__2272);
});
movielist.main.xhr_return_fn = (function xhr_return_fn(e){
var xhr__2273 = e.target;
var respTxt__2274 = xhr__2273.getResponseText();
var data__2275 = cljs.reader.read_string.call(null,respTxt__2274);

return movielist.main.log.call(null,cljs.core.str.call(null,"Returned :","﷐'name".call(null,data__2275)));
});
/**
* handle the xhrio
*/
movielist.main.handle_search_box = (function handle_search_box(){
var txt__2276 = movielist.main.get_element.call(null,"﷐'search-box");
var post_data__2277 = cljs.core.str.call(null,"title=","Star Trek");

movielist.main.log.call(null,cljs.core.str.call(null,"Search Box Text :",txt__2276));
movielist.main.log.call(null,cljs.core.str.call(null,"post-data :",post_data__2277));
return goog.net.XhrIo.send.call(null,"/imdb",movielist.main.xhr_return_fn,"POST",post_data__2277);
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
