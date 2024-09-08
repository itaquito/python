---
sidebar_label: '📝 Filtrado'
sidebar_position: 9
---

# 📷 Filtrado

El nombre de filtro se toma prestado de procesamiento en el dominio de la frecuencia, donde “filtrar” se refiere a pasar, modificar o rechazar componentes de frecuencia específicos de una imagen.

El filtrado espacial modifica una imagen sustituyendo el valor de cada píxel por una función de los valores del píxel y sus vecinos.

### 🌌 Filtrado espacial lineal

Realiza una operación de suma de productos entre una imagen f y un kernel de filtrado, w. El kernel es una matriz cuyo tamaño define la vecindad de la operación y cuyos coeficientes determinan la naturaleza del filtro.

## 🧀 Correlación

Este proceso se considera como la medida de la similitud entre 2 señales o funciones.
La correlación cruzada se enfoca en la comparación de un kernel y parte de la imagen para verificar su parecido.
De igual manera esta es la fórmula que utilizamos en la correlación cruzada entre 2 señales f y g:

$(f * g)[n] = \sum_{m=-\infty}^{\infty} f[m] * g[m-n]$

En la correlación tenemos diversas características como que a diferencia de la convolución el kernel en este método se desplaza directamente sobre la imagen permitiendo así calcular la suma de los productos en cada lugar.

Este método se utiliza en aplicaciones como coincidencia de patrones, seguimiento de objetos y mejora de imágenes.

## 🌪 Convolución

Operación matemática que mediante la combinación de dos funciones puede producir una tercera-
Comúnmente se utiliza para aplicar un kernel a una imágen. Una de sus aplicaciones es el suavizado y realce de bordes en imágenes.

Así como la correlación esta consta de una fórmula para poder realizarse entre 2 funciones:

$(f * g)[n] = \sum_{m=-\infty}^{\infty} f[m] * g[n-m]$

Este proceso consiste en deslizar un kernel sobre una imagen y hacer operaciones como multiplicación y suma de productos de los elementos de cada posición pero a diferencia de la correlación esta se debe rotar 180 grados, esto con el fin de asegurarse que el centro del kernel está alineado con el pixel actual de la imagen correspondiente.

## ⬇ Filtros pasabajas

Son aquellos en los cuales la sumatoria de todos los elementos es igual a 1

### 🧽 Filtros Smoothing

Los filtros espaciales de suavizado (también llamados de promedio) se utilizan para reducir las transiciones bruscas en la intensidad. Dado que el ruido aleatorio suele consistir en transiciones bruscas en intensidad, una aplicación obvia del suavizado es la reducción del ruido.

Este primer ejemplo se enfoca en hacer un suavizado sobre una imagen en escala de grises utilizando un kernel cuadrado previamente definido:

```python title="Filtro smoothing"
import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt

img = cv.imread('..OpenCV-images/HappyFish.jpg', 0)

def make_square_kernels(n):
    return 1/n**2 * np.ones((n, n))

plt.imshow(cv.filter2D(img, -1, make_square_kernels(11)), "gray")
```

### ➗ Desenfoque Gaussiano

Los kernel que se eligen en aplicaciones como este son circularmente simétricos (también llamados isotrópicos, lo que significa que su respuesta es independiente de la orientación).

Este segundo ejemplo se enfoca en la realización el mismo proceso pero en este caso mediante el filtro gaussiano, el cual se enfoca en reducir el ruido y transiciones de intensidad:

```python title="Desenfoque Gaussiano 1"
# (origen, tamaño del kernel gaussiano a generar, valor de sigma)
plt.imshow(cv.GaussianBlur(img, (3,3), 1), "gray")
```

```python title="Desenfoque Gaussiano 2"
plt.imshow(cv.GaussianBlur(img, (3,3), .5), "gray")
```

En el caso de este filtro lo que se prioriza es el sigma (desviación estándar) a diferencia del tamaño del kernel como en el ejemplo anterior

## ⬆ Filtros pasa-altas

Son aquellos en los cuales la sumatoria de todos los elementos es igual a 0

### 🪒 Filtros Sharpening

El suavizado se denomina a menudo filtro pasa bajas, un término tomado del procesamiento en el dominio de la frecuencia. De manera similar, sharpening se denomina a menudo filtro pasa altas. En este caso, las frecuencias altas (responsables de los detalles finos) se pasan (o se conservan), mientras que las frecuencias bajas se atenúan o se rechazan.

### 🦁 Filtro Laplaciano

Como tercer ejemplo tenemos el operador laplaciano que se utiliza comúnmente para resaltar características como bordes o frecuencias altas en una imagen:

```python title="Filtro Laplaciano"
import cv2 as cv
import matplotlib.pyplot as plt
import numpy as np

# Declaramos nuestras matrices laplacianas
laplaciano1 = np.array([[0, 1, 0],
                       [1, -4, 1],
                       [0, 1, 0]])

laplaciano2 = np.array([[0, -1, 0],
                       [-1, 4, -1],
                       [0, -1, 0]])

laplaciano3 = np.array([[1, 1, 1],
                       [1, -8, 1],
                       [1, 1, 1]])

laplaciano4 = np.array([[-1, -1, -1],
                        [-1, 8, -1],
                        [-1, -1, -1]])

# Ploteamos aplicando la funcion de "filter2D" y mandando la matriz laplaciana como argumento
plt.imshow(cv.filter2D(img, -1, laplaciano1), "gray")
plt.imshow(cv.filter2D(img, -1, laplaciano3), "gray")
```

### 🍸 Funcion Sobel

El operador Sobel utiliza dos núcleos de convolución, uno para la detección de bordes verticales y otro para los horizontales. Estos núcleos son conocidos como máscaras Sobel.

La idea principal es calcular las derivadas parciales de la imagen en las direcciones vertical y horizontal para resaltar las áreas de cambio rápido en la intensidad de los píxeles, que corresponden a los bordes.

```python title="Funcion Sobel"
import cv2 as cv
import matplotlib.pyplot as plt
import numpy as np

plt.imshow(cv.Sobel(img,-1,1,1),'gray')
```

## 📊 Filtros Estadisticos

Funcionan mediante la realizacion de operaciones matemáticas en la vecindad del kernel.

### 🧮 Filtro Mediana

Para calcular la mediana, hay que aplanar el kernel a una sola línea y ordenarlo de menor a mayor, y ya de ahí se saca la mediana. Ahora bien, la función ‘cv.medianBlur’ solo aplica con las imágenes que sean del tipo ruido, sal y pimienta. En este sentido les quita el ruido y realiza cierto desenfoque.

```python title="Filtro Mediana"
import cv2 as cv
import matplotlib.pyplot as plt
import numpy as np

# Leemos nuestra imagen y la asignamos a una variable
img = cv.imread('./lena_sal_y_pimienta.jpg', 0)

# Declaramos nuestra matriz
tmp = np.array([[1, 3, 5],
                [10, 11, 20],
                [90, 100, 11]], dtype=np.uint8)

# La ordenamos y aplanamos
tmp.sort()
tmp.flatten()

# Ploteamos la imagen
plt.imshow(cv.medianBlur(img, 5), 'gray')
```
