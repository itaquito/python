---
sidebar_label: "🔑 Tokenización"
sidebar_position: 3
---

# 🔑 Tokenización

## 🌟 Introducción

Al momento de contar con un texto, los primeros pasos en el procesamiento de lenguaje natural se encuentra la tokenización. Lo que nos permite la tokenización, es la división en unidades más pequeñas, ya se de palabras, oraciones o frases en forma de lista.

```python title="Ejemplo de tokenización en python"
texto = "¡Hola! Me encuentro aprendiendo el proceso de tokenización en la mejor página de programación en python."
tokens = texto.split() #Divide la cadena de texto en una lista de palabras
print(tokens)
```

## 🧹 Tokenización de palabras

La tokenización de palabras desarma una secuencia de texto, ya sea de una oración o de un párrafo, en palabras individuales con base a al delimitador "espacio" (" ").

```python title="Ejemplo de tokenización de palabras con nltk"
import nltk

# Texto a tokenizar
texto = "¡Hola! Me encuentro aprendiendo el proceso de tokenización en la mejor página de programación en python."
tokens = nltk.word_tokenize(texto)

print(tokens)
```

Al final del proceso, los espacios que se hayan encontrado en la oración, se dividen y se devuelven en una lista de palabras. Sin embargo, es importante destacar que esta tokenización puede llegar tener ciertos desafíos, como la correcta separación de palabras dependiendo el lenguaje (español, ingles,etc.) que se use.

## 🖊️ Tokenización de oraciones

Para la tokenización de oraciones, se emplea de la misma forma, pero su estructura cambia. Ahora, la tokenización se empleará mediante puntos ".", ya no por los espaciados.

```python title="Ejemplo de tokenización de oraciones con nltk"
import nltk

# Texto a tokenizar
texto = "¡Hola! Me encuentro aprendiendo el proceso de tokenización en la mejor página de programación en python."
tokens = nltk.sent_tokenize(texto)

print(tokens)
```
