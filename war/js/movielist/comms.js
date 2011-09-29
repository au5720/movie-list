goog.provide('movielist.comms');
goog.require('cljs.core');
goog.require('movielist.debug_helpers');
goog.require('movelist.dom_helpers');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
movielist.comms.xhr_return_fn = (function xhr_return_fn(e){
var xhr__3375 = e.target;
var respTxt__3376 = xhr__3375.getResponseText();
var data__3377 = cljs.reader.read_string.call(null,respTxt__3376);

movielist.debug_helpers.log.call(null,cljs.core.str.call(null,"Returned :","﷐'name".call(null,data__3377)));
return movelist.dom_helpers.get_element.call(null,"﷐'search-box").value = cljs.core.str.call(null,"Name: ","﷐'name".call(null,data__3377)," Age: ","﷐'age".call(null,data__3377));
});
/**
* handle the xhrio
*/
movielist.comms.handle_search_box = (function handle_search_box(e){
var txt__3378 = movelist.dom_helpers.get_element.call(null,"﷐'search-box");
var post_data__3379 = cljs.core.str.call(null,"title=",txt__3378.value);

movielist.debug_helpers.log.call(null,cljs.core.str.call(null,"Post Data :",post_data__3379));
return goog.net.XhrIo.send.call(null,"/imdb",movielist.comms.xhr_return_fn,"POST",post_data__3379);
});
