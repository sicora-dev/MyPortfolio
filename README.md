
<img src="https://raw.githubusercontent.com/sicora-dev/MyPortfolio/refs/heads/main/public/favicon.svg" align="center" width="30%">
<h1>MI PORTFOLIO</h1>
<p align="left">
	<em><code>❯ MyPortfolio</code></em>
</p>
<p align="left">
	<img src="https://img.shields.io/github/license/sicora-dev/MyPortfolio?style=for-the-badge&logo=opensourceinitiative&logoColor=white&color=4c4c4c" alt="license">
	<img src="https://img.shields.io/github/last-commit/sicora-dev/MyPortfolio?style=for-the-badge&logo=git&logoColor=white&color=4c4c4c" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/sicora-dev/MyPortfolio?style=for-the-badge&color=4c4c4c" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/sicora-dev/MyPortfolio?style=for-the-badge&color=4c4c4c" alt="repo-language-count">
</p>
<p align="left">Built with the tools and technologies:</p>
<p align="left">
  <img src="https://img.shields.io/badge/Astro-BC52EE.svg?style=for-the-badge&logo=Astro&logoColor=white" alt="Astro">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript">
</p>

<br clear="right">

## 🔗 Quick Links

- [📍 Resumen](#-overview)
- [📁 Estructura](#-project-structure)
  - [📂 Índice](#-project-index)
- [🚀 ¿Cómo empezar?](#-getting-started)
  - [☑️ Prerequisitos](#-prerequisites)
  - [⚙️ Instalación](#-installation)
- [🎗 Licencia](#-license)
- [🙌 Reconocimientos](#-acknowledgments)

---

## 📍 Resumen

<code>❯ Esta es la version 2.0 de mi portfolio personal. Esta vez le he querido dar un toque mas minimalista, elegante y moderno, junto con una mejor compatiblidad con todo tipo de dispositivos</code>

---

## 📁 Estructura

```sh
└── MyPortfolio/
    ├── .github
    │   └── workflows
    ├── README.md
    ├── astro.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── devpath.png
    │   ├── favicon.svg
    │   ├── nav3studios.png
    │   └── skills
    ├── src
    │   ├── assets
    │   ├── components
    │   ├── content
    │   ├── layouts
    │   └── pages
    ├── tailwind.config.mjs
    └── tsconfig.json
```


### 📂 Índice
<details open> <!-- src Submodule -->
  <summary><b>src</b></summary>
  <blockquote>
    <details>
      <summary><b>layouts</b></summary>
      <blockquote>
        <table>
        <tr>
          <td><b><a href='https://github.com/sicora-dev/MyPortfolio/blob/master/src/layouts/Layout.astro'>Layout.astro</a></b></td>
          <td><code>❯ Plantilla de Astro principal de la página</code></td>
        </tr>
        </table>
      </blockquote>
    </details>
    <details>
      <summary><b>components</b></summary>
      <blockquote>
        <table>
        <tr>
          <td><b><a href='https://github.com/sicora-dev/MyPortfolio/blob/master/src/components/Footer.astro'>Footer.astro</a></b></td>
          <td><code>❯ Pie de página</code></td>
        </tr>
        <tr>
          <td><b><a href='https://github.com/sicora-dev/MyPortfolio/blob/master/src/components/TechCard.astro'>TechCard.astro</a></b></td>
          <td><code>❯ Componente animado para cada una de las tecnologias de cada proyecto</code></td>
        </tr>
        <tr>
          <td><b><a href='https://github.com/sicora-dev/MyPortfolio/blob/master/src/components/MainComp.astro'>MainComp.astro</a></b></td>
          <td><code>❯ Componente principal de la página</code></td>
        </tr>
        <tr>
          <td><b><a href='https://github.com/sicora-dev/MyPortfolio/blob/master/src/components/Education.astro'>Education.astro</a></b></td>
          <td><code>❯ Componente donde se muestran los estudios</code></td>
        </tr>
        <tr>
          <td><b><a href='https://github.com/sicora-dev/MyPortfolio/blob/master/src/components/Experience.astro'>Experience.astro</a></b></td>
          <td><code>❯ Componente donde se muestran mis experiencias laborales</code></td>
        </tr>
        <tr>
          <td><b><a href='https://github.com/sicora-dev/MyPortfolio/blob/master/src/components/Skills.astro'>Skills.astro</a></b></td>
          <td><code>❯ Componente donde se muestra mi stack tecnológico</code></td>
        </tr>
        <tr>
          <td><b><a href='https://github.com/sicora-dev/MyPortfolio/blob/master/src/components/ProjectCard.astro'>ProjectCard.astro</a></b></td>
          <td><code>❯ Componente tipo tarjeta para cada uno de mis proyectos</code></td>
        </tr>
        <tr>
          <td><b><a href='https://github.com/sicora-dev/MyPortfolio/blob/master/src/components/Cert.astro'>Cert.astro</a></b></td>
          <td><code>❯ Componente para cada una de mis certificaciones. Al hacer click abren una modal con la información del certificado</code></td>
        </tr>
        </table>
      </blockquote>
    </details>
    <details>
      <summary><b>content</b></summary>
      <blockquote>
        <table>
        <tr>
          <td><b><a href='https://github.com/sicora-dev/MyPortfolio/blob/master/src/content/certs.json'>certs.json</a></b></td>
          <td><code>❯ Archivo para almacenar mis certificados y su información</code></td>
        </tr>
        <tr>
          <td><b><a href='https://github.com/sicora-dev/MyPortfolio/blob/master/src/content/config.ts'>config.ts</a></b></td>
          <td><code>❯ Archivo de configuraciónpara la información en archivos markdown</code></td>
        </tr>
        </table>
      </blockquote>
    </details>
    <details>
      <summary><b>pages</b></summary>
      <blockquote>
        <table>
        <tr>
          <td><b><a href='https://github.com/sicora-dev/MyPortfolio/blob/master/src/pages/index.astro'>index.astro</a></b></td>
          <td><code>❯ Archivo principal de la web</code></td>
        </tr>
        </table>
      </blockquote>
    </details>
  </blockquote>
</details>

---
## 🚀 ¿Cómo empezar?

### ☑️ Prerequisitos

Antes de comenzar con MyPortfolio, asegúrate de que tu entorno cumple con los siguientes requisitos:

- **Package Manager:** Npm >= 20.0


### ⚙️ Instalación

Instala MyPortfolio utilizando el siguiente método:

1. Clona el repositorio de MyPortfolio:
```sh
❯ git clone https://github.com/sicora-dev/MyPortfolio
```

2. Navega al directorio del proyecto:
```sh
❯ cd MyPortfolio
```

3. Instala las dependencias del proyecto:

```sh
❯ npm install
```

4. Ejecuta el servidor de desarrollo:

```sh
> npm run dev
```

## 🎗 Licencia

Este proyecto está protegido bajo la licencia [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International](https://creativecommons.org/licenses/by-nc-nd/4.0/).Para más detalles, consulta el archivo [LICENSE.md](LICENSE.md).

---

## 🙌 Reconocimientos

- Inspirado en el portfolio web de [Pheralb](https://pheralb.dev)

---
