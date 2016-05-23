# G&L Frontend server

Welcome to the G&L website, implemented primarily using React and Flux. This server is used only for launching the G&L frontend site. The frontend components communicate directly with the G&L app server via jQuery XHR APIs.

## To use

```sh
npm install
npm start
```

The `npm start` command initializes watchify, which updates the bundled app.js upon any change to
the source code, before starting the web server.

If running in a production environment, use `npm run prod-start`, which sets the NODE_ENV to production.

If running this app on Windows, please run the following two commands in separate windows:

```sh
npm run bundle
node server.js
```

Visit <http://localhost:8090/> once the server is up and the bundle.js file is generated.

## Changing the port

You can change the port number by setting the `$PORT` environment variable before invoking any of the scripts above, e.g.,

```sh
PORT=3001 npm start
```
