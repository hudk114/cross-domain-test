const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const query = req.query && req.query.callback;
  res.setHeader('content-type', 'text/plain');
  if (!query) {
    res.send('error');
  } else {
    res.send(`${query}('this is the data from jsonp')`);
  }
});

module.exports = router;
