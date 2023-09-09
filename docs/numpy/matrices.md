---
sidebar_label: '📐 Matrices'
sidebar_position: 2
---

# 📐 Matrices

## ✏️ Definición De Matrices 
 Una matriz es un arreglo bidimensional de números, símbolos o elementos dispuestos en filas y columnas. Cada elemento en una matriz se encuentra ubicado en una posición específica definida por su fila y columna. Las matrices se utilizan en diversas ramas de las matemáticas, la física, la informática y muchas otras disciplinas para representar y manipular datos de manera organizada y eficiente.

 ### ¿Como crear una matriz en pyhton?
Para crear una matriz en python se debe importar la libreria numpy y luego crear un arreglo de numpy con los datos de la matriz.

```python title="Creación de una matriz en python"
import numpy as np
matriz = np.array([[1,2,3],[4,5,6],[7,8,9]]) 
#Aqui estamos creando una matriz de 3x3 los componentes de la matriz son los números del 1 al 9
tambien podemos usar
matriz1=np.random.random((3,3)) 
#Aqui estamos creando una matriz de 3x3, esto lo especificamos en el parentesis, especificamos cuantas columnas y filas queremos respectivamente. Los componentes de la matriz son números aleatorios entre 0 y 1
```
### 🛠️ Algunos métodos de matrices con numpy


#### 1️⃣ Método .max()
Este método nos permite encontrar el valor máximo de una matriz.


```python title="Encontrar el valor maximo de una matriz"
import numpy as np
matriz = np.array([[1,2,3],[4,5,6],[7,8,9]])
matriz.max()
```


#### 2️⃣ Método .min()
Este método nos permite encontrar el valor mínimo de una matriz.


```python title="Encontrar el valor minimo de una matriz"
import numpy as np
matriz = np.array([[1,2,3],[4,5,6],[7,8,9]])
matriz.min()
```


#### 3️⃣ Método .shape
Este atributo de la clase de las matrices nos permite encontrar el las dimensiones(Número de columnas y de filas) de una matriz.


```python title="Encontrar las dimensiones de una matriz"
import numpy as np
matriz = np.array([[1,2,3],[4,5,6],[7,8,9]])
matriz.shape
```


#### 4️⃣ Método .zeros()
Este método nos permite crear una matriz de ceros. Tenemos que especificar las dimensiones de la matriz.


```python title="Crear una matriz de ceros"
import numpy as np
matriz = np.zeros((3,3))
#Aqui estamos creando una matriz de 3x3, esto lo especificamos en el parentesis, especificamos cuantas columnas y filas queremos respectivamente. Los componentes de la matriz son ceros
```


#### 5️⃣ Método .ones()
Este método es parecido al anterior, pero en vez de crear una matriz de ceros, crea una matriz de unos.


```python title="Crear una matriz de unos"
import numpy as np
matriz = np.ones((3,3))
#Aqui estamos creando una matriz de 3x3, esto lo especificamos en el parentesis, especificamos cuantas columnas y filas queremos respectivamente. Los componentes de la matriz son unos
```


#### 6️⃣ Método random.random()
Este método nos permite crear una matriz de números aleatorios entre 0 y 1. Tenemos que especificar las dimensiones de la matriz.


```python title="Crear una matriz de números aleatorios entre 0 y 1"
import numpy as np
matriz = np.random.random((3,3))
#Aqui estamos creando una matriz de 3x3, esto lo especificamos en el parentesis, especificamos cuantas columnas y filas queremos respectivamente. Los componentes de la matriz son números aleatorios entre 0 y 1
```


#### 7️⃣ Método .random.randint()
Este método nos permite crear una matriz de números aleatorios entre 0 y otro número entero. Tenemos que especificar las dimensiones de la matriz.


```python title="Crear una matriz de números aleatorios entre 0 y otro número entero"
import numpy as np
matriz = np.random.randint(10, size=(3,3))
#Aqui estamos creando una matriz de 3x3, esto lo especificamos en el parentesis, especificamos cuantas columnas y filas queremos respectivamente. Los componentes de la matriz son números aleatorios entre 0 y 10
```


#### 8️⃣ Método .random.seed()
Para entender este metodo tenemos que entender que en la programación no hay una aleatoriedad completa, sino más bien es una pseudo aleatoriedad, y por ello la semilla se utiliza para plantear el patrón de aleatoriedad. Y este método que sirve para inicializar una serie de números supuestamente aleatorios, mismo que puede llegarse a ocupar en matrices.


```python title="Crear una matriz de números "aleatorios" con semilla
import numpy as np
np.random.seed(123)
matriz = np.random.randint(10, size=(3,3))
#Aqui estamos creando una matriz de 3x3, esto lo especificamos en el parentesis, especificamos cuantas columnas y filas queremos respectivamente. Los componentes de la matriz son números aleatorios entre 0 y 10
```

