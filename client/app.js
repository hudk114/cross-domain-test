const express = require('express');
const path = require('path');
const fs = require('fs');
const opn = require('opn');

const app = express();

app.use(express.static(path.resolve(__dirname)));

// html文件
app.get('/*.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', req.path.slice(1)));
});

app.get('/*.js', (req, res) => {
  res.setHeader('content-type', 'application/javascript');
  res.sendFile(path.resolve(__dirname, '..', req.path.slice(1)));
});

app.get('/', (req, res) => {
  res.redirect('/public/index.html');
});

app.listen(41311, _ => {
  console.log('listen to localhost:41311');
  opn('http://localhost:41311');
});
