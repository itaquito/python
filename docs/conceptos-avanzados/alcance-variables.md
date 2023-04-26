---
sidebar_label: "Alcance de variables"
sidebar_position: 6
---

# 🚀 Alcance de variables

Dependiendo de dónde definas una variables, es dónde estará disponible. Por ejemplo, una variable definida dentro de una función sólo exista en la misma.

## ✏️ Ejemplos

```python title="Ejemplo del alcance de una variable"
def funcion():
  variable = 1
  print(variable) # La variable está definida

funcion()
print(variable) # La variable no está definida
```

```python title="Otro ejemplo del alcance de una variable"
variable = "Manzana"

def funcion():
  variable = "Naranja"
  print(variable) # Aquí la variable está definida e "Naranja"

funcion()
print(variable) # Aquí la variable está definida a "Manzana"
```

## global

En el último ejemplo, podemos usar la palabra reservada `global` para definir la variable como una variable global 

```python title="Ejemplo del alcance de una variable con global"
variable = "Manzana"

def funcion():
  global variable
  variable = "Naranja"
  print(variable) # Aquí la variable está definida e "Naranja"

funcion()
print(variable) # Ahora, aquí la variable también está definida a "Naranja"
```