#### 9️⃣ Método .where()
El método where() nos permite encontrar los indices de los elementos de una matriz que cumplan una condición. Por ejemplo:


```python title="Encontrar los indices de los elementos de una matriz que cumplan una condición"
import numpy as np
matriz = np.array([[1,2,3],[4,5,6],[7,8,9]])
np.where(matriz>5)
#Aqui estamos encontrando los indices de los elementos de la matriz que sean mayores a 5
```

Tambien podemos usar otra forma, la cual nos regresa los elementos de la matriz que cumplan la condición.


```python title="Encontrar los elementos de una matriz que cumplan una condición"
import numpy as np
matriz = np.array([[1,2,3],[4,5,6],[7,8,9]])
matriz[matriz>5]
#Aqui estamos encontrando los elementos de la matriz que sean mayores a 5
```

### 🤔 Conceptos basicos de matrices
Una matriz se compone por filas y columnas, las cuales se pueden representar de la siguiente manera:
n: Número de filas, m: Número de columnas. 
Por lo tanto nXm nos da el tamaño de la matriz.

## 📚 Tipos de Matrices
**Existen diferentes tipos de matrices, las cuales se clasifican según su forma y sus elementos. A continuación se presentan los tipos de matrices más comunes:**
 
### 1️⃣ Matriz fila
 La Matriz fila es una matriz muy sencilla ya que se compone de solamente una fila. Aunque puede tener N columnas. Por ejemplo:


```python title="Creación de una matriz Fila en python"
import numpy as np
matriz = np.array([[1,2,3]])
tambien podemos usar
matriz1=np.linspace(1,10,3) #Aqui estamos creando una matriz de 1x3, esto lo especificamos en el parentesis, especificamos cuantas columnas y filas queremos respectivamente. Los componentes de la matriz son números aleatorios entre 0 y 1
```

### 2️⃣ Matriz columna
Igualmente la Matriz Columna es muy sencilla ya que se compone de solamente una columna. Aunque puede tener N filas. Por ejemplo:


```python title="Creación de una matriz Columna en python"
import numpy as np
matriz = np.array([[1],[2],[3]])
```


### 3️⃣ Matriz cuadrada
Las Matrices Cuadradas son aquelllas que tienen el mismo número de filas que de columnas. **(n=m)** Por ejemplo:

```python title="Creación de una matriz Cuadrada (3x3) en python"
import numpy as np
matriz = np.array([[1,2,3],[4,5,6],[7,8,9]])
```


### 4️⃣  Matriz rectangular
Las matrices rectangulares son aquellas que tienen diferente número de filas que de columnas. **(n!=m)** Por ejemplo:

```python title="Creación de una matriz Rectangular(2x3) en python"
import numpy as np
matriz = np.array([1,2,3],[4,5,6])
```


### 5️⃣ Matriz diagonal
Las Matrices Diagonales son aquellas que tienen todos sus elementos fuera de la diagonal principal iguales a cero. Por ejemplo:

![Matriz diagonal](/img//numpy/matrices/diagonal.jpg)



### 6️⃣ Matriz Unidad (identidad)
La Matriz Identidad es una matriz cuadrada que tiene todos sus elementos de la diagonal principal iguales a 1 y los demás elementos iguales a cero. Por ejemplo:

```python title="Creación de una matriz identidad(3x3) en python"
import numpy as np
matriz = np.identity([1,2,3],[4,5,6],[7,8,9]) #Creación matriz identidad (3x3)
matriz1= np.eye(3) #Creación matriz identidad (3x3)
```

### ☝🏽️ Matrices triangulares
Las Matrices triangulares son aquellas que tienen todos sus elementos por encima o por debajo de la diagonal principal iguales a cero. Existen dos tipos de Matrices triangulares: Matriz Triangular Superior y Matriz Triangular Inferior.

#### 7️⃣ Matriz triangular superior
La Matriz Triangular Superior es aquella que tiene todos sus elementos por debajo de la diagonal principal iguales a cero.


#### 8️⃣ Matriz triangular inferior
La Matriz Triangular Inferior es aquella que tiene todos sus elementos por encima de la diagonal principal iguales a cero. 


En la siguiente imagen se muestran los dos tipos de matrices triangulares:


![Matriz triangular] (/img/numpy/matrices/triangular.jpg)

### 9️⃣ Matriz transpuesta
La Matriz transpuesta de cualquier matriz es aquella que se obtiene al cambiar las filas por las columnas de una matriz. Por ejemplo:


```python title="Creación de una matriz transpuesta en python"
import numpy as np
matriz = np.array([1,2,3],[4,5,6],[7,8,9])#Creación matriz (3x3)
Hay dos formas de trasponer la matriz:
matrizTraspuesta = matriz.T #Creación matriz traspuesta (3x3)
matrizTraspuesta=matriz.transpose() #Creación matriz traspuesta (3x3)

```


**Hay mas tipos de matrices, pero esto no es curso de Álgebra Lineal. 😅**