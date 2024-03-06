(ns in-memory-db.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))


(def memory-db (atom {}))
(defn read-db [] @memory-db)
(defn write-db [new-db] (reset! memory-db new-db))


(defn create-table
  "creates a table with 'name' as table name"
  [name]

  (write-db
    (assoc (read-db) name {:data [], :indexes {}}
          )
   )

  )


(defn drop-table
  "drops the table with the 'name' if it exists."
  [name]
  (let [db (read-db)]
    (write-db (dissoc db (str ":" name) ) )
    )
  )

(defn insert
  "inserts a record.
  'table' name of the table.
  'record' the record.
  'id-key' the key"
  [table record id-key]
  (println " -- insert -- ")
  (println "table: " table)
  (println "record: " record)
  (println "id key: " id-key)

    ; (get-in (read-db) [:fruits :indexes :name] )


  (let
      [
       field_value (id-key record)
       key_map (get-in (read-db) [table :indexes id-key] )
       duplicate? (contains? key_map field_value)
       db_table (table (read-db) )
       data (:data db_table)
       new_record (conj data record)
       index_map (:indexes db_table)
       ]
    (println "key map: " key_map)
    (println "duplicate key ?" duplicate?)
    (println "field value: " field_value)

    (if duplicate?
	   (println "record with " field_value " already exists")
     (do
	   (write-db (assoc-in (read-db) [table :data] new_record  )  )
       (if (contains? index_map id-key )
        (let
          [current_index (id-key index_map)]
		  (write-db (assoc-in (read-db) [table :indexes id-key]
                            (assoc current_index (id-key record)(count data)                   )
                    )
		  )
        )
        (write-db (assoc-in (read-db) [table :indexes ]
                          (assoc index_map id-key {(id-key record) 0}) )
         )
        )
      )
     )
   )


)


(defn select-*
  "returns records of the 'table'"
  [table]
  (println "table: " table)
  (get-in (read-db) [table :data] )
  )


(defn select-*-where
  "select from 'table' with provided where clause 'field'"
  [table-name field field-value]
  (println "-- select-*-where  -- ")
  (println "table-name: " table-name)
  (println "field: " field)
  (println "field-value: " field-value)
  (
   let [
        index_map (get-in (read-db) [table-name :indexes field] )
        index (get index_map field-value)
        ]
   (println "index map: " index_map)
   (println "index: " index)
   (println " get record ... ")
   (get (get-in (read-db) [table-name :data] ) index )

    )

  )
