---
sidebar_label: '🤹 RGB'
sidebar_position: 6
---

# 🤹 RGB

Sistema de composición de colores que surge a partir de los colores primarios de la luz: **Red** (rojo), **Green** (verde) y **Blue** (azul).

<img src="/img/procesamiento-de-imagenes/espacios-de-color/RGB.jpeg" alt="RGB" width="400"/>

Una imagen es un conjunto de pixeles, pero aunado a ello tenemos que una imagen se puede componer de otros elementos como lo son las capas de color que se distribuyen en canales. Dichas capas permiten que podamos apreciar una respectiva imagen con ciertos colores.

En el caso del modelo RGB hay tres canales y, en cada uno, los elementos pueden tomar valores entre 0 y 255.

## RGB vs BGR

BGR es un modelo prácticamente igual a RGB, con la única diferencia de que el orden de los canales está invertido. De esta forma empieza por el canal verde y termina con el rojo. Para transformar una imagen de BGR a RGB ocupamos la función de OpenCV: **_'cv.cvtcolor'_**, y luego especificamos el cambio de espacio de color a realizar, siendo en este caso **'cv.COLOR_BGR2RGB'**.

<img src="/img/procesamiento-de-imagenes/espacios-de-color/RGBvsBGR.png" alt="RGBvsBGR" width="400"/>
