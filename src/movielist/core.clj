(ns movielist.core
	(:use compojure.core)
  (:require 
	  [ring.util.response :as resp]
  	[appengine-magic.core :as ae] 
  	[clojure.contrib.json :as json]
  	[appengine-magic.services.user :as usr]
		[compojure.route :as route]))

;(def imdb-uri (goog.Uri. "http://www.deanclatworthy.com/imdb/?q=Star+Trek"))

;(def hmap {"q" "Star+Trek"})

(defn break-up-req[req k]
	(.getParameter (:request req) k))

(def data {"age" 30 , "name" "jennifer"})

(defn login[]
	(if (usr/user-logged-in?)
	    (str "/movielist.html") ;; Main Page of MovieList App
	    (usr/login-url :destination "/login")))

(defroutes movielist-app-handler

  (GET "/" req
      (resp/redirect "/index.html"))
               
  (GET "/login" req 
  		(resp/redirect (login))) 
  		       
  (GET "/userinfo" req 
       {:status 200
        :headers {"Content-Type" "text/plain"}
        :title "test"
        :body "Hello, world!"})

  (POST "/imdb" req
        (str {:name (break-up-req req "title")}))

	(route/resources "/" {:root "html"})	
         
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
