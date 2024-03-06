(ns imageeditor.core
    (:require 
              [reagent.core :as reagent :refer [atom]]
              [reagent.dom :as rd]
			  [clojure.string :as str]
			  [imageeditor.css :as css]
			  )
)

(enable-console-print!)

(println "This text is printed from src/imageeditor/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(def image-url "https://picsum.photos/v2/list?limit=6")

(defonce app-state (atom {
                           :text "Hello world!"
						   :images []
                         }
						 )
						 )
	; (reset! app-state {:images []})					 
;(swap! app-state assoc :images (conj (:images @app-state) 1 ) )
; (swap! app-state assoc :images [] )

;(defonce images (atom []))

(defn hide-author
[image-array]
  (swap! app-state assoc :images (into [] (map #(assoc % :author nil) image-array) ) ) 
)

(defn clear-images
[image-array]
  (swap! app-state assoc :images (into [] (map #(assoc % :download_url nil) image-array) ) ) 
)

(defn update-images
[image-array]
  (println "-- update-images --")
  (swap! app-state assoc :images image-array )
)

(defn fetch-images
[]
(-> 
 (js/fetch image-url)
(.then (fn [response] (.json response)))
;(.then (fn [json] (println (js->clj json :keywordize-keys true))))
(.then (fn [json] 
          (update-images (js->clj json :keywordize-keys true) )  
        )
)
)
)



(defn buttons []
  [:div
    [:button#clearBtn {:on-click #(clear-images (:images @app-state))} "Clear Images"]
    [:button#hideBtn {:on-click #(hide-author (:images @app-state))} "Hide Author"]
    [:button#fetchBtn {:on-click #(fetch-images)} "Fetch Image"]	
  ]
)


(defn calc-css-grid 
[items]
  (:grid (reduce css/get-grid css/context items) )
)


(defn update-item-css[item-css]
(->
   item-css
   (assoc (keyword "width") "20vh")
   (assoc (keyword "height") "10vw")
)
)



(defn figure[item item-css]
 ;(println "item: " item)
 ;(println "item-css: " item-css)
  [:figure {
             :style (update-item-css item-css)
           }
    [:img {
	       :id (inc (js/parseInt (:id item) ) )
	       :src (:download_url item)
		   :class "gallery__img"
		   :alt (str/join "Image " [(:id item)])
	      }
	]
	[:figcaption (:author item)
	]
  ]
)





(defn figures [container  images]
  (let [
         img-size (count images)
		 img-list  (range 1 (inc img-size))
		 css-grid (map css/get-css-grid (calc-css-grid img-list )  )
		; figures (map figure img-list css-grid )
		figures (map figure images css-grid )
       ]
     ;; into container 	
      (into container figures)	 
  )
)

(defn gallery []
  
  (if (> (count (:images @app-state)) 0)   
     (figures [:div.gallery]  (:images @app-state) )
     [:div.gallery]
  )
 
 ;(into [:div.gallery]
 ;  ()
 ;)
 
)

(defn hello-world []
  [:div
    [:div 
	  [buttons]
	]
    [:div.container
	  [gallery]      
	]
   ;[:h1 (:text @app-state)]
  ; [:h3 "Edit this and watch it change!"]
   
   ]
   )

(rd/render [hello-world]
           (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
