---
sidebar_label: '🌟 Introducción'
sidebar_position: 1
---

# 🌟 Introducción

Un espacio de color es un modelo tridimensional que permite representar un determinado color a partir de la combinación de otros colores.En dicho sistema de coordenadas de tres dimensiones, cada color se representa por un único punto en el espacio, y para lo cual su ubicación determina sus propios atributos. 

## Representación de colores

El GAMUT, o Gama de Colores, es el conjunto de colores que puede representar un espacio de color.

![Gama de colores](/img/procesamiento-de-imagenes/espacios-de-color/gamut.png)

Cualquier espacio de color puede ser transformado a otro espacio de color con MATEMÁTICAS. Aunque es posible que perdamos una gama de colores si lo transformamos a un espacio de color que tenga menos colores.

| Color | Diferentes representaciones |
| --- | --- |
|![Color rosita](/img/procesamiento-de-imagenes/espacios-de-color/rosita.png)|<ul><li>**RGB:** 247, 85, 144</li><li>**CMYK:** 0%, 66%, 42%, 3%</li><li>**HSV:** 338°, 66%, 97%</li></ul>|

## Espacios de color en OpenCV
- OpenCV tiene más de 150 métodos para ayudarnos a convertir imágenes a los diferentes espacios de color.
- Todos pueden ser utilizados vía el famosísimo: ***cv.cvtColor()***
