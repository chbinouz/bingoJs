const express = require("express");
const scrappingRouter = express.Router();
var request = require("request");
const Scrapping = require("../models/scrap");
/* GET users listing. */

scrappingRouter
  .route("/startScrapping/:search")
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
        console.log(body);
        if (error) {
          return console.dir(error);
        }
      }
    );
  });

scrappingRouter
  .route("/scrap")
  .get((req, res, next) => {
    Scrapping.find({})
      .then(
        (resultat) => {
          if (resultat.length != 0) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(resultat);
          } else {
            let err = new Error("profiles is empty");
            err.status = 404;
            next(err);
          }
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  })
  .post((req, res, next) => {
    console.log(req.body);
    Scrapping.create(req.body)
      .then(
        (resultat) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(resultat);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

module.exports = scrappingRouter;
