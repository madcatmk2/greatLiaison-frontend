/*
 * Simple web server for G&L website
 */

var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 8090));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server
    res.setHeader('Access-Control-Allow-Origin', '*');

    next();
});

var getData = function(res, type, fileName) {
  var DATA_FILE = path.join(__dirname, 'json/' + type + '/' + fileName + '.json');
  fs.readFile(DATA_FILE, function(err, data) {
    if (err) {
      console.error(err);
      res.status(404).send('Not Found');
    } else {
      res.json(JSON.parse(data));
    }
  });
};

// All other GET requests are redirected to the React app
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
