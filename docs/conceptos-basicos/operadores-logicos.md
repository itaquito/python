---
sidebar_label: '🤔 Operadores lógicos'
sidebar_position: 9
---

# 🤔 Operadores lógicos

Nos permiten comparar e inclusive invertir diferentes tipos de valores booleanos u operadores condicionales. Regresa un valor booleano (pudiendo ser verdadero o falso).

- **and** comprueba que dos condiciones se cumplan
- **or** comprueba que se cumpla por lo menos una de las condiciones
- **not** invierte la condición
- **in** evalúa si un elemento se encuentra en una lista de valores o serie de caracteres
- **all()** La función "all()" evalúa que todos los valores de una lista sean verdaderos.
- **any()** La función "any()" evalúa que por lo menos una de los valores sea verdadero.

## ✏️ Ejemplos

```python title="Ejemplos de los operadores lógicos"
# and
print(True and True) # True
print(True and False) # False
print(5 < 10 and 5 > 3) # True

# or
print(True or False) # True
print(True or True) # True
print(False or False) # False
print(5 == 5 or 5 < 10) # True

# not
print(not True) # False
print(not False) # True
print(not 5 >= 0) # False

# in
print("w" in "Universidad Panamericana") # False
print("a" in "Universidad Panamericana") # True
print("Manzana" in ["Pera", "Manzana"]) # True
print("Rojo" in ("Rojo", "Azul")) # True

# all()
print(all((True, True, True))) # True
print(all((True, False, True))) # False

# any()
print(any((True, True, True))) # True
print(any((True, False, True))) # True
print(any((False, False, False))) # False
```
