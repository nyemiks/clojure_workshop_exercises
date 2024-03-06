(ns hello-test.core-test
(:require [cljs.test :refer-macros [are async deftest is testing]]
[clojure.test.check.generators :as gen]
[clojure.test.check.properties :refer-macros [for-all]]
[clojure.test.check.clojure-test :refer-macros [defspec]]
[cuerdas.core :as str]
[hello-test.core :refer [adder]]
[hello-test.core :refer [profanity-filter]]
[hello-test.core :refer [http-get]]
)
)



(deftest profanity-filter-test
(testing "Filter replaced bad word"
(is (= "Clojure is great" (profanity-filter "Clojure is bad"))))
(testing "Filter does not replace good words"
(are [string result] (= result (profanity-filter string))
"Clojure is great" "Clojure is great"
"Clojure is brilliant" "Clojure is brilliant")))



(deftest capitalize-test-is
(testing "Test capitalize? function using is macro"
(is (= "Katy" (str/capitalize "katy")))
(is (= "John" (str/capital "john")))
(is (= "Mike" (str/capitalize "mike")))))



(deftest error-thrown-test
(testing "Catching errors in ClojureScript"
(is (thrown? js/Error (assoc ["dog" "cat" "parrot"] 4 "apple")))))



(deftest http-get-test
(async done
(http-get "https://api.github.com/users" {:with-credentials? false :queryparams {"since" 135}}
(fn [response]
(is (= 200 (:status response)))
(done)
)
)
)
)


(defspec simple-test-check 1000
(for-all [some-string gen/string-ascii]
  (= (str/replace some-string "bad" "great") (profanity-filter somestring))
)
)
