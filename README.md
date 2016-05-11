# G&L Frontend server

This server is used to launch the G&L frontend site and provide stubbed data via an API.

## To use

```sh
npm install
npm start
```

The `npm start` command initializes watchify, which updates the bundled app.js upon any change to
the source code, before starting the web server.

If running this app on Windows, please run the following two commands in separate windows:

```sh
npm run bundle
node server.js
```

Visit <http://localhost:8090/> once the server is up and the app.js file is generated.

## Changing the port

You can change the port number by setting the `$PORT` environment variable before invoking any of the scripts above, e.g.,

```sh
PORT=3001 npm start
```

## API access

The express server accesses the backend API (localhost:8080) to access category listings, product information, shopping cart state, and so on.
