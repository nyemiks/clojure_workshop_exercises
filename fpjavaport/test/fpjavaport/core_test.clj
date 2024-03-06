(ns fpjavaport.core-test
  (:require [clojure.test :refer :all]
            [fpjavaport.core :refer :all]))

;;(def numbers [12 9 13 4 6 2 4 12 15])

(deftest a-test
  (testing "FIXME, I fail."
    (is (= 0 0))))


(deftest filter-even-nums
  (testing  "filter even numbers test"
    (is (= (filter-even-numbers numbers) '(12 4 6 2 4 12) ) )
)
)


(deftest search-by-course
 (testing "search for a course"
   (is (= (course-search "Spring") '("Spring" "Spring Boot") ) )
 )
)

; ("Spring" "Spring Boot" "Microservices" "Azure" "Docker" "Kubernetes")
(deftest course-withmore-4-letters
 (testing "search for a course"
   (is (= (only-4-letters courses) '("Spring" "Spring Boot" "Microservices" "Azure" "Docker" "Kubernetes") ) )
 )
)

; (144 16 36 4 16 144)

(deftest print-squares-of-even-numbers
 (testing "print Squares Of Even Numbers"
   (is (= (printSquaresOfEvenNumbers numbers) '(144 16 36 4 16 144) ) )
 )
 )
 
 
 (deftest print-squares-of-even-numbers-2
 (testing "print Squares Of Even Numbers"
   (is (= (printSquaresOfEvenNumbers2 numbers) '(144 16 36 4 16 144) ) )
 )
 )
 
 
 (deftest print-cube-of-odd-numbers
 (testing "print cubes Of odd Numbers"
   (is (= (printCubeOfOddNumbers numbers) '(729 2197 3375) ) )
 )
 )
 
 
 (deftest print-cube-of-odd-numbers-2
 (testing "print cubes Of odd Numbers"
   (is (= (printCubeOfOddNumbers2 numbers) '(729 2197 3375) ) )
 )
 )


(deftest no-of-characters
(testing "test to see if a list is created with no of character for each course"
  (is (= (no-of-chars courses) '(6 11 3 13 3 3 5 6 10) ) )
)
)


(comment

(deftest list-operations
 (testing "test to modify a list based on user defined functions" 
  (is (= (list-calc numbers double-no)   '(24 18 26 8 12 4 8 24 30) )  )
  (is (= (list-calc numbers squared)   '(144 81 169 16 36 4 16 144 225) )  )
  (is (= (list-calc numbers cubed)   '(1728 729 2197 64 216 8 64 1728 3375) )  )
 )
)

)

(deftest list-operations-2
  (testing "test to modify a list based on user defined functions"
   (are [numbers logic result]
      (= (list-calc numbers logic) result)
	  numbers double-no '(24 18 26 8 12 4 8 24 30)
	  numbers squared   '(144 81 169 16 36 4 16 144 225)
	  numbers cubed '(1728 729 2197 64 216 8 64 1728 3375)
   )
  )
)