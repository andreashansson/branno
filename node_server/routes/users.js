var express = require('express');
var router = express.Router();
var User = require('../schemas/User');

/* GET home page. */
router.get('/users', function(req, res, next) {
  User.find().then(allUsers => {
    res.json(allUsers);
  }).catch(err => {
    console.log(err);
  });
  /*
  User.find().then(function(allData) {
    console.log(allData);
    res.json(allData);
  });
  */
});

router.get('/user/add', (req, res, next) => {
  var user = new User({
    user: "Anna",
    age: "36"
  });

  user.save(err => {
    if (err) {
      console.log(err);
    }
  });

  res.json({user: user});

});

module.exports = router;
