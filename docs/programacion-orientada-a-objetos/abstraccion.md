---
sidebar_label: "🗿 Abstracción"
sidebar_position: 10
---

# 🗿 Abstracción

Este es el último pilar de la programación orientada a objetos, y consiste en aislar un elemento de su contexto o del resto de los elementos que lo acompañan.

Es decir, podemos tener una clase padre con un **método abstracto** sin funcionalidad para que después sea **sobreescrito** por un método con el mismo nombre en la clase hija.

* Se define como clase abstracta la que contiene uno o más métodos abstractos.
* Método abstracto es un método que ha sido declarado pero no implementado. Para ello usamos un decorador.
* Para realizar esto, utilizamos una librería llamada `ABC` (Abstract Base Class)

```python title="Ejemplo de la abstracción de una clase"
from abc import ABC, abstractmethod

# Esta clase se ha vuelto abstracta porque hereda de ABC
class Trabajador(ABC):

  def __init__(self, nombre) -> None:
    self.nombre = nombre
  
  def __str__(self) -> str:
    return "Mi nombre es {self.nombre}."

  # Definimos el método trabajar() como un método abstracto por medio del decorador "@abstractmethod"
  @abstractmethod
  def trabajar(self):
    pass

# La clase constructor hereda de trabajador
class Constructor(Trabajador):
  
  # Sobreescribimos el método
  def trabajar(self):
    print(f"{self.nombre} está construyendo.")

trabajador = Constructor("Elías")
trabajador.trabajar() # Imprime "Elías está construyendo." 
```

Es visible el hecho de que es innecesario interactuar con la clase padre, pero aún así su método `trabajar()` va a aplicarse a cada uno de sus hijos. Por lo que realmente no se implementa hasta que lo tenemos en la clase `Constructor`.
