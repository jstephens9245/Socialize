const express = require('express');
const router = express.Router();
const { User, Message, Bio, Session, Post, db} = require('../../models/index');


router.get('/', function(req, res) {
  res.send('users HOME');
})

router.post('/', (req, res, next) => {
  User.findOne({ where: {
    email: req.body.email,
  }})
    .then(user => {
      if(!user) {
        let err = new Error('Unauthorized');
        err.status = 401;
        throw err;
      }
      return Promise.all([
        user.checkPassword(req.body.password),
        user
      ])
    })
    .then(results => {
      const [passwordIsValid, user] = results;
      if(!passwordIsValid) {
        let err = new Error('Unauthorized');
        err.status = 401;
        throw err;
      }
      req.session.userId = user.id;
      
      res.json(user)
    }).catch(next)
})

module.exports = router;
