---
sidebar_label: "🔎 Modelo TF-IDF"
sidebar_position: 9
---

# 🔎 Modelo TF-IDF

## 🌟 Introducción

Es un método que ajusta la frecuencia de una palabra en un documento según cuántos documentos contienen dicha palabra, aumentando la relevancia de las palabras poco comunes y reduciendo la importancia de las palabras comunes.

Conserva cierta información semántica al darle más peso a las palabras menos comunes.
Ejemplo: en la frase "Ella es hermosa", la palabra "hermosa" tendrá más importancia que "Ella" o "es".

## 🔎 Pasos para construir el modelo TF-IDF en Python:

1. Cargar e importar las librerías necesarias.
2. Preprocesar los datos (tokenizar, eliminar stopwords, convertir a minúsculas).
3. Calcular la frecuencia de términos (TF).
4. Calcular la frecuencia inversa de documentos (IDF).
5. Combinar TF e IDF para obtener la importancia de cada palabra.
6. (Opcional) Normalizar los valores de TF-IDF.
7. Almacenar y utilizar el modelo para aplicaciones como búsqueda o análisis de sentimiento.

## 🖊️ Ejemplo

En este ejemplo, veremos cómo implementar el cálculo de TF-IDF (Frecuencia de Términos) desde cero en Python, utilizando un conjunto de oraciones simples.

```python title="Importación de librerías"
import nltk
import math
from nltk.corpus import stopwords
import re
```

```python title="Preprocesamiento de los datos"
sentences=[
    "El gato come pescado.",
    "El perro come carne.",
    "El gato y el perro son amigos.",
]

# Tokenización y eliminación de stopwords
stop_words = set(stopwords.words('spanish'))
sentences_filtered = []

for sentence in sentences:
    # Convertir a minúsculas, eliminar caracteres no alfabéticos y espacios adicionales    
    sentence = re.sub(r"\W"," ",sentence)
    sentence = re.sub(r"\s+"," ",sentence)
    
    # Tokenizar la oración
    words = nltk.word_tokenize(sentence)
    
    # Eliminar stopwords
    words = [word for word in words if word.lower() not in stop_words]
    
    # Agregar la oración preprocesada a la lista
    sentences_filtered.append(" ".join(words))

# Obtener los términos únicos
terminos = []

for words in sentences_filtered:
        terminos.extend(words.split())

# Eliminar duplicados
terminos=set(terminos)

print(terminos)
```

```python title="Calcular tabla de frecuencias"
# Función para calcular la frecuencia de términos (TF)
def calcular_tf():
    tf = {}  # Diccionario para almacenar los valores de TF
    n = len(sentences_filtered)  # Número total de oraciones
    for termino in terminos:
        tf[termino] = []  # Crear una lista para almacenar TF de cada oración
        for sentence in sentences_filtered:
            # Contar cuántas veces aparece el término en la oración y dividirlo por el número total de oraciones
            tf[termino].append(sentence.count(termino) / n)
    return tf

# Función para calcular la frecuencia inversa de documentos (IDF)
def calcular_idf():
    idf = {}  # Diccionario para almacenar los valores de IDF
    n = len(sentences_filtered)  # Número total de oraciones
    for termino in terminos:
        f = 0  # Contador para el número de documentos que contienen el término
        for sentence in sentences_filtered:
            if termino in sentence:
                f += 1
        # Aplicar la fórmula de IDF: log(número total de documentos / número de documentos que contienen el término)
        idf[termino] = n / f
        idf[termino] = math.log(idf[termino] + 1)  # Añadir 1 para evitar división por cero
    return idf

# Función para calcular TF-IDF combinando TF e IDF
def calcular_tf_idf():
    tf_idf = {}  # Diccionario para almacenar los valores de TF-IDF
    for termino in terminos:
        tf_idf[termino] = []  # Lista para almacenar TF-IDF de cada oración
        for i in range(len(sentences_filtered)):
            # TF-IDF es el producto de TF e IDF
            tf_idf[termino].append(calcular_tf()[termino][i] * calcular_idf()[termino])
    return tf_idf

# Calcular TF, IDF y TF-IDF
tf = calcular_tf()
idf = calcular_idf()
tf_idf = calcular_tf_idf()

# Mostrar resultados
print("Términos:", terminos)
print("TF:", tf)
print("IDF:", idf)
print("TF-IDF:", tf_idf)
```
