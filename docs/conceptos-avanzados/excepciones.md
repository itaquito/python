---
sidebar_label: "⚠️ Manejo de excepciones"
sidebar_position: 5
---

# ⚠️ Manejo de excepciones
Cuando nuestro código genera algún error, ya sea porque queremos dividir un número entre cero o usamos una librería mal, podemos manejar el error en lugar de hacer que se termine el programa.

Para detectar errores usamos la palabra clave `try` y `except`. El código dentro de `except` es el que se ejecutará en caso de que el código en `try` cause un error.

```python title="Ejemplo de manejo de excepciones"
try:
  24 / 0
except:
  print("Intentaste dividir entre 0")
```

`Except` puede recibir el tipo de error a detectar si no queremos atrapar todos los errores.

```python title="Ejemplo de manejo de excepciones con un tipo de error específico"
try:
  24 / 0
except ZeroDivisionError as e:
  print("Intentaste dividir entre 0", e) # "e" contiene más información del error
```

Si queremos ejecutar código sólo si ningún error sucede, utilizamos `else`.

```python title="Ejemplo de manejo de excepciones con else"
try:
  24 / 0
except ZeroDivisionError as e:
  print("Intentaste dividir entre 0", e)
else: 
  print("No hubo error")
```

Además, todo el código que vaya dentro de `finally` siempre se ejecutará hasta el final.

```python title="Ejemplo de manejo de excepciones con finally"
try:
  24 / 0
except ZeroDivisionError as e:
  print("Intentaste dividir entre 0", e)
else: 
  print("No hubo error")
finally:
  print("Siempre se ejecuta esto")
```
