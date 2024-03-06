(ns coffeeapp2.utils-test
(:require [clojure.test :refer [are is deftest testing]]
[coffeeapp2.core :refer [price-menu]]
[coffeeapp2.utils :refer :all]))



(deftest calculate-coffee-price-test-with-single-is
(testing "Single test with is macro."
(is (= (calculate-coffee-price price-menu :latte 1)
0.5))))


(deftest calculate-coffee-price-test-with-multiple-is
(testing "Multiple tests with is macro."
(is (= (calculate-coffee-price price-menu :latte 1) 0.5))
(is (= (calculate-coffee-price price-menu :latte 2) 1.0))
(is (= (calculate-coffee-price price-menu :latte 3) 1.5))))



(deftest calculate-coffee-price-test-with-are
(testing "Multiple tests with are macro"
(are [coffees-hash coffee-type number-of-cups result]
(= (calculate-coffee-price coffees-hash coffee-type number-of-cups)
result)
price-menu :latte 1 0.5
price-menu :latte 2 1.0
price-menu :latte 3 1.5)))