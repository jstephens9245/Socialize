const express = require('express');
const router = express.Router();
const { User, Message, Bio, Session, Post, Friend, db} = require('../../models/index');

router.post('/', function(req, res, next) {
  User.create(req.body).then(user => {
    req.session.userId = user.id
    res.json(user);
  }).catch(next)
})

router.get('/', function(req, res) {
  User.findAll({}).then(users => {
    res.json(users);
  })
})

router.post('/addfriend', function(req,res) {
  Friend.create({
      userInfoId: req.body.user,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      self: req.body.self,
      userId: req.session.userId
  })
  .then(user => {
    res.json(user);
  })
})


module.exports = router;
