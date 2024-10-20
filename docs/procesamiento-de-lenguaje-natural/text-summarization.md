---
sidebar_label: "📝 Text Summarization"
sidebar_position: 11
---

# 📝 Text Summarization

El resumen automático de texto es una técnica de procesamiento del lenguaje natural (NLP) que condensa uno o más documentos largos en un resumen más breve y significativo. En este proyecto, implementaremos un resumen extractivo, utilizando Python con las bibliotecas BeautifulSoup para hacer scraping web y NLTK para realizar la tokenización y el análisis de frecuencia de palabras.

## 📚 Instalación de librerías

Para poder realizar el resumen de texto, necesitamos instalar las siguientes librerías:

```bash
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

```python

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

```python
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

    ```python
    from nltk.corpus import stopwords

    # Eliminar stopwords
    stop_words = set(stopwords.words(lang))
    words = nltk.word_tokenize(text)
    sentences = nltk.sent_tokenize(text)
    noStopWords = [word for word in words if word.lower() not in stop_words]
    ```

### 4. Análisis de frecuencia de palabras 📊

El siguiente paso es calcular la frecuencia de cada palabra en el texto. Calculamos la frecuencia de cada palabra en el texto utilizando nltk.FreqDist para determinar las palabras más comunes, que serán clave para puntuar las oraciones.

```python

frequencies = nltk.FreqDist(noStopWords)
frequencies.most_common(10) # Mostrar las 10 palabras más comunes
```

Ahora que tenemos las palabras más comunes, podemos obtener la frequencia maxima que la usaremos para calcular la puntuación de las oraciones. Ademas podemos seleccionar el número de oraciones que queremos en nuestro resumen.

```python
maxFrequency = frequencies.most_common(1)[0][1]
numberOfSentences = 5
```

### 5. Puntuación de las oraciones 🌟
