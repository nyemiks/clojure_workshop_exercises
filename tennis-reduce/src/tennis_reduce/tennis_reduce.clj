(ns tennis-reduce
  (:require
   [clojure.java.io :as io]
   [clojure.data.csv :as csv]
   [semantic-csv.core :as sc]
   [clojure.math.numeric-tower :as math]
   )
  )

(def serena-williams-2015
  [{:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Van Uytvanck A.",
    :tournament "Australian Open",
    :location "Melbourne",
    :date "2015-01-20"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Zvonareva V.",
    :tournament "Australian Open",
    :location "Melbourne",
    :date "2015-01-22"}
   {:loser-sets-won 1,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Svitolina E.",
    :tournament "Australian Open",
    :location "Melbourne",
    :date "2015-01-24"}
   {:loser-sets-won 1,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Muguruza G.",
    :tournament "Australian Open",
    :location "Melbourne",
    :date "2015-01-26"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Cibulkova D.",
    :tournament "Australian Open",
    :location "Melbourne",
    :date "2015-01-28"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Keys M.",
    :tournament "Australian Open",
    :location "Melbourne",
    :date "2015-01-29"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Sharapova M.",
    :tournament "Australian Open",
    :location "Melbourne",
    :date "2015-01-31"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Niculescu M.",
    :tournament "BNP Paribas Open",
    :location "Indian Wells",
    :date "2015-03-14"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Diyas Z.",
    :tournament "BNP Paribas Open",
    :location "Indian Wells",
    :date "2015-03-15"}
   {:loser-sets-won 1,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Stephens S.",
    :tournament "BNP Paribas Open",
    :location "Indian Wells",
    :date "2015-03-17"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Bacsinszky T.",
    :tournament "BNP Paribas Open",
    :location "Indian Wells",
    :date "2015-03-19"}
   {:loser-sets-won nil,
    :winner-sets-won nil,
    :winner-name "Halep S.",
    :loser-name "Williams S.",
    :tournament "BNP Paribas Open",
    :location "Indian Wells",
    :date "2015-03-21"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Niculescu M.",
    :tournament "Sony Ericsson Open",
    :location "Miami",
    :date "2015-03-28"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Bellis C.",
    :tournament "Sony Ericsson Open",
    :location "Miami",
    :date "2015-03-29"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Kuznetsova S.",
    :tournament "Sony Ericsson Open",
    :location "Miami",
    :date "2015-03-30"}
   {:loser-sets-won 1,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Lisicki S.",
    :tournament "Sony Ericsson Open",
    :location "Miami",
    :date "2015-04-01"}
   {:loser-sets-won 1,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Halep S.",
    :tournament "Sony Ericsson Open",
    :location "Miami",
    :date "2015-04-03"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Suarez Navarro C.",
    :tournament "Sony Ericsson Open",
    :location "Miami",
    :date "2015-04-04"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Brengle M.",
    :tournament "Mutua Madrid Open",
    :location "Madrid",
    :date "2015-05-03"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Stephens S.",
    :tournament "Mutua Madrid Open",
    :location "Madrid",
    :date "2015-05-04"}
   {:loser-sets-won 1,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Azarenka V.",
    :tournament "Mutua Madrid Open",
    :location "Madrid",
    :date "2015-05-06"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Suarez Navarro C.",
    :tournament "Mutua Madrid Open",
    :location "Madrid",
    :date "2015-05-07"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Kvitova P.",
    :loser-name "Williams S.",
    :tournament "Mutua Madrid Open",
    :location "Madrid",
    :date "2015-05-08"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Pavlyuchenkova A.",
    :tournament "Internazionali BNL d'Italia",
    :location "Rome",
    :date "2015-05-12"}
   {:loser-sets-won nil,
    :winner-sets-won nil,
    :winner-name "Mchale C.",
    :loser-name "Williams S.",
    :tournament "Internazionali BNL d'Italia",
    :location "Rome",
    :date "2015-05-14"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Hlavackova A.",
    :tournament "French Open",
    :location "Paris",
    :date "2015-05-26"}
   {:loser-sets-won 1,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Friedsam A.L.",
    :tournament "French Open",
    :location "Paris",
    :date "2015-05-28"}
   {:loser-sets-won 1,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Azarenka V.",
    :tournament "French Open",
    :location "Paris",
    :date "2015-05-30"}
   {:loser-sets-won 1,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Stephens S.",
    :tournament "French Open",
    :location "Paris",
    :date "2015-06-01"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Errani S.",
    :tournament "French Open",
    :location "Paris",
    :date "2015-06-03"}
   {:loser-sets-won 1,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Bacsinszky T.",
    :tournament "French Open",
    :location "Paris",
    :date "2015-06-04"}
   {:loser-sets-won 1,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Safarova L.",
    :tournament "French Open",
    :location "Paris",
    :date "2015-06-06"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Gasparyan M.",
    :tournament "Wimbledon",
    :location "London",
    :date "2015-06-29"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Babos T.",
    :tournament "Wimbledon",
    :location "London",
    :date "2015-07-01"}
   {:loser-sets-won 1,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Watson H.",
    :tournament "Wimbledon",
    :location "London",
    :date "2015-07-03"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Williams V.",
    :tournament "Wimbledon",
    :location "London",
    :date "2015-07-06"}
   {:loser-sets-won 1,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Azarenka V.",
    :tournament "Wimbledon",
    :location "London",
    :date "2015-07-07"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Sharapova M.",
    :tournament "Wimbledon",
    :location "London",
    :date "2015-07-09"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Muguruza G.",
    :tournament "Wimbledon",
    :location "London",
    :date "2015-07-11"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Bonaventure Y.",
    :tournament "Collector Swedish Open",
    :location "Bastad",
    :date "2015-07-15"}
   {:loser-sets-won nil,
    :winner-sets-won nil,
    :winner-name "Koukalova K.",
    :loser-name "Williams S.",
    :tournament "Collector Swedish Open",
    :location "Bastad",
    :date "2015-07-16"}
   {:loser-sets-won 1,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Pennetta F.",
    :tournament "Rogers Cup",
    :location "Toronto",
    :date "2015-08-11"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Petkovic A.",
    :tournament "Rogers Cup",
    :location "Toronto",
    :date "2015-08-14"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Vinci R.",
    :tournament "Rogers Cup",
    :location "Toronto",
    :date "2015-08-15"}
   {:loser-sets-won 1,
    :winner-sets-won 2,
    :winner-name "Bencic B.",
    :loser-name "Williams S.",
    :tournament "Rogers Cup",
    :location "Toronto",
    :date "2015-08-15"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Pironkova T.",
    :tournament "Western & Southern Financial Group Women's Open",
    :location "Cincinnati",
    :date "2015-08-19"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Knapp K.",
    :tournament "Western & Southern Financial Group Women's Open",
    :location "Cincinnati",
    :date "2015-08-20"}
   {:loser-sets-won 1,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Ivanovic A.",
    :tournament "Western & Southern Financial Group Women's Open",
    :location "Cincinnati",
    :date "2015-08-21"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Svitolina E.",
    :tournament "Western & Southern Financial Group Women's Open",
    :location "Cincinnati",
    :date "2015-08-23"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Halep S.",
    :tournament "Western & Southern Financial Group Women's Open",
    :location "Cincinnati",
    :date "2015-08-23"}
   {:loser-sets-won 0,
    :winner-sets-won 1,
    :winner-name "Williams S.",
    :loser-name "Diatchenko V.",
    :tournament "US Open",
    :location "New York",
    :date "2015-09-01"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Bertens K.",
    :tournament "US Open",
    :location "New York",
    :date "2015-09-02"}
   {:loser-sets-won 1,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Mattek-Sands B.",
    :tournament "US Open",
    :location "New York",
    :date "2015-09-05"}
   {:loser-sets-won 0,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Keys M.",
    :tournament "US Open",
    :location "New York",
    :date "2015-09-06"}
   {:loser-sets-won 1,
    :winner-sets-won 2,
    :winner-name "Williams S.",
    :loser-name "Williams V.",
    :tournament "US Open",
    :location "New York",
    :date "2015-09-09"}
   {:loser-sets-won 1,
    :winner-sets-won 2,
    :winner-name "Vinci R.",
    :loser-name "Williams S.",
    :tournament "US Open",
    :location "New York",
    :date "2015-09-11"}])



