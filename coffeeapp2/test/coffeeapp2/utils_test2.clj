(ns coffeeapp2.utils-test2
(:require [coffeeapp2.core :refer [price-menu]]
[coffeeapp2.utils :refer :all]
[expectations :refer [expect in]]))



(expect 1.5 (calculate-coffee-price price-menu :latte 3))


(expect ClassCastException (calculate-coffee-price price-menu :latte "1"))


;; (expect ClassCastException (calculate-coffee-price price-menu :latte 2))

(expect Number (calculate-coffee-price price-menu :latte 2))

(expect {:latte 0.5} (in price-menu))