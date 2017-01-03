Socialize Site!!!

Express:

Static file server

./app

Setup each model's API routes in a separate file using RESTful routing

./sever/routes/api

Create middleware (you can use an NPM package) that uses sessions to track users across requests

./app
./sever/routes/api/users
./sever/routes/api/sessions


Sequelize:

Create at least 5 models

./sever/models

Each models needs appropriate types and validations
Make sure to include and use appropriately at least 2 instance methods, 2 class methods, and a hook

./sever/models/user
./sever/models/friends

You must have a one-to-one relationship, a one-to-many
relationship, and a many-to-many relationship

./sever/models/index

Demonstrate eager loading in one of your routes

./sever/routes/api/bios

React:

At least 7 different components, one of which allows for login and sign up

./browser/react/components

Clear separation between stateful and stateless components

./browser/react/components
./browser/react/containers

Create a form with local state that demonstrates React's two way binding

./browser/react/containers/BioFormContainer
with
./browser/react/components/BioForm

React forms employ all 4 CRUD operations

it is used throughout all of my posts (post) related code
./browser/react/containers/PostFormContainer
./browser/react/containers/PostsContainer
./browser/react/containers/PostContainer

./browser/react/components/PostForm
./browser/react/components/Posts
./browser/react/components/Post


React Router:

Appropriately use onEnter to query for initial data

./browser/react/index

Redux:

Appropriately use the connect method to distribute state as props to each component

any ./browser/react/containers

Use at least three separate reducers in separate files which are combined into a single reducer

./browser/react/redux/reducers/root-reducer
