const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static(path.resolve(__dirname)));

// 前端资源
app.use('/', require('./routes'));

app.listen(31311, _ => {
  console.log('listen to localhost:31311');
});
