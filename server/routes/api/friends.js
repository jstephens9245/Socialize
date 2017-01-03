const express = require('express');
const router = express.Router();
const { User, Message, Bio, Friend, Post, db} = require('../../models/index');

const authMiddleware = require('../../middleware/authMiddleware')
// router.use(authMiddleware);

router.get('/', function(req, res, next) {

  Friend.findAll({where: {
    userId: req.session.userId
  }}).then(friends => {
    console.log(Friend.mutualFriends(friends));
    res.json(friends)
  }).catch(next)
})

router.get('/:friendId', function(req, res, next) {

  Post.findAll({where: {
    id: Number(req.params.postId),
    userId: req.session.userId,
  }}).then(friend => {
    console.log(User.friendUserInfo(friend));
    res.json(friend)
  }).catch(next)
})

module.exports = router;
