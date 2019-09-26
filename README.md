<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://reactjs.org/">
    <img alt="React" src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png" width="100" />
  </a>
  <a href="https://www.gatsbyjs.org/">
    <img alt="Gatsby" src="https://codingthesmartway.com/wp-content/uploads/2019/02/gatsby-logo.png" width="100" />
  </a>
  <a href="https://www.circleci.com/">
    <img alt="CircleCI" src="https://circleci.com/circleci-logo-stacked-fb.png" width="100" />
  </a>
  <a href="https://www.netlify.com/">
    <img alt="Netlify" src="https://www.netlify.com/img/press/logos/logomark.png" width="100" />
  </a>
</p>
<h1 align="center">
  React-Typescript-Gatsby-CircleCI-Netlify Boilerplate
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files the blazing fast app generator for React. Integrating with Typescript for type checking as well as Jest for unit testing. Provide smooth development experience and CI/CD pipeline with CircleCI and Netlify built in.

## 🚀 Quick start

1.  **Clone this Repo**

    ```shell
    # clone this repo via github link
    git clone https://github.com/tripheo0412/React-Gatsby-Typescript-CircleCI-Netlify-Boilerplate.git
    ```

2.  **Install all packages**

    Using either yarn/npm install

    ```shell
    cd React-Gatsby-Typescript-CircleCI-Netlify-Boilerplate/
    yarn
    ```

    or

    ```shell
    cd React-Gatsby-Typescript-CircleCI-Netlify-Boilerplate/
    npm install
    ```

3.  **Setting up CI/CD**

    Registered your account on CircleCI and Netlify.

    Get Netlify Site ID + generate Netlify personal access token.

    Connect project github repo to CircleCI, go to project settings, click on environment variables and add 2 variables.

    ```shell
    NETLIFY_ACCESS_TOKEN <your generated Netlify personal access token>
    NETLIFY_SITE_ID <your Netlify Site ID>
    ```

    After setting this up, everytime you push, CircleCI will check for lint + testing error, if passed you can click details in CircleCI check and see the Web URL deployed on Netlify.

    Note that for master branch, CircleCI will build the App and release to Netlify with tag --prod for Production deployment.

4.  **Open the source code and start editing!**

    ```shell
    yarn start
    ```

    or

    ```shell
    npm run start
    ```

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `React-Gatsby-Typescript-CircleCI-Netlify-Boilerplate` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── .circleci/config.yml
    ├── config
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── jest-preprocess.js
    ├── jest.config.js
    ├── LICENSE
    ├── loadershim.js
    ├── README.md
    ├── package.json
    ├── tsconfig.json
    ├── tslint.json
    └── yarn.lock/package-lock.json

1.  **`/circleci`**: This directory contains CircleCI configuration file. Note that there are 2 types of job: build (for every push to any branch beside master) and release (for master branch - production deployment).

2.  **`/config`**: This directory contains all the configuration files for Jest testing.

3.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

4.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

5.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

6.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

7.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

8.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

9.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

10. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

11. **`jest-preprocess.js`**: This file contains babel options to build gatsby project for Jest testing

12. **`jest.config.js`**: This file contains all of Jest configurations.

13. **`LICENSE`**: This boilerplate is licensed under the MIT license.

14. **`loadershim.js`**: This files contains loader setting for Jest.

15. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

16. **`README.md`**: A text file containing useful reference information about your project.

17. **`tsconfig.json`**: This file contains all of typescript configurations for type checking.

18. **`tslint.json`**: This file contains all of typescript linting configurations, integrating with prettier.

19. **`yarn.lock/package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

## **🏎 Core technologies**

- _**[Typescript](https://www.typescriptlang.org/)**_

- _**[Hooks](https://reactjs.org/docs/hooks-intro.html)**_

- _**[Gatsby](https://www.gatsbyjs.org/)**_

- _**[GraphQL](https://graphql.org)**_

## **💎 Rich utilities: Git hooks and code formatting**

- _**[Prettier](https://github.com/prettier/prettier)**_
- _**[Husky](https://github.com/typicode/husky/)**_
- _**[Lint-staged](https://github.com/okonet/lint-staged/)**_
- _**[TSLint](https://github.com/palantir/tslint/)**_

## **🛡 Testing**

- _**[Jest](https://github.com/facebook/jest)**_
- _**[react-testing-library](https://github.com/testing-library/react-testing-library)**_

## **🏆 Contious integration**

- _**[CircleCI](https://circleci.com/)**_

## **📲 Networking**

- _**[Axios](https://github.com/axios/axios)**_

## **🎁 Other NPM modules**

- _**[DotEnv](https://www.npmjs.com/package/dotenv)**_

## Prerequisites

---

- [NodeJS](https://nodejs.org/en/).
- IDE of your choice.
- Command Line Tools.

## Testing

---

Run test suites:

```bash
  npm run test
```

or

```bash
  yarn test
```

In watch mode:

```bash
  npm run test:watch
```

or

```bash
  yarn test:watch
```

## Useful scripts

---

_**Format code and write based on Prettier rules**_

```shell
  npm run format
```

or

```shell
  yarn format
```
