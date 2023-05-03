---
sidebar_label: "🧁 Composición"
sidebar_position: 7
---

# 🧁 Composición

Dentro del método iniciador podemos guardar en los atributos nuevas instancias de otras clases. Por ejemplo, un clase `Humano` puede componerse de otras clases como `Cerebro`, `Corazon` y `Piernas`. O una clase `Empleado` puede componerse de una clase `Salario`. 

## ✏️ Ejemplos

```python title="Ejemplo de una clase Humano con composición"
class Humano:
  
  def __init__(self):
    self.corazon = Corazon() # Guardamos una instancia de la clase Corazon en el atributo corazon
    self.cerebro = Cerebro() # Guardamos una instancia de la clase Cerebro en el atributo cerebro
    self.piernas = [Pierna("izquierda"), Pierna("derecha")] # También podemos guardar instancias en una lista

class Corazon:
  
  def __init__(self):
    pass

class Cerebro:
  
  def __init__(self):
    pass

class Pierna:

  def __init__(self, lado):
    self.lado = lado
```

También podemos pasar nuestros atributos del constructor a las otras clases en el método iniciador

```python title="Ejemplo de una clase Empleado con composición"
class Salario:
  
  def __init__(self, cantidad):
    self.__cantidad = cantidad
  
  def getCantidad(self):
    return self.__cantidad

class Empleado:

  def __init__(self, nombre, salario):
    self.__nombre = nombre
    self.__salario = Salario(salario)
      
  def getNombre(self):
    return self.__nombre
  
  def getSalario(self):
    return self.__salario
  
  def getSalarioMensual(self):
    return self.__salario.getCantidad() # Podemos usar self y notación punto para acceder a los métodos de la clase compuesta
  
  def getSalarioAnual(self):
    return self.__salario.getCantidad() * 12

unEmpleado = Empleado("Christopher", 10000000)

print(f"{unEmpleado.getNombre()} gana ${unEmpleado.getSalario().getCantidad()} al mes") # Obtenemos el salario con el método de Salario
print(f"{unEmpleado.getNombre()} gana ${unEmpleado.getSalarioMensual()} al mes") # Obtenemos el salario con el método de Empleado
print(f"{unEmpleado.getNombre()} gana ${unEmpleado.getSalarioAnual()} al año")
```
