goog.provide('movielist.views');
goog.require('cljs.core');
goog.require('movelist.dom_helpers');
goog.require('movielist.data');
goog.require('movielist.comms');
goog.require('goog.events');
goog.require('goog.events.EventType');
movielist.views.friends = (function friends(v){
var li_str__3277 = (function (s){
return cljs.core.str.call(null,"<li><a href='#",s,"'>",s,"</a></li>");
});

return cljs.core.reduce.call(null,cljs.core.str,cljs.core.map.call(null,li_str__3277,v));
});
movielist.views.search_ribbon = cljs.core.Vector.fromArray(["﷐'div#body",cljs.core.Vector.fromArray(["﷐'div#search-bar",cljs.core.Vector.fromArray(["﷐'span#search-text"]),cljs.core.Vector.fromArray(["﷐'input#search-box",cljs.core.ObjMap.fromObject(["﷐'type","﷐'text"],{"﷐'type":"text","﷐'text":"Enter The Film Required"})]),cljs.core.Vector.fromArray(["﷐'button#lookup-button",cljs.core.ObjMap.fromObject(["﷐'class","﷐'text"],{"﷐'class":"blue","﷐'text":"?"})]),cljs.core.Vector.fromArray(["﷐'button#add-button",cljs.core.ObjMap.fromObject(["﷐'class","﷐'text"],{"﷐'class":"blue","﷐'text":"+"})])]),cljs.core.Vector.fromArray(["﷐'div#friend-list",cljs.core.Vector.fromArray(["﷐'h2#friend-list-title",cljs.core.ObjMap.fromObject(["﷐'class","﷐'text"],{"﷐'class":"friend-list-h2","﷐'text":"Friends."})]),cljs.core.Vector.fromArray(["﷐'ul",cljs.core.ObjMap.fromObject(["﷐'id"],{"﷐'id":"friend-list-root"})]),cljs.core.Vector.fromArray(["﷐'ul",movelist.dom_helpers.html.call(null,movielist.views.friends.call(null,movielist.data.test_friends))])]),cljs.core.Vector.fromArray(["﷐'div#movie-list"])]);
movielist.views.widget_setup = (function widget_setup(){
movelist.dom_helpers.append.call(null,movelist.dom_helpers.get_element.call(null,"﷐'root"),movelist.dom_helpers.build.call(null,movielist.views.search_ribbon));
movelist.dom_helpers.set_text.call(null,"﷐'lookup-button","?");
movelist.dom_helpers.set_text.call(null,"﷐'add-button","+");
movelist.dom_helpers.set_text.call(null,"﷐'search-text","Lookup/Filter Movies");
movelist.dom_helpers.set_text.call(null,"﷐'friend-list-title","Friends.");
var elem__3278 = movelist.dom_helpers.get_element.call(null,"﷐'lookup-button");

return goog.events.listen.call(null,elem__3278,goog.events.EventType.CLICK,movielist.comms.handle_search_box);
});
/**
* Create a leaderboard element from a user map.
*/
movielist.views.leaderboard_element = (function leaderboard_element(user){
return movelist.dom_helpers.build.call(null,cljs.core.Vector.fromArray(["﷐'div.tweet",cljs.core.Vector.fromArray(["﷐'img.profile-pic",cljs.core.ObjMap.fromObject(["﷐'src"],{"﷐'src":"﷐'image-url".call(null,user)})]),cljs.core.Vector.fromArray(["﷐'div.tweet-details",cljs.core.Vector.fromArray(["﷐'div.user-name","﷐'username".call(null,user)]),cljs.core.Vector.fromArray(["﷐'div.tweet-text",movelist.dom_helpers.html.call(null,buzz.markup.call(null,"﷐'last-tweet".call(null,user)))]),cljs.core.Vector.fromArray(["﷐'div",cljs.core.str.call(null,buzz.num_mentions.call(null,user))])])]));
});
