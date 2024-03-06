(ns my-hiccup.core
  (:gen-class)
  (:require
   [clojure.string :as str]))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))


(def open-tag #{:img :br})
(def end-tag #{})
(def double-tag #{:div :html :body :head :p :ul :li
                  :title :span :strong :em :a :h1 :h2 :h3})






(defn get-open-tag
  [keyword]
  (let
      [element (name keyword)]

    (str "<" element ">")
    )

  )

(defn get-open-tag2
  [keyword]
  (let
      [element (name keyword)]

    (str "<" element)
    )

  )


(defn has-close-tag?
  [keyword]
  (let
      [element (name keyword)]
    (
     if
     (contains? double-tag keyword )
     true
     false
     )
    )
  )

(defn get-close-tag
  [keyword]
  (let
      [element (name keyword)]
                                        ; (str "</" element ">")
    (cond
      (contains? open-tag keyword)(str ">")
      (contains? double-tag keyword)(str "</" element ">")
     )
    )
  )

(defn get-close-tag2
  [keyword]
  (let
      [element (name keyword)]
                                        ; (str "</" element ">")
    (cond
      (contains? open-tag keyword)(str ">")
      (contains? double-tag keyword)(str "></" element ">")
     )
    )
  )


(defn map2props
  "This function accepts a map of html properties and
  returns the html formatted version of it
  'html-attr' properties of an html element.
  a tuple is returned."
  [html-attr]
  (let
      [
       props (into [] html-attr )
       class-attr (symbol (ffirst props))
      class-value (second (first props))
       ]
   ;  (str class-attr "=" class-value )
    [class-attr class-value]
    )
 )






(defn transform-content
  "Transform a vector or a String to html.
  'content' vector or string to be transformed
  "
  [content]
  (println " -- transform-content -- ")
  (println "content: " content)

  (cond
    (vector? content)
   (let
      [
       string-buffer []
       element (first content)
       open-tag (get-open-tag2 element)
       close-tag-req  (has-close-tag? element)
       element-content
       (when (next content)
                          (into [] (next content))
                         )
       ]
    (println "element: " element)
    (println "element-content: " element-content)

    (cond
      (nil? element-content)
      (->
       string-buffer
       (conj (get-open-tag element))
      ; (conj ">")
       (conj (get-close-tag element))
       )
      (vector? element-content)
      (
       ->
       string-buffer
       (parse-keyword3 element element-content)
       )
      )

      )
	  ;  if it a string
     (string? content)
     (let
         [string-buffer []]
       (->
        string-buffer
        (conj content)
        )
       )

      )

  )

(defn parse-keyword
  "Parses a vector and transforms it to html.
  'context' a string buffer where the html elements are written to.
  'node' a keyword that represents an html tag.
  'nested-elements' the content of a node.
  "
  [context node nested-element]
  (println "-- parse-keyword3 --" )
  (println "context: " context)
  (println "element: " node)
  (println "element content: " nested-element)
  (let
      [
       ; if node has attributes
       node-has-attr
       (if (map? (first nested-element)
                 )
         true
         false
         )

       open-tag (get-open-tag node)
       nested-vectors
       (into []
             (apply concat
                    (map
                     transform-content
                     nested-element
                     )
                    ))


       ]
    (println "&&&&&&&&&&&&")
    (println "element: " node)
    (println "element content: " nested-element)
    (println "-----------")
    (println "nested vectors: " nested-vectors)
    (println "---------")
    (cond
      (false? node-has-attr)
          (->
           context
           (conj open-tag)
           (conj (str/join nested-vectors))
           (conj (get-close-tag node))
           )
          (true? node-has-attr)
          (
           let
           [
            content (first nested-element)
            props (map2props content)
            ]
           (->
            context
            (conj (get-open-tag2 node))
            (conj " ")
            (conj (first props))
            (conj "=")
            (conj  \" (second props) \" )
            (conj ">")
            (conj (str/join nested-vectors))
            (conj (get-close-tag node))
            )
           )
          )

      )
  )

(defn to-html
  "'element' to be transformed to html.
  'nested-element' the content of the element
   'string-buffer' the vector where the result of transformation will be added."
  [element nested-elements string-buffer]
  (cond
    (keyword? element)
    (parse-keyword string-buffer element nested-elements)
    :otherwise_text
    (str "Error: keyword expected. not " element)
    )
  )

(defn render-html*
  "'node' represents the html tag
  'string-buffer' is a vector that will be converted to a string"
  [node string-buffer]
  (println "-- render-html* --")
  (println " node:" node)

  (cond
    (not node) ""
    :otherwise
    (do
      (println "-- otherwise --")
       (to-html (first node) (next node)  string-buffer)
      )

   )
 )



(defn render-html
  "Expects a vector whose content follow hiccup conversion.
  See clojure workshop.
  'node' a vector
  "
  [node]
   (str/join (render-html* node []))
 ; (println (render-html* node []))
  )
