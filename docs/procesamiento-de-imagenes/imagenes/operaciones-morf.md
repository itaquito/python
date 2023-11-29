---
sidebar_label: "🐼 Operaciones Morfológicas"
sidebar_position: 8
---

# 🐼 Operaciones Morfológicas

## 📝 ¿Qué son las operaciones morfológicas?

Para realizar este proceso, seguimos los siguientes pasos

1. Importamos las mismas bibliotecas que en los anteriores métodos. 
```python title="Importar bibliotecas"
 import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt
```

2. Cargamos la imagen
```python title="Leer imagen"
img=cv.imread('../images/coins.png',0)
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

## 🪃 Operaciones Morfológicas Primitivas



## 🎨 Operaciones Morfológicas Derivadas

Las operaciones morfológicas vistas anteriormente, dilatación y erosión, pueden combinarse para implementarse y formar otras operaciones para distintos propósitos. 

### Apertura ⭕
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

### Cierre 🔴
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

### Gradiente 🔲
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