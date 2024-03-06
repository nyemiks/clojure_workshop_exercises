(ns json-converter.core-test
  (:require [clojure.test :refer :all]
            [json-converter.core :refer :all]
			[expectations :refer [expect]]
			))

(deftest a-test
  (testing "FIXME, I fail."
    (is (= 0 1))))
	
(expect (hash2json {:name "John" :occupation "programmer"})
"{\"name\":\"John\",\"occupation\":\"programmer\"}")

(expect (json2hash "{\"name\":\"Mike\",\"occupation\":\"carpenter\"}")
{"name" "Mike", "occupation" "carpenter"})
