(ns running-avg.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))


(defn average-potatoes [prev arrivals]
  (lazy-seq   
    (if-not arrivals
      '()
      (let [[_ n total] prev
            current [(first arrivals)
                     (inc (or n 0))
                     (+ (first arrivals) (or total 0))]]
        ;; TODO: the actual recursion
        (cons
         current
         (average-potatoes
          current
          (next arrivals)))
        )
      )    
   )
  )
