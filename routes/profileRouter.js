const express = require("express");
const bodyParser = require("body-parser");
var request = require("request");
const Profiles = require("../models/profile");

const profileRouter = express.Router();

profileRouter.use(bodyParser.json());

profileRouter.route("/").get((req, res, next) => {
  Profiles.find(req.query).then(
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

profileRouter.route("/search").get((req, res, next) => {
  Profiles.find({
    $or: [
      { location: { $regex: req.query.location + "", $options: "i" } },
      {
        profile_title: { $regex: req.query.profile_title + "", $options: "i" },
      },
    ],
  })
    .then((profile) => {
      let sumExperienceYear;
      let sumExperienceMonth;
      let pr = [];
      if (req.query.experience) {
        profile.forEach((prf) => {
          sumExperienceYear = 0;
          sumExperienceMonth = 0;
          sum = 0;
          prf.experience.forEach((exp) => {
            if (
              exp.job_title
                .toString()
                .toLowerCase()
                .includes(req.query.profile_title.toLowerCase())
            ) {
              var numExp = exp.exp.toString().split(" ");
              var indexYear = numExp.indexOf("yrs");
              var indexMonth = numExp.indexOf("mos");
              sumExperienceMonth =
                sumExperienceMonth + parseInt(numExp[indexMonth - 1]);
              sumExperienceYear =
                sumExperienceYear + parseInt(numExp[indexYear - 1]);
            }
          });
          console.log(sumExperienceMonth);
          console.log(sumExperienceYear / 12);
          sum = sumExperienceYear + sumExperienceMonth / 12;
          if (req.query.experience <= sum) {
            prf.sumExp = sum;
            console.log(prf.sumExp);
            pr.push(prf);
          }
        });
      }
      if (!req.query.experience) {
        pr = profile;
      }
      res.statusCode = 200;
      res.json(pr);
    })
    .catch((err) => next(err));
  console.log(req.query);

  /*if (req.query.profile_title) {
    Profiles.find({ profile_title: { $regex: req.query.profile_title } })
      .then((profile) => {
        console.log(profile);
        res.statusCode = 200;
        res.json(profile);
      })
      .catch((err) => next(err));
  }
  */
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
                try {
                  jsonBody = JSON.parse(body);

                  console.log(jsonBody);
                  Profiles.findByIdAndUpdate(
                    req.params.profileId,
                    {
                      $set: {
                        realTimeLocation:
                          jsonBody.City + "-" + jsonBody.Country,
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
                } catch (err) {
                  res.statusCode = 200;
                  res.setHeader("Content-Type", "application/json");
                  res.json(profile);
                }
              }
            );
          } catch (err) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(profile);
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
