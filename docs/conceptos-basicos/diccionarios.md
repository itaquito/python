---
sidebar_label: "Diccionarios"
sidebar_position: 18
---

# 🗃️ Diccionarios

Es una estructura de datos que hace un juego entre llave y valor. De esta manera podemos visitar los elementos por su nombre y no su índice en contraste a las listas.

## ✏️ Ejemplo

```python title="Ejemplo de un diccionario"
diccionario = {"pais1": "México", "pais2": "España", "pais3": "China"}
print(diccionario["pais2"])

# Este código imprime "España"
```

## keys() y values()

Si únicamente se busca acceder a las llaves, se utiliza la función "keys()", mientras que si únicamente se busca acceder a los valores, entonces ocupamos la función "values()".

```python title="Ejemplo de las funciones keys() y values()"
print(diccionario.keys()) # Todas las llaves del diccionario

print(diccionario.values()) # Todos los valores (de las llaves anteriores) del diccionario

# Este código imprime:
# dict_keys(['pais1', 'pais2', 'pais3'])
# dict_values(['México', 'España', 'China'])
```

## items()

En caso de querer presentar cada llave acompañada de su valor se puede hacer uso de la función "items()".

```python title="Ejemplo de la función items()"
print(diccionario.items()) # Todos las llaves con su valor correspondiente

# Este código imprime:
# dict_items([('pais1', 'México'), ('pais2', 'España'), ('pais3', 'China')])
```
