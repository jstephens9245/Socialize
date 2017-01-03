const express = require('express');
const router = express.Router();
const { User, Message, Bio, Session, Post, db} = require('../../models/index');

const authMiddleware = require('../../middleware/authMiddleware')
// router.use(authMiddleware);

router.get('/', function(req, res, next) {
  // console.log('on Enter');
  // console.log(req.session.userId);

  Message.findAll({
    include: [{
      model: User,
      through: {
        attributes: ['sender', 'receiver'],
        where: {
          sender: req.session.userId
        }
      }}],
  }).then(messages => {
    console.log(messages);
    res.json(messages)
  }).catch(next)
})

router.post('/', function(req, res, next) {
  // console.log(req.session.userId);

  // User.findOne({
  //   where: {
  //     id: req.session.userId
  //   }
  // }).then(user => {
  //   user.addMessage(user, { as: 'sender', through: 'FriendMessages'})
  // })
  Message.create({
    text: req.body.message,
    sender: req.session.userId
  })
  .then(message => {

    console.log(message);
    res.json(message)
  }).catch(next)
})

module.exports = router;
