---
sidebar_label: '✂️ Slicing'
sidebar_position: 7
---

# ✂️ Slicing

Si queremos agarrar una letra o letras en específico de una cadena de texto podemos utilizar slicing.

## ✏️ Ejemplos

```python title="Ejemplos de slicing"
textoBonito = "Hola buenas tardes"

# Seleccionamos el carácter en la posición "0" en este caso es la "H".
print(textoBonito[0])

# Seleccionamos todos los caracteres que se encuentran entre la posición "0" y "4".
# Nota importante: El "0" es inclusivo, pero el "4" no. Eso quiere decir que en realidad estamos seleccionado los carácteres en las posiciones 0, 1, 2 y 3.
print(textoBonito[0:4])
print(textoBonito[5:11])
print(textoBonito[12:18])

# Si no colocamos un número después de los dos puntos, se seleccionará lo que resta de la cadena.
print(textoBonito[12:])

# Lo mismo pasa del otro lado.
print(textoBonito[:4])

# Si no colocamos ningún número, seleccionamos toda la cadena.
print(textoBonito[:])
```
