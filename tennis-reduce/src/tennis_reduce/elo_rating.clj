(ns elo-rating
  (:require
   [clojure.java.io :as io]
   [clojure.data.csv :as csv]
   [semantic-csv.core :as sc]
   [clojure.math.numeric-tower :as math]
   [clojure.string :as str]
   )
  )

(def k-factor 32)

(defn match-probability [player-1-rating player-2-rating]
  (/ 1
     (+ 1
        (math/expt 10 (/ (- player-2-rating player-1-rating) 400)))))


(defn recalculate-rating
  ([previous-rating expected-outcome
                          real-outcome]
  (+ previous-rating (* k-factor (- real-outcome expected-outcome))))
([k previous-rating expected-outcome real-outcome]
 (+ previous-rating (* k (- real-outcome expected-outcome))))
 )
 
 




(defn update-rating
  [acc match]
  (let
      [
       {:keys [winner_name loser_name]} match

       p1 winner_name
       p2 loser_name
       r1 (get-in acc [p1 :rating] )
       r2 (get-in acc [p2 :rating] )
       prob1 (match-probability r1 r2)
       prob2 (match-probability r2 r1)
       ]

    (-> acc
        (assoc-in [p1 :rating] (recalculate-rating r1 prob1 1) )
        (assoc-in [p2 :rating] (recalculate-rating r2 prob2 0) )
     )

    )
  )


(defn elo-world-2
  "Generates ratings based on elo rating system."
  [csv K]
  (with-open [r (io/reader csv)]

    (
     let
     [
      matches
      (->> (csv/read-csv r)
           sc/mappify
           (sc/cast-with {:winner_sets_won sc/->int
                          :loser_sets_won sc/->int
                          :winner_games_won sc/->int
                          :loser_games_won sc/->int})
           (map #(select-keys % [
                                 :winner_name
                                 :loser_name
                                 :winner_slug
                                 :loser_slug
                                 :winner_sets_won
                                 :loser_sets_won
                                 :winner_games_won
                                 :loser_games_won
                                 ]
                              )
                )




           doall
           )
      players
      (reduce (fn [acc match] (conj acc (:winner_name match) (:loser_name match) )
                )
              #{}
	      matches
              )

      player_score
      (into {} (map #(hash-map % {:rating 0}  ) players))

      ]
     ;  player_score
   ;  (reduce  update-score  player_score  matches )
      (reduce update-rating player_score matches)
     )
    )
  )



(defn elo-world
  ([csv k]
   (with-open [r (io/reader csv)]
     (->> (csv/read-csv r)
          sc/mappify
          (sc/cast-with {:winner_sets_won sc/->int
                         :loser_sets_won sc/->int
                         :winner_games_won sc/->int
                         :loser_games_won sc/->int})
          ;; TODO: just getting started
          (reduce (fn [{:keys [players] :as acc} {:keys [:winner_name :winner_slug
                                                         :loser_name :loser_slug]
                                                  :as match}]
                    ;; TODO: more code
                    )
                  {:players {}
                   :match-count 0
                   :predictable-match-count 0
                   :correct-predictions 0})


          ))))



(defn elo-world-simple
  ([csv k]
   (with-open [r (io/reader csv)]
     (->> (csv/read-csv r)
          sc/mappify
          (sc/cast-with {:winner_sets_won sc/->int
                         :loser_sets_won sc/->int
                         :winner_games_won sc/->int
                         :loser_games_won sc/->int})
          (reduce (fn [{:keys [players] :as acc} {:keys [:winner_name :winner_slug
                                                         :loser_name :loser_slug] :as match}]
                    (let [winner-rating (get players winner_slug 400)
                          loser-rating (get players loser_slug 400)
                          winner-probability (match-probability winner-rating loser-rating)
                          loser-probability (- 1 winner-probability)
                          predictable-match? (not= winner-rating loser-rating)
                          prediction-correct? (> winner-rating loser-rating)
                          correct-predictions (if (and predictable-match? prediction-correct?)
                                                (inc (:correct-predictions acc))
                                                (:correct-predictions acc))
                          predictable-matches (if predictable-match?
                                                (inc (:predictable-match-count acc))
                                                (:predictable-match-count acc))]

                      (-> acc
                          (assoc :predictable-match-count predictable-matches)
                          (assoc :correct-predictions correct-predictions)
                          (assoc-in [:players winner_slug] (recalculate-rating k winner-rating winner-probability 1))
                          (assoc-in [:players loser_slug] (recalculate-rating k loser-rating loser-probability 0))
                          (update :match-count inc))))
                  {:players {}
                   :match-count 0
                   :predictable-match-count 0
                   :correct-predictions 0})))))
