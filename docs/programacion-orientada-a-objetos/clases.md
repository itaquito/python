---
sidebar_label: "Clases"
sidebar_position: 2
---

# 🚗 Clases

Una clase es una plantilla (digamos un molde) a partir del cual se pueden crear objetos de datos con base en un determinado modelo. Cabe destacar que se pueden definir tantas clases como se deseen.

En Python, las clases se nombran bajo la convención de UpperCamelCase, en donde la primera letra de cada palabra se escribe en mayúscula. En todo momento se debe procurar que los nombres no sean tan generales.

## ✏️ Ejemplo

```python title="Ejemplo de cómo definir una clase"
class OsoPardo:

color = "café"

  def comer():
    print("El oso ha comido!")
```

## Atributos y métodos

```python title="Ejemplo de atributos y clases"
class OsoPardo:
		
  # Atributo
  color = "café"

  # Método
  def comer():
    print("El oso ha comido!")
```

Como se puede observar, las clases presentan dentro de sus elementos con atributos y métodos. Los primeros refieren a características mientras los segundos refieren a las funcionalidades que pueden tener los diversos objetos.

```python title="Otro ejemplo de atributos y clases"
class Gato:

  # Atributo de clase
  especie = “mamífero”

  # Atributos de instancia
  def __init__(self, raza, color):
    self.raza = raza
    self.color = color
```

En este caso se pueden observar que existen estos dos tipos de atributos. En el primer caso tenemos un atributo que aplicaría por igual a todos los objetos que deriven de dicha clase. Mientras que en el segundo caso tenemos atributos cuyas definiciones pueden variar según el objeto. Para ello podemos llegar a hacer uso del método iniciador `__init__` (el cual se llama solo).
