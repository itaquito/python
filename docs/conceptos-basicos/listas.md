---
sidebar_label: '📋 Listas'
sidebar_position: 10
---

# 📋 Listas

Una lista es un arreglo de elementos, en la cual se pueden guardar varias variables. Estas variables pueden ser de distintos tipos.

## ✏️ Ejemplo

```python title="Ejemplo de una lista"
lista = [1, 3.14, "POO", True]
```

En ellas se puede aplicar la función "len()" y la cual arroja el número de elementos que contiene esta misma.

```python title="Ejemplo de len()"
len(lista)
```

Al igual que en una cadena de caracteres, en las listas se puede ocupar el "Indexing". Para ello, hay que entender que el índice de una lista comienza en 0, en contraste a la posición que empieza en 1. De esta manera, al elemento 1 le corresponde el índice 0, al elemento 2 le corresponde el índice 1, y así sucesivamente hasta n-1. Esta notación sirve para leer de izquierda a derecha.

```python title="Ejemplo de indexing"
lista[0]
```

Otra manera de acceder a un elemento es leyendo de derecha a izquierda, y para ello el índice del elemento del extremo derecho sería -1, el índice del penúltimo elemento sería -2 y así hasta -n.

```python title="Otro ejemplo de indexing"
lista[-4]
```

## append()

Esta función (o método de una lista) permite añadir un elemento al final de una lista.

```python title="Ejemplo de append()"
listaEjemplo = [1, 2, 3, 4]
listaEjemplo.append("Calabaza")
print(listaEjemplo) # [1, 2, 3, 4, "Calabaza"]
```

## pop()

Esta función permite eliminar un elemento dentro de la lista. Para eliminar un elemento en específico se debe de indicar su índice. En caso de no aclarar el elemento en la función, esta misma automáticamente borrará el último elemento. Esta función regresa el valor eliminado.

```python title="Ejemplo de pop()"
elementoEliminado = listaEjemplo.pop(2)
print(listaEjemplo) # [1, 2, 4, "Calabaza"]
print(elementoEliminado) # 3
```
