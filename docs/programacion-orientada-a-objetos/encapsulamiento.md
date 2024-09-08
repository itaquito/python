---
sidebar_label: '💊 Encapsulamiento'
sidebar_position: 6
---

# 💊 Encapsulamiento

En la introducción nombramos los 4 pilares de la programación orientada a objetos, uno siendo el encapsulamiento. En una clase podemos definir atributos o métodos privados, es decir, que no pueden accederse afuerda de la clase.

Basta con escribir doble guión bajo `__` antes del identificador del método o atributo para establecerlo como privado.

:::danger Los atributos o métodos privados no son realmente privados en Python

Aunque definamos un atributo o método como privado usando doble guión bajo, aún hay formas en las que se pueden acceder a ellos desde fuera.
Python no cuenta con un encapsulamiento real, como otros lenguajes de programación.

Es importante tener esto en cuenta cuando estemos programando.

:::

## ✏️ Ejemplos

```python title="Ejemplo de una clase con atributos privados"
class Perro:

  def __init__(self, nombre, raza, edad, color):
    self.__nombre = nombre # Este atributo no se puede acceder desde afuera
    self.raza = raza
    self.edad = edad
    self.color = color

  def saludar(self):
    print(f"{self.__nombre} saluda!") # Aquí si podemos acceder al atributo privado

unPerro = Perro("Thor", "salchicha", 2, "marrón")
print(unPerro.__nombre) # Esta línea de código marca un error
unPerro.saludar()
```

## 📐 Getters y setters

Los geters y setters son métodos que nos permiten establecer y leer atributos que sean privados. Estos son especialmente útiles cuando queremos verificar una variable antes de que sea guardada en el objeto.

```python title="Ejemplo de una clase con getters y setters"
class unPerroPrivado:

  def __init__(self, nombre, raza, edad, color) -> None:
    self.__nombre = nombre
    self.__raza = raza
    self.__edad = edad
    self.__color = color

  def getNombre(self):
    return self.__nombre

  def setNombre(self, valor):
    self.__nombre = valor

  def getRaza(self):
    return self.__raza

  def setRaza(self, valor):
    self.__raza = valor

  def getEdad(self):
    return self.__edad

  def setEdad(self, valor):
    if (isinstance(valor, int)): # Podemos validar que el valor sea realmente un número antes de guardarlo
      self.__edad = valor

  def getColor(self):
    return self.__color

  def setColor(self, valor):
    self.__color = valor

  def __ladrar(self):
    print("*ladra*")

  def llamarLadrar(self):
    self.__ladrar()

unPerro = unPerroPrivado("Toby", "chihuahua", 3, "café")

print(unPerro.getEdad()) # Imprime "3"
unPerro.setEdad("Dos años") # Tratamos de guardar una cadena de texto en la edad
print(unPerro.getEdad()) # Sigue imprimiendo "3"
```
