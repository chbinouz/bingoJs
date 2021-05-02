const express = require("express");
const chatRoute = express.Router();

chatRoute.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});

module.exports = chatRoute;