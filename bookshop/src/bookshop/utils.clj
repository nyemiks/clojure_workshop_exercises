(ns bookshop.utils
(:require [clojure.java.io :as io])
(:import [java.io PushbackReader]))


;(defn get-book-price
;"")

(defn calc-total
"calculate the total cost
'sn' book serial no
'no' no of copies
'book-price' book price list"
[sn no books-price]  
  (->
     (get books-price sn)
	 (* no)
	 (float)
  )
)


;;(defn display-bought-books [book number total]
  ;;    (println "Buying " book " " number " copies" " for a total of €" total))
	
(defn save-to [location data]
(spit location data :append true)
)
	
(defn display-order [order]
(str "Bought " (:book order) " " (:number order) " copies. at " (:price order) " for €") )
	


(defn save-book-order [orders-file book number price]
 (let [
       order {:book book :number number :price price}
	   ] 
	   (save-to orders-file order)
	   (println "order saved successfully !")
	   order
 )

)





(defn file-exists? [location]
(.exists (io/as-file location))
)



(defn read-one-order [r]
(try
(read r)
(catch java.lang.RuntimeException e
(if (= "EOF while reading" (.getMessage e))
::EOF
(throw e)))))



(defn load-orders
"Reads a sequence of orders stored in file."
[file]
(if (file-exists? file)
(with-open [r (PushbackReader. (io/reader file))]
(binding [*read-eval* false]
(doall (take-while #(not= ::EOF %) (repeatedly #(read-one-order r))))))
[])
)