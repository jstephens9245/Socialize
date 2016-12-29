const express = require('express');
const router = express.Router();
const { User, Message, Bio, Session, Post, db} = require('../../models/index');

const authMiddleware = require('../../middleware/authMiddleware')
// router.use(authMiddleware);

router.get('/', function(req, res, next) {
  // console.log('on Enter');
  // console.log(req.session.userId);

  // Message.findAll({where: {
  //   sender: req.session.userId
  // }}).then(messages => {
  //   console.log(messages);
  //   res.json(messages)
  // }).catch(next)
})

router.post('/', function(req, res, next) {
  // console.log(req.session.userId);
  Message.create({
    text: req.body.message,
    sender: req.session.userId
  })
  .then(message => {
    console.log(req.body);
    res.json(message)
  }).catch(next)
})

module.exports = router;
