var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Demo',
                       name : 'ZhX Hu',
                       firstHeadLine : 'Here is Zhx Hu first headline'
                      });
});


/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me',
                       name : 'ZhX Hu',
                       firstHeadLine : 'Please enter your information'
                      });
});

module.exports = router;
