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
