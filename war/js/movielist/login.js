goog.provide('movielist.login');
goog.require('cljs.core');
goog.require('goog');
movielist.login.now = (function now(){
return window.alert.call(null,goog.now.call(null));
});
movielist.login.numbers = cljs.core.take.call(null,100,cljs.core.iterate.call(null,cljs.core.inc,1));
