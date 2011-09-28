(ns movielist.login
	(:require
		[goog :as go]))
	
(defn now[]
	(window/alert (goog.now)))
	
(def numbers (take 100 (iterate inc 1)))
