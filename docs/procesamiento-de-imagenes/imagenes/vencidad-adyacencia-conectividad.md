---
sidebar_label: '✏️ Vencidad, adyacencia y conectividad de un pixel.'
sidebar_position: 5
---

# ✏️ Vencidad, adyacencia y conectividad de un pixel.

Es importante conocer los conceptos de vencidad, adyacencia y conectividad para saber cómo un pixel se relaciona o conecta con los que tiene al rededor.

## 🔎 Adyacencia de un pixel

Dos pixeles son adyacentes cuando estos dos comparten sus fronteras (verticalues u horizontales) o están juntos diagonalmente.

![Ejemplo de la adyacencia de dos pixeles](/img/procesamiento-de-imagenes/imagenes/vencidad-adyacencia-conectividad/adyacencia.png)

## 💡 Vencidades de un pixel

Si consideramos un pixel (P) en una imagen con coordenadas (x, y), este tiene un total de 8 pixeles vencinos. Las vencidades de este pixel son todos los demás pixeles que lo rodean. Si un pixel se encuentra al borde de una imagen, entonces su cantidad de vencinos se verá dismunuida.

Existen varios tipos de vencidad dependiendo de los pixeles a los que nos referimos.

### 4-vencidad

La 4-vencidad o `N₄(P)` es el conjunto de los 4 pixeles que tienen adyacencia con el pixel de forma vertical y horizontal. Estos pixeles vencinos los podemos identificar con las coordenadas (x+1 , y), (x-1 , y), (x, y+1) y (x, y-1).

### Vencidad diagonal

La vencidad diagonal o `Nd(p)` es el conjunto de los 4 pixeles que tienen adyacencia con el pixel en las dos diagonal. Estos pixeles vencinos los podemos identificar con las coordenadas (x+1 , y+1), (x+1 , y-1), (x-1, y+1) y (x-1, y-1).

### 8-vencidad

Finalmente, la 8-vencidad o `N₈(p)` es la unión entre los pixeles de la 4 vencidad y los de la vencidad diagonal, dando en total 8 pixeles. En otras palabras, son todos los pixeles que tienen adyacencia con el pixel de forma vertical, horizontal y las dos diagonales.

## 🧮 Conectividad

### Conectividad 4

Dos pixeles, `p` y `q` están conectados o tienen conectividad 4 si `q` pertenece a la 4-vencidad de `p`.

### Conectividad 9

De la misma manera anterior, dos pixeles, `p` y `q` están conectados o tienen conectividad 8 si `q` pertenece a la 8-vencidad de `p`.

### Conectividad mixta

Finalmente, dos pixeles, `p` y `q` están tienen conectividad mixta **únicamente** cuando se cumplen las siguientes dos condiciones:

- q pertenece a `N₄(p)`
- q pertenece a `Nd(p)` y `N₄(p) ∩ N₄(q)` está vacío.

## 🤓 Funciones para obtener las conectividad de un pixel en una imagen

A continuación se presentan las funciones necesarias para obtener las conectividades de un pixel, de igual manera, se agregó una función adicional para poder visualizar las conectividades de mejor manera.

