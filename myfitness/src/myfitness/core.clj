(ns myfitness.core
  (:require
    [myfitness.schema :as schema]	
	[myfitness.ingest :as ingest]
	[myfitness.query :as query]
    [clojure.java.jdbc :as jdbc]
    [semantic-csv.core :as sc]
    [clojure.data.csv :as csv]
    [clojure.java.io :as io]
    [clojure.edn :as edn]
    [compojure.core :refer [context defroutes DELETE GET PUT POST]]
    [compojure.route :as route]
    [muuntaja.middleware :as middleware]
    [ring.adapter.jetty :refer [run-jetty]]
    [ring.middleware.params :as params]
  )
  (:gen-class))
  
  
(defroutes routes
(context "/users" []
(GET "/" [] {:body (query/all-users schema/db)})
(POST "/" req
(let [ingest-result (ingest/user schema/db (edn/read-string (slurp
(:body req))))]
{:status 201
:headers {"Link" (str "/users/" (:1 ingest-result))}}))
(GET "/:id" [id]
(when-first [user (query/user schema/db id)]
{:body user}))
(GET "/:id/activities" [id]
{:body (query/activities-by-user schema/db id)})
)
(context "/activities" []
(GET "/" []
{:body (query/all-activities schema/db)})
(POST "/" req
(let [ingest-result (ingest/activity schema/db (edn/read-string
(slurp (:body req))))]
{:status 201
:headers {"Link" (str "/activities/" (:1 ingest-result))}}))
(GET "/:id" [id]
(when-first [activity (query/activity schema/db id)]
{:body activity}))
)
(context "/reports" [report-type id]
(GET "/" []
{:body (case report-type
"most-active-user" (query/most-active-user schema/db)
"monthly-activity-by-user" (query/monthly-activity-by-user
schema/db id)
nil)})
)
(route/not-found "Not found")
)



(defn run
[]
(run-jetty
(-> routes
middleware/wrap-format
params/wrap-params)
{:port 8080
:join? false})
)
  
  

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
