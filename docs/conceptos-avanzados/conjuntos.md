---
sidebar_label: "Conjuntos o sets"
sidebar_position: 2
---

# 🗄️ Conjuntos o sets

Un conjunto  o set se refiere a una colección de determinados valores que por un lado no están repetidos, y que por el otro lado no poseen ningún orden en particular.


```python title="Ejemplo de cómo definir un conjunto"
conjunto = {1, 2, 3, 4, 5} # Notése que se usan las llaves {} para definir un conjunto.
```

Gracias a que los conjuntos no aceptan dos o más valores iguales, los podemos utilizar para eliminar duplicados de una lista.

```python title="Ejemplo de cómo eliminar duplicados de una lista"
lista = [1, 2, 3, 4, 5, 4, 5]

conjunto = set(lista) # Convertimos la lista a un set o conjunto
print(conjunto)

# Este código imprime {1, 2, 3}
```


Por lo mismo de que los elementos no presentan un orden, en los sets no se puede visitar un determinado elemento por su índice.

```python title="¿Indexing en conjuntos?"
conjunto = {1, 2, 3}
conjunto[0] # Esta linea de código genera un error
```

## remove()
Este método nos permite eliminar un determinado elemento de un conjunto. Esto resulta más eficiente para quitar un valor de un conjunto que con `pop()`, ya que este elimina un elemento al azar al no haber un orden.

```python title="Ejemplo de remove()"
conjunto = {1, 2, 3}

conjunto.remove(2) # Elimina el número dos
print(conjunto)

# Este código imprime {1, 3}
```

## 🧮 Operaciones en conjuntos

### Intersección `&`
Sirve para denotar los elementos que tienen en común dos conjuntos.

```python title="Ejemplo de la intersección en un set"
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}
print(A & B)

# Este código imprime {3, 4}
```

### Unión `|`
Se utiliza para presentar todos los elementos que tienen ambos conjuntos sin repeticiones.

```python title="Ejemplo de la unión en un set"
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}
print(A | B)

# Este código imprime {1, 2, 3, 4, 5, 6}
```

### Diferencia `-`
En este caso a los elementos del primer conjunto se le restan los elementos que comparte con el segundo conjunto.

```python title="Ejemplo de la diferencia en un set"
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}
print(A - B)

# Este código imprime {1, 2}
```

### Diferencia simétrica `^`
Nos enseña los elementos que hay en un conjunto o en otro, no los que están en los dos por igual.

```python title="Ejemplo de la diferencia simétrica en un set"
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}
print(A ^ B)

# Este código imprime {1, 2, 5, 6}
```
