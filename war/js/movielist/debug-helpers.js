goog.provide('movielist.debug_helpers');
goog.require('cljs.core');
/**
* Funtion to Log anything to the Javascript Console
*/
movielist.debug_helpers.log = (function log(str){
return console.log(str);
});
