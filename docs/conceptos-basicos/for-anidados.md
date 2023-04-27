---
sidebar_label: "🪐 For anidados"
sidebar_position: 20
---

# 🪐 For anidados

Tal y como un if anidado, un for anidado es un ciclo for dentro de otro ciclo for. Normalmente este tipo de estructura es usado cuando queremos utilizar listas de listas, o tuplas de tuplas. Es decir, listas o tuplas de varias dimensiones.

## ✏️ Ejemplos

```python title="Ejemplo de un for anidado"
a = [1, 2, 3]
b = [0, 9]

for i in a:
	for j in b:
		print(i, j)

# Este código imprime:
# 1 0
# 1 9
# 2 0
# 2 9
# 3 0
# 3 9
```

```python title="Otro ejemplo de un for anidado"
listaBidimensional = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for i in listaBidimensional:
  for j in i:
    print(j)

# Este código imprime:
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
```
