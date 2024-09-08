---
sidebar_label: '🎲 Agregación'
sidebar_position: 2
---

# 🎲 Agregación

Una clase puede recibir en su método constructor la instancia de otra clase. A esta estructura la llamamos agregación.

## ✏️ Ejemplo

```python title="Ejemplo de una clase Empleado con agregación"
class Empleado:

  def __init__(self, genero, nombre, edad, coche = None):
    # El argumento coche es opcional, por lo que puede ser que un empleado no tenga un coche.
    self.genero = genero
    self.nombre = nombre
    self.edad = edad
    self.coche = coche

   def __str__(self):
      if self.coche:
        # Si el empleado tiene Coche
        return f"{self.nombre} ha entrado a trabajar, y {self.coche}."
      else:
        return f"El empleado {self.nombre} no tiene un coche."

class Coche:

  def __init__(self, marca, modelo, color):
    self.marca = marca
    self.modelo = modelo
    self.color = color

   def __str__(self):
    return f"Tiene un coche de la marca {self.marca}."
```

Ahora podemos utilizar las clases anteriores de la siguiente manera:

```python title="Ejemplo de cómo usar la clase Empleado y Coche con agregación"
coche = Coche("Nissan", "XYZ", "Magenta")
empleado = Empleado("Masculino", "Edgar", 52, coche) # Instanciamos a un empleado con la instancia de Coche

print(empleado) # Imprime: "Edgar ha entrado a trabajar, y tiene un coche de la marca Nissan."
print(empleado.coche) # Inprime: "Tiene un coche de la marca Nissan."
```
