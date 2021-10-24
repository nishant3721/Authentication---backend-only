## To get started

- Pull the code from this github repo
- Run "npm install" in order to install the dependencies on node_modules folder
- Start the server -> entry point is "index.js" (you can use nodemon/supervisor type of library to automatically run the server, use "npm i nodemon/supervisor" to install any of the library, to start the server, type "nodemon/supervisor index.js")

## APIs Endpoint

- ROUTE 1 : - Create a user using: POST "/api/auth/createuser" -> No login required (this will return the token to authenticate a user)
  request body = {
  "name" : "Your Name"
  "email" : "Your Email".
  "password" : "Your Password"
  }

- ROUTE 2 : - Authenticate a user using: POST "/api/auth/login" -> No login required (In request header section, provide the authToken, you received in ROUTE 1)
  request body = {
  "email" : "Your Email".
  "password" : "Your Password"
  }

  - ROUTE 3 : - Get LoggedIn user details using: POST "/api/auth/getuser" -> login required (In request header section, provide the authToken, you received in ROUTE 1)
