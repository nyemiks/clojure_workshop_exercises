(ns bookshop.core
   (:require [bookshop.utils :as utils])
   (:import [java.util Scanner])
  (:gen-class))

  (def ^:const books-db {:2019 {101 "Hands on programming in clojure", 102 "Go Cookbook"}
                         :2018 {100 "Java Made Simple"} 
						})
						
  (def ^:const books-price {101 20, 102 10, 100 5})					
  
  (def ^:const orders-file "orders.edn")
  
  (def input (Scanner. System/in))
  
  (defn books-by-year
"books for the year
'year' year of release"
[year]
  (year books-db)
)





(defn confirm-order
"processes order
'sn' serial no
'no' no of books
'book' selected book."
[sn no book]
(println " -- confirm-order -- ")
 (let [
    total (utils/calc-total sn no books-price)
 ]
  (println "Buying " no " copies of " book  "for total: " total)
  (utils/display-order (utils/save-book-order orders-file book no (get books-price sn) ) )
 )

)

  (defn how-many
  "How many books do you want to buy ?
  'sn' book serial no
  'book' book title
  "
  [sn book]
  (println "-- how-many -- ")
  (println "How many books do you want to buy ?")
   (let 
     [no (.nextInt input)]
      ;;; place order
	  (confirm-order sn no book)
	)
  )

(defn show-book
"displays books for a given year"
[year books]
(println "books in " year)
(doseq [[k x] books]
  (println k ":" x))
  (let 
  [choice (.nextInt input)]
      (how-many choice (get books choice))
	)
  
)


 (defn show-menu
 "show book years"
 []
  (println "-- show-menu -- ")
   (println "|1. 2019 2.2018 |")
  (let [choice (.nextInt input)]
    (case choice
      1 (show-book :2019 (books-by-year :2019))
      2 (show-book :2018 (books-by-year :2018)) 
	 )
   )
 )
  

(defn show-orders []
(println "\n")
(doseq 
[
  order (utils/load-orders orders-file)
]
(println (utils/display-order order))
)
)



(defn- start-app []
  "Displaying main menu and processing user choices."
  (let [run-application (ref true)]
    (while (deref run-application)
      (println "\n| My Bookshop|")
      (println "| 1-Menu 2-Orders 3-Exit |\n")
      (let [choice (.nextInt input)]
        (case choice
          1 (show-menu)
          2 (show-orders)
          3 (dosync (ref-set run-application false)))))))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (start-app)
  )
