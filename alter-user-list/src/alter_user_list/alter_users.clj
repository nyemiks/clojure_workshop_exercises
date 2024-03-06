(use '[clojure.string :rename {replace replace2} {reverse reverse2}])
(require '[clojure.string :as str])
(use '[clojure.pprint :only [print-table]])

def users #{"mr_john blake" "miss_paul smith" "dr_katie hudson"}

(let [
      users (map #(replace2 %1 "_" " ") users)
      users (map transform_name users)      
]
   
     (print-table (map #(hash-map :user %1) users))
)



;###########################

 


(defn transform_name [name]
                   (let 
                     [
                       split_name (str/split name #" ")
                       capitalize_name (map #(str/capitalize %) split_name)
                       adjusted_name (str/join " " capitalize_name)
                     ]
                      adjusted_name
                   )                     
                   )

 