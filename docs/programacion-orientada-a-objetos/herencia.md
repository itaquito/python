---
sidebar_label: '💰 Herencia'
sidebar_position: 8
---

# 💰 Herencia

En herencia no se trata de ver la relación entre clases. Más bien, es decir esta clase es esta otra clase. Un `Coche` es un `Vehículo`.

La herencia es una característica de POO que permite a una clase heredar atributos y métodos de otra clase. La clase que hereda se llama clase derivada, clase hija o subclase, y la clase de la que se hereda se llama clase base, clase padre o superclase.

## ✏️ Ejemplos

```python title="Ejemplo simple de herencia"
class Padre:
  pass

# Cuando añadimos una clase dentro de los paréntesis, estamos diciendo que Hijo va a heredar todos los métodos y atributos de Padre.
class Hijo(Padre):
  pass

print(Hijo.__bases__) # Imprimir a su padre
print(Padre.__subclasses__()) # Imprimir a sus hijos
```

Esto lo podemos ver en el siguiente ejemplo:

```python title="Otro ejemplo simple de herencia"
class VehiculoConRuedas:

  def __init__(self, ruedas, frenos):
    self.ruedas = ruedas
    self.frenos = frenos

  def __str__(self):
    return f"Este vehículo tiene {self.ruedas} ruedas y tiene frenos {self.frenos}"

class Moto(VehiculoConRuedas):
  pass

unaMoto = Moto(2, True) # Como Moto no tiene constructor, todos los argumentos que coloquemos aquí pasarán directamente a la clase padre (VehiculoConRuedas)

# En esta línea se está utilizando el método __str__ de VehiculoConRuedas, ya que Moto lo hereda.
print(unaMoto) # Imprime: Este vehículo tiene 2 ruedas y tiene frenos True
```

## 🦸‍♂️ super()

Cuando queremos hacer referencia a la instancia de la clase padre desde una clase hija podemos utilizar el método `super()`.

```python title="Ejemplo de herencia con el método super()"
class Persona:

  def __init__(self, nombre, edad):
    self.nombre = nombre
    self.edad = edad

class Estudiante(Persona):

  def __init__(self, nombre, edad, curso):
    super().__init__(nombre, edad) # En esta línea estamos llamando al método constructor de Persona con sus argumentos correspondientes
    self.curso = curso # De igual manera, podemos agregar más atributos que sólo estarán disponibles en Estudiante
    # En total, la clase Estudiante tendrá los métodos y atributos de Persona más los que definamos en Estudiante

christopher = Estudiante("Christopher", 54, "Pre-primaria")

print(f"{christopher.nombre} tiene {christopher.edad} años y está cursando {christopher.curso}") # Imprime: "Christopher tiene 54 años y está cursando Pre-primaria"
```

## 🏆 Method Resolution Order (MRO)

El _Method Resolution Order_ o en español "Orden de Resolución de Métodos" nos permite obtener el orden en el que se resuelven los métodos en relación a una herencia de clases. Podemos utilizar `mro()` o el atributo `__mro__` en cualquier clase para obtener una lista de las clases padres que hereda una clase hija, siendo la primera en la lista la que se evalue primero a la hora de ejecutar un método.

```python title="Ejemplo del orden de resolución para métodos"
class Persona:

  def __init__(self, nombre, edad):
    self.nombre = nombre
    self.edad = edad

  def __str__(self):
    return f"{self.nombre} tiene {self.edad} años."

  # Definimos un método saludar para Persona
  def saludar(self):
    print("Hola persona")

# Profesor hereda de Persona
class Profesor(Persona):

  def __init__(self, nombre, edad, materia, sueldo):
    super().__init__(nombre, edad)
    self.materia = materia
    self.sueldo = sueldo

  # Definimos otro método saludar para Profesor
  def saludar(self):
    print("Hola profesor genérico")

  def __str__(self):
    return f"{super().__str__()} El profesor da la materia {self.materia} y le pagan ${self.sueldo}"

  def aumentar(self, porcentaje):
    self.sueldo += self.sueldo * (porcentaje / 100)

# ProfesorDePOO hereda de Profesor que a su vez hereda de Persona
class ProfesorDePOO(Profesor):

  def __init__(self, nombre, edad, materia, sueldo):
    super().__init__(nombre, edad, materia, sueldo)

  # Definimos todavía otro método saludar para ProfesorDePOO
  def saludar(self):
    print("Hola profesor de POO")

unProfesor = ProfesorDePOO("Raul", 30, "Álgebra lineal", 10)
unProfesor.saludar() # En este caso se ejecuta el método saludar de ProfesorDePOO gracias al MRO

print(ProfesorDePOO.mro()) # Imprime: [<class '__main__.ProfesorDePOO'>, <class '__main__.Profesor'>, <class '__main__.Persona'>, <class 'object'>]
print(ProfesorDePOO.__mro__) # Imprime: (<class '__main__.ProfesorDePOO'>, <class '__main__.Profesor'>, <class '__main__.Persona'>, <class 'object'>)

print(unProfesor) # En este caso se ejectua el método __str__ de Profesor, ya que ProfesorDePOO no tiene uno definido.
```

## 🏯 Herencia multinivel

En el ejemplo anterior vimos un tipo de herencia que se da como un árbol genealógico: `Padre` -> `Hijo` -> `Nieto`. La clase `Persona` era heredada por la clase `Profesor` que a su vez era heredada por la clase `ProfesorDePOO`. A esto le llamamos herencia multinivel.
