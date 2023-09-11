---
sidebar_label: '🌟 Introducción'
sidebar_position: 1
---

# 🌟 Introducción

Es una biblioteca multiplataforma de código abierto desarrollada en C++ por Intel que contiene una gran cantidad de algoritmos de visión artificial. También incluye conectores para otros lenguajes como Python, MATLAB, Java, etc.

OpenCV-Python es una biblioteca de enlaces de Python diseñada para resolver problemas de visión por computadora. Hace uso de numpy, que es una biblioteca altamente optimizada para operaciones numéricas con una sintaxis de estilo MATLAB, Todas las estructuras de arreglos de OpenCV se convierten en arreglos Numpy. Esto también facilita la integración con otras bibliotecas que usan Numpy como SciPy y Matplotlib.

## 🔧 Métodos de OpenCV

### .imread()

Posiblemente el método más fundamental de OpenCV. Sirve para leer una imagen y poder guardarla en una variable para posteriormente manipularla.

```python title="Ejemplo de cómo abrir una imagen en OpenCV"
  imagen = cv.imread("./imagen.png")
```

:::tip Ruta de la imagen

El argumento de `cv.imread()` cambiará dependiendo de en dónde esté tu imagen. Es posible que inclusive tengas que hacer modificaciones acorde al sistema operativo que estés usando.

:::

### .cvtColor()

Sirve para cambiar el formato del color que tiene una imagen por el que se desee.

```python title="Ejemplo de cómo cambiar el formato de una imagen de BGR a RGB"
  imagen = cv.cvtColor(imagen, cv.COLOR_BGR2RGB)
```

:::tip Constantes en OpenCV

OpenCV cuenta con múltiples constantes para este método y algunos otros, en el ejemplo anterior utilizamos la constante `cv.COLOR_BGR2RGB`. Puedes identificar las constantes porque siempre estarán en MAYÚSCULAS. Si usas VSCode, los podrás ver en el autocompletado cuando escribes `cv.`.

:::

### .imwrite()

Nos permite guardar nuestra imagen con el nombre y el tipo de archivo de nuestra elección una vez hayamos terminado de modificarla.

```python title="Ejemplo de cómo guardar una imagen en nuestro disco"
  cv.imwrite("nombre_de_imagen.jpg", imagen)
```
