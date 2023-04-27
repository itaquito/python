---
sidebar_label: "🛠️ Funciones del string"
sidebar_position: 5
---

# 🛠️ Funciones del string (cadena de texto)

Un string, al ser un objeto, tiene métodos que podemos utilizar para realizar diversas acciones con relación al mismo string.

## count()

Es una función que permite ver la cantidad de veces que un determinado número, carácter o una serie de estos se encuentra dentro de una cadena de caracteres o un arreglo.

```python title="Ejemplo de count()"
x = "Manzana"
x.count("n") # "n" aparece dos veces en Manzana
```

## startswith() y endswith()

La primera función permite determinar si una cadena de caracteres empieza con uno o varios elementos determinados, arrojando así valores booleanos. Mientras que la segunda función realiza lo mismo solo que viendo si estos elementos coinciden con el final de la cadena de caracteres.

```python title="Ejemplo de count()"
y = "Computadora"

print(y.startswith("Com")) # True

print(y.endswith("e")) # False
```

## zfill()

Es una función que rellena con ceros a la izquierda de una cadena de texto, lo que ayuda a representar una cifra binaria más fácilmente.

```python title="Ejemplo de count()"
"11".zfill(6) # Añade 6 ceros antes del "11"
```
