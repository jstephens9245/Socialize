const express = require('express');
const router = express.Router();
const { User, Message, Bio, Session, Post, db} = require('../../models/index');

router.post('/', function(req, res, next) {
  console.log(req.body);
  Bio.findOrCreate({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    self: req.body.self,
    userId: req.session.userId
  }).then(bio => {
    console.log(bio);

    res.json(bio);
  }).catch(next)
})

router.get('/', function(req, res) {
  User.findOne({
  where: {
    id: req.session.userId
  },
  include: [Bio]
  })
  .then(user => {
    res.json(user);
  })
})


module.exports = router;
