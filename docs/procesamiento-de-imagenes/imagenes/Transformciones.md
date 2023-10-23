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

Se usa la formula que se muestra a continuacion:

**S = c log(1 + r)**

Donde ‘c’ es una constante calculada por: 255/(log(1 + m)), donde ‘m’ es el píxel más grande en la imagen.

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

Cuando se tiene una baja potencia (0 < y < 1), los valores de salida son más bajos generando una mayor intensidad. Mientras que con una alta potencia (1 < y < 25), los valores de salida son más altos generando una menor intensidad.

```python title="Ejemplo de cómo se ve la transformación gamma en Python"
import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt

img=cv.imread('../images/lena.jpg',0)
gamma = 2
plt.imshow(np.power(img3.astype(np.float64),gamma),cmap='gray')
plt.show()
```

A continuacion se muestra el antes y despues de la aplicación de la transformación gamma.

![Transgamma](/img/procesamiento-de-imagenes/imagenes/transformaciones/gm.png)

### Transformación Gamma 1/t

La transformación gamma 1/t es una técnica de procesamiento de imágenes que ajusta el contraste y la luminosidad de la imagen. Utiliza una función no lineal para asignar nuevos valores de intensidad a los píxeles. A menudo se usa para corregir imágenes subexpuestas o sobreexpuestas y para mejorar el contraste en diferentes partes de la imagen. Ajustando el parámetro gamma, se puede controlar la cantidad de mejora del contraste.

Se usa la siguiente formula para la transformación:

```python title="Formula de la transformación gamma 1/t"
S = f(x,y)1/t

donde:
t = Factor de corrección de Gamma, su valor oscila entre 0 y 2
t < 1 (oscurece la imagen)
t > 1 (aclara la imagen)
```

```python title="Ejemplo de cómo se ve la transformación gamma en Python"
import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt

img=cv.imread('../images/lena.jpg',0)
plt.imshow(np.power(img4.astype(np.float64),(1/.5)),cmap='gray')
plt.show()
```

![Transgamma](/img/procesamiento-de-imagenes/imagenes/transformaciones/gamma.png)
