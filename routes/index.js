const fs = require('fs');

var express = require('express');
var router = express.Router();

const VOLUME = "/tmp"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/env', function(req, res, next) {
  var environmentVariables = `USER: ${process.env.USER} - PORT: ${process.env.PORT}`
  res.send(`${environmentVariables}`);
});

router.get('/file', function(req, res, next) {
  var fileContent = 'Simple content to write.'
  var fileName = 'simple.txt'
  var filePath = `${VOLUME}/${fileName}`

  fs.writeFile(filePath, fileContent, err => {
    if (err) {
      console.error(err);
    }
    res.send('Write file successfully!');
  });
  return
});

module.exports = router;
