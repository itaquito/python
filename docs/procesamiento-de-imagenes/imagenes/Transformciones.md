---
sidebar_label: "🚀 Transformaciones de una imagen"
sidebar_position: 5
---

# 🚀 Transformaciones de intensidad y filtrado espacial

Al trabajar con procesamiento de imágenes, utilizamos dos enfoques principales: dominio espacial y dominio de la frecuencia. Para hacerlo, contamos con bibliotecas clave en Python: **Numpy, Matplotlib y OpenCV (cv)**.

Las técnicas de dominio espacial operan directamente sobre los píxeles, mientras que las de dominio de la frecuencia trabajan en la transformada de Fourier en lugar de la imagen real.

## 🎋 Función de Umbralización---Tresholding

## 🔳 Negativo de una Imagen

## 🪵 Transformación Logarítmica

La transformación logarítmica es una técnica de procesamiento de imágenes que mejora el contraste en áreas oscuras. Esto se logra aplicando una función logarítmica a los valores de intensidad de los píxeles, estirando los valores bajos y comprimiendo los altos. Esto hace que los detalles en las áreas oscuras sean más visibles. La constante de escala se ajusta para obtener el mejor resultado visual.

![Translog](/img/procesamiento-de-imagenes/imagenes/transformaciones/trans.png)

```python title="Ejemplo de cómo se ve la transformación logarítmica en Python"
import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt

img=cv.imread('../images/apple.jpg',0)
c = 255 / np.log(1 + np.max(img))
log_transformed = c * (np.log(img + 1))
log_transformed = np.array(log_transformed, dtype=np.uint8)

plt.imshow(log_transformed, cmap='gray')
plt.show()
```

Aqui se muestra la aplicación de la transformación logarítmica en una imagen.

![Transgamma](/img/procesamiento-de-imagenes/imagenes/transformaciones/Logaritmica.png)

## 👾 Transformación Gamma---ley de potencia

La transformación gamma es una técnica de procesamiento de imágenes que ajusta el contraste y la luminosidad de la imagen. Utiliza una función no lineal para asignar nuevos valores de intensidad a los píxeles. A menudo se usa para corregir imágenes subexpuestas o sobreexpuestas y para mejorar el contraste en diferentes partes de la imagen. Ajustando el parámetro gamma, se puede controlar la cantidad de mejora del contraste.

![Transgamma](/img/procesamiento-de-imagenes/imagenes/transformaciones/gam.png)

```python title="Ejemplo de cómo se ve la transformación gamma en Python"
import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt

img=cv.imread('../images/lena.jpg',0) gamma = 0.5
gamma_corrected = np.array(255 * (img / 255) ** gamma, dtype='uint8')

plt.imshow(gamma_corrected, cmap='gray')
plt.show()
```

A continuacion se muestra el antes y despues de la aplicación de la transformación gamma.

![Transgamma](/img/procesamiento-de-imagenes/imagenes/transformaciones/gamma.png)
