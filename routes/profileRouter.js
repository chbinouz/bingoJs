const express = require("express");
const bodyParser = require("body-parser");

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

module.exports = profileRouter;
