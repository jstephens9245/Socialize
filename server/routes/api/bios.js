const express = require('express');
const router = express.Router();
const { User, Message, Bio, Session, Post, db} = require('../../models/index');

router.post('/', function(req, res, next) {
  // console.log('bio', req.body);
  // console.log('sessionId', req.session.userId);
  Bio.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    self: req.body.self,
    userId: req.session.userId
  }).then(bio => {
    // console.log(bio);

    res.json(bio);
  }).catch(next)
})

router.get('/', function(req, res) {
  Bio.findOne({
  where: {
    userId: req.session.userId
  },
  include: [User],
  })
  .then(user => {
    res.json(user);
  })
})

router.get('/all', function(req, res) {
  Bio.findAll({
    include: [User],
  })
  .then(bios => {
    res.json(bios)
  })
})

module.exports = router;
