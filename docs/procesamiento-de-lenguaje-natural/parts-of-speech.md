---
sidebar_label: '🔖 Etiquetado de partes del discurso'
sidebar_position: 6
---

# 🔖 Etiquetado de partes del discurso (POS)

Esta es una herramienta que permite la asignación de etiquetas a cada una de las palabras que componen una oración, tal como lo pudieran ser un sustantivo, un verbo y un adjetivo. En este sentido, dicho proceso facilita la comprensión de la estructura de un texto, al igual que las relaciones existentes entre los elementos que lo componen.

Hoy en día le podemos dar diversas aplicaciones tecnológicas a este tipo de etiquetado, pues lo vemos en modelos que permiten el análisis de sentimientos en un contenido textual, modelos que generan la traducción automática entre distintos lenguajes hasta el reconocimiento de voz. Aunque bien, esta es una herramienta con gran potencial, es necesario entender sus alcances y limitantes. A la hora de aplicar dicho proceso debe de haber conciencia de que hay palabras que pueden tener diversas etiquetas dependiendo del contexto en el que se ocupan y hay palabras que pudieran resultar no estar presentes en los registros que se van a ocupar, pues puede ser que sean palabras nuevas, que presenten algún error tipográfico o que refieren a nombres propios no considerados por los registros.

```python title="Aplicación en Python"
import nltk
text_example = "Miguel is a great friend of ours."
words = nltk.word_tokenize(text_example)

tags = nltk.pos_tag(words) # Aquí es donde sucede la magia de nuestro etiquetado
```

Como lo hemos visto anteriormente, NLTK es una biblioteca que facilita el procesamiento de lenguaje natural en Python. Una de sus múltiples funciones permite la asignación de etiquetas a palabras. Por ello es que en el ejemplo provisto, la oración con la que vamos a trabajar es necesario que sea tokenizada a nivel palabra. De ahí con la función **'pos_tag()'** es posible realizar la asignación. Dicha función nos regresa una lista de tuplas, y en donde cada tupla contiene una pareja conformada por una palabra del texto con su respectiva etiqueta.

#### Lista de etiquetas en NLTK

![Lista de etiquetas NLTK](/img/procesamiento-de-lenguaje-natural/nltk-speech-codes.png)

```python title="Banco de oraciones con etiquetas"
nltk.corpus.treebank.tagged_sents()
```

Pudiera ser el caso que busquemos hacer pruebas con oraciones previamente etiquetadas. La librería de NLTK nos proporciona un módulo que cuenta con una colección de textos. Por medio de la función **'tagged_sents()'** podemos acceder a casi 4000 oraciones de prueba que ya tienen etiquetas asignadas.

## Chunking (Fragmentación)

En el intento de extraer más información útil de un texto surgió esta técnica del procesamiento del lenguaje natural. Esta misma permite el reconocimiento de lo que se conoce como **entidades nombradas**. Dichas entidades refieren a una o varias palabras que aluden a entidades en específico, como lo pueden ser personas, organizaciones y lugares.

```python title="Aplicación en Python"
import nltk
text_example = "Cristiano Ronaldo was born in Portugal."
words = nltk.word_tokenize(text_example)
tags = nltk.pos_tag(words)

chunks = nltk.ne_chunk(tags) # Aquí es donde sucede la magia de nuestra fragmentación
```

La librería de NLTK nuevamente nos resulta útil, ya que cuenta con la función **'ne_chunk()'** que permite la asignación de entidades nombradas a las palabras correspondientes. Esta función recibe como argumento una lista que contenga a cada palabra del texto con su respectiva etiqueta. De ahí, nosotros recibimos una estructura de árbol donde se pueden observar las palabras del texto, junto con sus etiquetas y sus entidades.

| Lista de entidades nombradas más comunes en ne_chunk|
|------------------------------|
|**1. Person:** nombres de personas|
|**2. Organization:** nombres de organizaciones (empresas, instituciones, etc.)|
|**3. GPE:** nombres de entidades geopolíticas (países, ciudades, etc.)|
|**4. Location:** nombres de lugares NO geopolíticos (montañas, ríos, etc.)|
|**5. Facility:** nombres de instalaciones (edificios, carreteras, etc.)|
|**6. GSP:** nombres de entidades geográficas, sociales o políticas|

```python title="Impresión de la fragmentación"
chunks.pretty_print()
```

En caso de que busquemos tener una impresión de nuestra fragmentación que resulte más clara y atractiva a la vista, en contraste a la impresión común de una variable, la función **'pretty_print()'** lo permite. De esta manera hace la impresión a manera de un árbol con sus respectivas ramas y hojas.