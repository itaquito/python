---
sidebar_label: '📷 Imágenes'
sidebar_position: 4
---

# 📷 Imágenes

## 🤔 ¿Qué es un imágen?

Es una representación visual, que permite observar la apariencia de un objeto real o imaginario. Una imagen digital es una representación de 2 dimensiones, la cual está compuesta por m x n pixels
Las imágenes a color pueden representarse como una combinación de los colores **Rojo (R), Verde (G), Azul (B)**.

## 🐍 PDI con Python (Pentaho Data Integration)

Como su nombre nos indica; es la herramienta dentro de la sección Pentaho que se centra en llevar a cabo la integración de datos.

En PDI cada dígito puede llegar a ser interpretado como un arreglo. Lo normal es que las imágenes tengan valores entre 0 y 255.

En las imágenes en blanco y negro, para determinar la intensidad de un píxel, es necesario analizar valores en el rango de 0 a 1. De hecho, podemos utilizar esta escala para visualizar y comprender cómo se comportan dichas intensidades.

- `1.0` = Totalmente negro
- `0.1` - `1.0` = Escala de grises
- `0` = Blanco

![Ejemplo del PDI en Python](/img/procesamiento-de-imagenes/imagenes/pdi.png)

En el caso de las imágenes a color, se pueden representar mediante una combinación de los colores Rojo (Red), Verde (Green) y Azul (Blue). Esta mezcla de colores nos permite representar una extensa variedad de tonalidades al combinar distintas proporciones de estos 3 colores.

Una imágen de color al ser un arreglo le permite tener 3 dimensiones: alto, ancho y los canales de color. Esto significa que cuando se lee una imágen y checas su forma, tiene un aspecto como este: (1280, 720, 3) mostrando así que la cantidad de 1280 corresponde a los pixeles de ancho, 720 a los pixeles de alto y 3 canales de color.

Es importante tener en cuenta que la computadora no sabe que un canal es de color rojo, sino que hay 3 canales de intensidad, por lo que el usuario debe establecer que color tendrá el canal. Cada uno de estos canales representa la misma imagen en escala de grises.

Por otro lado tenemos la librería de **matplotlib**, que tiene una serie de mapas de color incorporados, la idea de elegir un buen mapa de colores es encontrar una buena representación de colores para el conjunto de datos.

Tenemos diversos mapas de colores:

### 🔗 Secuencial

Cambio en la luminosidad, y a menudo, saturación del color incrementalmente.

![Mapa de color secuencial](/img/procesamiento-de-imagenes/imagenes/secuencial.png)

El código que se utiliza para este tipo de mapa es:

```python title="Ejemplo de cómo se ve el mapa de color secuencial en Matplotlib"
plot_color_gradients('Sequential', ['Greys', 'Purples', 'Blues', 'Greens', 'Oranges', 'Reds', 'YlOrBr', 'YlOrRd', 'OrRd', 'PuRd', 'RdPu', 'BuPu', 'GnBu', 'PuBu', 'YlGnBu', 'PuBuGn', 'BuGn', 'YlGn'])
```

### 🤖 Divergente

Cambio en la luminosidad y posiblemente saturación de dos diferentes colores que se encuentran en el medio de un color insaturado.

![Mapa de color divergente](/img/procesamiento-de-imagenes/imagenes/divergente.png)

El código que se utiliza para este tipo de mapa es:

```python title="Ejemplo de cómo se ve el mapa de color divergente en Matplotlib"
plot_color_gradients('Diverging', ['PiYG', 'PRGn', 'BrBG', 'PuOr', 'RdGy', 'RdBu', 'RdYlBu', 'RdYlGn', 'Spectral', 'coolwarm', 'bwr', 'seismic'])
```

### 🔄 Cíclico

Cambio en la luminosidad de dos colores diferentes que se encuentran en el medio y el principio/final en un color insaturado; debe ser usado para valores que se ajustan a los extremos.

![Mapa de color cíclico](/img/procesamiento-de-imagenes/imagenes/ciclico.png)

El código que se utiliza para este tipo de mapa es:

```python title="Ejemplo de cómo se ve el mapa de color cíclico en Matplotlib"
plot_color_gradients('Cyclic', ['twilight', 'twilight_shifted', 'hsv'])
```

### 🧮 Cualitativo

A menudo son colores misceláneos, debe utilizarse para representar información que no tiene orden.

![Mapa de color cualitativo](/img/procesamiento-de-imagenes/imagenes/cualitativo.png)

El código que se utiliza para este tipo de mapa es:

```python title="Ejemplo de cómo se ve el mapa de color cualitativo en Matplotlib"
plot_color_gradients('Qualitative', ['Pastel1', 'Pastel2', 'Paired', 'Accent', 'Dark2', 'Set1', 'Set2', 'Set3', 'tab10', 'tab20', 'tab20b', 'tab20c'])
```

## 📝 Ejemplos prácticos

### 🌳 A partir de una imagen

Ahora bien que sabemos lo que es una imágen y cómo es que esta se comporta, mostraremos un ejemplo de cómo se usan los comandos de opencv para una imágen:

1. Como primer instancia importamos la biblioteca OpenSV con el seudonombre `cv` y Matplotlib como `plt`:

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

### 🌱 Crear una imagen desde cero

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
