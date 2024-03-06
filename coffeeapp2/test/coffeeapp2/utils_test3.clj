(ns coffeeapp2.utils-test3
(:require [coffeeapp2.core :refer [price-menu]]
[coffeeapp2.utils :refer :all]
[midje.sweet :refer [=> fact provided unfinished]]))


(fact (calculate-coffee-price price-menu :latte 3) => 1.5)