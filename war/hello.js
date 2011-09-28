goog.provide('example');
goog.require('goog.dom');
goog.require('goog.net.XhrIo');

example.sayHello = function(message) {
goog.dom.getElement('hello').innerHTML = message;
};
example.getData = function(){
var url = 'http://localhost:8080/imdb';
var postData = 'type=user&first=Bob&last=Evans';
var callback = function(e) {
		var xhr = /** @type {goog.net.XhrIo} */ (e.target);
		if (xhr.getStatus() == 201) {
			alert('The new user was created!');
		} else {
			alert('Oh no, there was a problem!');
		}
	var responseText = xhr.getResponseText();
	setTimeout(function() { alert(responseText); }, 1000);		
	};
goog.net.XhrIo.send(url, callback, 'POST', postData);

};

