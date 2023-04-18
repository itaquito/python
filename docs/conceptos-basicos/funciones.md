---
sidebar_label: "Funciones"
sidebar_position: 14
---

# 🚩 Funciones

Las funciones son bloques de código que realizan alguna operación determinada. Son útiles cuando requerimos usar un bloque de código muchas veces a lo largo de nuestro programa. Para definirlas se ocupa la palabra reservada del lenguaje denominada “def”. Cabe aclarar que se aconseja que el nombre de una respectiva función sea un verbo.

Aunque no es necesario, también podemos hacer que una función regrese un valor. Este valor lo podemos guardar en una variable.

## ✏️ Ejemplos

```python title="Ejemplo de un definición de una función"
# Se define la función con su nombre
def saludar():
	print("Hola usuario")

saludar() # Se llama la función. Si una función no es llamada, nunca se ejecutará.
```

El caso anterior sirve para indicarnos que las funciones no necesitan forzosamente de parámetros, pero hay casos en los que sí los llegan a ocupar.

```python title="Ejemplo de un definición de una función con parámetros"
def sumar(a, b):
	x = a + b
	return x

suma = sumar(5, 10) # En este caso, esta función regresa un valor que guardamos en la variable suma.
print(suma)
```
## Parámetros opcionales

Ahora bien, hay funciones en donde es obligatorio ingresar argumentos. Esto se debe a que previamente en la definición de dicha función no se le asignó ningún valor a sus parámetros. Esto es visible en el ejemplo anterior. De igualarse alguno de los parámetros a un valor, no se requeriría ingresar necesariamente un argumento correspondiente a ese mismo parámetro al llamar a la función. Al definir una función, los parámetros que requieren obligatoriamente un valor a recibir se colocan antes que los demás parámetros.

```python title="Ejemplo de una función con parámetros opcionales"
def restar(a, b = 15):
	x = a - b
	return x

resta = restar(10)
print(resta)
```

## Paso de valores por orden

Una de las maneras de pasar los valores de las variables como parámetro a una función es por orden. Para ello, al llamar a una función, las variables que se le introduzcan respetan el orden en el que están establecidos los parámetros.

```python title="Ejemplo de una función con paso de valores por orden"
def sumarYRestar(a, b, c):
	x = a + b - c
	return x

print(sumarYRestar(10, 5, 8)) # Al estar los valores en diferente orden, producen un diferente resultado.
print(sumarYRestar(8, 10, 5))
```

## Paso de valores por referencia

Esta manera permite que en la llamada de la función se señale a qué parámetro le corresponde cada valor. En este sentido, el orden en el que se coloquen las variables no afectaría el resultado de la ejecución de la función.

```python title="Ejemplo de una función con paso de valores por referencia"
def sumarYRestar(a, b, c):
	x = a + b - c
	return x

print(sumarYRestar(10, 5, 8))
print(sumarYRestar(c = 8, a = 10, b = 5)) # Aunque los valores esten en otro orden, estamos señalando qué valor le corresponde a cada parámetro
```

## Función dentro de una función

Se puede invocar a una función dentro de otra. Para ello bastará con llamar a esta función, junto con sus determinados argumentos, dentro de la función externa.

```python title="Ejemplo de una función dentro de una función" 
def funcion1(x, y):
	w = funcion2(x, y) - 2
	return w

def funcion2(p, q):
  r = (p + q) * 4
  return r

print(funcion1(1, 2))
```
