---
sidebar_label: '🐍 PDI con Python'
sidebar_position: 2
---

# 🐍 PDI con Python (Pentaho Data Integration)

Como su nombre nos indica; es la herramienta dentro de la sección Pentaho que se centra en llevar a cabo la integración de datos.

En PDI cada dígito puede llegar a ser interpretado como un arreglo. Lo normal es que las imágenes tengan valores entre 0 y 255.

En las imágenes en blanco y negro, para determinar la intensidad de un píxel, es necesario analizar valores en el rango de 0 a 1. De hecho, podemos utilizar esta escala para visualizar y comprender cómo se comportan dichas intensidades.

- `1.0` = Totalmente negro
- `0.1` - `1.0` = Escala de grises
- `0` = Blanco

![Ejemplo del PDI en Python](/img/procesamiento-de-imagenes/imagenes/pdi-con-python/pdi.png)

En el caso de las imágenes a color, se pueden representar mediante una combinación de los colores Rojo (Red), Verde (Green) y Azul (Blue). Esta mezcla de colores nos permite representar una extensa variedad de tonalidades al combinar distintas proporciones de estos 3 colores.

Una imágen de color al ser un arreglo le permite tener 3 dimensiones: alto, ancho y los canales de color. Esto significa que cuando se lee una imágen y checas su forma, tiene un aspecto como este: (1280, 720, 3) mostrando así que la cantidad de 1280 corresponde a los pixeles de ancho, 720 a los pixeles de alto y 3 canales de color.

Es importante tener en cuenta que la computadora no sabe que un canal es de color rojo, sino que hay 3 canales de intensidad, por lo que el usuario debe establecer que color tendrá el canal. Cada uno de estos canales representa la misma imagen en escala de grises.
