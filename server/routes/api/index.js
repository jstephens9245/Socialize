const express = require('express');
const router = express.Router();
const postsRoute = require('./posts');
const usersRoute = require('./users');
const messagesRoute = require('./messages');
const bioRoute = require('./bios');
const sessionsRoute = require('./sessions.js')

router.get('/', function(req, res) {
  res.send('API HOME');
})

router.use('/posts', postsRoute);
router.use('/users', usersRoute);
router.use('/messages', messagesRoute);
router.use('/sessions', sessionsRoute);
router.use('/bio', bioRoute);

module.exports = router;
