---
sidebar_label: "📝 Ejemplos prácticos"
sidebar_position: 4
---

# 📝 Ejemplos prácticos

Vamos a poner en práctica todo lo que hemos visto hasta ahora:

## 🌳 A partir de una imagen

Ahora bien que sabemos lo que es una imágen y cómo es que esta se comporta, mostraremos un ejemplo de cómo se usan los comandos de opencv para una imágen:

1. Como primer instancia importamos la biblioteca OpenCV con el pseudonombre `cv` y Matplotlib como `plt`:

```python title="Importar OpenCV y Matplotlib"
import cv2 as cv
import matplotlib.pyplot as plt
```

2. Ahora utilizaremos el método `.imread()` de OpenCV para abrir una imagen y guardarla en una variable:

```python title="Leer una imagen y guardarle en memoria"
imagen=cv.imread("./imagen.png")
```

3. Para obtener la forma de esta misma imagen, en aspecto (ancho, alto, canales de color), utilizaremos la variable `imagen` y el método `.shape()`:

```python title="Imprimir la forma de la imagen"
print(imagen.shape)
```

4. Ahora utilizaremos el método `.imshow()` para mostar la imagen:

```python title="Mostrar la imagen"
plt.imshow(imagen)
```

Esto nos dará como respuesta la imagen que previamente leímos y se mostrará como si estuviera en un plano con coordenadas.

5. Finalmente en este ejemplo vamos a poner a prueba los mapas de colores que mencionamos anteriormente. Este código nos mostrará una sección de la imágen importada, en el mapa de color viridis (este color es el utilizado predeterminadamente para que las personas que tienen complicaciones para ver ciertos colores puedan observarla)

```python title="Mostrar un pedazo de la imagen en el mapa de color viridis"
plt.imshow(imagen[200:400,200:400,0], cmap="viridis")
```

En caso de querer verla en escala de grises, el código que se utiliza es este:

```python title="Mostrar un pedazo de la imagen en el mapa de color escala de grises"
plt.imshow(imagen[200:400,200:400,0], cmap="gray")
```

## 🌱 Crear una imagen desde cero

Ahora si quisiéramos crear una imágen desde 0, de color negro se podría realizar de la siguiente manera:

1. Como primer instancia importamos la biblioteca OpenSV con el seudonombre `cv` y Matplotlib como `plt`:

```python title="Importar OpenCV y Matplotlib"
import cv2 as cv
import matplotlib.pyplot as plt
```

2. Declararemos la variable `negra` con ayuda de la librería NumPy y el método zeros, esto nos creará una matriz llena de ceros de unas medidas en específico. El cero representa el negro, generando una imagen negra.

```python title="Crear una matriz llena de ceros"
negra = np.zeros((300,300), dtype=np.uint8)
```

3. Como tercer paso para poder guardar nuestra imágen tenemos dos opciones, una de ellas se realiza con OpenCV y la segunda se realiza con Matplotlib. La que es con OpenCV utiliza el método `imwrite()`, que nos permite guardarla con el nombre indicado por el usuario y la variable anterior representando la imagen:

```python title="Guardar la imagen en el disco por medio de OpenCV"
cv.imwrite("negra.jpg", negra)
```

En la cuestión de querer utilizar Matplotlib, está maneja el método `imsave()`:

```python title="Guardar la imagen en el disco por medio de Matplotlib"
plt.imsave("negra.jpg", negra)
```

Como estos ejemplos, existen diversas maneras para poder manipular imágenes hasta crearlas a través de recursos como Matplotlib, OpenCV, entre otros.
