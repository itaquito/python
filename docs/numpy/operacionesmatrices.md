---
sidebar_label: '➕ Operaciones con Matrices'
sidebar_position: 3
---

# ➕ Operaciones con Matrices


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
#### ➗ División de un escalar por una matriz
Tambien existe la posibilidad de dividir un escalar por una matriz.
```python title="División de un escalar por una matriz"
import numpy as np
k = 2
A = np.array([[1,2,3],[4,5,6],[7,8,9]])
print(k/A)
```

## 📝 Operaciones Matrices-Matrices

