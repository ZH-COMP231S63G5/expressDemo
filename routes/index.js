var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Demo',
                       name : 'Tom',
                       firstHeadLine : 'Here is my first headline'
                      });
});

module.exports = router;
