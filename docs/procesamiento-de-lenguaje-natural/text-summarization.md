---
sidebar_label: "📝 Text Summarization"
sidebar_position: 11
---

# 📝 Text Summarization

El resumen automático de texto es una técnica de procesamiento del lenguaje natural (NLP) que condensa uno o más documentos largos en un resumen más breve y significativo. En este proyecto, implementaremos un resumen extractivo, utilizando Python con las bibliotecas BeautifulSoup para hacer scraping web y NLTK para realizar la tokenización y el análisis de frecuencia de palabras.

## 📚 Instalación de librerías

Para poder realizar el resumen de texto, necesitamos instalar las siguientes librerías:

```bash title="Instalación de librerías"
pip install beautifulsoup4 lxml nltk
```

### 🥣 ¿Qué es Beautiful Soup?

Beautiful Soup es una biblioteca de Python que facilita la extracción de información de archivos HTML y XML. Proporciona formas de navegar, buscar y modificar el árbol de análisis. Es útil para extraer información de páginas web.

### 💾 ¿Qué es lxml?

lxml es una biblioteca de Python que permite el análisis y manipulación de documentos XML y HTML. Es muy rápido y eficiente, y proporciona una API muy fácil de usar.

_Para la libreria NLTK, no es necesario hablar ya que hemos estado trabajando con ella durante el transcurso de este curso._

## 📝 Implementación

Para realizar el resumen de texto, primero necesitamos extraer el contenido de un artículo de una página web. Tenemos que asegurarnos que el texto que queremos analizar tenga la etiqueta `<p>` para poder extraerlo correctamente. Ya que si no esta cargado de esta manera será más complicado extraer el texto o no podremos extraerlo.

### 1. Extracción de contenido web 🕸

El primer paso es descargar el contenido HTML de la página web que deseamos analizar. Utilizaremos urllib para obtener el HTML de la página y BeautifulSoup para procesarlo.

```python title="Extracción de contenido web"

import bs4 as bs
import urllib.request

# Descargar el contenido HTML de la página
source = urllib.request.urlopen("{Nuestra pagina web con el texto que queremos sumarizar}").read()

# Analizar el HTML con BeautifulSoup
soup = bs.BeautifulSoup(source, "lxml")

# Extraer el idioma de la página
html = soup.find("html")["lang"]
lang = "spanish" if "es" in html else "english"
```

En este código, se obtiene el HTML de la página y se determina el idioma de la página utilizando el atributo lang del elemento `<html>`

### 2. Limpieza del texto 🧹

El siguiente paso es extraer los párrafos del HTML y limpiar el texto eliminando referencias, espacios adicionales y caracteres no alfabéticos.

```python title="Limpieza del texto"
# Extraer los párrafos del HTML
text = ""
for paragraph in soup.find_all("p"):
    text += paragraph.text + " "

# Limpiar el texto
import re

text = re.sub(r"\[[0-9]*\]", " ", text) # Eliminar referencias
text = re.sub(r"\s+", " ", text) # Eliminar espacios adicionales
text = re.sub(r"[^a-zA-Z]", " ", text) # Eliminar caracteres no alfabéticos
text = re.sub(r"\s+", " ", text) # Eliminar espacios adicionales
```

En este código, se extraen los párrafos del HTML y se limpia el texto utilizando expresiones regulares para eliminar referencias, espacios adicionales y caracteres no alfabéticos.

### 3. Tokenización y eliminación de stopwords 🛑

Una vez que el texto está limpio, utilizamos NLTK para tokenizar las palabras y eliminar las palabras vacías (stopwords) que no aportan información importante. Este proceso ya lo hemos visto en secciones anteriores.

```python title="Tokenización y eliminación de stopwords"
from nltk.corpus import stopwords

# Eliminar stopwords
stop_words = set(stopwords.words(lang))
words = nltk.word_tokenize(text)
sentences = nltk.sent_tokenize(text)
noStopWords = [word for word in words if word.lower() not in stop_words]
```

### 4. Análisis de frecuencia de palabras 📊

El siguiente paso es calcular la frecuencia de cada palabra en el texto. Calculamos la frecuencia de cada palabra en el texto utilizando nltk.FreqDist para determinar las palabras más comunes, que serán clave para puntuar las oraciones.

```python title="Análisis de frecuencia de palabras"
frequencies = nltk.FreqDist(noStopWords)
frequencies.most_common(10) # Mostrar las 10 palabras más comunes
```

Ahora que tenemos las palabras más comunes, podemos obtener la frequencia maxima que la usaremos para calcular la puntuación de las oraciones. Ademas podemos seleccionar el número de oraciones que queremos en nuestro resumen.

```python title="Frecuencia máxima y número de oraciones"
maxFrequency = frequencies.most_common(1)[0][1]
numberOfSentences = 5
```

### 5. Puntuación de las oraciones 🌟

El último paso consiste en calcular la relevancia de cada oración en función de las palabras que contiene. Utilizamos la frecuencia de las palabras como indicador de la importancia de las mismas. Las oraciones que contienen palabras con mayor frecuencia son las más relevantes para el resumen.

Primero, inicializamos un diccionario para almacenar las puntuaciones de cada oración.

```python title="Inicializar diccionario para almacenar las puntuaciones de las oraciones"
# Inicializar diccionario para almacenar las puntuaciones de las oraciones
sentenceScores = defaultdict(int)
```

A continuación, recorremos cada oración del texto original y analizamos cada palabra en la oración. Para cada palabra cuya frecuencia sea significativa, sumamos su frecuencia normalizada (frecuencia de la palabra dividida por la frecuencia máxima) a la puntuación de la oración.

```python title="Calcular la puntuación de las oraciones"
for sentence in sentences:
    sentenceWords = nltk.word_tokenize(sentence.lower())
    if len(sentenceWords) < 25:  # Filtrar oraciones muy cortas
        continue
    for word in sentenceWords:
        if word in frequencies:
            sentenceScores[sentence] += frequencies[word] / maxFrequency
```

En este código, se tokeniza cada oración y se calcula su puntuación solo si contiene más de 25 palabras (para evitar oraciones demasiado cortas que puedan no ser representativas).

Una vez que hemos puntuado todas las oraciones, ordenamos estas oraciones en función de su puntuación, de mayor a menor.

```python title="Ordenar las oraciones por puntuación"
# Ordenar las oraciones por puntuación
sortedSentences = sorted(sentenceScores.items(), key=lambda item: item[1], reverse=True)
```

Esto asegura que las oraciones más relevantes (aquellas con mayor puntuación) aparezcan primero en la lista.

Ahora, seleccionamos las N oraciones más relevantes, que representarán el resumen final del texto original.

```python
# Seleccionar las N oraciones más relevantes
summarySentences = [sentence for sentence, score in sortedSentences[:numberOfSentences]]
```

### 6. Resultado final 🎉

Finalmente, unimos las oraciones seleccionadas para formar el resumen final del texto original.

```python title="Resultado final"
# Unir las oraciones seleccionadas para crear el resumen
summary = " ".join(summarySentences)
print(summary)
```
