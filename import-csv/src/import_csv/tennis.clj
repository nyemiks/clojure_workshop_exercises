(ns packt-clj.tennis
  (:require
   [clojure.data.csv :as csv]
   [clojure.java.io :as io]
   [semantic-csv.core :as sc]))

(defn first-match [csv]
  (with-open [r (io/reader csv)]
    (->> (csv/read-csv r)
         sc/mappify
         first)))

(defn five-matches [csv]
  (with-open [r (io/reader csv)]
    (->> (csv/read-csv r)
         sc/mappify
         (map #(select-keys % [:tourney_year_id
                               :winner_name
                               :loser_name
                               :winner_sets_won
                               :loser_sets_won]))
         (take 5)
         doall)))


(defn five-matches-int-sets [csv]
  (with-open [r (io/reader csv)]
    (->> (csv/read-csv r)
         sc/mappify
         (map #(select-keys % [:tourney_year_id
                               :winner_name
                               :loser_name
                               :winner_sets_won
                               :loser_sets_won]))
         (sc/cast-with {:winner_sets_won sc/->int
                        :loser_sets_won sc/->int})
         (take 5)
         doall)))


(defn federer-wins [csv]
  (with-open [r (io/reader csv)]
    (->> (csv/read-csv r)
         sc/mappify
         (filter #(= "Roger Federer" (:winner_name %)))
         (map #(select-keys % [:winner_name
                               :loser_name
                               :winner_sets_won
                               :loser_sets_won
                               :winner_games_won
                               :loser_games_won
                               :tourney_year_id
                               :tourney_slug]))
         doall)))


(defn match-query2 [csv pred]
  (with-open [r (io/reader csv)]
    (->> (csv/read-csv r)
         sc/mappify
         (filter pred)
         (map #(select-keys % [:winner_name
                               :loser_name
                               :winner_sets_won
                               :loser_sets_won
                               :winner_games_won
                               :loser_games_won
                               :tourney_year_id
                               :tourney_slug]))
         doall)))


(defn match-query [csv pred]
  (with-open [r (io/reader csv)]
    (->> (csv/read-csv r)
         sc/mappify
         (sc/cast-with {:winner_sets_won sc/->int
                        :loser_sets_won sc/->int
                        :winner_games_won sc/->int
                        :loser_games_won sc/->int})
         (filter pred)
         (map #(select-keys % [:winner_name
                               :loser_name
                               :winner_sets_won
                               :loser_sets_won
                               :winner_games_won
                               :loser_games_won
                               :tourney_year_id
                               :tourney_slug]))
         doall)))


(defn rivalry-data
  [csv player-1 player-2]
  (with-open [r (io/reader csv)]

(let
    [
    matches
    (->> (csv/read-csv r)
         sc/mappify
         (sc/cast-with {:winner_sets_won sc/->int
                        :loser_sets_won sc/->int
                        :winner_games_won sc/->int
                        :loser_games_won sc/->int})
         (filter
               #(= (hash-set (:winner_name %) (:loser_name %))
                  #{player-1 player-2}
                  )
               )
         (map #(select-keys % [:tourney_year_id
                               :winner_name
                               :loser_name
                               :winner_sets_won
                               :loser_sets_won]))

        ; doall
    )
     total-matches   (count matches)   ; sequence realized at this point
     player-1-vic
     (filter #(= (hash-set (:winner_name %)) #{player-1})  matches )

     ply1-vic-count  (count player-1-vic)


     player-2-vic
     (filter #(= (hash-set (:winner_name %)) #{player-2})  matches )

     ply2-vic-count (count player-2-vic)

     tough-matches
	 (filter
           #(and
             (= (hash-set (:winner_name %) (:loser_name %))
                #{player-1 player-2})
             (= 1 (- (:winner_sets_won %) (:loser_sets_won %)))
             )
			 matches
           )

    ]



	 ; generate results

	  {
      :first-victory-player-1 (if (> ply1-vic-count 0)
                               (first player-1-vic)
                                 nil
                                 )
      :first-victory-player-2 (if (> ply2-vic-count 0)
                                (first player-2-vic )
                                 nil
                                 )
      :total-matches total-matches
      :total-victories-player-1 ply1-vic-count
      :total-victories-player-2 ply2-vic-count
      :most-competitive-matches tough-matches
	  }


 )

    )
  )


(defn rivalry-data2
  [csv player-1 player-2]
  (with-open [r (io/reader csv)]
    (let
        [
         matches
         (->> (csv/read-csv r)
              sc/mappify
              (sc/cast-with {:winner_sets_won sc/->int
                             :loser_sets_won sc/->int
                             :winner_games_won sc/->int
                             :loser_games_won sc/->int})
              (filter
               #(= (hash-set (:winner_name %) (:loser_name %))
                  #{player-1 player-2}
                  )
               )
              doall
              )

         total-matches   (count matches)

         player-1-vic
         (->> matches
              (filter #(= (hash-set (:winner_name %)) #{player-1}) )
              )

         ply1-vic-count  (count player-1-vic)
         first-ply1-vic (first player-1-vic)

         player-2-vic
         (->> matches
              (filter #(= (hash-set (:winner_name %)) #{player-2}) )
              )

         ply2-vic-count (count player-2-vic)

         tough-matches
         (->>
          matches
          (filter
           #(and
             (= (hash-set (:winner_name %) (:loser_name %))
                #{player-1 player-2})
             (= 1 (- (:winner_sets_won %) (:loser_sets_won %)))
             )
           )
          )

         ]


      ;  matches
      (println "total matches count: " total-matches)
      (println "player 1 victory count: " ply1-vic-count)
      (println "player 2 victory count: " ply2-vic-count)


     ; player-2-vic
     ;  (format-result player-1-vic )
      ; (format-result (first player-1-vic) )
     ;   (first (format-result player-1-vic) )
     ; (format-result first-ply1-vic)
      ; (first player-1-vic)

       ; generate results
      (hash-map
      :first-victory-player-1 (if (> ply1-vic-count 0)
                               (first (format-result player-1-vic) )
                                 nil
                                 )
      :first-victory-player-2 (if (> ply2-vic-count 0)
                                (first (format-result player-2-vic) )
                                 nil
                                 )
      :total-matches total-matches
      :total-victories-player-1 ply1-vic-count
      :total-victories-player-2 ply2-vic-count
      :most-competitive-matches (format-result tough-matches)
      )


     )
   )
  )


(defn format-result
  [matches]
  (->>
   matches
   (map #(select-keys % [:winner_name
                         :loser_name
                         :winner_sets_won
                         :loser_sets_won
                         :winner_games_won
                         :loser_games_won
                         :tourney_year_id
                         :tourney_slug]))
   )

  )
