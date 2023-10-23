---
sidebar_label: "📊 Histograma"
sidebar_position: 7
---

# 📊 Histograma

Es una representación visual de una variable que utiliza barras, donde el tamaño de cada barra refleja la frecuencia o cantidad de los valores representados de manera proporcional.

Este puede estar conformado por:

**El eje x (hortizontal):** 
- Este eje nos representa los valores de intensidad de cada uno de los pixeles de la imagen correspondiente, en caso de las imágenes en escala de grises; los valores van desde 0 (negro) hasta el 255 (blanco). 
- Cada punto en el eje horizontal del histograma corresponde a un valor de intensidad, estos son enumerados de izquierda a derecha. 
- En el caso de las imágenes de color, tenemos tres histogramas separados, uno para cada canal correspondiente (RGB).

**Eje Y (vertical):** 
- Este eje en el histograma nos muestra la cantidad de píxeles que tienen un valor de intensidad específico en las imágenes correspondientes. 
- La altura de cada barra en el histograma representa cuántos píxeles tiene ese valor de intensidad. 

Debido a esto la combinación de los dos ejes nos representarán la cantidad de píxeles que tiene cada imagen en cada posible valor de intensidad. Si el histograma se concentra en un rango estrecho de valores de intensidad, la imagen tiende a tener bajo contraste. En cambio, cuando el histograma se distribuye ampliamente a lo largo de todo el rango de valores, la imagen suele tener un alto contraste.

Para poder realizar el cálculo del histograma de una imágen se requiere seguir ciertos pasos: 

1. Como primer paso debemos importar las bibliotecas necesarias para realizar este proceso. En este caso utilizaremos la biblioteca OpenCV 

```python title="Importar OpenCV"
import cv2 as cv
```

2. A continuación, debemos cargar la imagen en la que deseamos calcular el histograma. 

```python title="Leer una imagen y guardarla en memoria"
img = cv.imread('nombre_de_la_imagen.jpg', 0)
```

3. En este caso para calcular el histograma de la imágen es necesario utilizar la función: cv.calcHist

```python title="Calcular histograma"
hist = cv.calcHist([img], [0], None, [256], [0, 256]).
   # calcHist(matriz, canales, máscara, tamaño del histograma, rango)
```

4. Para poder visualizar el histograma es necesario el uso de otra biblioteca debido a que este mismo tiene la presentación de una matriz columna, por lo que no permite que se vea como imagen. Por lo tanto la biblioteca que se necesita es matplotlib debido a que la función 'plot' sirve para crear gráficos. Dependiendo del tipo de dato que le demos como argumento, generará diferentes tipos de gráfica. 

```python title="Visualizar histograma"
plt.plot(histograma)
```
![Histograma1](/img/procesamiento-de-imagenes/imagenes/transformaciones/hist1.png)

De igual manera se presentará un ejemplo ilustrativo del cálculo de histogramas utilizando los pasos indicados anteriormente

```python title="Histograma por canales BGR"
histograma_b = cv.calcHist([b], [0], None, [256], (0, 256))
plt.plot(histograma_b, “b”)
histograma_g= cv.calcHist([b], [0], None, [256], (0, 256))
plt.plot(histograma_g, “g”)
histograma_r = cv.calcHist([b], [0], None, [256], (0, 256))
plt.plot(histograma_r, “r”)
```
![Histograma2](/img/procesamiento-de-imagenes/imagenes/transformaciones/hist2.png)


## 🎚️ Ecualización de un Histograma
La ecualización del histograma es una técnica que es utilizada para mejorar el contraste y la calidad visual de las imágenes. A través de este proceso se redistribuyen los niveles de intensidad de manera que los detalles sean mayormente visibles y los objetos de interés más distinguibles

La ecualización del histograma se realiza mediante estos pasos:

1. Para poder realizar el proceso de ecualización es fundamental haber realizado el cálculo del histograma, este se puede realizar con los pasos que previamente se indicaron.
2. Como segunda instancia a partir del histograma original, se debe crear una función de transformación que permite mapear los niveles de intensidad a nuevos niveles.
3. Finalmente la función se aplica a cada uno de los píxeles de la imagen original, lo que da como resultado una imagen nueva ecualizada. Este proceso lo que hace es redistribuir los valores de intensidad de manera que abarque el rango disponible mejorando así el contraste de la imagen. 

A continuación se puede observar cómo es que este mismo proceso se realizaría en una imágen a escala de grises:

```python title="Histograma en escala de grises"
​​plt.subplot(121); plt.imshow(img, "gray")
​​plt.subplot(122); plt.plot(histograma)
```

![Histograma3](/img/procesamiento-de-imagenes/imagenes/transformaciones/hist3.png)

```python title="Ecualizacion del histograma en escala de grises"
img_eq = cv.equalizeHist(img)
histograma_eq = cv.calcHist([img_eq], [0], None, [256], (0, 256))
plt.subplot(121); plt.imshow(img_eq, "gray")
plt.subplot(122); plt.plot(histograma_eq)
```

![Histograma4](/img/procesamiento-de-imagenes/imagenes/transformaciones/hist4.png)

Sin embargo para poder realizar este proceso en una imágen de color se vería de esta manera:
```python title="Ecualizacion del histograma a color"
img_eq_b = cv.equalizeHist(b)
img_eq_g = cv.equalizeHist(g)
img_eq_r = cv.equalizeHist(r)
img_eq_rgb = cv.merge((img_eq_r, img_eq_g, img_eq_b))
histograma_eq_r = cv.calcHist([img_eq_r], [0], None, [256], (0, 256))
histograma_eq_g = cv.calcHist([img_eq_g], [0], None, [256], (0, 256))
histograma_eq_b = cv.calcHist([img_eq_b], [0], None, [256], (0, 256))
plt.subplot(121); plt.imshow(img_eq_rgb)
plt.subplot(122); plt.plot(histograma_eq_r, "r")
plt.subplot(122); plt.plot(histograma_eq_g, "g")
plt.subplot(122); plt.plot(histograma_eq_b, "b")
```

![Histograma5](/img/procesamiento-de-imagenes/imagenes/transformaciones/hist5.png)