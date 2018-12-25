# Deployment

`$ npm install`
`$ npm run init`
`$ npm start`

Note: The server is currently just being run with `node`, but it should probably be run with something
like `pm2`


# API

## Users
#### Create
Users can be created with a `POST` request to `/users`, with the request `body` begin a json object in the form:
```javascript
{
  username: "",
  password: ""
}
```
Additionally the object can contain `firstName` and `lastName` properties, but they are not required.
When the user is created successfully `true` will be returned along with a 200 status code.
4xx otherwise.
#### Login
Users can be logged in with a `POST` request to `/users/login`, with the request `body` begin a json object in the form:
```javascript
{
  username: "",
  password: ""
}
```
When the credentials match a user in the database `true` will be returned along with a 200 status code.
4xx otherwise.


