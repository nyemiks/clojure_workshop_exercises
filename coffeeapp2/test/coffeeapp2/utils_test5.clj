(ns coffeeapp2.utils-test5
(:require [clojure.test :refer :all]
[coffeeapp2.core :refer [price-menu]]
[coffeeapp2.utils :refer :all]))


(comment

(deftest display-order-test
(testing "Multiple tests with is macro"
(is (= (display-order {:number 4 :price 3.8 :type :latte}) "Bought
4 cups of latte for €3.8"))
(is (= (display-order {:number 7 :price 6.3 :type :espresso})
"Bought 7 cups of espresso for €6.3"))))

)


(deftest display-order-test
(testing "Multiple tests with are macro"
(are [order result]
(= (display-order order) result)
{:number 2 :price 1.5 :type :latte} "Bought 2 cups of
latte for €1.5"
{:number 3 :price 6.3 :type :mocca} "Bought 3 cups of
mocca for €6.3"
{:number 8 :price 10 :type :espresso} "Bought 8 cups
of espresso for €10")))