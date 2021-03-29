const express = require("express");
const scrappingRouter = express.Router();
var request = require("request");
/* GET users listing. */

scrappingRouter
  .route("/:search")
  .get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({ success: true, status: "hello word" });
  })
  .post((req, res, next) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json({ success: true, status: "done" });
            request.post(
        {
          url: "http://localhost:5000/run/" + req.params.search,
        },
        (error, response, body) => {
            console.log(body)
            if (error) {
            return console.dir(error);
          }
        }
    )
  });


module.exports = scrappingRouter;
