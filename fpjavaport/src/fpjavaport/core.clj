(ns fpjavaport.core
  (:require 
  [clojure.string :as str]
  )
  (:gen-class))


(def numbers [12 9 13 4 6 2 4 12 15])

(def courses ["Spring", "Spring Boot", "API", "Microservices", "AWS", "PCF",
					"Azure", "Docker", "Kubernetes"])
					
 (def squared #(* %1 %1) )  ;; binding a function that calculates square of a number


(def cubed (fn[x] (* x x x) ) )  ;; binding a function that calculates cube of a number

(def double-no (fn[x] (+ x x ) ) )  ;; binding a function that doubles a number
					
(def subjects [
                {
				  :name "Spring",
				  :category  "Framework",
				  :reviewScore  98,
				  :noOfStudents 20000
				},				
				{
				  :name "Spring Boot",
				  :category "Framework",
				  :reviewScore 95,
				  :noOfStudents 18000
				},				
				{
				  :name "Microservices",
				  :category "Microservices",
				  :reviewScore 97,
				  :noOfStudents  22000
				},				
				{
				  :name "FullStack",
				  :category  "FullStack",
				  :reviewScore  91,
				  :noOfStudents  14000
				},				
				{
				  :name   "AWS",
				  :category   "Cloud",
				  :reviewScore  92,
				  :noOfStudents  21000
				},				
				{
				  :name "Azure",
				  :category "Cloud",
				  :reviewScore  99,
				  :noOfStudents  21000
				},
				{
				  :name "Docker",
				  :category  "Cloud",
				  :reviewScore  92,
				  :noOfStudents 20000
				},
				{
				  :name "Kubernetes",
				  :category "Cloud",
				  :reviewScore  91,
				  :noOfStudents  20000
				}
              ]
)

;;(def allMatch (filter #(> (:reviewScore %1) 90) subjects) )

  (def allMatch (every? #(> (:reviewScore %1) 90) subjects) )
  
  (def noneMatch (not-every? #(< (:reviewScore %1) 90) subjects) )
  
  (def anyMatch (some #(> (:reviewScore %1) 90) subjects) )
  
  (def comparingByNoOfStudentsIncr (sort (fn[x,y] (< (:noOfStudents x) (:noOfStudents y) ) )  subjects) ) ;; from the least to greatest

  (def comparingByNoOfStudentsDesr (sort (fn[x,y] (> (:noOfStudents x) (:noOfStudents y) ) )  subjects) ) ;; from the greatest to least 

;; for flatmap (java) mapcat (clojure) example
;; java code equiavlaent 
; 
(def courses2 courses)    ;; binding courses to courses2

;; the difference between map and mapcat can be seen by showing the contents of 
;; joined-courses and joined-courses2. joined-courses will return a list that contains 9 list.
;; joined-courses2 will collapse the 9 list into one.

(def joined-courses
  (->>
    courses2
	(map (fn [x] 
	       (map #(vector x %1) courses) 
	     ) 
	)
	)	
)

;; this will give us something like
;; (["Spring" "Docker"] ["API" "AWS"] ["API" "PCF"] ["AWS" "API"] ["AWS" "PCF"] ["PCF" "API"] ["PCF" "AWS"] ["Docker" "Spring"])
(def joined-courses2
(->>
    courses2
	(mapcat (fn [x] 
	       (map #(vector x %1) courses) 
	     ) 
	)
	)
)

;;
(def same-length
(->>
  joined-courses2
  (filter #(not= (first %1) (second %1) ) )   ;; filter tuples with same course e.g. ["spring" spring"], ["AWS" "AWS"]
  (filter #(= (count (first %1) ) (count (second %1) ) ) )   ;;  filter courses with same length
)

)


(defn print-all-numbers
[numbers]
  (println "-- printing all numbers --")
 (println numbers)
 numbers
)


(defn filter-even-numbers
"returns only even numbers
'numbers' a vector of numbers."
[numbers]
 (let [even-no-list (filter even? numbers)]
   (println " -- filter even numbers -- ")
    (println "numbers: " numbers)
    (println "even nos: " even-no-list)
	even-no-list
 )
     
)


(defn print-all-courses
"prints all courses.
 'courses' list of courses."
[courses]
(println "-- printing all courses --")
(println "courses: " courses)
 courses
)


(defn course-search
"search for a course.
 'course' the course to be searched."
[course]
(let 
    [
	  results (filter #(str/includes? % course) courses)
	] 
 (println "-- search for a course --")
 (println "courses: " courses)
 (println "course: " course)
 (println "search results: " results)
  results
)
)


(defn only-4-letters
""
[courses]
(let
  [
   result (filter #(>= (count %) 4 ) courses)
   ] 
  (println " -- only 4 letters -- ")
  (println "courses: " courses)
  (println "results: " result)
   result
)
)


(defn printSquaresOfEvenNumbers
"print Squares Of Even Numbers
'numbers' list of numbers"
[numbers]
(let 
    [
	 even-no-list (filter even? numbers)
	 squares (map #(* % %) even-no-list)
	]
	(println " -- square of even numbers -- ")
    (println "numbers: " numbers)
    (println "even nos: " even-no-list)
	(println "squares: " squares)
	squares
	
 )
)


(defn printSquaresOfEvenNumbers2
"print Squares Of Even Numbers
'numbers' list of numbers"
[numbers]
(->> numbers
     (filter even?)
	 (map #(* % %))
 )
)


(defn printCubeOfOddNumbers
"print cube Of odd numbers
'numbers' list of numbers"
[numbers]
(let 
    [
	 odd-no-list (filter odd? numbers)
	 cubes (map #(* % % %) odd-no-list)
	]
	(println " -- cube of odd numbers -- ")
    (println "numbers: " numbers)
    (println "cube nos: " odd-no-list)
	(println "cubes: " cubes)
	cubes	
 )
)


(defn printCubeOfOddNumbers2
"print cube Of odd numbers
'numbers' list of numbers"
[numbers]
(->> numbers
     (filter odd?)
	 (map #(* % % %))	 
)
)


(defn no-of-chars
"creates list that contains 
 number of characters for each course
'courses' list of courses"
[courses]
(println " -- no of characters -- ")
(println "courses: " courses)
(->>
   courses
   (map #(count %))
)
)


(defn list-calc
"performs a mathematical operation on a list. the logic is supplied as a parameter.
 'numbers' the list of numbers.
 'logic' the math operation "
[numbers logic]
(println "-- list calculator -- ")
(println " numbers: " numbers)
(println " function: " logic)
(let [result (->>
                 numbers
                 (map logic)  
             )
     ]
 
 (println " result: " result)
  result
)

)


(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
