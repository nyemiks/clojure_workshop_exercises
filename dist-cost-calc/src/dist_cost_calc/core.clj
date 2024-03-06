(ns dist-cost-calc.core
  (:gen-class))

(def walking-speed 4)
(def driving-speed 70)

 ;sample locations
(def paris {:lat 48.856483 :lon 2.352413})

(def bordeaux {:lat 44.834999  :lon -0.575490})

(def london {:lat 51.507351, :lon -0.127758})

(def manchester {:lat 53.480759, :lon -2.242631})

(def vehicle-cost-fns
  {
   :sporche cost-sporche
   :tayato cost-tayato
   :sleta cost-sleta
   }
  )

; using partial fucntion
; no need to write those functions e.g cost-sporche, cost tayata, cost sleta
(def vehicle-cost-fns2
  {
   :sporche (partial * 0.12 1.3)
   :tayato (partial * 0.07 1.3)
   :sleta (partial * 0.2 0.1)
   })


(def walk-1
  {
   :from  {:lat 5, :lon 10},
   :to {:lat 20, :lon 40}
   }
  )

(defn square [x] (* x x))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))


(defn distance2
  "computes the distance between two locations.
  'from' the starting point
  'to' the ending point"
  [departure arrival]
  (let
      [
       lat1 (:lat departure)
       lon1 (:lon departure)
       lat2 (:lat arrival)
       lon2 (:lon arrival)
       b (Math/cos lat1)
       a (square (- lat2 lat1))
       c (square (- lon2 lon1))
       d (Math/sqrt  (+ a (* b c) ) )
       eucl-const 110.25
       eucl-dist (* eucl-const d)
       ]
    (println "lat1: " lat1)
    (println "lon1: " lon1)
    (println "lat2: " lat2)
    (println "lat2: " lat2)
    (println "cosine of lat1: " b)
    (println "euclidean distance: " eucl-dist)
  )
  )


(defn distance
  "Returns a rough estimate of the distance between two coordinate points, in kilometers. Works better with smaller distance"
  [{lat1 :lat lon1 :lon} {lat2 :lat lon2 :lon}]
  (let [deglen 110.25
	x (- lat2 lat1)
	y (* (Math/cos lat2) (- lon2 lon1))]
    (* deglen (Math/sqrt (+ (* y y) (* x x))))))




(defmulti itinerary :transport)
(defmethod itinerary :walking
   [param]
  (let
      [
       {:keys [:from :to]} param ; (:data param)
       dist  (distance from to)
       duration (/ dist walking-speed)
       ]
    (println "-- walking --")
    (println "param: " param)
    (println "from: " from)
    (println "to:" to)
    (println "distance: " dist)
    (println "duration: " duration)
    (hash-map
     :cost 0
     :distance dist
     :duration duration
     )
      )
  )


(defmethod itinerary :driving
  [{:keys [:from :to :vehicle]}]  ; a hashmap will be suppled.
  (let
      [
     ;  {:keys [:from :to :vehicle]} param ; (:data param) map destructured at the parameter of the function
       dist (distance from to)
       duration (/ dist driving-speed)
       ]
    (println "-- driving --")
   ; (println "param: " param)
    (println "from: " from)
    (println "to: " to)
    (println "distance: " dist)
    (println "duration: " duration)
    (println "vehicle: " vehicle)
    (hash-map
     :cost ( (vehicle vehicle-cost-fns2) dist )
     :distance dist
     :duration duration
     )
    )
  )


(defn cost-sporche
  "calculates the cost of travel
  based on the 'distance' provided"
  [distance]
  (let
      [
       consumption 0.12
       cost-litre 1.3
       ]
    (println "-- cost for sporche --")
    (* (* consumption distance) cost-litre )
      )
  )

(defn cost-tayato
  "calculates the cost of travel
  based on the 'distance' provided"
  [distance]
  (let
      [
       consumption 0.07
       cost-litre 1.3
       ]
    (println "-- cost for tayato --")
    (* (* consumption distance) cost-litre )
    )
  )

(defn cost-sleta
  "calculates the cost of travel
  based on the 'distance' provided"
  [distance]
  (let
      [
       consumption 0.2
       cost-hr 0.1
       ]
    (println "-- cost for sleta --")
    (* (* consumption distance) cost-hr )
    )
  )


