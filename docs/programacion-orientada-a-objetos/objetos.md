---
sidebar_label: "Objetos"
sidebar_position: 4
---

# 🛸 Objetos

Como ya hemos dicho en las secciones anteriores, un objeto es una instancia de una clase. Esta se puede definir de la siguiente manera:

```python title="Ejemplo cómo definir un objeto"
class Gato:
	
  # Atributos de instancia
  def __init__(self, nombre, raza, color):
    self.nombre = nombre
    self.raza = raza
    self.color = color

tiburcio = Gato("Tiburcio", "persa", "café")
```

La variable es una instanciación de la clase ‘Gato’. De esta forma, dicha variable ya no es propiamente una variable, sino que es un objeto. 

Dicho esto, ahora podemos accerder a los atributos y métodos de dicho objeto con la notación punto `.`. 

```python title="Ejemplo cómo acceder a los atributos y métodos de un objeto con la notación punto"
class Gato:
	
  # Atributos de instancia
  def __init__(self, nombre, raza, color):
    self.nombre = nombre
    self.raza = raza
    self.color = color
  
  def maullar(self):
    print("Meow!")

tiburcio = Gato("Tiburcio", "persa", "café")

print(tiburcio.nombre) # Esta linea de código imprime "Tiburcio".
print(tiburcio.raza) # Esta linea de código imprime "persa".

tiburcio.maullar() # Esta linea de código ejecuta al método maullar e imprime "Meow!".
```

## isinstance()

Este método nos permite identificar si un determinado objeto o variable es una instancia de alguna clase. Este método funciona con objetos y clases que nosotros hayamos definido, pero también con las que tiene Python predeterminadamente.

### ✏️ Ejemplos

```python title="Ejemplo de isinstance()"
numero = 1

if (isinstance(numero, int))): # isinstance regresa True si el número es una instancia de "int".
  print(f"{numero} es un numero")
else:
  print(f"{numero} no es un numero")

print(isinstanc("Texto", int)) # Este código imprime False.
```
