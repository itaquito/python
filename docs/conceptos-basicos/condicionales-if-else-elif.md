---
sidebar_label: "Condicionales if, else y elif"
sidebar_position: 11
---

# ❓ Condicionales if, else y elif

Un condicional "if" sirve para evaluar una condición y, si se cumple la condición, ejecutar el código que tenga dentro.

## ✏️ Ejemplos

```python title=Ejemplo de un condicional if"
if 10 < 100:
	print("Buenos días")

# Este código imprime "Buenos días"
```

"else" entra cuando la condición del "if" no se cumple, ejecutando así el código que este "else" contiene.

```python title=Ejemplo de un condicional if con un else"
if 10 == 100:
	print("Buenos días")
else:
	print("Buenas noches")

# Este código imprime "Buenas noches"
```

Cuando la condición del "if" no se cumple, pero se busca evaluar otra condición antes de ejecutar una línea de código, entonces se ocupa "elif".

```python title=Ejemplo de un condicional if con un elif"
if 7 > 10:
	print("Vamos a reprobar la materia")
elif 5 < 10:
	print("Vamos a exentar la materia")

# Este código imprime "Vamos a exentar la materia"
```
