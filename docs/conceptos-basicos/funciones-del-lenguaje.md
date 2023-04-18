---
sidebar_label: "Funciones del lenguaje"
sidebar_position: 4
---

# 🛠️ Funciones del lenguaje

Python cuenta con diferentes funciones predeterminadas para realizar diferentes tareas.<

## print()

Dicha función imprime para el usuario los elementos que se le colocan.

```python title="Ejemplo de print()"
print("Nos encanta la clase de POO")
```

## type()

Aquella función que indica el tipo de elemento que se le introduce.

```python title="Ejemplo de type()"
type(3.14159) # El tipo de este número es float
```

## input()

Esta función permite que se le pregunte al usuario para que ingrese un determinado dato. Hay que mencionar que “input” siempre va a almacenar un dato como string.

```python title="Ejemplo de input()"
variable = input("Ingrese un número: ") # El contenido de la variable dependerá de lo que escriba el usuario.
type(variable) # Su tipo es un str
```

## dir()

Regresa todo los métodos y propiedades de un objeto (como un int, str, listas, duplas, etc..).

```python title="Ejemplo de dir()"
dir([])
```
