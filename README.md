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

Visit <http://localhost:3000/> once the server is up and the app.js file is generated.

## Changing the port

You can change the port number by setting the `$PORT` environment variable before invoking any of the scripts above, e.g.,

```sh
PORT=3001 npm start
```

## API access

The express server provides two API routes to access category listings and product information.

```
/api/categories/:categoryName
/api/products/:productId
```

For example:

```
/api/categories/cleansing
/api/products/GL099
```
