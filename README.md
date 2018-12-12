# quick-react

To begin:

```
$ yarn install
$ yarn start
```

Treat like a normal [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Start the development server locally on port `:3000`.

### `yarn build`

Builds a production artifact of the app in the `/build` folder.

### `yarn eject`

One-way, ejection from the configuration of create-react-app. Use if needed, but often it's not necessary to eject.

## Additions

#### Packages

- react-router-dom - Adds react-router and implemented in the `App.js` file.

### Navigation Header

Header that appears on all pages. Links leverage `Link` from `react-router-dom`. Logic to detect active page and indicate active link in header.

### Static Pages

A Home, About, Contact, and 404 Not Found page to get started.

### Tabs

Added tab component at /tabs.

### Styling

#### Font Awesome

Icons of the FA 4.0 icon set.

#### Twitter Bootstrap

Bootstrap 4.1 CSS, JS loaded.

## Future Enhancements

### Production express server

Express.js as a webserver to serve build folder in production environments.

### Dockerfile

Dockerize app, builds app for production and serves it all from a Docker container.
