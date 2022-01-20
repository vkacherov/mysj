var express = require('express');
var router = express.Router();
require('@google-cloud/debug-agent').start({ allowExpressions: true });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'my Study Jams' });
});

module.exports = router;
