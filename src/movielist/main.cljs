;   Copyright (c) Jennifer Morgan. All rights reserved.
(ns movielist.main
	(:require
	  [movielist.views :as views]))
;
; Main Called from <script></script> in HTML page
;
				
(defn start
	"called from movielist.html (the main app)"
	[]
  ;; Button Ribbon
  (views/widget-setup))
 

