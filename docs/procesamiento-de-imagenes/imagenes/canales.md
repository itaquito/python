---
sidebar_label: '🚣‍♀️ Canales de una imagen'
sidebar_position: 3
---

# 🚣‍♀️ Canales de una imagen

En la librería de **Matplotlib** y **OpenCV**, cuentan con una gran serie de mapas de color incorporados, la idea de elegir un buen mapa de colores es encontrar una buena representación de colores para el conjunto de datos. Un canal es una forma de referirse a un componente de cierta imagen, el canal rojo, el canal verde, el canal azul, en el caso de RGB.

Tenemos diversos mapas de colores:

## 🔗 Secuencial

Cambio en la luminosidad, y a menudo, saturación del color incrementalmente.

![Mapa de color secuencial](/img/procesamiento-de-imagenes/imagenes/canales/secuencial.png)

El código que se utiliza para este tipo de mapa es:

```python title="Ejemplo de cómo se ve el mapa de color secuencial en Matplotlib"
plot_color_gradients('Sequential', ['Greys', 'Purples', 'Blues', 'Greens', 'Oranges', 'Reds', 'YlOrBr', 'YlOrRd', 'OrRd', 'PuRd', 'RdPu', 'BuPu', 'GnBu', 'PuBu', 'YlGnBu', 'PuBuGn', 'BuGn', 'YlGn'])
```

## 🤖 Divergente

Cambio en la luminosidad y posiblemente saturación de dos diferentes colores que se encuentran en el medio de un color insaturado.

![Mapa de color divergente](/img/procesamiento-de-imagenes/imagenes/canales/divergente.png)

El código que se utiliza para este tipo de mapa es:

```python title="Ejemplo de cómo se ve el mapa de color divergente en Matplotlib"
plot_color_gradients('Diverging', ['PiYG', 'PRGn', 'BrBG', 'PuOr', 'RdGy', 'RdBu', 'RdYlBu', 'RdYlGn', 'Spectral', 'coolwarm', 'bwr', 'seismic'])
```

## 🔄 Cíclico

Cambio en la luminosidad de dos colores diferentes que se encuentran en el medio y el principio/final en un color insaturado; debe ser usado para valores que se ajustan a los extremos.

![Mapa de color cíclico](/img/procesamiento-de-imagenes/imagenes/canales/ciclico.png)

El código que se utiliza para este tipo de mapa es:

```python title="Ejemplo de cómo se ve el mapa de color cíclico en Matplotlib"
plot_color_gradients('Cyclic', ['twilight', 'twilight_shifted', 'hsv'])
```

## 🧮 Cualitativo

A menudo son colores misceláneos, debe utilizarse para representar información que no tiene orden.

![Mapa de color cualitativo](/img/procesamiento-de-imagenes/imagenes/canales/cualitativo.png)

El código que se utiliza para este tipo de mapa es:

```python title="Ejemplo de cómo se ve el mapa de color cualitativo en Matplotlib"
plot_color_gradients('Qualitative', ['Pastel1', 'Pastel2', 'Paired', 'Accent', 'Dark2', 'Set1', 'Set2', 'Set3', 'tab10', 'tab20', 'tab20b', 'tab20c'])
```
