(ns movielist.app_servlet
  (:gen-class :extends javax.servlet.http.HttpServlet)
  (:use movielist.core)
  (:use [appengine-magic.servlet :only [make-servlet-service-method]]))


(defn -service [this request response]
  ((make-servlet-service-method movielist-app) this request response))
