(ns movielist.comms
	(:require [movielist.debug-helpers :as debug]
						[movelist.dom-helpers :as dom]
						[cljs.reader :as reader]
	    			[goog.net.XhrIo :as xhrio]))


;
; AJAX functions
;				

(defn xhr-return-fn[e]
	(let [xhr (.target e)
				respTxt (. xhr (getResponseText))
        data (reader/read-string respTxt)]
        (debug/log (str "Returned :" (:name data)))
				(set! (.value (dom/get-element :search-box)) (str "Name: "(:name data) " Age: " (:age data)))))
	
(defn handle-search-box
	"handle the xhrio"
	[e]
	(let [txt (dom/get-element :search-box)
				post-data (str "title=" (.value txt))]
		;(window/alert "here")
		(debug/log (str "Post Data :" post-data))
		;(debug/log (str "post-data :" post-data))
  	(goog.net.XhrIo/send "/imdb" xhr-return-fn "POST" post-data)))



