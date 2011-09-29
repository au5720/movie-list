goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.string.StringBuffer', 'goog.object', 'goog.array']);
goog.addDependency("../cljs/reader.js", ['cljs.reader'], ['cljs.core', 'goog.string']);
goog.addDependency("../movielist/login.js", ['movielist.login'], ['cljs.core', 'goog']);
goog.addDependency("../movielist/main.js", ['movielist.main'], ['cljs.core', 'goog.events', 'cljs.reader', 'goog.net.XhrIo', 'goog.dom', 'goog.events.EventType', 'goog.net.Jsonp', 'goog.style', 'goog.structs.Map', 'goog.now', 'goog.json']);