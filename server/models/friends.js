const Sequelize = require('sequelize');
const db = require('./db')

const Friend = db.define('friend', {
  firstname: {
    type: Sequelize.STRING,
  },
  lastname: {
    type: Sequelize.STRING,
  },
  self: {
    type: Sequelize.TEXT,
  }
}, {
  classMethods: {
    mutualFriends: function(arr) {
      let numArr = arr.map(friend => {
        return friend.findAll({}).then(friends => {
          return friends.length
        })
      })
      return numArr;
    }
  }
})

module.exports = Friend;
