(ns integer-adder.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
                                        ; (println "Hello, World!")
  (let [
        int_array (map #(int %) args)
        sum (apply + int_array)
        ]
    (println "the sum is " sum)
    sum
    )
  )
