# Star Wars

## Allica Bank Frontend Task

[Preview](https://allica-bank-task.vercel.app/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instruction to Run Locally.

1: Clone/Download the project Repo:

2: Install all dependecies:

### `npm install`

3: Runs the app in the development mode.

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

4: Run Unit Test for Components and Functions:

### `npm test`

Launches the test runner in the interactive watch mode.\
Check this resource [doc](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

5: Run E2E Test with cypress:

### `npm test:e2e`

Launches the cypress test runner with option to select browser and test suites.\
Check this resource [doc](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test) for more information.

## Project Summary

Due to time constraints and the scope of the project, I focused on completing key tasks and demonstrating examples for all requirements. Here is a detailed summary of what I have accomplished:

1: **TDD Approach and Unit Testing**:

- I followed a Test-Driven Development (TDD) approach in designing the components.\
- Unit tests have been included as templates for both a component and a function. These patterns and tests can be replicated across other components in a production setting. However, due to time constraints, I have included tests for only two examples:
- a: ButtonTest : src/component/UI/Button/Button.test.tsx
- b: FormatDataTest: src/utils/helpers/formatData.test.ts.

2: **End-to-End Testing with Cypress**:

- I used Cypress for end-to-end testing and provided examples for the main screens. These patterns and tests can be extended to other scenarios if more time were available:
- a: IndexPageE2E :cypress/e2e/people/index.cy.js.
- b: DetailPageE2E :cypress/e2e/people/detailPage.cy.js.

3: **API Fetching with React Query**:

- I utilized **React Query** for all API fetching, optimizing performance through features like caching, background fetching, and automatic garbage collection. For more information, refer to the [documentation.](https://tanstack.com/query/latest)

4: **UI Functionality**:

- I created the UI functionality to update the gender or height of a character. These updates can then be sent via a PATCH API call to the respective record.

5: **Code Documentation**:

- Comments have been added across the codebase to explain my thoughts and rationale behind key decisions and approaches in certain scenarios.

6: **Deployment**:

- I have deployed the application to Vercel for easy testing and demonstration.
