var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/vars', function(req, res, next) {
  var environmentVariables = `USER: ${process.env.USER} - PORT: ${process.env.PORT}`
  res.send(`${environmentVariables}`);
});

module.exports = router;
