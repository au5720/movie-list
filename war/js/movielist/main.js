goog.provide('movielist.main');
goog.require('cljs.core');
goog.require('movielist.views');
/**
* called from movielist.html (the main app)
*/
movielist.main.start = (function start(){
return movielist.views.widget_setup.call(null);
});
