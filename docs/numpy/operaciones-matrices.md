---
sidebar_label: '➕ Operaciones con Matrices'
sidebar_position: 3
---

# ➕ Operaciones con Matrices
En numpy podemos realizar operaciones con matrices, estas operaciones pueden ser entre matrices y escalares o entre matrices y matrices.
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
#### Raiz cuadrada de una matriz
Podemos sacar la raiz cuadrada de la matriz usando potencias, elevando la matriz a 1/2. Ejemplo:


```python title="Raiz cuadrada de una matriz"
import numpy as np
A = np.array([[1,2,3],[4,5,6],[7,8,9]])
print(A**(1/2))
```

## 📝 Operaciones Matrices-Matrices

