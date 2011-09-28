(ns movielist.main
	(:require
		[goog.now :as go]
		[goog.dom :as dom]
    [goog.events :as events]
    [goog.json :as json]
    [goog.structs.Map :as m]
    [goog.net.Jsonp :as jsonp]    
    [goog.net.XhrIo :as xhrio]
    [goog.events.EventType :as event-type]	
		[goog.style :as style]))
		

(defn clj->js
  "Recursively transforms ClojureScript maps into Javascript objects,
   other ClojureScript colls into JavaScript arrays, and ClojureScript
   keywords into JavaScript strings."
  [x]
  (cond
    (string? x) x
    (keyword? x) (name x)
    (map? x) (.strobj (reduce (fn [m [k v]]
               (assoc m (clj->js k) (clj->js v))) {} x))
    (coll? x) (apply array (map clj->js x))
    :else x))

(defn set-text
  "Set the text content for the passed element returning the
  element. If a keyword is passed in the place of e, the element with
  that id will be used and returned."
  [e s]
  (let [e (if (keyword? e) (get-element e) e)]
    (doto e (dom/setTextContent s))))

(defn get-element
  "Return the element with the passed id."
  [id]
  (dom/getElement (name id)))
  
(defn set-style[e m]
	(style/setStyle (get-element e) (clj->js m)))

(def button-bar [:button {:id "add-button"}])
    
(defn my-builder[t m]
	(dom/createDom (name t) (clj->js m)))

(defn add-to-dom[parent typ prop]
	(let [p (get-element parent)
				new-obj (my-builder typ prop)]
				(dom/appendChild p new-obj)))
				
(defn echo[from] (window/alert (str "hallo ->" from)))

(defn callback[e]
	(let [ans (. (.target e) (getResponseJson))]
		(window/alert (.data ans))))
		
(def xhr (goog.net.XhrIo.))
	
(defn handle-search-box
"handle the xhrio"
[]
	(let [txt (get-element :search-box)
	      mm (goog.structs.Map.)
	      postData 'type=user&first=Bob&last=Evans']
	   (.send xhr "/imdb" callback)))

				
(defn start[]
  ;; Button Ribbon
	(add-to-dom :root :div {:id "search-bar"})  
	;; Buttons and Search Text
	(add-to-dom :search-bar :button {:id "add-button" :class "blue" :tabindex 3})
	(add-to-dom :search-bar :button {:id "lookup-button" :class "blue" :tabindex 2})
	(add-to-dom :search-bar :input  {:id "search-box" :type "text" :tabindex 1})
	(add-to-dom :search-bar :span   {:id "search-text" :tabindex "-1"})
	;; Text
	(set-text :lookup-button "?")	
	(set-text :add-button "+")
	(set-text :search-text "Lookup/Filter Movies")
	;; Styles
	(set-style :search-text   {:float "right" :font-weight "bold" :text-align "right" :margin-right "10px"})
	(set-style :search-box    {:float "right" :width "200px"})
	(set-style :add-button    {:float "right" :margin-left "2px" })
	(set-style :lookup-button {:float "right" :margin-left "2px" :width "50px" :height "25px"})
	;; Listeners
	(events/listen (get-element :lookup-button)
                     event-type/CLICK
                     handle-search-box)
              
	(events/listen (get-element :add-button)
                     event-type/CLICK
                     (fn[](echo "add button"))))
                     
              
