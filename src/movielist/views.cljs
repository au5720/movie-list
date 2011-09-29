(ns movielist.views
   (:require 	  [movelist.dom-helpers :as dom]
   							[movielist.data :as dat]
   							[movielist.comms :as comms]
   							[goog.events :as events]
    						[goog.events.EventType :as event-type]))


(defn friends[v]
	(let [li-str (fn[s] (str "<li><a href='#" s "'>" s "</a></li>"))]
		(reduce str (map li-str v))))


(def 	search-ribbon [:div#body 
												[:div#search-bar
													[:span#search-text]
													[:input#search-box {:type "text" :text "Enter The Film Required"}]
													[:button#lookup-button {:class "blue" :text "?"}]
													[:button#add-button {:class "blue" :text "+"}]]
												[:div#friend-list
												    [:h2#friend-list-title {:class "friend-list-h2" :text "Friends."}]
												    [:ul {:id "friend-list-root"}]
												    ;[:ul (dom/html "<li>One</li><li>Two</li><li>Three</li><li>Four</li><li>Five</li>")]]
												    [:ul (dom/html (friends dat/test-friends))]]
												[:div#movie-list]])

(defn widget-setup[]
  (dom/append (dom/get-element :root) (dom/build search-ribbon))
	(dom/set-text :lookup-button "?")	
	(dom/set-text :add-button "+")
	(dom/set-text :search-text "Lookup/Filter Movies")
	(dom/set-text :friend-list-title "Friends.")
	(let [elem (dom/get-element :lookup-button)]
			(events/listen elem event-type/CLICK comms/handle-search-box)))
;	(events/listen (dom/get-element :lookup-button)
;                     event-type/CLICK
;                     comms/handle-search-box))
												
(defn leaderboard-element
  "Create a leaderboard element from a user map."
  [user]
  (dom/build [:div.tweet
              [:img.profile-pic {:src (:image-url user)}]
              [:div.tweet-details
               [:div.user-name (:username user)]
               [:div.tweet-text (dom/html (buzz/markup (:last-tweet user)))]
               [:div (str (buzz/num-mentions user))]]]))

;;	(events/listen (get-element :add-button)
;;                     event-type/CLICK
;;                     (fn[](window/alert "add button"))))

