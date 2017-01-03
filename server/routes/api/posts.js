const express = require('express');
const router = express.Router();
const { User, Message, Bio, Session, Post, db} = require('../../models/index');

const authMiddleware = require('../../middleware/authMiddleware')
// router.use(authMiddleware);

router.get('/', function(req, res, next) {

  Post.findAll({where: {
    userId: req.session.userId
  }}).then(posts => {
    res.json(posts)
  }).catch(next)
})

router.post('/', function(req, res, next) {

  Post.create({
    post: req.body.post,
    userId: req.session.userId
  })
  .then(post => {
    res.json(post)
  }).catch(next)
})

router.get('/:postId', function(req, res, next) {

  Post.findOne({where: {
    id: Number(req.params.postId),
    userId: req.session.userId,
  }}).then(post => {
    res.json(post)
  }).catch(next)
})

router.put('/:postId', function(req, res, next) {
  Post.findOne({where: {
    id: Number(req.params.postId),
    userId: req.session.userId,
  }}).then(post => {
    post.update({post: req.body.post}).then(() => {
      res.json(post)

    })
  }).catch(next)
})


router.delete('/:id', function(req, res) {
  Post.findOne({where: {
    id: Number(req.params.id),
    userId: req.session.userId,
  }}).then(post => {
    console.log(post);
    post.destroy().then(delNum => {
      // res.send('hit the delete');
    })
  })


})

module.exports = router;
