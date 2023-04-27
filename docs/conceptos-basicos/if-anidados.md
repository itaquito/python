---
sidebar_label: "💍 If anidados"
sidebar_position: 19
---

# 💍 If anidados

Un if anidado es un "if" dentro de otro "if". Este tipo de estructura se puede utilizar cuando queremos checar dos condiciones al mismo tiempo. Es importante mencionar que cada "if" tendrá un nivel de identación.

## ✏️ Ejemplo

```python title="Ejemplo de un if anidado"
a = 10
b = 50

if a < b:
	print("a es menor que b")
	if a < 100:
		print("a también es menor que 100")

# Este código imprime:
# a es menor que b
# a también es menor que 100
```
