---
sidebar_label: '🐼 Operaciones Morfológicas'
sidebar_position: 10
---

# 🐼 Operaciones Morfológicas

## 📝 ¿Qué son las operaciones morfológicas?

Las operaciones morfológicas son un conjunto de operaciones que procesan imágenes con base en formas. Para ello le aplican a una imagen un elemento estructurante.

### 🔳 Elemento Estructurante

Un elemento estructurante (SE) es un kernel, y específicamente es una matriz que identifica el píxel en la imagen que se está procesando y define el entorno utilizado en el procesamiento de ese píxel
Estos elementos se aplican en una imagen binarizada para diferenciar entre el fondo y los píxeles del primer plano. Además los SE contienen elementos que se dicen Not Care (0’s).

```python title="Ejemplos de un elemento estructurante"
# Rectangular
cv.getStructuringElement(cv.MORPH_RECT,(5,5))
array([[1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1]], dtype=uint8)
# Elliptico
cv.getStructuringElement(cv.MORPH_ELLIPSE,(5,5))
array([[0, 0, 1, 0, 0],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [0, 0, 1, 0, 0]], dtype=uint8)
# Cruz
cv.getStructuringElement(cv.MORPH_CROSS,(5,5))
array([[0, 0, 1, 0, 0],
       [0, 0, 1, 0, 0],
       [1, 1, 1, 1, 1],
       [0, 0, 1, 0, 0],
       [0, 0, 1, 0, 0]], dtype=uint8)
```

Como se ve hay varios tipos de elementos estructurantes, pero los más comunes son los rectangulares, los elípticos y las cruces.
Los SE se utilizan de forma similar a los kernel de convolución espacial y el borde de la imagen anterior es similar al relleno (padding). Las Operaciones son diferentes en la morfología pero las Operaciones de relleno y deslizamiento son las mismas que las de convolución.

Para realizar este proceso, seguimos los siguientes pasos

1. Importamos las mismas bibliotecas que en los anteriores métodos.

```python title="Importar bibliotecas"
import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt
```

2. Cargamos la imagen

```python title="Leer imagen"
img = cv.imread("../images/LinuxLogo.jpg", 0)
plt.imshow(img, "gray")
```

3. La binarizamos

```python title="Binarizar imagen"
#Binarización inversa con un umbral de 128
img_bin=cv.threshold(img,128,255,cv.THRESH_BINARY_INV)[1]
```

4. Generamos un kernel

```python title="Definir kernel"
kernel = np.ones((3,3),np.uint8)
```

5. Para aplicar las operaciones morfológicas, es necesario utilizar la función: cv.morphologyEx
   - El primer parámetro es para la variable de la imagen
   - El segundo para la función morfológica específica
   - El tercero para el kernel

```python title="Función morfológica"
cv.morphologyEx(img_bin,cv.funcion,kernel)
```

## 🖌️ Operaciones Morfológicas Primitivas

### ⬜ Erosión

La erosión es una de las operaciones morfológicas más simples. Esta operación consiste en desgastar los bordes de los objetos que se encuentran en primer plano, es decir, los píxeles que comparten frontera con el borde en este tipo de operaciones el tamaño del kernel es importante, pues si es muy grande, puede llegar a borrar la imagen.

Se recomienda utilizar un kernel pequeño y aplicarlo varias veces, en lugar de utilizar un kernel grande una sola vez.

Para realizar este proceso, seguimos los pasos de las demás operaciones

5. Para aplicar la erosión, es necesario utilizar la función: cv.MORPH_ERODE como segundo parámetro

```python title="Aplica función de erosión"
img_erode = cv.morphologyEx(img_bin,cv.MORPH_ERODE,kernel)
```

6. Finalmente, visualizamos el resultado

```python title="Plotear imagen"
plt.imshow(img_erode, cmap='gray')
```

AquÍ se ve la diferencia entre la imagen original y la imagen erosionada.

![Imagen erosionada](/img/procesamiento-de-imagenes/imagenes/opmorf/erode.png)

### ⬛ Dilatación

La dilatación es una operación morfológica que consiste en agregar píxeles a los bordes de los objetos que se encuentran en primer plano, es decir, los píxeles blancos, para aumentar su tamaño.

Igualmente, el tamaño del kernel es importante, pues si es muy grande, puede llegar a unir objetos que no deberían estar unidos.

Y para realizar esta operación, seguimos los pasos de las demás operaciones

5. Para aplicar la dilatación, es necesario utilizar la función: cv.MORPH_DILATE como segundo parámetro

```python title="Aplica función de dilatación"
img_dilate = cv.morphologyEx(img_bin,cv.MORPH_DILATE,kernel)
```

6. Finalmente, visualizamos el resultado

```python title="Plotear imagen"
plt.imshow(img_dilate, cmap='gray')
```

Aqui se ve la diferencia entre la imagen original y la imagen dilatada.

![Imagen dilatada](/img/procesamiento-de-imagenes/imagenes/opmorf/dil.png)

## 🎨 Operaciones Morfológicas Derivadas

Las operaciones morfológicas vistas anteriormente, dilatación y erosión, pueden combinarse para implementarse y formar otras operaciones para distintos propósitos.

### ⭕ Apertura

La operación de apertura realiza una erosión en la imagen, seguido de una dilatación, al resultado de la imagen erosionadas, utilizando el mismo kernel o elemento estructurante en ambos casos.

Esta operación es útil para eliminar elementos pequeños, sin modificar el tamaño de los demás objetos.

Para realizar este proceso, seguimos los pasos de las demás operaciones

5. Para aplicar la apertura, es necesario utilizar la función: cv.MORPH_OPEN como segundo parámetro

```python title="Aplica función de apertura"
img_open = cv.morphologyEx(img_bin,cv.MORPH_OPEN,kernel)
```

6. Finalmente, visualizamos el resultado

```python title="Plotear imagen"
plt.imshow(img_open, cmap='gray')
```

### 🔴 Cierre

La operación de cierre es inversa a la apertura, pues primero dilata la imagen y luego la erosiona con el mismo kernel.

Esta operación sirve para cerrar o rellenas huecos, conservando la forma y tamaño de los demás elementos.

Para realizar este proceso, seguimos los pasos de las demás operaciones

5. Para aplicar el cierre, es necesario utilizar la función: cv.MORPH_CLOSE como segundo parámetro

```python title="Aplica función de cierre"
img_close = cv.morphologyEx(img_bin,cv.MORPH_CLOSE,kernel)
```

6. Finalmente, visualizamos el resultado

```python title="Plotear imagen"
plt.imshow(img_close, cmap='gray')
```

### 🔲 Gradiente

Esta operación es equivalente a la diferencia entre las operaciones de dilatación y erosión, por lo que nos puede ser útil para obtener siluetas.

Para realizar este proceso, seguimos los pasos de las demás operaciones

5. Para aplicar el gradiente, es necesario utilizar la función: cv.MORPH_GRADIENT como segundo parámetro

```python title="Aplica función gradiente"
img_grad = cv.morphologyEx(img_bin,cv.MORPH_GRADIENT,kernel)
```

6. Finalmente, visualizamos el resultado

```python title="Plotear imagen"
plt.imshow(img_grad, cmap='gray')
```
