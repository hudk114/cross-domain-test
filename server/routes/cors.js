const express = require('express');
const router = express.Router();

router.options('/get', (req, res) => {
  // if set to '*', can't add cookie
  res.setHeader('Access-Control-Allow-Origin', `${req.headers.origin}`);
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // if not set, can't add cookie
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.send();
});

router.get('/get', (req, res) => {
  res.setHeader('set-cookie', 'name=hudk; HttpOnly');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', `${req.headers.origin}`);
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.json({
    id: 'cors-get'
  });
});

router.options('/post', (req, res) => {
  // if set to '*', can't add cookie
  res.setHeader('Access-Control-Allow-Origin', `${req.headers.origin}`);
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // if not set, can't add cookie
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.send();
});

router.post('/post', (req, res) => {
  res.setHeader('set-cookie', 'name=hudk; HttpOnly');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', `${req.headers.origin}`);
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.json({
    id: 'cors-post'
  });
});

module.exports = router;
