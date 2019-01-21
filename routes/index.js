const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser"); 
const expressjwt = require("express-jwt");
const jwtCheck = expressjwt({    
  secret: "mykey"
});

router.get("/", (req, res) => {
  res.status(200).send("Everybody can see this");
});

router.get("/secret", jwtCheck, (req, res) => {
  res.status(200).send("Only logged in people can see me");
});

module.exports = router;
