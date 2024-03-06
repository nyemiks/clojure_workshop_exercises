(ns json-converter.core
  (:require [cheshire.core :as json])
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))


(defn hash2json
  "hash to json"
  [hash]
  (json/generate-string hash)
  )



(defn json2hash
  "json to hash"
  [json]
  (json/parse-string json) )
