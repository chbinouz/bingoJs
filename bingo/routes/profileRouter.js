const express = require("express");
const bodyParser = require("body-parser");
var request = require("request");
const Profiles = require("../models/profile");

const profileRouter = express.Router();

profileRouter.use(bodyParser.json());

profileRouter.route("/").get((req, res, next) => {
  Profiles.find({}).then(
    (profile) => {
      if (profile.length != 0) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(profile);
      } else {
        let err = new Error("profiles is empty");
        err.status = 404;
        next(err);
      }
    },
    (err) => next(err).catch((err) => next(err))
  );
});

profileRouter.route("/:profileId").get((req, res, next) => {
  var locat = "null";
  Profiles.findById(req.params.profileId).then(
    async (profile) => {
      if (profile.length != 0) {
        //res.json(profile.experience[0].location);
        try {
          locat = profile.experience[0].location;
          try {
            request.get(
              {
                url: "http://localhost:5000/cities/" + locat,
              },
              (error, response, body) => {
                if (error) {
                  console.log(error);
                }
                console.log(body);
                jsonBody = JSON.parse(body);
                console.log(jsonBody);
                Profiles.findByIdAndUpdate(
                  req.params.profileId,
                  {
                    $set: {
                      realTimeLocation: jsonBody.City + "-" + jsonBody.Country,
                    },
                  },
                  { new: true }
                )
                  .then(
                    (prf) => {
                      res.statusCode = 200;
                      res.setHeader("Content-Type", "application/json");
                      res.json(prf);
                    },
                    (err) => next(err)
                  )
                  .catch((err) => next(err));
              }
            );
          } catch (err) {
            console.log(err);
          }
        } catch {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(profile);
        }
      } else {
        let err = new Error("profiles is empty");
        err.status = 404;
        next(err);
      }
    },
    (err) => next(err).catch((err) => next(err))
  );
});

module.exports = profileRouter;
