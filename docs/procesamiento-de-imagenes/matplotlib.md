---
sidebar_label: '🎨 Matplotlib'
sidebar_position: 7
---

# 🎨 Matplotlib

## 🌟 Introducción

Es una biblioteca que fundamentalmente nos permite plotear imágenes en nuestro notebook. Aunque tiene otras utilidades, en este caso lo utilizaremos para mostrar las imágenes que manejemos con OpenCV.

## 🎠 ¿Cómo instalar Matplotlib?

Podemos instalar Matplotlib con ayuda de `pip`, ejecutando este comando en nuestra linea de comandos o en nuestro entorno virtual:

```bash title="Instalar OpenCV con pip"
pip install Matplotlib
```

Ahora podemos importarlo en nuestro script utilizando un alias, como se usa normalmente:

```python title="Importar la función de plotear de Matplotlib"
import matplotlib.pyplot as plt
```

## 🔧 Métodos de Matplotlib

### .imshow()

Este método nos permite plotear, mostrar una imagen en nuestro notebook. La variable que recibe este método puede ser una matriz o una imagen de OpenCV.

```python title="Ejemplo de cómo mostrar una imagen con Matplotlib"
plt.imshow(imagen)
```

Si tenemos una imagen que no sea a color, tendremos que específicar con ayuda del argumento `cmap` nuestro mapa de color:

```python title="Ejemplo de cómo mostrar una imagen con Matplotlib y especificar un mapa de color"
plt.imshow(imagen, cmap="gray")
```

## 📄 Mostrar múltiples imágenes al mismo tiempo (subplot)

Es muy posible que queramos mostrar diferentes imágenes (o una misma imagen en diferentes etapas de su manipulación) al mismo tiempo para poder compararlas, con Matplotlib podemos hacer lo siguiente para conseguirlo:

```python title="Ejemplo de cómo mostrar diferentes imágenes al mismo tiempo"
plt.subplot(131)
plt.imshow(imagenRed, cmap="gray")
plt.title("Canal Red")

plt.subplot(132)
plt.imshow(imagenGreen, cmap="gray")
plt.title("Canal Green")

plt.subplot(133)
plt.imshow(imagenBlue, cmap="gray")
plt.title("Canal Blue")
```

O también lo podemos hacer de la forma corta, encadenando los métodos:

```python title="Ejemplo de cómo mostrar diferentes imágenes al mismo tiempo"
plt.subplot(131); plt.imshow(manzanaRed, cmap="gray"); plt.title("Canal Red")
```
