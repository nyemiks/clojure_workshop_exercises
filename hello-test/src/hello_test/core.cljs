(ns hello-test.core
(:require [cuerdas.core :as str]
          [cljs.core.async :refer [<!]]
		  [cljs-http.client :as http])
(:require-macros [cljs.core.async.macros :refer [go]])
)


(defn adder [x y ]
(+ x y))


(defn profanity-filter [string]
(if (str/includes? string "bad")
(str/replace string "bad" "great")
string))


(defn http-get [url params callback]
(go 
   (let [response (<! (http/get url params))]
     (callback response)
    )
)
)