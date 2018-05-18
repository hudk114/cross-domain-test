const express = require('express');
const router = express.Router();

router.get('/name', (req, res, next) => {
  res.sendFile('../iframe/name.html');
});

router.get('/cookie', (req, res, next) => {
  console.log(req.headers.cookie)
  res.setHeader('set-cookie', 'alili=123; HttpOnly');
  res.send('interesting');
});

module.exports = router;
