---
sidebar_label: '👾 Entornos virtuales'
sidebar_position: 8
---

# 👾 Entornos virtuales

Los entornos virtuales permiten crear una copia de la instalación de Python, permitiéndonos tener mayor control sobre la versión de Python, sus librerías y las dependencias de las librerías.

Cuando se ejecutan comandos dentro de un entorno virtual, no se ejecutan dentro del sistema sino justamente dentro de dicho entorno, haciendo que un entorno virtual tenga versiones específicas de las librerías.

Para crear un entorno virtual necesitaremos utilizar la linea de comandos y ejecutar algunos comnados. Este proceso puede cambiar dependiendo de la instalación de Python que tengamos y el sistema operativo que usemos.

```bash title="Comando para mostrar la ayuda de venv"
python -m venv -h
```

:::tip El comando `python`

Dependiendo de tu instalación, puede ser que `python` sea un comando no reconocido. Prueba con las siguientes alternativas: `python3`, `py`

:::

## 🚀 Crear un entorno virtual

Utilizamos el siguiente comando para crear un entorno virtual, donde `ruta` será el nombre del entorno virtual y el nombre de la carpeta en dónde se guardará.

```bash title="Comando para crear un entorno virtual"
python -m venv ruta
```

Ahora, podemos abrir nuestro entorno virtual ejecutando el archivo `activate` dentro de la carpeta `Scripts`, si estamos en Windows:

```bash title="Comando para abrir el entorno virtual en Windows"
./Scripts/activate
```

o dentro de la carpeta `bin` si estamos en Mac.

```bash title="Comando para abrir el entorno virtual en Mac"
bash ./bin/activate
```

## 🔧 Utilizar un entorno virtual

Una vez dentro de nuestro entorno virtual, podemos instalar nuevas librerías con `pip`, ejecutar scripts de Python o conectarlo a nuestro Visual Studio Code por medio de notebooks de Jupyter.
