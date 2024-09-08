---
sidebar_label: '🔋 Sobrecarga de operadores'
sidebar_position: 5
---

# 🔋 Sobrecarga de operadores

En Python, podemos definir cómo actuará nuestro objecto cuando interactúa con operadores como `+`, `-`, `*`, pero también cuando es evocado como una cadena de texto, como dentro de un `print()`. Para definir esto, hay una serie de determinados métodos mágicos, caracterizados por empezar y terminar con doble guión bajo `__`.

## ✏️ Ejemplo

Podemos crear una clase `Fraccion` que nos permita sumar, restar, multiplicar y dividir fracciones.

```python title="Ejemplo de una clase con sobrecarga de operadores"
class Fraccion:
  def __init__(self, numerador, denominador):
    nuevoNumerador, nuevoDenominador = simplificar(numerador, denominador)
    self.numerador = nuevoNumerador
    self.denominador = nuevoDenominador

  def __str__(self):
    return f"{self.numerador}/{self.denominador}"

  def __add__(self, otraFraccion):
    return Fraccion((self.numerador * otraFraccion.denominador) + (self.denominador * otraFraccion.numerador), (self.denominador * otraFraccion.denominador))

  def __sub__(self, otraFraccion):
    return Fraccion((self.numerador * otraFraccion.denominador) - (self.denominador * otraFraccion.numerador), (self.denominador * otraFraccion.denominador))

  def __mul__(self, otroFraccion):
    return Fraccion((self.numerador * otroFraccion.numerador), (self.denominador * otroFraccion.denominador))

  def __truediv__(self, otroFraccion):
    return Fraccion((self.numerador * otroFraccion.denominador), (self.denominador * otroFraccion.numerador))

unMedio = Fraccion(1, 2)
unTercio = Fraccion(1, 3)
dosTercios = unTercio + unTercio

unTreceabo = Fraccion(1, 13)
unQuinceabo = Fraccion(1, 15)

print(unTercio) # Imprime "1/3"

# También podemos evocar el método __str__ sin la necesidad de un print()
unTercioEnTexto = str(unTercio)
print(unTercioEnTexto) # Imprime "1/3"

print(unMedio) # Imprime "1/2"
print(unMedio + unMedio) # Imprime 4/4
print(dosTercios - unTercio) # Imprime 9/27
print(unTercio * unTercio) # Imprime 1/9
print(unMedio / unMedio) # Imprime 2/2

print(unTreceabo + unQuinceabo) # Imprime "28/195"
```

:::tip Notas importantes

Es importante notar que el método `__str__` tiene que regresar forzosamente una cadena de texto. Lo demás métodos pueden regresar otros tipos de valores, como enteros, cadenas de texto o un instancia de la clase misma.

En el ejemplo anterior regresamos una instancia de clase misma para que se puedan concatenar varias operaciones: `unMedio + unMedio + unMedio`.

:::

## 🖥️ Métodos más comunes disponibles

| Operador            | Signo        | Expresión     | Método           |
| ------------------- | ------------ | ------------- | ---------------- |
| Adición             | +            | a+b           | `__add__()`      |
| Resta               | -            | a-b           | `__sub__()`      |
| División            | /            | a/b           | `__truediv__()`  |
| División redondeada | //           | a//b          | `__floordiv__()` |
| Módulo              | %            | a%b           | `__mod__()`      |
| Potencia            | \*\*         | a\*\*b        | `__pow__()`      |
| Menor que           | \<           | a\<b          | `__lt__()`       |
| Menor o igual que   | \<=          | a\<=b         | `__le__()`       |
| Mayor que           | \>           | a\>b          | `__gt__()`       |
| Mayor o igual que   | \>=          | a\>=b         | `__ge__()`       |
| Igual que           | ==           | a==b          | `__eq__()`       |
| Diferente que       | !=           | a!=b          | `__ne__()`       |
| Casting a int       | int()        | int(a)        | `__int__()`      |
| Casting a str       | str()        | str(a)        | `__str__()`      |
| Casting a bool      | bool()       | bool(a)       | `__nonzero__()`  |
| Longitud            | len()        | len(a)        | `__len__()`      |
| Floor               | math.floor() | math.floor(a) | `__floor__()`    |
| Ceiling             | math.ceil()  | math.ceil(a)  | `__ceil__()`     |
