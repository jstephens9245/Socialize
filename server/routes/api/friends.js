const express = require('express');
const router = express.Router();
const { User, Message, Bio, Friend, Post, db} = require('../../models/index');

const authMiddleware = require('../../middleware/authMiddleware')
// router.use(authMiddleware);

router.get('/:friendId', function(req, res, next) {
  let friendId = Number(req.params.friendId);

  Friend.findAll({where: {
    userId: req.session.userId

  }}).then(friends => {

    let mutual = Friend.mutualFriends(friends, friendId);
    mutual.then(result => {
      res.json(result)
    })

  }).catch(next)
})

router.get('/', function(req, res, next) {

  Post.findAll({where: {
    id: Number(req.params.postId),
    userId: req.session.userId,
  }}).then(friend => {
    console.log(User.friendUserInfo(friend));
    res.json(friend)
  }).catch(next)
})

module.exports = router;
