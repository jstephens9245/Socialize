const Sequelize = require('sequelize');
const db = require('./db')

const Friend = db.define('friend', {
  userInfoId: {
    type: Sequelize.INTEGER,
  },
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
      let mutual = [];

      let userIdArr = arr.map(friend => {
        return friend.userInfoId
      })

      return userIdArr.map(userId => {
        // console.log('userId', userId);
        Friend.findAll({where: {
          userId: userId
        }}).then(friends => {
          for (var i = 0; i < friends.length; i++) {
            let friendId = friends[i].userInfoId
            if(userIdArr.indexOf(friendId) !== -1) {
              // console.log('friendId', friendId);
              // return friendId
              mutual.push(friendId);
            }
          }
        }).then(now => {
          console.log('mutual', mutual);
          return mutual;

        })
      })
    }
  }
})

module.exports = Friend;
