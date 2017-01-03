Socialize Site!!!

home page (navbar shows home, login, or signup

signup & login will be basic form input (may pass in hashed
passwords depends on how far i get)

Users page will be slightly different from Home

navbar will have home(will route to the main users page
instead), friends, and sign out (possibly more to come)
render the posts similar to the juke album set up but make it
block, not inline-block

maybe friends post & if so either together with username
identifiers or separated between pages entirely

if i make friends will have to set up a search bar to allow user
to look for others and send friend request (or just add, sounds
tricky)

might be better instead of the friends component to work out
individual post page

webpack-dev-server --config config/webpack.dev.js --inline --open"


class method Ideas:
 -list all friends
 -find mutual friends
 -find unread messages

 instance methods:
 -set up a new Message with opposite sender and receivers

 maybe load users to the home page, for my onEnter
-------------------------------
Express:

Static file server

Setup each model's API routes in a separate file using RESTful
routing

Create middleware (you can use an NPM package) that uses sessions
to track users across requests

Sequelize:

Create at least 5 models

Each models needs appropriate types and validations
Make sure to include and use appropriately at least 2 instance
methods, 2 class methods, and a hook

You must have a one-to-one relationship, a one-to-many
relationship, and a many-to-many relationship

Demonstrate eager loading in one of your routes

React:
At least 7 different components, one of which allows for login and
sign up

Clear separation between stateful and stateless components
Create a form with local state that demonstrates React's two way
binding

React forms employ all 4 CRUD operations

React Router:

Appropriately use onEnter to query for initial data

Redux:

Appropriately use the connect method to distribute state as props
to each component

Use at least three separate reducers in separate files which are
combined into a single reducer
