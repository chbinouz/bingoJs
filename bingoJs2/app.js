var createError = require("http-errors");
var express = require("express");
var app = express();
var path = require("path");
const cors = require('cors')
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require('dotenv').config();
const mongoose = require("mongoose");
const expressValidator = require('express-validator')

////////////
const fileUpload = require('express-fileupload');
const fs = require('fs')
const axios = require('axios')
const pdfparse= require('pdf-parse')
// middle ware
app.use(express.static('public')); //to access the files in public folder
app.use(cors()); // it enables all cors requests
app.use(fileUpload());
app.use(expressValidator())
// file upload api
////////////

//MIDDLEWARE
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors()); // it enables all cors requests
app.use(express.static(path.join(__dirname, "public")));


//IMPORT ROUTERS
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const scrapping = require("./routes/scrapping");
const profileRouter = require("./routes/profileRouter");
const auth = require("./routes/auths")
const hrAgentRouter = require('./routes/hrAgents')
const cvRouter = require('./routes/cvs')
const adminRouter = require('./routes/admin')




//CONNECT TO DATABASE
const connect = mongoose.connect(process.env.URL_DATABASE,
  { useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then(
  (db) => {
    console.log("App has been connected to database");
  },
  (err) => console.log(err)
);



// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");



//ROUTE MIDDLEWARE
app.use("/", indexRouter);
app.use("/auth",auth)
app.use("/users", usersRouter);
app.use("/scrapping", scrapping);
app.use("/profiles", profileRouter);
app.use("/hr",hrAgentRouter)
app.use("/cv",cvRouter)
app.use("/admin",adminRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
