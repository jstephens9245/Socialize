const express = require('express');
const router = express.Router();
const { User, Message, Bio, Session, Post, db} = require('../../models/index');

router.post('/', function(req, res, next) {
  console.log(req.body);
  User.create(req.body).then(user => {
    console.log(user);
    
    req.session.userId = user.id
    res.json(user);
  }).catch(next)
})

router.get('/', function(req, res) {
  User.findAll({}).then(users => {
    res.json(users);
  })
})


module.exports = router;
