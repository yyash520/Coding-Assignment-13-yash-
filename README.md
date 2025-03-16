# Dockerized React Component Library - Assignment 13

This project is a UI component library built with React, TypeScript, and Storybook. It adheres to best development practices, utilizing Husky for Git hooks, ESLint for code linting, Prettier for formatting, and Jest for testing. The entire application is Dockerized, providing a production-ready Storybook environment accessible on port 8018.

---

## ** Prerequisites**

Before setting up the application, ensure you have the following installed:

- **Docker**: Download and install Docker
- **Git** (Optional): Used for cloning the repository

### **Verify Installations**

Run the following commands to verify installation:

```bash
docker --version
git --version


### **Installing the new dependencies by running the following commands**

npx husky-init && npm install
npx husky install

npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier

## Code Modifications
Make any required changes to the project code.
Add additional necessary files, such as .github for GitHub workflows, as needed.
Ensure that the repository is aligned with project specifications.

## Running tests to check if all the tests are passing.
npm test
npm run storybook #running the storybook on port 6006 on the local machine

## Docker Environment
Building Docker image using this command in the terminal
'docker build -t yash_yash_coding_assignment13 .'

After building the Docker image, run the following command to launch the container and map the Storybook port (6006) to port 8018:

'docker run -p 8018:6006 --name yash_yash_coding_assignment13 yash_yash_coding_assignment13' using this command.

You can access the app in your browser at http://localhost:8018/.

## To stop the running Docker container, use:
docker stop yash_yash_coding_assignment13

```
