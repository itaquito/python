---
sidebar_label: '🌟 Introducción'
sidebar_position: 1
---

# 🌟 Introducción

## Paradigmas de programación

- Imperativos
  - **Estructurado**: dividido en bloques; secuencia, selección e intersección
  - **Orientado a objetos**: abstracción de datos; trabaja con clases; paso de conexiones entre objetos
- Declarativos
  - **Funcional**: las funciones son elementos de primer orden
  - **Lógico**: Construidos de hechos, predicados y relaciones.

## Programación Orientada a Objetos

La Programación Orientada a Objetos (POO) es un paradigma de programación que organiza el código a partir de objetos con atributos y métodos específicos. La programación orientada a objetos tiene 4 pilares fundamentes, la abstracción, el encapsulamiento, la herencia y el polimorfismo. Gracias a estas características es que la programación orientada a objetos es uno de los paradigmas más usados hoy en día, haciendo que sea soportada por muchos lenguajes de programación, incluyendo Python.

### 🎉 Pilares de la programación orientada a objetos

- **Abstracción**: Consiste en aislar un elemento de su contexto o del resto de los elementos que lo acompañan. Es decir, podemos tener una clase padre con un **método abstracto** sin funcionalidad para que después sea **sobreescrito** por un método con el mismo nombre en la clase hija.

- **Encapsulamiento**: Una clase tiene métodos y atributos que la definen. El encapsulamiento nos permite negar el acceso a ellos, para que no puedan ser modificados o sólo puedan ser modificados bajo ciertas reglas que nosotros establezcamos.

- **Herencia**: Para mejorar la calidad de nuestro código y seguir el principio DRY, en POO podemos hacer que las clases tengan herencia a otras clases. Eso quiere decir que una clase pueda heredar (obtener) los métodos y atributos de otra clase. Este tipo de relación se puede definir con la palabra clave **"es un"**. Por ejemplo: `Un Coche es un Vehiculo`, `Un Perro es un Animal`, `Un Pantalón es una Prenda de Ropa`.

:::tip DRY

DRY (_Don't Repeat Yourself_, en español No Te Repitas) es un principio en la programación que nos ayuda a mejorar nuestra calidad de código. Este principio nos invita a no repetir nuestro código, si no que reutilizarlo. Si a la hora de programar notamos que repetimos una parte de nuestro código, muy posiblemente ese pedazo de código se pueda transformar a una función o a una clase.

:::

- **Polimorfismo**: Puede ser una serie de clases compartan un mismo atributo, por ejemplo una `Persona` y un `Animal` pueden `comer()`. El polimorfismo nos permite llamar a este método o atributo con el mismo nombre, pero que el código realice una función diferente dependiendo de qué tipo de clase sea.
