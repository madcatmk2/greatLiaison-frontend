/*
 * Simple web server for G&L website
 */

var express = require('express');
var fs = require('fs');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 8090));
app.use(express.static('public'));

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.server = http.createServer(app);
app.server.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
