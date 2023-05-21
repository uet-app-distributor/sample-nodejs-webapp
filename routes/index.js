const fs = require('fs');

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

router.get('/write-file', function(req, res, next) {
  var fileContent = 'Simple content to write.'
  var filePath = '/tmp/simple-file.txt'

  fs.writeFile(filePath, fileContent, err => {
    if (err) {
      console.error(err);
    }
    res.send('Write file successfully!');
  });
  return
});

module.exports = router;
