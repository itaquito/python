---
sidebar_label: "🚀 Transformaciones de una imagen"
sidebar_position: 5
---

# 🚀 Transformaciones de intensidad y filtrado espacial

Al trabajar con procesamiento de imágenes, utilizamos dos enfoques principales: dominio espacial y dominio de la frecuencia. Para hacerlo, contamos con bibliotecas clave en Python: **Numpy, Matplotlib y OpenCV (cv)**.

Las técnicas de dominio espacial operan directamente sobre los píxeles, mientras que las de dominio de la frecuencia trabajan en la transformada de Fourier en lugar de la imagen real.

## 🎋 Función de Umbralización---Tresholding

La técnica de umbralizacion de una imagen busca obtener un valor, denominado umbral, que permita binarizar la imagen en escala de grises modificando el valor de todos los pixeles disminuyendo a cero los pixeles con un valor inferior al del umbral y aumentandoa al valor seleccionado los pixeles que superen el valor del umbral, separando de festa manera el fondo y el objeto que se desea observar.

```python title="Ejemplo de cómo aplicar la umbralizacion en una imagen en python"
import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt

img = cv.imread('img/transformaciones/imagen.jpg', 0)
img = cv.threshold(img, 128, 255, cv.THRESH_BINARY_INV)[1]

plt.imshow(img, cmap='gray')
plt.show()
```

## 🔳 Negativo de una Imagen

El negativo de una imagen con niveles de intensidad en el rango [0, L - 1] se obtiene utilizando la función de transformación del negativo que tiene la forma:

s = L - 1 - r

L (número máximo de combinaciones) - 1 = 256 - 1

r: píxel que estamos visitando

Invertir los niveles de intensidad de una imagen digital de esta manera produce el equivalente a un negativo fotográfico.

```python title="Ejemplo de cómo obtener el negativo de una imagen en Python"
import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt

img = cv.imread('img/transformaciones/imagen.jpg', 0)
plt.imshow(255 - img, cmap='gray')
plt.show()
```

## 🪵 Transformación Logarítmica

La transformación logarítmica es una técnica de procesamiento de imágenes que mejora el contraste en áreas oscuras. Esto se logra aplicando una función logarítmica a los valores de intensidad de los píxeles, estirando los valores bajos y comprimiendo los altos. Esto hace que los detalles en las áreas oscuras sean más visibles. La constante de escala se ajusta para obtener el mejor resultado visual.

![Translog](/img/procesamiento-de-imagenes/imagenes/transformaciones/trans.png)

```python title="Ejemplo de cómo se ve la transformación logarítmica en Python"
import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt

img = cv.imread('img/transformaciones/imagen.jpg', 0)
c = 255 / np.log(1 + np.max(img))
log_transformed = c * (np.log(img + 1))
log_transformed = np.array(log_transformed, dtype=np.uint8)

plt.imshow(log_transformed, cmap='gray')
plt.show()
```

## 👾 Transformación Gamma---ley de potencia

La transformación gamma es una técnica de procesamiento de imágenes que ajusta el contraste y la luminosidad de la imagen. Utiliza una función no lineal para asignar nuevos valores de intensidad a los píxeles. A menudo se usa para corregir imágenes subexpuestas o sobreexpuestas y para mejorar el contraste en diferentes partes de la imagen. Ajustando el parámetro gamma, se puede controlar la cantidad de mejora del contraste.

![Transgamma](/img/procesamiento-de-imagenes/imagenes/transformaciones/gam.png)

```python title="Ejemplo de cómo se ve la transformación gamma en Python"
import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt

img = cv.imread('img/transformaciones/imagen.jpg', 0)
gamma = 0.5
gamma_corrected = np.array(255 * (img / 255) ** gamma, dtype='uint8')

plt.imshow(gamma_corrected, cmap='gray')
plt.show()
```
