---
sidebar_label: "♻️ Conversiones de variables"
sidebar_position: 6
---

# ♻️ Conversiones de variables

Es posible convertir un tipo de variable a otro tipo. Por ejemplo, una cadena de texto a un número entero. Todos los tipos de variables cuentan con una función para hacer su conversión.

## ✏️ Ejemplos

```python title="Ejemplos de las conversiones de variables"
numero = int("1") # String > Int
print(type(numero))

texto = str(1) # Int > String
print(type(texto))

flotante = float("3.3") # String > Float
print(type(flotante))

booleano = bool("0") # String > Booleano
print(type(booleano))

otroFlotante = float(3) # Int > Float
print(type(otroFlotante))
```
