# Json Web Token (JWT) basic usage example with Express...
  
*Basic example to understanding the use of JWT.*

  
### Prerequisites...

* [Node.js](https://nodejs.org)

* [NPM](https://www.npmjs.com/)

* [Nodemon](https://nodemon.io/)

### Installing...

  

Cloning the repository

  

```

git clone https://github.com/ghouljd/jwtBasicUsage.git

```

  

Enter cloned directory and do *npm install*

  

```

cd jwtBasicUsage/ && npm install --save

```

  

## Using...

  

You will need to run the project with *nodemon*, ports are already configured (8000 port), make sure you don't conflict them if you change anything.
  

```

nodemon

```
  

Now you can load **localhost:8000** in your browser for test public route.

Now you can load **localhost:8000/secret** in your browser for test private route.

The available routes are: 

Route | Method | Header | Body | Type | Description
------------ | ------------- | ------------- | ------------- | ------------- | -------------
/ | GET | | | public | Test public route
/secret | GET | Authentication: "Bearer Your-Token" | | private | Test private route
/users/login | POST | | { username: 'Valid-user', password: 'Valid-password' } | public | Login route for obtain a valid user token to test */secret* private route.
/time | GET | | | public | Test public route


## Built tools

* [Node](https://nodejs.org/en/) - Backend framework

* [Express](https://expressjs.com/) - Node.js web application framework
  

## Made by...
 [**Jesus Escalante**](https://github.com/ghouljd)