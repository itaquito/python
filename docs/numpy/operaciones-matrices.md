---
sidebar_label: '➕ Operaciones con Matrices'
sidebar_position: 3
---

# ➕ Operaciones con Matrices

En Numpy podemos realizar operaciones con matrices, estas operaciones pueden ser entre matrices y escalares o entre matrices y matrices.
A continuación se presentan las operaciones que se pueden realizar con matrices.

## 📝 Operaciones Matrices-Escalares

### ✖ Multiplicación de una matriz por un escalar

Sea un escalar **k** que pertenece a los números R (reales) y una matriz **A** de tamaño **nXm**, la multiplicación de un escalar por una matriz se define como:
La multipicación de cada número de la matriz por el escalar **k**.

```python title="Multiplicación de una matriz por un escalar"
import numpy as np
k = 2
A = np.array([[1,2,3],[4,5,6],[7,8,9]])
print(k*A)
```

### ➗ División de una matriz por un escalar

Sea un escalar **k** que pertenece a los números R (reales) y una matriz **A** de tamaño **nXm**, la división de una matriz por un escalar se define como:
La división de cada número de la matriz por el escalar **k**.

```python title="División de una matriz por un escalar"
import numpy as np
k = 2
A = np.array([[1,2,3],[4,5,6],[7,8,9]])
print(A/k)
```

### ➗ División de un escalar por una matriz

Tambien existe la posibilidad de dividir un escalar por una matriz.

```python title="División de un escalar por una matriz"
import numpy as np
k = 2
A = np.array([[1,2,3],[4,5,6],[7,8,9]])
print(k/A)
```

### ☝🏽️ Potencias de una matrices

Sea una matriz **A** de tamaño **nXm** y un escalar **k** que pertenece a los números R (reales), la potencia de una matriz se define como:
La potencia de cada número de la matriz por el escalar **k**.

```python title="Potencia de una matriz"
import numpy as np
k = 2
A = np.array([[1,2,3],[4,5,6],[7,8,9]])
print(A**k)
```

#### 📐 Raiz cuadrada de una matriz

Podemos sacar la raiz cuadrada de la matriz usando potencias, elevando la matriz a 1/2. Ejemplo:

```python title="Raiz cuadrada de una matriz"
import numpy as np
A = np.array([[1,2,3],[4,5,6],[7,8,9]])
print(A**(1/2))
```

## 📝 Operaciones Matrices-Matrices

### ➕Suma de matrices

La suma de matrices solo son posibles cuando las dos matrices comparten el mismo tamaño. m1xn1=m2xn2. en este proceso los componentes de la matriz se suman con su correspondiente. Se suma A11(primer elemento de la matriz A) con B11(primer elemento de la matriz B).

```python title="Suma de matrices"
import numpy as np
Matrix1=np.array((1,2,3),(4,5,6),(7,8,9))
Matrix2=np.array((10,20,30),(40,50,60),(70,80,90))
Matrix1+Matrix2
```

### ➖ Resta de matrices

La resta al ser un tipo de suma se necesitan las mismas caracteristicas para que sea posible la resta.

```python title="Resta de matrices"
import numpy as np
Matrix1=np.array((1,2,3),(4,5,6),(7,8,9))
Matrix2=np.array((10,20,30),(40,50,60),(70,80,90))
Matrix2+Matrix1
```

### ✖ Multiplicación de matrices

La multiplicación de matrices es un poco mas compleja que la suma y la resta, ya que se deben cumplir ciertas condiciones para que sea posible la multiplicación. La multiplicación de matrices se da cuando el numero de columnas de la primera matriz es igual al numero de filas de la segunda matriz. m1xn1=n2xm2. En este proceso se multiplican los elementos de la fila de la primera matriz con los elementos de la columna de la segunda matriz.

```python title="Multiplicación de matrices"
import numpy as np
Matrix1=np.array((1,2,3),(4,5,6),(7,8,9))
Matrix2=np.array((10,20,30),(40,50,60),(70,80,90))
Matrix1*Matrix2
```

### ℹ️ Inversa de una matriz

La inversa de una matriz es una matriz que al multiplicarla por la matriz original nos da como resultado la matriz identidad. Para que una matriz tenga inversa debe ser cuadrada y su determinante debe ser diferente de cero. La matriz inversa se representa con el simbolo A^-1. La matriz inversa se calcula de la siguiente manera:

```python title="Inversa de una matriz"
import numpy as np
arr = np.array([[1, 3,5], [5, 7, 7], [9, 11,87]])
arr_inv = np.linalg.inv(arr)#Aqui estamos calculando la inversa de la matriz arr
print(arr_inv)
```

**👁 Mucho ojo ya que si el determinante de tu matriz es cero como lo dijimos anteriormentete, marcará error**
