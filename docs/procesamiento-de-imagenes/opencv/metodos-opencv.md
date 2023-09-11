---
sidebar_label: '🔧 Métodos de OpenCV'
sidebar_position: 2
---

# 🔧 Métodos de OpenCV

OpenCV nos proporciona con diversos métodos para manejar imágenes:

## .imread()

Posiblemente el método más fundamental de OpenCV. Sirve para leer una imagen y poder guardarla en una variable para posteriormente manipularla.

```python title="Ejemplo de cómo abrir una imagen en OpenCV"
  imagen = cv.imread("./imagen.png")
```

:::tip Ruta de la imagen

El argumento de `cv.imread()` cambiará dependiendo de en dónde esté tu imagen. Es posible que inclusive tengas que hacer modificaciones acorde al sistema operativo que estés usando.

:::

## .cvtColor()

Sirve para cambiar el formato del color que tiene una imagen por el que se desee.

```python title="Ejemplo de cómo cambiar el formato de una imagen de BGR a RGB"
  imagen = cv.cvtColor(imagen, cv.COLOR_BGR2RGB)
```

:::tip Constantes en OpenCV

OpenCV cuenta con múltiples constantes para este método y algunos otros, en el ejemplo anterior utilizamos la constante `cv.COLOR_BGR2RGB`. Puedes identificar las constantes porque siempre estarán en MAYÚSCULAS. Si usas VSCode, los podrás ver en el autocompletado cuando escribes `cv.`.

:::

## .imwrite()

Nos permite guardar nuestra imagen con el nombre y el tipo de archivo de nuestra elección una vez hayamos terminado de modificarla.

```python title="Ejemplo de cómo guardar una imagen en nuestro disco"
  cv.imwrite("nombre_de_imagen.jpg", imagen)
```

## .split()

Nos permite separar los canales de una imagen. Dependiendo de los canales que tenga la imagen, son los canales que nos devolverá este método en forma de dupla:

```python title="Ejemplo de cómo extraer los canales de una imagen"
  canalRed, canalGreen, canalBlue = cv.split(imagen)
```
