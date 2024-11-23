---
sidebar_label: "☁️ Word cloud"
sidebar_position: 13
---

# ☁️ Word cloud

Una nube de palabras (word cloud o tag cloud en inglés) es una representación visual de las palabras más frecuentes en un texto. Entre mayor sea la frecuencia de la palabra, mayor será el tamaño de la tipografía en la nube de palabras. 

## 📚 Librería para crear nubes de palabras

Para crear nubes de palabras en Python, utilizaremos la librería "wordcloud". La podemos instalar con el siguiente comando de pip:

```bash title="Instalación de wordcloud"
pip install wordcloud
```

## 🐣 Crear una nube de palabras

Antes de poner crear una nube de palabras, debemos de sacar la frecuencia de una lista de palabras. Podemos usar `nltk` para esta tarea:

```python title="Frecuencia de palabras"
import nltk
from nltk.corpus import stopwords
from wordcloud import WordCloud
from matplotlib import pyplot as plt

# Texto de ejemplo
texto = "El perro marron corre por el parque todos los dias. El perro juega con otros perros y siempre encuentra algo interesante en el parque. A veces, el perro se sienta bajo un árbol y observa a las personas que pasan por el parque."

# Tokenizar el texto por palabras
palabras = nltk.word_tokenize(texto_limpio)

# Opcional, pero es buena idea. Eliminar las stopwords.
stop_words = stopwords.words("spanish")
palabras = [palabra for palabra in palabras if palabra.lower() not in stop_words]

# Calcular las frecuencias de las palabras
frecuencia = nltk.FreqDist(palabras)

# Crear la nube de palabras
wc = WordCloud(width=800, height=400, max_words=100, background_color="white").generate_from_frequencies(frecuencia)

# Mostrar la nube de palabras por medio de matplotlib
plt.imshow(wc)
plt.axis("off")
plt.show()
```

## ✒️ Ejemplos de nubes de palabras

![Primer ejemplo de una nube de palabras](/img/procesamiento-de-lenguaje-natural/word-cloud/wordcloud1.png)

![Segundo ejemplo de una nube de palabras](/img/procesamiento-de-lenguaje-natural/word-cloud/wordcloud2.png)

![Tercer ejemplo de una nube de palabras](/img/procesamiento-de-lenguaje-natural/word-cloud/wordcloud3.png)

![Cuarto ejemplo de una nube de palabras](/img/procesamiento-de-lenguaje-natural/word-cloud/wordcloud4.png)
