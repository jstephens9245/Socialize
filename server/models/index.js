const db = require('./db')

const User = require('./user')
const Message = require('./message')
const Bio = require('./bio')
const Friend = require('./friends')
const Post = require('./post')

//user has email and password

// User.belongsToMany(User, { as: 'friend', through: 'FriendsHaveFriends'})

//one to many
User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Friend);
Friend.belongsTo(User);

// Session.hasMany(User)

//many to many
Message.belongsToMany(User, { as: 'sender', through: 'FriendMessages'})
Message.belongsToMany(User, { as: 'receiver', through: 'FriendMessages'})

//one to one
Bio.belongsTo(User);

module.exports = {
  User, Message, Bio, Post, Friend, db
}
