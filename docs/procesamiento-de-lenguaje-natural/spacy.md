---
sidebar_label: '🤖 Spacy'
sidebar_position: 16
---

# 🤖 Spacy

**spaCy** es una biblioteca de código abierto para Procesamiento del Lenguaje Natural (PLN) en Python. Ofrece herramientas avanzadas como etiquetado POS, reconocimiento de entidades nombradas (NER), análisis de dependencias, clasificación de texto, entre otras vistas.

## 🚀 Instalación e Importación de spaCy
Antes de utilizar spaCy, es necesario instalar la biblioteca y descargar los modelos de idioma correspondientes. A continuación, se muestra cómo hacerlo:

1. Ejecuta el siguiente comando para instalar spaCy en tu entorno de Python:
    ```bash title="Instalación de python"
    pip install spacy
    ```

2. Ejecuta el siguiente comando para instalar spaCy en tu entorno de Python:
    ```bash title="Descarga de un modelo de idioma"
    # Español
    python -m spacy download es_core_news_sm
    # Inglés
    python -m spacy download en_core_web_sm
    ```

3. Después de la instalación, puedes importar y cargar un modelo de idioma:
    ```python title="Importación y carga de spaCy en tu proyecto"
    import spacy
    # Carga del modelo de español
    pln = spacy.load("es_core_news_sm")
    
    # Procesar texto
    doc = pln("Apple está buscando comprar una compañía por $1 millón de pesos en México")
    ```
    
    ## ⭐ Funcionalidades principales
    | Nombre                            | Descripción                                                        |
    |-----------------------------------|--------------------------------------------------------------------|
    | Tokenización                      | Segmentación del texto en palabras, signos de puntuación, etc.     |
    | Etiquetado POS                    | Identificación de la categoría gramatical de las palabras.         |
    | Análisis de dependencias          | Relación sintáctica entre las palabras (sujeto, objeto, etc.).     |
    | Serialización                     | Almacenamiento de objetos en archivos o cadenas de bytes.          |
    | Lematización                      | Conversión de palabras a sus formas base.                          |
    | Detección de límites oracionales  | Segmentación en oraciones.                                         |
    | Reconocimiento de entidades (NER) | Identificación de nombres de personas, empresas, ubicaciones, etc. |
    | Clasificación de texto            | Asignación de categorías o etiquetas a documentos.                 |
    | Comparación de similitud          | Evaluación de similitud entre palabras, frases o documentos.       |
    | Entrenamiento                     | Mejora de modelos estadísticos personalizados.                     |


### 🔑 Tokenización
spaCy segmenta el texto en tokens (palabras, signos de puntuación, etc.) según reglas específicas del idioma.

```python title="Tokenización"
for token in doc:
    print(token.text)
```

| 0      | 1    | 2        | 3       | 4   | 5        | 6   | 7 | 8 | 9	     | 10 | 11    |
|--------|------|----------|---------|-----|----------|-----|---|---|--------|----|-------|
| Apple	 | está | buscando | comprar | una | compañía | por | $ | 1 | millón | de | pesos |

### 🛑 Stopwords
Las stopwords se pueden consultar y modificar dinámicamente:
```python title="Stopwords"
# Verificar stopwords
print("hola".is_stop)

# Agregar una nueva stopword
pln.Defaults.stop_words.add("computadora")
pln.vocab["computadora"].is_stop = True

# Eliminar una stopword
pln.Defaults.stop_words.remove("último")
pln.vocab["último"].is_stop = False
```

### 🏷️ Etiquetado POS
El etiquetado POS en SpaCy identifica la categoría gramatical de cada palabra dentro del texto procesado. Esto es útil para análisis lingüísticos o para extraer patrones específicos.
```python title="Parts of speech"
for token in doc:
    print(f"Texto: {token.text}, POS: {token.pos_}, Etiqueta: {token.tag_}, Explicación: {spacy.explain(token.tag_)}")
```
``` output
Texto: Apple, POS: PROPN, Etiqueta: NNP, Explicación: nombre propio singular
Texto: está, POS: AUX, Etiqueta: VBZ, Explicación: verbo auxiliar en tercera persona singular
```

### 🏢 Reconocimiento de Entidades Nombradas (NER)
El Reconocimiento de Entidades Nombradas (NER) identifica y clasifica entidades dentro del texto, como nombres propios, ubicaciones, fechas, cantidades, entre otros.

```python title="Mostrar las entidades reconocidas en el texto"
for ent in doc_en.ents:
    print(ent.text, ent.start_char, ent.end_char, ent.label_)
```

```txt title="Output"
Entidad: Apple, Tipo: ORG, Explicación: Organización
Entidad: $1 millón, Tipo: MONEY, Explicación: Cantidad de dinero
Entidad: México, Tipo: GPE, Explicación: Entidad geopolítica
```


### ⚙️ Procesamiento del texto
Los tokens tienen métodos para realizar las funciones fácilmente. 

```python
cols = ["texto", "lema", "POS", "stopword"]
renglones =[]

for t in doc:
    renglones.append([t.text,t.lemma_,t.pos_,t.is_stop])

pd.DataFrame(renglones, columns=cols)
```

| Texto       | Lema       | POS       | Tag      | Stop  |
|-------------|------------|-----------|----------|-------|
| Apple       | apple      | PROPN     | NNP      | False |
| está        | estar      | AUX       | VBZ      | True  |
| buscando    | buscar     | VERB      | VBG      | False |
| comprar     | comprar    | VERB      | VBG      | False |
| una         | uno        | DET       | DT       | True  |
| compañía    | compañía   | NOUN      | NN       | False |
| por         | por        | ADP       | IN       | True  |
| $           | $          | SYM       | $        | False |
| 1           | 1          | NUM       | CD       | False |
| millón      | millón     | NUM       | CD       | False |
| de          | de         | ADP       | IN       | True  |
| pesos       | peso       | NOUN      | NNS      | False |
| en          | en         | ADP       | IN       | True  |
| México      | méxico     | PROPN     | NNP      | False |

### 📊 Visualización
SpaCy proporciona herramientas para representar visualmente la estructura de las oraciones (análisis sintáctico) con ayuda de Displacy.
```python title="Visualización de dependencias"
from spacy import displacy
# Dependencias
displacy.render(doc, style="dep", options={"distance": 80})

```
![Dependencias](/img/procesamiento-de-lenguaje-natural/spacy/dep-spacy.png "dependencias")

```python title="Visualización de las entidades nombradas"
from spacy import displacy
displacy.render(doc_en, style="ent", jupyter=True)
```
![Entidades](/img/procesamiento-de-lenguaje-natural/spacy/ent-spacy.png "entidades")
