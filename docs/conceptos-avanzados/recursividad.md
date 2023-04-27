---
sidebar_label: "🔄 Recursividad"
sidebar_position: 3
---

# 🔄 Recursividad

Una función puede llamarse a sí misma para generar un ciclo. A esto le llamamos recursividad y puede ser útil para resolver algunos problemas.

## ✏️ Ejemplos

```python title="Ejemplo de recursividad"
def unaFuncion():
  unaFuncion() # Esto provocará una ciclo infinito. Normalmente se usa una condición para salir de la recursividad

unaFuncion()
```

## Calcular el factorial con recursividad

```python title="Ejemplo de una función para calcular el factorial de un número utilizando recursividad"
def factorial(numero):
  if numero == 1:
    return 1

  return numero * factorial(numero - 1)

factorial(8) # 8! = 40320
```
