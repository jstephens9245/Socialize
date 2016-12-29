const express = require('express');
const router = express.Router();
const { User, Message, Bio, Session, Post, db} = require('../../models/index');

const authMiddleware = require('../../middleware/authMiddleware')
// router.use(authMiddleware);

router.get('/', function(req, res, next) {
  // console.log('on Enter');
  // console.log(req.session.userId);

  Post.findAll({where: {
    userId: req.session.userId
  }}).then(posts => {
    res.json(posts)
  }).catch(next)
})

router.post('/', function(req, res, next) {
  // console.log(req.body);
  // console.log(req.session.userId);
  Post.create({
    post: req.body.post,
    userId: req.session.userId
  })
  .then(post => {
    res.json(post)
  }).catch(next)
})

module.exports = router;
