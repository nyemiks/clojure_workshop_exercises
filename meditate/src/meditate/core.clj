(ns meditate.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))


(defn meditate
  [s calm]
  (println "Clojure Meditate v1.0")
  (if calm
    (clojure.string/capitalize s)
    (str (clojure.string/upper-case s) "!")
    )
  )


(defn meditate2
  "Display calm of a person based on calmness level
  's' word expressed by user.
  'calmness-level' ranges from 1 to 10'"
  [s calmness-level]
  (println "Clojure Meditate v2.0")
  (if (< calmness-level 5)
    (str (clojure.string/upper-case s) ", I TELL YA")
    (if (<= 5 calmness-level 9)
      (clojure.string/capitalize s)
      (if (= calmness-level 10)
        (clojure.string/reverse s)
       )

      )
  )
)


(defn meditate3
  "Display calm of a person based on calmness level
  's' word expressed by user.
  'calmness-level' ranges from 1 to 10'"
  [s calmness-level]
  (println "Clojure Meditate v2.0")
  (
   cond
   (< calmness-level 5) (str (clojure.string/upper-case s) ", I TELL YA")
   (<= 5 calmness-level 9)  (clojure.string/capitalize s)
   (= calmness-level 10)  (clojure.string/reverse s)
   :else nil
   )

  )
