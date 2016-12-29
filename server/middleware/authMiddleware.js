const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.use((req, res, next) => {
  User.findById(req.session.userId)
    .then(user => {
      if(!user) {
        const err = new Error('Unauthorized');
        err.status = 403;
        throw err;
      }
      req.user = user;
      next();
    })
})

module.exports = router;
