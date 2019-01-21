const express = require('express');
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const users = [
  {id: 1, username: "jesus", password: "jesus"},
  {id: 2, username: "escalante", password: "escalante"}
];

router.use(bodyParser.json());
router.use(cors());

router.get('/time', function(req, res, next) {
  const time = (new Date()).toLocaleTimeString();
  res.status(200).send(`The Time is ${time}`);
});

router.get("*", (req, res) => {
  res.sendStatus(404);
});

router.post("/login", (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).send("Error. Please enter the correct username and password");
    return;
  }
  const user = users.find(user => user.username === req.body.username && user.password === req.body.password);
  if (user){
    const token = jwt.sign({
      sub: user.id,
      username: user.username
    }, "mykey", {expiresIn: "3 hours"});
    res.status(200).send({access_token: token})
  }
  else res.status(401).send("Unauthorized. Please enter the correct username and password");
});

module.exports = router;
