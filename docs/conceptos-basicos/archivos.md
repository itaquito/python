---
sidebar_label: "Archivos"
sidebar_position: 16
---

# 📂 Archivos (files)

Los archivos son documentos que presentan un conjunto de información ordenada. Para acceder a ellos basta con utilizar la función "open()". Dentro de la misma se debe de colocar la ruta y el nombre del archivo. Ahora bien, de no especificar más el archivo se abrirá en modo lectura, pero si se desea un modo en particular este se puede aclarar después del nombre del archivo en la función "open()". Los modos que se pueden usar son "r" para leer, "w" para editar el archivo y "a" para añadir información en el mismo.

## ✏️ Ejemplos

```python title="Ejemplo de cómo abrir un archivo"
txt = open("mbox.txt") # Un archivo con el nombre "mbox.txt" debe existir en la misma carpeta que este documento.
```

## read()

Para imprimir su contenido se debe de ocupar la función "print" y "read()".

```python title="Ejemplo de la función read()"
print(txt.read())

# Este código imprime el contenido del archivo
```

La función "read()" sirve para leer y guardar la información del archivo en una variable, por lo que puede igualarse la variable bajo la cual se guardó la información a otra con el fin de que sea una cadena de caracteres. En este caso su "len" daría la cantidad de caracteres del archivo.

```python title="Otro ejemplo de la función read()"
txt1 = txt.read()
type(txt1) # Es de tipo str

len(txt1) # Cantidad de caracteres del archivo
```

## readlines()

La función "readlines()" por su parte capta las líneas de un archivo y las guarda en una lista, siendo cada línea un elemento en la lista. En este caso su "len" daría la cantidad de líneas.

```python title="Ejemplo de la función readlines()"
txt2 = txt.readlines()
type(txt2) # Es de tipo lista

len(txt2) # Cantidad de líneas del archivo
```

## write()

Haciendo uso de "with" se puede abrir un archivo, y una vez que se termine de ejecutar el código de su cuerpo se va a cerrar automáticamente el archivo.

```python title="Ejemplo de cómo abrir un archivo con with y escribir con write()"
with open("mbox.txt", "a") as txt_file:
	txt_file.write("Código de Python") # Escribe en el documento
```

Anteriormente se ve el uso del método "write()". Este sirve para escribir texto en un archivo en específico.

## Librería glob

La función "glob" de la librería "glob" nos devuelve las rutas de un directorio para después podamos traer listas de archivos.

```python title="Ejemplo de la librería glob"
from glob import glob
ruta = "Clase 7/*.*" # Esta ruta hace referencia a todos los archivos (sin importar su nombre o extensión) dentro de la carpeta "Clase 7"
g = glob(ruta)
print(g)
```
