---
sidebar_label: '🎨 Atributos y ⚙️ métodos'
sidebar_position: 3
---

# 🎨 Atributos y ⚙️ métodos

## 🎨 Atributos

Un **atributo** es una característica o variable que contienen los objetos. Por ejemplo, una clase `Coche` puede tener atributos como `Marca`, `Color`, `Kilometraje`, `Nivel de gasolina`. Los atributos se pueden separar en dos tipos, de **clase** o de **instancia**.

### Atributos de clase

Los atributos de clase son aquellos que son genéricos para todos los objetos de una clase. Por ejemplo:

```python title="Ejemplo de una clase con un atributo de clase"
class Gato:

  # Atributo de clase
	especie = "mamífero"
```

### Atributos de instancia

Los atributos de instancia son aquellos que se definen para cada objeto dentro del método iniciador. Los atributos de instancia son independientes de la clase y de otras instancias de esa clase. Por ejemplo:

```python title="Ejemplo de una clase con un atributo de instancia"
class Gato:

  # Atributos de instancia
  def __init__(self, raza, color):
    self.raza = raza
    self.color = color
```

Ahora, debemos especificar los atributos de instancia a la hora de declarar una nueva instancia de esa clase:

```python title="Ejemplo de cómo definir los atributos de instancia"
class Gato:

  # Atributos de instancia
  def __init__(self, raza, color):
    self.raza = raza
    self.color = color

unGato = Gato("Mexicano", "Blanco con negro") # Crea una instancia del objeto Gato con atributos de instancia en específico.
```

:::tip My tip

Cabe recalcar que los atributos de clases son accesibles desde la misma clase, pero los atributos de instancia no lo son porque dependen de una instancia.

```python title="Ejemplo de la obtención de un atributo de clase"
class Gato:

  # Atributo de clase
	especie = "mamífero"

print(Gato.especie) # Este código imprime "mamífero"
```

:::

## ⚙️ Métodos

Un **método** es una función que desempeña una clase. Por ejemplo, una clase `Coche` puede tener métodos como `Avanzar`, `Rellenar gasolina`, `Apagar`. Todos los métodos de una clase deben de contener a `self` como primer parámetro de la función, esta variable hace referencia a la misma instancia desde dónde se está llamando la función.

```python title="Ejemplo de una clase con un método"
class Oso:

  # Método comer()
  def comer(self):
		print("El oso ha comido!")
```

Con `self` podemos acceder a los atributos de instancia o clase desde un método:

```python title="Ejemplo de cómo acceder a un atributo desde un método"
class Oso:

  # Método iniciador
  def __init__(self, nombre):
    self.nombre = nombre

  # Método comer()
  def comer(self):
		print(f"El oso, {nombre}, ha comido!")

unOso = Oso("Alberto")
unOso.comer() # Esta linea de código imprime "El oso, Alberto, ha comido!"
```
