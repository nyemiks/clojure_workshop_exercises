(ns current-time.core
  (:require [java-time :as time])
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println (time/local-time))
  )
