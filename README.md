
# PROMO MOVIES

This is a [Next.js](https://nextjs.org/) application. 
This is a two-page film site, one listing the films (and you can filter them by genre) and another page dedicated to each film, containing more information.

## What is inside?

### [Live Site](https://promo-movie.netlify.app/?page=1)

![](public/img/promo-movie.gif)

This project uses lot of stuff as:

![react](https://aleen42.github.io/badges/src/react.svg)
![ts](https://flat.badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
![storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)
![eslint](https://aleen42.github.io/badges/src/eslint.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Getting Started

First, clone this repo 

```bash
git clone git@github.com:mvmmarcus/promo-movies.git
```

Then, install all project dependencies 

```bash
yarn 
# or
npm install
```

Don't forget to add the movie api key in .env file

```
API_KEY =
```

Run the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


This is a hybrid application, using ```getStaticProps``` and ```getServerSideProps``` Nextjs methods to provide the best user experience

## Test the components on Storybook

Run the command below to view all the components properties of this application 

```
yarn storybook
```

![](public/img/storybook.jpg)

## All components are protected by testing

Run the command below to execute all tests

```
yarn test
```

![](public/img/coverage_tests.jpg)

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook
- `generate`: create the base components files

## 👨‍💻 Developer

<table id="contribuicoes" >
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/mvmmarcus/"><img style="border-radius: 50%;" src="https://gitlab.com/uploads/-/system/user/avatar/6195744/avatar.png?width=400" width="100px;" alt=""/><br /><sub><b>Marcus Vinícius</b></sub></a><br /><a href="https://gitlab.com/mvmmarcus" title="Marcus Vinicius">👨‍🚀</a></td>
  </tr>
</table>

Developed with ❤️ by <a href="https://www.linkedin.com/in/mvmmarcus/">Marcus Vinícius</a>

