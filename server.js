// server configuration

const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});


app.get('/inline.bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/inline.bundle.js'));
});

app.get('/polyfills.bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/polyfills.bundle.js'));
});

app.get('/styles.bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/styles.bundle.js'));
});

app.get('/vendor.bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/vendor.bundle.js'));
});

app.get('/main.bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/main.bundle.js'));
});

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 3000);
