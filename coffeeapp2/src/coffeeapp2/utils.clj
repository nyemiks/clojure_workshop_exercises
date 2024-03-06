(ns coffeeapp2.utils)



(defn display-order [order]
      (str "Bought " (:number order) " cups of " (name (:type order)) " for €" (:price order)))


(defn calculate-coffee-price [coffees coffee-type number]
(->
(get coffees coffee-type)
(* number)
float))


(defn display-bought-coffee-message [type number total]
(println "Buying" number (name type) "coffees for total:€" total))


;;(defn file-exists? [location]
;;(.exists (io/as-file location)))


(comment 

(defn load-orders
"Reads a sequence of orders in file at path."
[file]
(if (file-exists? file)
(with-open [r (PushbackReader. (io/reader file))]
(binding [*read-eval* false]
(doall (take-while #(not= ::EOF %) (repeatedly #(read-oneorder
r))))))
[]))


)