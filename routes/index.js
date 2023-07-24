var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
  res.render('index', { title: "Arsal's Exotics" });
});

router.get('/auth/google', passport.authenticate(
    'google',
  {
    successRedirect: '/cars',
    failureRedirect: '/cars',
    scope: ["profile", "email"],
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/cars',
    failureRedirect: '/cars'
  }
));

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/cars');
  });
});

module.exports = router;
