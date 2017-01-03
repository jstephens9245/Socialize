const Sequelize = require('sequelize');
const db = require('./db')
const bcrypt = require('bcrypt-nodejs');


const User = db.define('user', {
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
}, {
  hooks: {
  beforeCreate: function(user) {
    return user.hashPassword();
  },
  beforeUpdate: function(user) {
    if(!user.changed('password')) { return; }
    return user.hashPassword();
  }
},
instanceMethods: {
  checkPassword: function(password) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, this.password, (err, resultingBoolean) => {
        if(err) { return reject(err); }
        resolve(resultingBoolean)
      })
    })
  },
  hashPassword: function() {

    return new Promise((resolve, reject) => {
      let salt = bcrypt.genSaltSync(4)
      bcrypt.hash(this.password, salt, null, (err, hash) => {
        if(err) {return reject(err)}
        this.password = hash;
        resolve()
      })
    })
  }
},
classMethods: {
  friendUserInfo: function (arrayOfFriends) {
    arrayOfFriends.map(friend => {
      return User.findOne({
        id: friend.id
      }).then(friendInfo => {
        return friendInfo
      })
    })
    return arrayOfFriends;
  },
}
})

module.exports = User;
