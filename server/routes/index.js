const express = require('express');
const router = express.Router();

router.use('/cors', require('./cors'));
router.use('/jsonp', require('./jsonp'));
router.use('/iframe', require('./iframe'));

module.exports = router;
