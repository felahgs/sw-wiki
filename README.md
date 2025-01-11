<p align="left">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/felahgs/gamer-shop">

  <a href="https://github.com/tgmarinho/README-ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/felahgs/gamer-shop">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

</p>
<h1 align="center">
  SW Wiki
</h1>

<p align="center">
 <a href="#-about">About</a> •
 <a href="#%EF%B8%8F-features">Features</a> •
 <a href="#-installing-and-running">Installing</a> • 
 <a href="#-libraries">Libraries</a> • 
 <a href="#-layout">Layout</a> • 
 <a href="#-deploy">Deploy</a> • 
 <a href="#-scripts">Scripts</a> 
</p>

## 💻 About

This project is a simple website built using the Star Wars API (SWAPI), designed to provide information on various Star Wars entities. The objective is to create a multi-page website that dynamically fetches and displays data from the API.

For this implementation, I’ve chosen to focus on using Server Components in Next.js, taking a opportunity to test more the capacities of the new App Router introduced in the recents Next.js version. The goal is to explore the capabilities of Server Components since the application won't use dynamic content fetching. The advantages of this approach is the possibility to deliver a full application to the client with the fetch content already ready from the server, improving the SEO. The downsides, as partially mentioned before, is that we have some limitation regarding the building dynamic content on the application, specially considering JavaScript heavy features such as Hooks. 

The development was done using [React](https://react.dev/), [NextJS](https://nextjs.org/docs), [TypeScript](https://www.typescriptlang.org/) and [TailwindCSS](https://tailwindcss.com/).

Code quality tools like ESLint and Prettier have been integrated, along with Husky to enforce pre-commit and pre-push checks. These checks ensure compliance with formatting rules, verify package versions, validate test consistency, and identify vulnerable dependencies.

The project includes [Storybook](https://storybook.js.org/) for inspecting each component in the application and understanding how they function.  

The functional page can be accessed at: [https://sw-wiki-snowy.vercel.app/](https://sw-wiki-snowy.vercel.app/)

---

## ⚙️ Features

**Home**

- A simple greeting page with links for the following pates

**Films Page**

- List some of the movies with a brief description of each

**Characters Page**

- List a collection of characters with pagination allowing to filter and select one for more information

**Character Info Page**

- Show information about a Character

## 🚗 Installing and Running

### Pre-requisites

First of all be certain to have the following applications installed.
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable).

#### ▶️ Running application 

```bash

# Clone repository
$ git clone git@github.com:felahgs/sw-wiki.git

# Access the application folder
$ cd sw-wiki

# Install dependencies
$ yarn install

# Start the application
$ yarn dev

# The application will start as default on the port:3000 - access http://localhost:3000
```

#### 🧭 Starting Storybook


```bash

$ git clone git@github.com:felahgs/sw-wiki.git

$ cd sw-wiki

$ yarn install

$ yarn run storybook

# The application will be accessible as default on the port:3000 - access  http://localhost:6006/

```

---

## 🎨 Layout

### Screenshots
#### Home
![image](https://github.com/user-attachments/assets/589332a6-dc73-4ef1-a31f-ad7e193279af)
![image](https://github.com/user-attachments/assets/bb86800f-6893-4d36-a9cd-db1335572081)



#### Films
![image](https://github.com/user-attachments/assets/5b1e1153-a366-4252-ad04-7a794ac75ea9)
![image](https://github.com/user-attachments/assets/92169da3-d735-48cf-9d2e-3ceca0a3b109)

#### Characters
![image](https://github.com/user-attachments/assets/79b6ed01-2668-450b-a2b7-a8364350fd20)
![image](https://github.com/user-attachments/assets/92ecd759-a3c5-436e-b98d-43979835df15)

#### Characters Details
![image](https://github.com/user-attachments/assets/53962009-f538-4cdd-9b65-9bfc31833efd)
![image](https://github.com/user-attachments/assets/a0b50fd0-fc93-4793-800f-e88f9096cbe4)


---

## 📚 Libraries

- [Jest](https://jestjs.io/pt-BR/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) Creation of unity tests.
- [axios](https://axios-http.com/ptbr/docs/intro)  HTTP Client.
- [tailwind](https://tailwindcss.com/)  Styling.
- [clsx](https://www.npmjs.com/package/clsx)  Class name constructors.
  ***

## 🚀 Deploy

The deploy is made using the vercel application for commits made into the main branch.

## 📜 Scripts

The scripts can be executed using the command `yarn [script name]`.  
The following scripts are configured in the project:

- **dev**: Starts the application in development mode at "http://localhost:3000".
- **build**: Builds the script for deployment.
- **start**: Starts an application in production mode at "http://localhost:3000".
- **lint**: Runs lint tests on the project and outputs files with code standard errors.
- **prepare**: Sets up pre-hooks for Husky.
- **test**: Run tests with coverage.
- **test:watch**: Run all tests in watch mode.
- **test:unit**: Run only unit tests.
- **test:integration**: Run only integration tests.
- **storybook**: Starts Storybook at "http://localhost:6000".
- **build-storybook**: Builds Storybook for deployment.
- **check-outdated**: Check if every package used in production is updated.
- **prepare**: Setup husky hooks

---

## 🐹 Author

<a href="https://https://github.com/felahgs">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/felahgs" width="100px;" alt=""/>
 <br />
 <b>Felipe Souza</b></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Felipe-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/felipe-garcia-de-souza-aa9aa773/)](https://www.linkedin.com/in/felipe-garcia-de-souza-aa9aa773/)
[![Gmail Badge](https://img.shields.io/badge/-fgsouza93@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:fgsouza93@gmail.com)](mailto:fgsouza93@gmail.com)

---
