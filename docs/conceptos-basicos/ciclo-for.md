---
sidebar_label: "🔄 Ciclo for"
sidebar_position: 12
---

# 🔄 Ciclo for

Un ciclo for sirve para iterar un determinado número de veces un bloque de código. También, provee una variable la cual hace referencia al elemento actual de la iteración.

## ✏️ Ejemplos

```python title="Ejemplo de un ciclo for"
x = "Abecedario"
for i in x:
	print(i)

# Este código imprime:
# A
# b
# e
# c
# e
# d
# a
# r
# i
# o
```

:::tip Fin de linea

Cuando buscamos que las impresiones se hagan seguidas, podemos acompañar a la variable iteradora dentro del print() con un 'end = ""'. De no hacer esta aclaración, cada impresión acaba con un salto de línea.

```python title="Ejemplo de un print() usando el fin de linea"
x = "Abecedario"
for i in x:
	print(i, end = "")

# Este código imprime "Abecedario"
```

:::

## range()

Podemos usar la función "range" podemos hacer un rango iterable con n iteracioes. Esto es útil cuando tenemos una variable que no es iterable.

```python title="Ejemplo de range()"
for i in range(5):
	print("Programar")

# Este código imprime 4 veces "Programar"
```

## enumerate()

Esta función se utiliza cuando en un ciclo for nos interesa conocer los elementos a iterar al igual que su determinada posición.

```python title="Ejemplo de enumerate()"
listaVocales = ["a", "e", "i", "o", "u"]
for n, i in enumerate(listaVocales):
	print(f"Elemento: {i} // Posición: {n}")

# Este código imprime:
# Elemento: a // Posición: 0
# Elemento: e // Posición: 1
# Elemento: i // Posición: 2
# Elemento: o // Posición: 3
# Elemento: u // Posición: 4
```
