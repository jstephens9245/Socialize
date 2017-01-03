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
      as: 'sender',
        where: {
          sender: req.session.userId
        }
      }],
  }).then(messages => {
    console.log(messages);
    res.json(messages)
  }).catch(next)
})

router.post('/', function(req, res, next) {
  console.log('hitting', req.body);
  let newMessage;
  Message.create({
    text: req.body.message,
  })
  .then(message => {
    newMessage = message;
    return User.findById(req.session.userId)
  }).then(user => {
    user.addMessage(newMessage, { as: 'sender' })
    res.json(newMessage)
  }).catch(next)
})

module.exports = router;
