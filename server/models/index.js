const db = require('./db')

const User = require('./user')
const Message = require('./message')
const Bio = require('./bio')
// const Session = require('./session')
const Post = require('./post')

//user has email and password

User.belongsToMany(User, { as: 'friend', through: 'FriendsHaveFriends'})

//one to many
User.hasMany(Post);
Post.belongsTo(User);

// Session.hasMany(User)

//many to many
User.belongsToMany(Message, { as: 'sender', through: 'FriendMessages'}) //need foreignKey , foreignKey: 'userId'
User.belongsToMany(Message, { as: 'receiver', through: 'FriendMessages'})

//one to one
Bio.belongsTo(User);

module.exports = {
  User, Message, Bio, Post, db
}
