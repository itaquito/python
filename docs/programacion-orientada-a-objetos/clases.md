---
sidebar_label: '🚗 Clases'
sidebar_position: 2
---

# 🚗 Clases

Una clase es una plantilla (digamos un molde), con este molde podremos crear los objetos que querramos. Por ejemplo, la clase `Gato` puede generar a diferentes gatos: `Hash`, `Pelusa`, `Rodolfo`; a cada uno de estos gatos u objetos les denominamos como una **instancia de nuestra clase**. Cabe destacar que se pueden definir tantas clases como se deseen y de ellas generar los objetos que querramos.

En Python, las clases se nombran bajo la convención de UpperCamelCase, en donde la primera letra de cada palabra se escribe en mayúscula. En todo momento se debe procurar que los nombres no sean tan generales.

## ✏️ Ejemplo

```python title="Ejemplo de cómo definir una clase"
class Gato:
  pass # Aquí irán nuestors métodos y atributos, pero por ahora lo dejaremos vacío.

unGato = Gato() # unGato es una instancia de nuestra clase Gato.
```

## Métodos iniciador y destructor

Las clases pueden tener un método iniciador (o constructor en otros lenguajes de programación) y un método destructor. Estos métodos (o funciones) se ejectuaran durante el ciclo de vida de cada una de las instancias de dicha clase. El método iniciador se ejecuta cuando se crea una nueva instancia y el método destructor cuando se elimina la instancia

```python title="Ejemplo de los métodos iniciador y destructor"
class Gato:

  # Método iniciador
  def __init__(self):
    print("Se creó un nuevo gato")

  ## Método destructor
  def __del__(self):
    print("Se eliminó un gato :c")

unGato = Gato() # Al ejecutar esta linea de código se ejecutará el método iniciador, imprimiendo el texto "Se creó un nuevo gato".

del unGato # Al ejecutar esta linea de código se ejecutará el método destructor, imprimiendo el texto "Se eliminó un gato :c".
```
