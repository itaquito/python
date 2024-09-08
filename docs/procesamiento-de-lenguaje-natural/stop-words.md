---
sidebar_label: "🛑 Stop Words"
sidebar_position: 5
---

# 🛑 Stop Words

Las "stop words" son palabras que no aportan valor semántico relevante en el análisis de texto, por lo que se eliminan para mejorar la precisión de los algoritmos de procesamiento de lenguaje natural (PLN).

Estas Incluyen:

- Artículos: el, la, los

- Pronombres: yo, tú, él

- Preposiciones: a, ante, bajo

- Conjunciones: y, o, pero

- Adverbios: aquí, allí, ahora

- Verbos auxiliares: ser, estar, haber

- Otros: que, como, por

## 📚 ¿Cómo usar Stop Words en Python?

Para usar Stop Words en Python, necesitamos usar la libreria que ya hemos estado hablando, `nltk`.

Teniendo ya instalada la librería, podemos hacer lo siguiente:

```python title="Importar la librería nltk y descargar las stop words"
import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords
```

Ahora, podemos usar las stop words en nuestro análisis de texto:

```python title="Ejemplo de cómo usar las stop words"
stop_words = set(stopwords.words('spanish'))
print(stop_words)
```

En este caso, estamos utilizando las stop words en español, pero podemos cambiar el idioma a inglés, francés, alemán, entre otros.

## 📖 ¿Cómo eliminar Stop Words de un texto?

Para eliminar las stop words de un texto, podemos hacer lo siguiente:

```python title="Ejemplo de cómo eliminar las stop words de un texto"
from nltk.tokenize import word_tokenize
words=nltk.word_tokenize("A Itaquito le gustan los gatos")
no_stop_words = [word for word in words if word.lower() not in stop_words]
```
