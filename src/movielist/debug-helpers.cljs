(ns movielist.debug-helpers)
;
; Utilities Functions
;
(defn log 
	"Funtion to Log anything to the Javascript Console"
	[str]
  (js* "console.log(~{str})"))


