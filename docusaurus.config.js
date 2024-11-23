import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: 'Python',
  tagline: 'Nuestro reporte de Python',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://python.itaqui.to',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don"t use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/itaquito/python/tree/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      // Replace with your project"s social card
      image: 'banner.png',
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'Python',
        logo: {
          alt: 'Logo de Python',
          src: 'logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mySidebar',
            position: 'left',
            label: 'Introducción',
          },
          {
            label: 'Conceptos básicos',
            position: 'left',
            to: '/category/conceptos-basicos',
          },
          {
            label: 'Conceptos avanzados',
            position: 'left',
            to: '/category/conceptos-avanzados',
          },
          {
            label: 'POO',
            position: 'left',
            to: '/category/programacion-orientada-a-objetos',
          },
          {
            label: 'NumPy',
            position: 'left',
            to: '/category/numpy',
          },
          {
            label: 'Procesamiento de imágenes',
            position: 'left',
            to: '/category/procesamiento-de-imagenes',
          },
          {
            label: 'Procesamiento de lenguaje natural',
            position: 'left',
            to: '/category/procesamiento-de-lenguaje-natural',
          },
          {
            href: 'https://github.com/itaquito/python',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Secciones',
            items: [
              {
                label: 'Introducción',
                to: '/intro',
              },
              {
                label: 'Conceptos básicos',
                to: '/category/conceptos-basicos',
              },
              {
                label: 'Conceptos avanzados',
                to: '/category/conceptos-avanzados',
              },
              {
                label: 'Programación orientada a objetos',
                to: '/category/programacion-orientada-a-objetos',
              },
              {
                label: 'NumPy',
                to: '/category/numpy',
              },
              {
                label: 'Procesamiento de imágenes',
                to: '/category/procesamiento-de-imagenes',
              },
              {
                label: 'Procesamiento de lenguaje natural',
                position: 'left',
                to: '/category/procesamiento-de-lenguaje-natural',
              },
            ],
          },
          {
            title: 'Otras páginas interesantes',
            items: [
              {
                label: 'Página oficial de Python',
                href: 'https://www.python.org/',
              },
              {
                label: 'El Libro De Python',
                href: 'https://ellibrodepython.com/',
              },
              {
                label: 'Contribuidores de esta página',
                href: 'https://github.com/itaquito/python/graphs/contributors',
              },
              {
                label: 'Código fuente de Python',
                href: 'https://github.com/python/cpython',
              },
              {
                label: 'Página oficial de NumPy',
                href: 'https://numpy.org/',
              },
              {
                label: 'Página oficial de Natural Language Toolkit',
                href: 'https://www.nltk.org/',
              },
            ],
          },
          {
            title: 'Descargas',
            items: [
              {
                label: 'Descarga Python',
                href: 'https://www.python.org/downloads/',
              },
              {
                label: 'Descarga Anaconda',
                href: 'https://www.anaconda.com/products/distribution',
              },
            ],
          },
        ],
        copyright: `Python es creado por la Python Software Foundation y no tiene afilicación con esta página. Construido con Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
