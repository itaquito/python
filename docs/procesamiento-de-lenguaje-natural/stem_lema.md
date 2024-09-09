---
sidebar_label: '🌱 Stemming y Lematización'
sidebar_position: 4
---

# 🌱 Stemming y Lematización

En el ámbito del Procesamiento del Lenguaje Natural (PLN), dos métodos comunes para la normalización de textos que transforman datos de texto sin procesar en un formato legible para su procesamiento automático son el stemming y la lematización. Ambos métodos eliminan los afijos de las palabras flexionadas, dejando solo la raíz. Estos procesos eliminan caracteres al inicio y al final de las palabras. Las raíces resultantes, o palabras base, se utilizan para el procesamiento posterior. Aunque comparten esta similitud, la lematización y el stemming difieren en cómo simplifican las palabras a una forma base común.

## 🌿 Stemming

El *stemming* es un proceso que reduce la forma inflexionada (variación generada por adición de morfemas) de las palabras, es decir, que transforma las palabras derivadas en su forma base, también conocida como "lema". Esta técnica es útil para unificar el vocabulario y disminuir la redundancia, permitiendo que los modelos de PLN identifiquen relaciones entre las palabras derivadas y su raíz, mejorando la comprensión contextual. Los algoritmos de stemming operan eliminando prefijos y sufijos comunes, aunque presentan ciertas limitaciones, pues la representación intermedia producida pudiera no tener ningún significado. 

Ejemplo: "inteligencia" / "inteligente" > raíz: "inteligen"

```python title="Algoritmo de stemming más común"
import nltk
words = nltk.word_tokenize(text) # Texto previamente definido
# Creamos el stemmer 
stemmer = nltk.stem.PorterStemmer() 
# Aplicamos el stemmer a cada palabra para obtener una lista de raíces
words_stem = set([stemmer.stem(word) for word in words])
```

```python title="Stemming en español"
# 2 opciones de stemmer en español (funcionan igual)
stemmer_spa = nltk.stem.snowball.SpanishStemmer()
stemmer_spa = nltk.stem.SnowballStemmer("spanish")
words_spa = nltk.word_tokenize(texto_spa) # Texto previamente definido
words_spa_stem = set([stemmer2.stem(word) for word in words_spa])
```

## 🪴 Lematización

Igual que en el Stemming, la lematización es una técnica de normalización de texto, pero con ella la representación intermedia o lema sí tiene significado, garantizando que la palabra de salida sea una forma normalizada existente que se pueda encontrar en el diccionario. Sin embargo, esta técnica sólo se encuentra disponible en inglés. 

```python title="Lematización"
from nltk.stem import WordNetLemmatizer
# CReamos el lematizador y lo aplicamos a cada palabra del texto
lemmatizer = WordNetLemmatizer()
words_eng = nltk.word_tokenize(text) # 'text' previamente definido
words_eng_lem = [lemmatizer.lemmatize(word) for word in words_eng]
```