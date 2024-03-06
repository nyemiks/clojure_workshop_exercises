(ns co2.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))


(defn co2-estimate
  "Estimates co2 emission.
   'year' the year whose emission we are interested in."
  [year]
  (println "-- co2-estimate -- ")
  (println "year: " year)
  (let [base-year 2006
        base-level 382]  ; measured in ppm
    (+ base-level (* (- year base-year) 2))
    )
  )
