---
sidebar_label: "🔍 Similitud de Textos"
sidebar_position: 14
---

# 🔍 Similitud de Textos

El análisis de similitud de textos permite medir qué tan relacionados están dos o más textos. Existen varios enfoques para realizar este análisis, desde técnicas lingüísticas basadas en modelos de lenguaje, como spaCy, hasta métodos estadísticos, como TF-IDF con cosine similarity.

---

## 🛠️ Métodos de Similitud

### 🎨 Modelos Lingüísticos con spaCy

Los modelos de lenguaje como spaCy calculan la similitud entre textos representándolos como vectores semánticos. Esto permite capturar no solo las palabras que comparten, sino también el contexto semántico de las mismas.

#### ❓ ¿Cómo funciona?

SpaCy utiliza embeddings de palabras preentrenados para representar los textos como vectores en un espacio multidimensional. La similitud se calcula como el coseno del ángulo entre estos vectores.

#### ⭐ Ejemplo

```python
import spacy

# Carga del modelo de lenguaje en español
nlp = spacy.load("es_core_news_sm")

# Textos de ejemplo
doc1 = nlp("Me gustan las manzanas")
doc2 = nlp("Me gustan las naranjas")

# Similitud entre textos completos
print("Similitud entre doc1 y doc2:", doc1.similarity(doc2))
```

#### 🔎 Análisis más detallado

Puedes calcular similitudes entre diferentes porciones del texto:

```python title="Similitud entre secciones específicas"
# División del texto en tokens
manzana = nlp(doc1)
naranja = nlp(doc2)

# Similitud entre documentos
print("Similitud completa:", manzana.similarity(naranja))

# Similitud entre un documento y un token
print("Similitud entre texto completo y token:", manzana.similarity(manzana[0]))

# Similitud entre secciones específicas
print("Similitud entre primeras tres palabras:", manzana[:3].similarity(naranja[:3]))
```

---

### 📐 Métodos Estadísticos: TF-IDF con Cosine Similarity

El enfoque TF-IDF (Term Frequency-Inverse Document Frequency) mide qué tan importante es una palabra en un documento en relación con un conjunto de documentos. La similitud entre documentos se calcula con cosine similarity, que evalúa la similitud entre vectores TF-IDF.

#### ❓ ¿Cómo funciona?

1. Se transforman los textos en vectores TF-IDF.
2. Se calcula la similitud coseno entre estos vectores.

#### ⭐ Ejemplo

```python title="TF-IDF con Cosine Similarity"
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from nltk.corpus import stopwords
import pandas as pd

# Textos de ejemplo
docs = ["Me gustan las manzanas", "Me gustan las naranjas"]

# Creación del vectorizador con stopwords en español
vectorizer = TfidfVectorizer(stop_words=stopwords.words('spanish'))

# Transformación de los textos a vectores TF-IDF
vectores = vectorizer.fit_transform(docs)

# Visualización de las características
print(vectorizer.get_feature_names_out())

# Matriz TF-IDF como DataFrame
print(pd.DataFrame(vectores.toarray(), columns=vectorizer.get_feature_names_out()))

# Cálculo de la similitud coseno
print("Similitud coseno:
", cosine_similarity(vectores))
```

## 🚀 Conclusión

Ambos métodos, spaCy y TF-IDF con Cosine Similarity, son herramientas poderosas para realizar análisis de similitud de textos, y la elección entre ellos depende de los objetivos específicos del análisis. Si necesitas captar relaciones semánticas profundas, opta por spaCy; para análisis rápidos basados en términos, TF-IDF es una opción eficaz.
