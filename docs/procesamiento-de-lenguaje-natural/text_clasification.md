---
sidebar_label: "📊 Text Clasification"
sidebar_position: 10
---

# 📊 Text Clasification

## 🌟 Introducción

La clasificación de texto es una tarea fundamental en el procesamiento del lenguaje natural, cuyo objetivo es asignar etiquetas o categorías predefinidas a fragmentos de texto.

Este proceso permite transformar texto en categorías predefinidas, facilitando la organización, la automatización de tareas y la reducción de costos operativos. Además, impulsa la toma de decisiones informadas al identificar patrones, como el análisis de sentimientos en opiniones públicas, y mejora experiencias personalizadas en motores de búsqueda, chatbots y sistemas de recomendación.

## 🌟 Ejemplo:

En este ejemplo, veremos cómo implementar text clasification desde cero en Python.

```python title="Importación de librerías"
import pandas as pd
from sklearn.datasets import fetch_20newsgroups
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, classification_report
import matplotlib.pyplot as plt
from sklearn.metrics import ConfusionMatrixDisplay
```

```python title="Procesamiento inicial de los datos"
# Cargamos el conjunto de datos con las categorías específicas de interés (deportes, espacio y autos)
# 'subset="all"' indica que cargamos todos los datos disponibles
newsgroups = fetch_20newsgroups(subset='all', categories=['rec.sport.baseball', 'sci.space', 'rec.autos'], shuffle=True, random_state=42)

# Mostramos el número de muestras en el conjunto de datos (el tamaño de 'target')
len(newsgroups.target)

# Imprimimos el primer mensaje de los datos cargados
newsgroups.data[0]

# Mostramos el primer valor de la lista de etiquetas (target) que corresponde al primer mensaje
newsgroups.target[0]

# Asignamos las variables X e y:
# X contiene los datos (mensajes) y y contiene las etiquetas (categorías)
X = newsgroups.data
y = newsgroups.target

# Imprimimos las longitudes de X e y para verificar que coinciden (deben tener el mismo tamaño)
print(len(X), len(y))

# Creamos un DataFrame de pandas para facilitar la manipulación de los datos
# Cada fila contiene un mensaje (columna 'text') y su correspondiente etiqueta (columna 'label')
df = pd.DataFrame({'text': X, 'label': y})

# Mostramos las primeras filas del DataFrame para verificar que se ha creado correctamente
df.head()

# Importamos el TfidfVectorizer desde sklearn.feature_extraction.text para convertir texto a características numéricas
from sklearn.feature_extraction.text import TfidfVectorizer

# Inicializamos el vectorizador TF-IDF, excluyendo las palabras comunes del inglés (stop_words='english')
# y configurando un umbral para excluir palabras muy frecuentes (max_df=0.7)
vectorizer = TfidfVectorizer(stop_words='english', max_df=0.7)

# Transformamos los mensajes de texto en vectores de características (matrices dispersas)
X_vect = vectorizer.fit_transform(df['text'])

# Labels (las etiquetas ya las tenemos en df['label'], por lo que las asignamos nuevamente a y)
y = df['label']

# Importamos las funciones necesarias para dividir los datos en entrenamiento y prueba y para crear el clasificador SVM
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC

# Dividimos los datos en conjuntos de entrenamiento (70%) y prueba (30%) de manera aleatoria
# Esto nos ayuda a entrenar el modelo y luego evaluarlo con datos no vistos
X_train, X_test, y_train, y_test = train_test_split(X_vect, y, test_size=0.3, random_state=42)

# Imprimimos las formas de X_train y X_test para asegurarnos de que la división se realizó correctamente
X_train.shape  # Debería ser (2079, 34505)
X_test.shape   # Debería ser (892, 34505)

# Inicializamos un clasificador SVM con el kernel 'rbf' (radial basis function), que es común para clasificación de texto
clf = SVC(kernel='rbf')

# Entrenamos el clasificador SVM usando los datos de entrenamiento
clf.fit(X_train, y_train)

# Mostramos el clasificador entrenado
SVC()

# Importamos las funciones para calcular la precisión y el reporte de clasificación
from sklearn.metrics import accuracy_score, classification_report

# Realizamos predicciones sobre el conjunto de prueba
y_pred = clf.predict(X_test)

# Mostramos las predicciones generadas para el conjunto de prueba
y_pred
```

Este código realiza una clasificación de textos en categorías específicas (deportes, ciencia, automóviles) utilizando un modelo SVM con características obtenidas mediante TF-IDF.

```python title="Mostrar los datos"
# Inicializar el vectorizador TF-IDF
# 'stop_words' elimina palabras comunes en inglés que no aportan mucha información
# 'max_df=0.7' elimina las palabras que aparecen en más del 70% de los documentos, pues probablemente no son informativas
vectorizer = TfidfVectorizer(stop_words='english', max_df=0.7)

# Transformar los textos a vectores numéricos utilizando el vectorizador
X_vect = vectorizer.fit_transform(df['text'])

# Visualizar la forma de la matriz resultante
# 'X_vect' es una matriz dispersa con la representación TF-IDF de las noticias
# Las filas corresponden a los textos y las columnas a las palabras del vocabulario
print(X_vect.shape)  # Muestra la forma de la matriz (número de documentos, número de palabras)

# Las etiquetas de las noticias (target)
y = df['label']

# Importar las herramientas necesarias para dividir el conjunto de datos en entrenamiento y prueba
from sklearn.model_selection import train_test_split

# Dividir los datos en entrenamiento y prueba (70% entrenamiento, 30% prueba)
X_train, X_test, y_train, y_test = train_test_split(X_vect, y, test_size=0.3, random_state=42)

# Ver la forma de las matrices de entrenamiento y prueba
print(X_train.shape)  # Debería mostrar (2079, 34505)
print(X_test.shape)  # Debería mostrar (892, 34505)

# Importar el clasificador SVM (Support Vector Machine) con un kernel radial (RBF)
from sklearn.svm import SVC

# Inicializar el clasificador SVM
clf = SVC(kernel='rbf')

# Entrenar el clasificador con los datos de entrenamiento
clf.fit(X_train, y_train)

# Imprimir el tipo de clasificador utilizado
print(clf)

# Importar las métricas para evaluar el rendimiento del modelo
from sklearn.metrics import accuracy_score, classification_report

# Predecir las etiquetas para el conjunto de prueba
y_pred = clf.predict(X_test)

# Mostrar las predicciones del modelo
print(y_pred)  # Muestra las etiquetas predichas para el conjunto de prueba

# Calcular la exactitud del modelo comparando las etiquetas predichas con las etiquetas reales
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')  # Muestra la exactitud del modelo

# Mostrar un reporte detallado de las métricas de clasificación: precisión, recall y F1-score
report = classification_report(y_test, y_pred)
print(report)  # Muestra el reporte de clasificación
```