```python title="Funciones para obtener las conectividad de un pixel en una imagen"
import numpy as np

# Definimos las vencidades más comunes y que vamos a usar para encontrar las conectividades
VENCIDAD_4 = np.array(
  (
    (False, True, False),
    (True, False, True),
    (False, True, False)
  ),
  dtype=bool
)

VENCIDAD_8 = np.array(
  (
    (True, True, True),
    (True, False, True),
    (True, True, True)
  ),
  dtype=bool
)

VENCIDAD_D = np.array(
  (
    (True, False, True),
    (False, False, False),
    (True, False, True)
  ),
  dtype=bool
)

# Busca los vecinos conectados con base a una vencidad determinada al rededor de un punto con unos valores de v específicos.
# Tecnicamente gracias al parámetro de vencidad podemos checar todos los tipos de vencidades que existen en una misma función
# Regresa las coordendas en la imagen de los puntos que cumplen las condiciones.
def obtenerConectividad(vencidad, imagen, punto, v = {1}):
  py, px = punto
  alto, ancho = imagen.shape
  resultado = set() # Hoy descubrí que {} crea un diccionario vacío, no un set vacío.

  for yVencidad, e in enumerate(vencidad):
    for xVencidad, revisarPixel in enumerate(vencidad[yVencidad]):
      # Ignorar la vencidad si tiene False
      if not revisarPixel: continue

      # Obtener las coordendas reales en la imagen, con respecto al punto que nos dieron y la vencidad actual que estamos revisando.
      yReal = py + (yVencidad - 1)
      xReal = px + (xVencidad - 1)

      # Evitar que revisemos pixeles que esten fuera de la imagen.
      if yReal < 0 or xReal < 0: continue
      if yReal >= alto or xReal >= ancho: continue

      # Extraer el valor del pixel
      valor = imagen[yReal, xReal]

      # Revisar que el valor del pixel este en el conjunto (v)
      if valor in v:
        # Añadir las coordendas del pixel en nuestra lista de resultados
        resultado.add((yReal, xReal))

  return resultado

# Busca todos los puntos que cumplan con la conectividad mixta.
# Regresa las coordendas en la imagen de los puntos que cumplen las condiciones.
def obtenerConectividadMixta(imagen, punto, v = {1}):
  resultado = set()

  # Obtener todos los puntos que cumplen la primera condición: q pertenece a N4(p)
  adyacencia4 = obtenerConectividad(VENCIDAD_4, imagen, punto, v)

  # Obtener todos los puntos que cumplen el primer requisito de la segunda condición: q pertenece a ND(p)
  adyacenciaD = obtenerConectividad(VENCIDAD_D, imagen, punto, v)

  # Revisar el siguiente requisito de la segunda condición: N4(p) interesección N4(q) está vacío.
  N4P = obtenerConectividad(VENCIDAD_4, imagen, punto, v) # N4(p)
  for posibleQ in adyacenciaD:
    N4Q = obtenerConectividad(VENCIDAD_4, imagen, posibleQ, v)
    # & significa intersección
    # == set() revisa si el set/conjunto está vacío
    if (N4P & N4Q) == set():
      resultado.add(posibleQ)

  # Unimos los resultados de ambas condiciones
  return adyacencia4 | resultado

# Imprime la conectividad de un pixel por medio de símbolos.
# El valor del punto está en el centro
def mostrarConectividad(puntosAdyacentes, imagen, punto):
  py, px = punto

  # Se podría hacer sólo en dos fors? Si. Vale la pena hacerlo con dos fors? Sería menos legible. Se va a acabar el mundo por 9 iteraciones más? Talvez.
  # Imprimir números reales
  print("\nValores originales:")
  for diferenciaY in range(-1, 2):
    for diferenciaX in range(-1, 2):
      print(imagen[py + diferenciaY, px + diferenciaX], end="")
    print("") # Nueva línea

  # Imprimir con los símbolos
  print("\nValores adyacentes (# = Hay adyacencia, - = No hay adyacencia):")
  for diferenciaY in range(-1, 2):
    for diferenciaX in range(-1, 2):
      y = py + diferenciaY
      x = px + diferenciaX

      if (y == py and x == px):
        # Punto actual aka el centro
        print(imagen[y, x], end="")
      elif (y, x) in puntosAdyacentes:
        # Es adyacente!
        print("#", end="")
      else:
        # No es adyacente
        print("-", end="")

    print("") # Nueva línea
  print("") # Nueva línea de nuevo?


np.random.seed(1)

# Definimos nuestro punto
punto = (1, 1)

# Definimos v
v = {1}
print("V:", v)

# Creamos un arreglo con valores aleatorios
arregloAleatorio = np.random.randint(10, size=(10, 10), dtype=np.uint8)
print("Arreglo original\n", arregloAleatorio)

conectividad4 = obtenerConectividad(VENCIDAD_4, arregloAleatorio, punto, v)
conectividad8 = obtenerConectividad(VENCIDAD_8, arregloAleatorio, punto, v)
conectividadMixta = obtenerConectividadMixta(arregloAleatorio, punto, v)


print("== Adyacencia 4 ==")
print("Puntos:", conectividad4)
mostrarConectividad(conectividad4, arregloAleatorio, punto)

print("== Adyacencia 8 ==")
print("Puntos:", conectividad8)
mostrarConectividad(conectividad8, arregloAleatorio, punto)

print("== Adyacencia mixta ==")
print("Puntos:", conectividadMixta)
mostrarConectividad(conectividadMixta, arregloAleatorio, punto)

```
