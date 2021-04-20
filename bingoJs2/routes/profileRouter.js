const express = require("express");
const bodyParser = require("body-parser");
var request = require("request");
const Profiles = require("../models/profile");

const profileRouter = express.Router();

profileRouter.use(bodyParser.json());

profileRouter.route("/").get((req, res, next) => {
  Profiles.find({ "experience.job_title": { $exists: true } })
    .sort({ _id: -1 })
    .skip(req.query.page * 10)
    .limit(10)
    .then(
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
      (err) => next(err)
    )
    .catch((err) => next(err));
});

profileRouter.route("/sum").get((req, res, next) => {
  Profiles.find({ "experience.job_title": { $exists: true } })
    .count()
    .then((num) => {
      if (num) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(num);
      } else {
        let err = new Error("profiles is empty");
        err.status = 404;
        next(err);
      }
    })
    .catch((err) => next(err));
});

profileRouter.route("/search").get((req, res, next) => {
  let page = 0;
  if (req.query.page == undefined) {
    page = 0;
  } else page = req.query.page;
  if (!req.query.experience) {
    Profiles.find({
      $and: [
        { location: { $regex: req.query.location + "", $options: "i" } },
        {
          profile_title: {
            $regex: req.query.profile_title + "",
            $options: "i",
          },
        },
        { "experience.job_title": { $exists: true } },
      ],
    })
      .sort({ _id: -1 })
      .skip(req.query.page * 10)
      .limit(10)
      .then((profile) => {
        console.log(profile);
        let sumExperienceYear;
        let sumExperienceMonth;
        let pr = [];
        if (profile.length != 0) {
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
              if (req.query.experience >= sum) {
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
          return res.json(pr);
        } else {
          res.statusCode = 200;
          return res.json({ notFound: true });
        }
      })
      .catch((err) => next(err));
  } else {
    Profiles.find({
      $and: [
        { location: { $regex: req.query.location + "", $options: "i" } },
        {
          profile_title: {
            $regex: req.query.profile_title + "",
            $options: "i",
          },
        },
        { "experience.job_title": { $exists: true } },
      ],
    })
      .then((profile) => {
        console.log(profile);
        let sumExperienceYear;
        let sumExperienceMonth;
        let pr = [];
        if (profile.length != 0) {
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

              sum = sumExperienceYear + sumExperienceMonth / 12;
              console.log(sum);
              if (req.query.experience <= sum) {
                prf.sumExp = sum;

                pr.push(prf);
              }
            });
            console.log(pr.length);
          }
          if (!req.query.experience) {
            pr = profile;
          }

          res.statusCode = 200;
          return res.json(pr);
        } else {
          res.statusCode = 200;
          return res.json({ notFound: true });
        }
      })
      .catch((err) => next(err));
  }

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

profileRouter.route("/ableToChange/:profileId").get((req, res, next) => {
  Profiles.findById(req.params.profileId)
    .then((profile) => {
      let sumExperienceYear;
      let sumExperienceMonth;
      let pr = [];
      let change = 0;
      let month = 0;
      let year = 0;
      profile.experience.forEach((exp) => {
        sumExperienceYear = 0;
        sumExperienceMonth = 0;
        month = 0;
        sum = 0;
        year = 0;
        console.log(exp);

        var numExp = exp.exp.toString().split(" ");
        var indexYear = numExp.indexOf("yrs");
        var indexMonth = numExp.indexOf("mos");
        sumExperienceMonth =
          sumExperienceMonth + parseInt(numExp[indexMonth - 1]);
        sumExperienceYear = sumExperienceYear + parseInt(numExp[indexYear - 1]);
        console.log(sumExperienceMonth / 12);
        console.log(sumExperienceYear);

        if (sumExperienceMonth) {
          month = sumExperienceMonth / 12;
        }
        if (sumExperienceYear) {
          year = sumExperienceYear;
        }
        sum = year + month;

        console.log(sum);
        if (2 >= sum) {
          change++;
        }
      });
      console.log(change);

      if (change >= profile.experience.length * 0.8) {
        console.log("il est suseptible");
        console.log(change >= profile.experience.length * 0.8);
        profile = { able_for_change: "true" };
      } else {
        console.log("non suseptible");
        console.log(change >= profile.experience.length * 0.8);
        profile = { able_for_change: "false" };
      }

      res.statusCode = 200;
      res.json(profile);
    })
    .catch((err) => next(err));
});

profileRouter.route("/:profileId").get((req, res, next) => {
  var locat = "null";
  Profiles.findById(req.params.profileId).then(
    async (profile) => {
      if (profile.length != 0) {
        console.log(profile.experience);
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
