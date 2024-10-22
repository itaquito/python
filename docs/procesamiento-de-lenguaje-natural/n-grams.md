---
sidebar_label: '⛓️ N-Grams'
sidebar_position: 9
---

# ⛓️ N-Grams

Los N-Gramas son conjuntos de datos que refieren a secuencias contiguas de 'n' palabras provenientes de un texto. La importancia de ocupar dicha relación recae en que según la cantidad de 'n' elementos es posible contar con un mayor entendimiento del contexto del texto, como lo pudiera ser en análisis de sentimientos, al igual que hacer modelos estadísticos del lenguaje para predecir la probabilidad de que se presente cierta palabra o secuencia de palabras, entre otras funciones.

## Bigrams

Un bigrama es una secuencia de 2 palabras adyacentes dado un texto. Derivado de la baja cantidad de elementos contiguos es que son más útiles para capturar relaciones cercanas entre palabras, y al hacerlo demandan menos recursos computacionales que otras secuencias.

El preprocesamiento de datos, incluida la tokenización y la limpieza, es esencial para garantizar la implementación efectiva de dicha secuencia. Esto deriva del hecho de que buscamos mantener únicamente las palabras que tengan relevancia en la oración (en contraste a las palabras vacías) y que se encuentren en buen estado para poderse procesar correctamente. Frente a lo anterior, el bigrama se obtiene al declarar una lista. De ahí hay dos maneras de llenar dicha lista con los datos que necesitamos:
1. Dentro de la lista **iterar sobre la posición de cada palabra del texto limpio** (a excepción de la última palabra), para así introducir como elemento una tupla o lista que almacene la palabra de una determinada posición y la palabra de la siguiente posición.
2. Ocupar la **función bigrams de nltk** y convertir el resultado en una lista.

```python title="Ejemplo de cómo obtener bigramas"
import nltk
import re
text_example = "Minecraft is the best videogame ever made..."

# Limpiado y tokenización a nivel palabra
text_example = text_example.lower()
text_example = re.sub(r"\W", " ", text_example)
text_example = re.sub(r"\s+", " ", text_example)
words = nltk.word_tokenize(text_example)
words_filt = [w for w in words if w not in nltk.corpus.stopwords.words("spanish")]

# PRIMER MÉTODO
bigram = [(words_filt[w], words_filt[w + 1]) for w in range(len(words_filt) - 1)]

# SEGUNDO MÉTODO
bigram = list(nltk.bigrams(words_filt))
```

## Trigrams

Por su parte, un Trigrama es una secuencia contigua de 3 palabras. Debido a dicha cantidad de palabras es que brindan más información contextual del texto capturando relaciones entre tripletes de palabras.

Al igual que los bigramas, existen dos métodos para obtener un trigrama.
1. Dentro de una lista **iterar sobre la posición de cada palabra del texto limpio** (a excepción de las dos últimas), para así introducir como elemento una lista que contenga la palabra de una determinada posición y las palabras de las dos siguientes posiciones.
2. Emplear la **función trigrams de nltk** y convertir el resultado en una lista.

```python title="Ejemplo de cómo obtener trigramas"
import nltk
import re
text_example = "Minecraft is the best videogame ever made..."

# Limpiado y tokenización a nivel palabra
...

# PRIMER MÉTODO
trigram = [(words_filt[w], words_filt[w + 1], words_filt[w + 2]) for w in range(len(words_filt) - 2)]

# SEGUNDO MÉTODO
trigram = list(nltk.trigrams(words_filt))
```