(defn streak-calc
  "'data' holds the streak result.
  'item holds the current match  "
  [data item]
  (let
      [
       name (:player data)
       winner-name (:winner-name item)
       ]

    (if (= name winner-name)
      (-> data
          (update :result_streak conj "W")
        ;  (assoc :current_result "W")
      )
    (-> data
        (update :result_streak  conj "L")
      ;  (assoc :current_result "L")
		)
    )

     )
      )


(defn streak-calc2
  "Generates a sequence of tuples that will hold the consecutive victory/loss e.g
   [[W 1] [W 2] [L 1] [W 1]]
  'data' holds the streak result.
  'item holds the current match  "
  [data item]
  (let
      [
      name (:player data)
       winner-name (:winner-name item)

       {:keys [current_result streak_counter]} data
       ]
   ; (println "name: " name)
   ; (println "current_result: " current_result )
   ; (println "streak_counter: " streak_counter )
    (if (= name winner-name)
      (
       cond
       (nil? current_result)
        ; (update data :result_streak conj (vector "W" 1 ))
         (-> data
             (update :result_streak conj (vector "W" 1 ))
             (update :streak_counter inc)
             (assoc :current_result "W")
          )

       (= current_result "L")
       (-> data
           (assoc :streak_counter 1)
           (update :result_streak conj (vector "W" 1 ))
           (assoc :current_result "W")
        )
       (= current_result "W")
       (-> data
           (update :streak_counter inc)
           (update :result_streak conj (vector "W" (inc streak_counter) ))
           )
       )
         ; else loser
      (cond
        (nil? current_result)
		(-> data
             (update :result_streak conj (vector "L" 1 ))
             (update :streak_counter inc)
             (assoc :current_result "L")
          )
        (= current_result "W")
		(-> data
           (assoc :streak_counter 1)
           (update :result_streak conj (vector "L" 1 ))
           (assoc :current_result "L")
        )
        (= current_result "L")
		(-> data
           (update :streak_counter inc)
           (update :result_streak conj (vector "L" (inc streak_counter) ))
           )

        )
      )


    )
  )


