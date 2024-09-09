---
sidebar_label: "📚 NLTK"
sidebar_position: 3
---

# 🔑 NLTK

## 🌟 Introducción

Natural Language Toolkit es una biblioteca de Python que proporciona funciones para la tokenización, análisis de sentimientos, reconocimiento de entidades, etc.

```python title="Ejemplo de tokenización en Python"
texto = "¡Hola! Me encuentro aprendiendo el proceso de tokenización en la mejor página de programación en python."
tokens = texto.split() #Divide la cadena de texto en una lista de palabras
print(tokens)
```

```python title="Ejemplo de tokenización de palabras con nltk"
import nltk

# Texto a tokenizar
texto = "¡Hola! Me encuentro aprendiendo el proceso de tokenización en la mejor página de programación en python."
tokens = nltk.word_tokenize(texto)

print(tokens)
```

A diferencia de la función en Python, NLTK ofrece más herramientas para tareas más complejas y precisas. Además, busca cumplir estos 4 objetivos:

1. 1️⃣ Simplicidad

NLTK proporciona un marco intuitivo junto con bloques de construcción sustanciales, ideal para para quienes están comenzando en el procesamiento de lenguaje natural.

2. 2️⃣ Coherencia

Interfaces y estructuras de datos consistentes, métodos fáciles de recordar y con una curva de aprendizaje positiva.

3. 3️⃣ Extensibilidad

La biblioteca permite integrar nuevos módulos de software, incluyendo implementaciones alternativas y enfoques competitivos para la misma tarea.

4. 4️⃣ Modularidad

NLTK es altamente modular, lo que significa que sus componentes se pueden utilizar de manera independiente. No es necesario comprender todo el conjunto de herramientas para poder aprovechar una parte específica de la biblioteca.

## 🛸 ¿Cómo instalar NLTK?

Podemos instalar NLTK con ayuda de pip, ejecutando este comando en nuestra linea de comandos o en nuestro entorno virtual:

```bash title="Instalar NLTK con pip"
pip install nltk
```

En caso de necesitar un recurso de la librería, inserta este código:

```python title="Instalar todos los recursos de nltk"
import nltk
nltk.download()
```

```python title="Instalar algún recurso de nltk"
import nltk
nltk.download('punkt')
```
