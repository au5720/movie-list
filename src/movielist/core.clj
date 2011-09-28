(ns movielist.core
(:use compojure.core)
  (:require 
	  [ring.util.response :as resp]
  	[appengine-magic.core :as ae] 
  	[clojure.contrib.json :as json]
  	[appengine-magic.services.user :as usr]
  	))

;(def imdb-uri (goog.Uri. "http://www.deanclatworthy.com/imdb/?q=Star+Trek"))

;(def hmap {"q" "Star+Trek"})

(def data {"age" 30 , "name" "jennifer"})

(defn login[]
	(if (usr/user-logged-in?)
	    (str "/movielist.html") ;; Main Page of MovieList App
	    (usr/login-url :destination "/login")))

(defn imdb[q]
  (prn (str "here" q))
  (let [a (:q q)]
		(json/json-str {:data a})))


(defroutes movielist-app-handler

  (GET "/" req
       {:status 200
        :headers {"Content-Type" "text/plain"}
        :title "test"
        :body "Hello, world!"})
  (GET "/login" req 
  		(resp/redirect (login))) 
  		       
  (GET "/userinfo" req 
       {:status 200
        :headers {"Content-Type" "text/plain"}
        :title "test"
        :body "Hello, world!"})

 (GET "/imdb" req 
    (prn req))
    
;    (imdb params))
     
 (GET "/userinfo" req 
       {:status 200
        :headers {"Content-Type" "text/plain"}
        :title "test"
        :body "Hello, world!"})
        
  (ANY "*" _
       {:status 200
        :headers {"Content-Type" "text/plain"}
        :body "not found"}))

(ae/def-appengine-app movielist-app #'movielist-app-handler)