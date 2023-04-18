import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Conceptos + Significados",
    description: (
      <>
        Explicamos los conceptos claves de Python de una manera conciza y clara.
      </>
    ),
  },
  {
    title: "Ejemplos",
    description: (
      <>
        Todos los conceptos de los que hablamos, tienen un ejemplo de uso.
      </>
    ),
  },
  {
    title: "Fuente abierta",
    description: (
      <>
        Esta página es de fuente abierta. ¡Invitamos a todas las personas a contribuir a ella!
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
