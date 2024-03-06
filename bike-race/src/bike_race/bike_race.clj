(ns bike-race)

(defn hello
  []
  (println "Hello"))




(defn same-slope-as-current? [current elevation]
  (or (= 1 (count current))
      (let [[[_ next-to-last] [_ the-last]] (take-last 2 current)]
        (or (>= next-to-last the-last elevation)
            (<= next-to-last the-last elevation)))))


(defn distances-elevation-to-next-peak-or-valley
  [data]
  (->
    (reduce
      (fn [{:keys [current] :as acc} [distance elevation :as this-position]]
        (cond (empty? current)
              {:current [this-position]
               :calculated [{:race-position distance
                             :elevation elevation
                             :distance-to-next 0
                             :elevation-to-next 0}]}
              (same-slope-as-current? current elevation)
              (-> acc
                  (update :current conj this-position)
                  (update :calculated
                          conj
                          {:race-position distance
                           :elevation elevation
                           :distance-to-next (- (first (first current)) distance)
                           :elevation-to-next (- (second (first current)) elevation)}))
              :otherwise-slope-change
              (let [[prev-distance prev-elevation :as peak-or-valley] (last current)]
                (-> acc
                    (assoc :current [peak-or-valley this-position])
                    (update :calculated
                            conj
                            {:race-position distance
                             :elevation elevation
                             :distance-to-next (- prev-distance distance)
                             :elevation-to-next (- prev-elevation elevation)})))))
      {:current []
       :calculated []}
      (reverse data))
    :calculated
    reverse))
