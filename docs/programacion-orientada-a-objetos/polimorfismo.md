---
sidebar_label: "🚁 Polimorfismo"
sidebar_position: 9
---

# 🚁 Polimorfismo

Este es uno de los [pilares de la Programación Orientada a Objetos](intro) y refiere a la posibilidad de definir diferentes clases que tienen métodos o atributos de forma idéntica, pero que se comportan de manera distinta. De esta manera los objetos instanciados de una determinada clase pueden responder de forma distinta.

## ✏️ Ejemplo

```python title="Ejemplo de polimorfismo"
class Animal:

  def sound(self):
    print("*sonido genérico*")

class Dog(Animal):

  def sound(self):
    print("*woof*")

class Cat(Animal):

  def sound(self):
    print("*meow*")

class Duck(Animal):

  def sound(self):
    print("*quack*")

animalUno = Animal()
perroUno = Dog()
gatoUno = Cat()
patoUno = Duck()
animales = [animalUno, perroUno, gatoUno, patoUno] # Guardamos las instancias en una lista

animalUno.sound() # Imprime: *sonido genérico*
perroUno.sound() # Imprime: *woof*
gatoUno.sound() # Imprime: *meow*
patoUno.sound() # Imprime: *quack*

# Gracias al polimorfismo, es muy fácil realizar lo siguiente:
for animal in animales:
  animal.sound()

# Este código imprime:
# *sonido genérico*
# *woof*
# *meow*
# *quack*
```
