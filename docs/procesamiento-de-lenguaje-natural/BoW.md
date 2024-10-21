---
sidebar_label: '💰 Bag of Words'
sidebar_position: 7
---

# 💰 Modelo Bag of Words 

Es un método que se utiliza para representar documentos como un conjunto de palabras, ignorando el orden y la estructura, centrándose solo en la presencia de palabras.

## ⭐ Importancia del modelado de texto

Es fundamental en el análisis de texto, ya que simplifica la complejidad al tratar el texto como una colección de palabras únicas, permitiendo la comparación y clasificación de documentos.

## 📝 Detalles del proceso

El modelado de texto con Bag of Words implica:

- Tokenizar el texto.
- Construir un vocabulario.
- Representar el texto como un vector de frecuencias de palabras.
- Aplicar técnicas de NLP y aprendizaje automático.

## 🔧 Ejemplo práctico

**Resultados esperados**: se obtiene un vector numérico que representa la presencia de términos en el documento, permitiendo analizar la similitud entre distintos textos.

**Aplicación en la industria**: un ejemplo real sería la clasificación de correos electrónicos como spam o no spam mediante el conteo de palabras clave utilizando el modelo Bag of Words.

## ✅ Ventajas del modelo Bag of Words

- Permite una fácil implementación y comprensión.
- Es eficiente para grandes conjuntos de datos textuales.
- Es útil en tareas como clasificación de textos y análisis de sentimientos.
- Facilita la comparación de documentos.
- Es eficaz para documentos cortos.
- Permite identificar términos clave en un texto de manera sencilla.

## ❌ Limitaciones

- Este modelo no considera el significado contextual de las palabras.
- Puede haber problemas con palabras homónimas.
- La dimensionalidad de los vectores puede afectar la eficacia en textos largos.

## ➡️ Pasos para construir el modelo BoW

### Paso 1: Recopilar y preparar los datos

- Reúne el texto que deseas analizar.
- Limpia el texto eliminando caracteres especiales, convirtiendo a minúsculas, etc.

```python
texto = '''El perro marron corre por el parque todos los dias. El perro juega con otros perros y siempre encuentra algo interesante en el parque. A veces, el perro se sienta bajo un árbol y observa a las personas que pasan por el parque.'''

# Convertir el texto a minúsculas
texto = texto.lower()

import re # Expresiones regulares para limpiar el texto

# Obtener los documentos antes de la normalización completa
documentos = nltk.sent_tokenize(texto)

# Sustituir caracteres no alfabéticos por espacios
texto = re.sub(r"\W", " ", oracion)

# Eliminar espacios múltiples
texto = re.sub(r"\s+", " ", oracion)
```

### Paso 2: Tokenización

- Divide el texto en palabras individuales (tokens).
- Elimina palabras vacías (stopwords).

```python
# Librería necesaria
import nltk
# Tokenizar la oración
palabras = nltk.word_tokenize(texto)
```

### Paso 3: Eliminar palabras vacías (stopwords)

```python
# Librería necesaria
from nltk.corpus import stopwords

# Obtener lista de palabras vacías en el idioma indicado
stop_words = stopwords.words("spanish")

# Filtrar palabras vacías del texto
palabras = [w for w in palabras if w not in stop_words]

```

### Paso 4: Construir el vocabulario

- Crea una lista de todas las palabras únicas en el corpus.

```python
# Construir el vocabulario guardando una vez cada palabra restante
vocabulario = set(palabras)

```

### Paso 5: Contar las frecuencias

- Cuenta cuántas veces aparece cada palabra en cada documento.

```python
from collections import Counter

# Obtener las frecuencias de las palabras
frecuencias = dict(Counter(palabras))

```

### Paso 6: Crear el vector BoW

- Representa cada documento como un vector de frecuencias de palabras. 

```python
# Crear un diccionario para la matriz
diccionario = {}

# Iterar sobre cada oración
for oracion in oraciones:
    # Agregar la oración al diccionario
    if "Oración" not in diccionario:
        diccionario["Oración"] = []
    diccionario["Oración"].append(oracion)

    # Iterar sobre cada palabra
    for palabra in frecuencias.keys():
        if palabra not in diccionario:
            diccionario[palabra] = []
        
        # Añadir 1 si la palabra está en la oración, 0 si no está
        diccionario[palabra].append(1 if palabra in oracion else 0)

```

### Extra: Visualizar en tabla

```python
# Convertir el diccionario a un DataFrame
matriz = pd.DataFrame(diccionario)
print(matriz)
```
| Oración | perro | parque | marron | corre | días | juega | encuentra | interesante | veces | árbol |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| el perro marron corre por el parque todos los dias. | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 |
| el perro juega con otros perros y siempre encuentra algo interesante en el parque. | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 |
| a veces el perro se sienta bajo un árbol y observa a las personas que pasan por el parque. | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 |
