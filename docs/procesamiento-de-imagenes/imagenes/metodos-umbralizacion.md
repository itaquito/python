---
sidebar_label: '☂️ Métodos de Umbralización'
sidebar_position: 11
---

# ☂️ Métodos de Umbralización

Como se vio anteriormente, la umbralización es una técnica que permite binarizar una imagen en escala de grises a partir de un valor estándar que aumenta o disminuye la intensidad de cada pixel según sea el caso. La aplicación común de la umbralización (threshold) cuenta con ciertas limitantes a la hora de ser aplicada en diversas imágenes. A razón de ello es que existen otros métodos complementarios para la umbralización.

## Umbralización de Otsu

Un problema común a la hora de establecer el umbral es elegir el valor más apropiado del mismo para mantener un balance en la imagen al realizar la binarización. De no suceder esto, dicha imagen podría llegar a perder información y verse ciertamente distinta. Frente a esto, lo que hace el método de Otsu es conseguir de manera automática el mejor umbral posible para ser aplicado en la umbralización global.

En OpenCV, este tipo de umbralización se puede ocupar si en el método 'cv.threshold()' ingresamos como argumento el tipo de binarización a realizar 'cv.THRESH_OTSU'. Cabe recalcar que aunque uno de los parámetros de la función sea el valor del umbral, nosotros podemos ingresar una variable en su lugar, y esto en vista de que al final el método de Otsu elegirá el valor más óptimo partiendo de los propios valores de la imagen.

```python title="Ejemplo"
    imagen = cv.imread("../OpenCV-images/bw.png", 0)
    UMBRAL = 0
    img_otsu = cv.threshold(imagen, UMBRAL, 255, cv.THRESH_BINARY | cv.THRESH_OTSU)
    plt.imshow(img_otsu[1], cmap="gray")
```

<img src="/img/procesamiento-de-imagenes/imagenes/metodos-umbralizacion/bw-otsu.png" alt="bw-otsu" width="400"/>

## Umbralización Adaptativa

La umbralización global puede llegar a ser efectiva en muchos casos, pero también hay muchos otros en los que no lo es. Esto se debe a que las imágenes pueden llegar a poseer distinta intensidad y luminosidad según la zona en la que nos ubiquemos de ésta, por lo que aplicar un mismo umbral a toda la imagen podría resultar perjudicial. Esta afectación podría generar que dejen de ser visibles diversos elementos de nuestro interés. Debido a esta razón, la umbralización adaptativa es una técnica que resulta muy útil. El método propuesto analiza cada pixel con base a una pequeña región que lo rodea, y así es como determina un umbral en específico para cada zona de la imagen.

En OpenCV, encontramos este método como 'cv.adaptiveThreshold()'. Hay en sí dos detalles a destacar de dicho método. El primero es que este no recibe como argumento un umbral, y lo cual hace sentido cuando entendemos que el umbral varía de pixel a pixel puesto que no hablamos de una umbralización global, sino local. El segundo detalle es que es necesario especificar el tipo de umbralización adaptativa, y para lo cual podemos ocupar la Mediana o la Gaussiana.

```python title="Ejemplo"
    imagen = cv.imread("../OpenCV-images/bw.png", 0)
    img_adapt = cv.adaptiveThreshold(imagen, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 11, 5)
    plt.imshow(img_adapt, cmap="gray")
```

<img src="/img/procesamiento-de-imagenes/imagenes/metodos-umbralizacion/bw-adapt.png" alt="bw-adapt" width="400"/>
