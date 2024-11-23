---
sidebar_label: '🔎 Sentiment analysis'
sidebar_position: 11
---

# 🔎 Sentiment analysis

El análisis de sentimiento es una técnica utilizada para identificar el tono emocional presente en un texto. Su objetivo es examinar las palabras y frases empleadas en distintos textos con el fin de detectar el sentimiento que se expresa, que puede ser de tres tipos: positivo, negativo o neutro.

## 📌 ¿Para qué se ocupa?

Este procedimiento tiene diversos usos, siendo uno de los más comunes la monitorización de redes sociales, especialmente para analizar las opiniones de los clientes y realizar investigaciones de mercado.

## 🚩 Desafíos y retos

Aunque este proceso es muy útil, presenta complicaciones debido a uno de los mayores desafíos: la complejidad inherente del lenguaje humano.

## 🔧 ¿Cómo funciona?

Este análisis utiliza tecnologías de procesamiento de lenguaje natural (NLP) y aprendizaje automático (machine learning) para entrenar el software y permitirle analizar e interpretar el texto de manera similar a la comunicación humana. Existen dos enfoques principales: el primero, basado en reglas, que se destaca por ofrecer resultados casi en tiempo real; y el segundo, basado en machine learning, que es más adaptable y capaz de manejar escenarios más complejos.

### 📐 Análisis de sentimiento basado en reglas

Este software utiliza un enfoque basado en una lista predefinida de palabras clasificadas según su significado. Por ejemplo, palabras positivas como "rápido" y "asequible" y negativas como "caro" o "lento". El sistema busca estas palabras en un texto y las clasifica según el sentimiento asociado. Funciona como un diccionario que, en tiempo real, identifica y clasifica las emociones presentes en los textos analizados.

### 🤖 Análisis de sentimiento basado en machine learning

Este enfoque no se limita a buscar palabras específicas, sino que el software aprende a reconocer emociones con el tiempo. Los desarrolladores entrenan un algoritmo que, a medida que procesa más textos, mejora su capacidad de identificar emociones. Este análisis va más allá de las palabras individuales y toma en cuenta el contexto y el orden en el que aparecen las palabras, lo que permite una interpretación más precisa y ajustada del sentimiento general.

## 🧮 SentimentIntensityAnalyzer de NLTK

Este analizador se basa en el modelo VADER, diseñado para realizar análisis de sentimientos a nivel de oraciones. Captura matices emocionales y la intensidad de las emociones presentes en el texto, gestionando también negaciones y énfasis con precisión.

El modelo devuelve un diccionario con cuatro puntuaciones clave:

- **Positivo:** Indica la cantidad de palabras con connotación positiva en el texto.
- **Negativo:** Refleja el número de palabras con carga negativa.
- **Neutral:** Muestra la proporción de palabras que no tienen una polaridad clara.
- **Compuesto:** Proporciona una puntuación total que oscila entre -1 y 1, calculada como una suma normalizada de las puntuaciones de sentimiento.

Ahora para aplicar este tipo de analizador usamos este código:

```python title="Ejemplo de análisis de sentimiento"
import nltk
from nltk.sentiment import SentimentIntensityAnalyzer

sentiment = SentimentIntensityAnalyzer()
sentiment.polarity_scores("This videogame was terrible")
```

```json title="Output del código anterior"
{"neg": 0.0, "neu": 0.192, "pos": 0.808, "compound": 0.6369}
```

Otro proceso que hicimos fue el poder determinar si el texto es positivo o negativo de acuerdo a una función:

```python title="Función para obtener la calificación"
def obtener_calif(text: str) -> str:
    score = sentiment.polarity_scores(text)['compound'] # Calcula la puntuación del 'compound'
    
    if score > 0:
        resultado = "Positivo"
    else:
        resultado = "Negativo"
        return resultado
```

### 🕊️ Aplicando el análisis de sentimiento en datos de Twitter

```python title="Análisis de sentimiento en tweets"
from nltk.corpus import twitter_samples
import random

# Cargar tweets que vienen de una librería llamada twitter samples
tw_pos = twitter_samples.strings('positive_tweets.json')
tweets = random.choice(tw_pos)

# Obtiene la clasificación del tweet
obtener_calif(tweets)
```

### 📝 Preprocesamiento del texto

Es importante destacar que la función Polarity-Scores no toma en cuenta hashtags, por lo que es necesario eliminarlos durante el pre-procesamiento del texto para asegurar un análisis preciso. Aquí va el código para eliminar hashtags:

```python title="Función para limpiar el texto para el análisis de sentimiento"
import re

# Función para limpiar el texto
def limpiar_texto(texto):
    # Eliminar hashtags
    texto_limpio = re.sub(r'#\w+', '', texto)
    return texto_limpio

# Aplicar la función de limpieza
texto = limpiar_texto(texto)
puntuaciones = sia.polarity_scores(texto)

print(puntuaciones)
```

Con la evolución de las técnicas de procesamiento de lenguaje natural y el aprendizaje automático, el análisis de sentimiento es y seguirá siendo una pieza clave para las empresas y organizaciones que buscan entender mejor las emociones y actitudes de sus clientes, mejorando así sus estrategias de interacción y toma de decisiones.
