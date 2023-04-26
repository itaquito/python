---
sidebar_label: "Funciones lambda"
sidebar_position: 1
---

# 📂 Funciones lambda

Lambda es una función anónima que no tiene nombre. Como dice la documentación oficial de python, las funciones lambda son una buena solución si te da flojera usar funciones normales. Son útiles porque se pueden definir en una línea para realizar tareas fáciles. En estas funciones también se puede utilizar parámetros opcionales y paso de valores por referencia.

## ✏️ Ejemplos

```python title="Ejemplo de funciones lambda"
x = lambda a, b: a + b
y = lambda a=1, b=1: a + b


print(x(1, 1)) # Devuelve la suma de ambos números
print(y()) # Devuelve la suma de ambos parámetros opcionales
```
