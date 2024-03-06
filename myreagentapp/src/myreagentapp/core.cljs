(ns myreagentapp.core
    (:require 
              [reagent.core :as reagent :refer [atom]]
              [reagent.dom :as rd]))

(enable-console-print!)

(println "This text is printed from src/myreagentapp/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"
                          :button-on? true
                         }
				    )
				)

(defn image [url]
  [:img {:src url
         :style {:width "500px"
		         :border "solid gray 3px"
				 :border-radius "10px"
				}
	    }
  ]
)



(defn button []
  (let [text (if (get-in @app-state [:button-on?]) "ON" "OFF")]
    [:button
       {:on-click #(swap! app-state update-in [:button-on?] not)}
       text	   
	]
  )
)

(defn image-with-width [url width]
  [:img {:src url
         :style {:width width
		         :border "solid gray 3px"
				 :border-radius "10px"
		        }
        }
   ]
)


(defn image-grid [images]
  (into [:div]
       (map (fn [image-data]
	         [:div {:style {:float "left"
			                :margin-left "20px"
			               }
			       }
			   [image-with-width image-data "50px"]	   
			 ]             			 
			)
		 images
		)
	)
)	

(def my-images
["https://picsum.photos/id/0/5616/3744"
"https://picsum.photos/id/1/5616/3744"
"https://picsum.photos/id/10/2500/1667"
"https://picsum.photos/id/100/2500/1656"
"https://picsum.photos/id/1000/5626/3635"
"https://picsum.photos/id/1001/5616/3744"
"https://picsum.photos/id/1002/4312/2868"
"https://picsum.photos/id/1003/1181/1772"
"https://picsum.photos/id/1004/5616/3744"
"https://picsum.photos/id/1005/5760/3840"])


(def my-images-2
["https://picsum.photos/id/0/40/40"
"https://picsum.photos/id/1/20/20"
"https://picsum.photos/id/10/20/20"
"https://picsum.photos/id/100/20/20"
"https://picsum.photos/id/1000/20/20"
"https://picsum.photos/id/1001/20/20"
"https://picsum.photos/id/1002/20/20"
"https://picsum.photos/id/1003/20/20"
"https://picsum.photos/id/1004/20/20"
"https://picsum.photos/id/1005/20/20"])


(defn hello-world []
  [:div
   [:h1 (:text @app-state)]
   ; [button]
 ;  [:div [image "https://picsum.photos/id/0/100/100"]]
  ; [:h3 "Edit this and watch it change ! Okay ! bro !!! "]
   [image-grid my-images-2]
   ]
  )

(rd/render [hello-world]
           (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