(defn update-streak
  "'player' tennis player
  'matches' record of matches played buy player."
  [player matches]
  (let
      [
       streak_seq
	   (:result_streak
       (reduce streak-calc2 {:player player,
                             :result_streak [],
                             :current_result nil,
                             :streak_counter 0}
               matches)
        )
       ]
    (map (fn [streak-tuple match]
           (assoc match :current_streak
                  (if (= (first streak-tuple) "W")
                    (str "Won " (second streak-tuple) )
                    (str "Loss " (second streak-tuple) )
                    )
                  )
           )
         streak_seq
         matches
         )
    )
  )


(defn streak-string [current-wins current-losses]
  (cond (pos? current-wins) (str "Won " current-wins)
        (pos? current-losses) (str "Lost " current-losses)
        :otherwise "First match of the year"))

(defn serena-williams-win-loss-streaks [matches]
  (:matches
   (reduce (fn [{:keys [current-wins current-losses] :as acc} match]
             (let [this-match (assoc match :current-streak (streak-string current-wins
                                                                          current-losses))
                   serena-victory? (= (:winner-name match) "Williams S.")]
               (-> acc
                   (update :matches #(conj % this-match))
                   (assoc :current-wins (if serena-victory?
                                          (inc current-wins)
                                          0))
                   (assoc :current-losses (if serena-victory?
                                            0
                                            (inc current-losses))))))
           {:matches []
            :current-wins 0
            :current-losses 0}
           matches)))



(defn tennis-csv->tournament-match-counts [csv]
  (with-open [r (io/reader csv)]
    (->> (csv/read-csv r)
         sc/mappify
         ;;....

         (map #(select-keys % [:tourney_slug
                               :winner_name
                               :loser_name]
                            )
              )

         (group-by
          :tourney_slug
          )

       ;  (take 5)

         doall
         )
    )
  )


(defn tennis-csv->tournament-match-counts2 [csv]
  (with-open [r (io/reader csv)]
    (->> (csv/read-csv r)
         sc/mappify
         (group-by :tourney_slug)
         (map (fn [[k ms]] [k (count ms)]))
         (into {})
         )
    )
  )



(defn update-score
  [acc match]
  (
   let
   [
    {:keys [winner_name loser_name]} match
    ]
  ; (println "winner: " winner_name)
  ; (println "loser: " loser_name)

	 (-> acc
      (update-in [winner_name :won] inc)
      (update-in [loser_name :loss] inc)
     )
   )

  )



(defn player-stats
  [csv]
  (with-open [r (io/reader csv)]

   (
    let
	[
	matches
    (->> (csv/read-csv r)
         sc/mappify
         (map #(select-keys % [
                               :winner_name
                               :loser_name
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
          (into {} (map #(hash-map % {:won 0, :loss 0}  ) players))

	  ]
                                        ;  player_score
   (reduce  update-score  player_score  matches )
   ; player_score
    )
   )
  )


(defn match-probability [player-1-rating player-2-rating]
  (/ 1
     (+ 1
        (math/expt 10 (/ (- player-2-rating player-1-rating) 400)))
     )
  )


(defn recalculate-rating [previous-rating expected-outcome real-outcome]        (+ previous-rating (* k-factor (- real-outcome expected-outcome)))
  )
