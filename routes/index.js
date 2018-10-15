var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/logInForm', function(req, res, next) {
  res.redirect('login.html');
});

/* GET home page. */
router.post('/logInForm', function(req, res, next) {

  if(req.body.username =="hasamba" && req.body.pswd =="hasamba")
    res.redirect('members.html');
  else
    res.redirect('login.html');

});

module.exports = router;
