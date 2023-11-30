---
sidebar_label: '🌐 Componentes conectados'
sidebar_position: 9
---

# 🌐 Componentes conectados

Un componente en una imagen son todos aquellos pixeles que están conectados o adyacentes entre los mismos. Cuando binarizamos una imagen y extraemos sus componentes, podemos separa sus elementos del fondo, como figuras, letras o números para analizarlos mejor de forma independiente.

OpenCV tiene múltiples métodos para realizar esta operación, pero en esta ocasión utilizaremos el método `connectedComponentsWithStats`.

## ✏️ Ejemplo

```python title="Ejemplo de cómo usar el método connectedComponentsWithStats"
# Primero abrimos la imagen con OpenCV
img = cv.imread("./OpenCV-images/detect_blob.png", 0)

# Después la binarizamos por el método Gaussiano y le hacemos una copia.
img_bin_dos = cv.adaptiveThreshold(img, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 11, 5)
output = img_bin_dos.copy()

# El método connectedComponentsWithStats nos regresa 4 valores.
(numLabels, labels, stats, centroids) = cv.connectedComponentsWithStats(img_bin_dos)

# La primer etiqueta es el fondo, por lo que empezamos en la segunda
for i in range(1, numLabels):
  # Extraemos las coordenadas y tamaño del componente
  x = stats[i, cv.CC_STAT_LEFT]
  y = stats[i, cv.CC_STAT_TOP]
  w = stats[i, cv.CC_STAT_WIDTH]
  h = stats[i, cv.CC_STAT_HEIGHT]
  area = stats[i, cv.CC_STAT_AREA]
  (cX, cY) = centroids[i]

  # Dibujamos un rectángulo en el componente y un círculo en su centro
  cv.rectangle(output, (x, y), (x + w, y + h), (0, 0, 0), 3)
  cv.circle(output, (int(cX), int(cY)), 4, (0, 0, 0), -1)

# Mostramos la imagen final
plt.imshow(output, cmap="gray")
```

El método `connectedComponentsWithStats` nos regresa 4 valores con toda la información necesaria para identificar los componentes de la imagen.

- `numLabels` es el número de etiquetas o componentes que encontró en la imagen
- `labels` es una matriz del tamaño de la imagen original que nos muestra dónde están las etiquetas
- `stats` contiene toda la información necesaria para ubicar cada uno de los componentes, como sus coordenadas y tamaño
- `centroids` contiene la información para identificar el centro de los componentes

## 🕹️ Otros métodos

Otros métodos que se utilizan en OpenCv para encontrar los componentes conectados son `connectedComponents`, `connectedComponentsWithAlgorithm` y `connectedComponentsWithStatsWithAlgorithm`. Algunos de ellos requieren poder de procesamiento en la tarjeta gráfica, en contraste de los otros métodos que utilizan el CPU.
