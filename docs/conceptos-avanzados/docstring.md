---
sidebar_label: '🤔 Docstring'
sidebar_position: 7
---

# 🤔 Docstring

Docstring es una cadena de caracteres de documentación que se incluye en el código fuente. A diferencia de un comentario general, este no se elimina del código cuando se compila. Otra diferencia es que un docstring define el funcionamiento de una función o clase, así como los valores que recibe y los que regresa, mientras que un comentario explica el funcionamiento de únicamente una línea de código en específico.

Docstring lo podemos ocupar en módulos, funciones, clases o métodos. Utilizamos tres comillas para cerrar y abrir el docstring, siempre se empieza con mayúscula y se termina con punto. Por ejemplo: `"""La función hace esto."""`

El docstring de una sola línea es muy básico porque no entra a gran detalle, mientras que la multilínea es mucho más específica.

Estos comentarios se almacenan en el atributo `__doc__`.

## ✏️ Ejemplo

```python title="Ejemplo de una función con un docstring"
def multiplicar(x, y):
  """Función que multiplica los dos valores que recibe.

    Regresa el producto de ambos números

    Args:
      x: Un numero entero o de punto flotante que indica el primer numero a multiplicar
      y: Un numero entero o de punto flotante que indica el segundo numero a multiplicar
  """
  return x * y

# Este atributo imprime el docstring que definimos entre las triples comillas.
print(multiplicar.__doc__)

# También podemos utilizar help()
help(multiplicar)
```

## 💃 Estilos

No hay un estilo o convención predeterminado para escribir un docstring, podemos elegir con completa libertad el que más nos guste. Sin embargo, nos debemos apegar al estilo que seleccionemos a lo largo de todo nuestro código.

Alguno de los estilos más utilizados en Python son:

- [Sphinx](https://sphinx-rtd-tutorial.readthedocs.io/en/latest/docstrings.html#the-sphinx-docstring-format)
- [Google](https://google.github.io/styleguide/pyguide.html#38-comments-and-docstrings)
- [NumPy](https://numpydoc.readthedocs.io/en/latest/format.html#docstring-standard)
