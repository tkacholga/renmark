This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Steps And Processes For The Project

1. Created an app with [Create React App](https://github.com/facebook/create-react-app).
2. Made a repository on [gitHub](https://github.com/tkacholga/renmark).
3. Installed [react-paginate](https://www.npmjs.com/package/react-paginate) - a ReactJS component to render a pagination.
4. Made a structure of the app. Created in a `src` folder `component` folder with two components `CompanyList` and `HomeComponent`.
5. In `index.html` file added a <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet"> to use bootstrap in the project for styles.
6. Added pagination to `HomeComponent` with test data to check if it works properly, and displayed in `CompanyList` component.
7. Modified `components` folder structure, added `css` file for styles.
8. Installed [axios](https://github.com/axios/axios) for fetching data from API.
9. Got data from API, adde logic to `HomeComponent` and `CompanyList`.
10. Created dropdown to make filter of exchanges, and added logic to `HomeComponent`.
11. Installed [react-router-dom](https://facebook.github.io/create-react-app/docs/adding-a-router) and modified `App.js` file.
12. Created `CompanyComponent` in `components` folder to show information about the company, added `Link` to the images in `CompanyList`.
13. Added logic to `CompanyComponent` to fetch data from API and display it.

### You Can Check Out the App on Netlify

Here's the link to the app: https://renmark-app.netlify.com/
