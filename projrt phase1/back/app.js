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

const calendarRoute = require('./routes/calendarRoute')
//Folders
var profileRouterr = require('./routes/folderroutes/profile');
var frontRouter = require('./routes/folderroutes/front');
var fullstackRouter = require('./routes/folderroutes/fullstack');
var uxRouter = require('./routes/folderroutes/ux');
var graphicRouter = require('./routes/folderroutes/graphic');
var webRouter = require('./routes/folderroutes/web');
var videoRouter = require('./routes/folderroutes/video');
var semRouter = require('./routes/folderroutes/sem');
var seoRouter = require('./routes/folderroutes/seo');
var marketingRouter = require('./routes/folderroutes/marketing');
var marketRouter = require('./routes/folderroutes/market');
var contentRouter = require('./routes/folderroutes/content');
var translatorsRouter = require('./routes/folderroutes/translators');
var editorsRouter = require('./routes/folderroutes/editors');
var copyRouter = require('./routes/folderroutes/copy');
var virtualRouter = require('./routes/folderroutes/virtual');
var dataentryRouter = require('./routes/folderroutes/dataentry');
var projectmanagersRouter = require('./routes/folderroutes/projectmanagers');
var techRouter = require('./routes/folderroutes/tech');
var accountantsRouter = require('./routes/folderroutes/accountants');
var financialRouter = require('./routes/folderroutes/financial');
var taxRouter = require('./routes/folderroutes/tax');
var financialmodelersRouter = require('./routes/folderroutes/financialmodelers');
//EndFolders




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
app.use("/",calendarRoute)
app.use("/", indexRouter);
app.use("/auth",auth)
app.use("/users", usersRouter);
app.use("/scrapping", scrapping);
app.use("/profiles", profileRouter);
app.use("/hr",hrAgentRouter)
app.use("/cv",cvRouter)





//chat
const http = require('http');

const socketio = require('socket.io');


const { addUser, removeUser, getUser, getUsersInRoom } = require('./controllers/users');

const chatRoute = require('./routes/chatRoute');


const server = http.createServer(app);
const io = socketio(server);


app.use(chatRoute);

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});






//

const folderRouter = require('./routes/folder')
//add folder
app.use("/folder", folderRouter)


//FOLDER MIDDLEWARES
app.use('/profile', profileRouterr);
app.use('/front', frontRouter);
app.use('/fullstack',fullstackRouter);
app.use('/ux', uxRouter);
app.use('/graphic', graphicRouter);
app.use('/web', webRouter);
app.use('/video', videoRouter);
app.use('/sem', semRouter);
app.use('/seo', seoRouter);
app.use('/marketing', marketingRouter);
app.use('/market', marketRouter);
app.use('/content', contentRouter);
app.use('/translators', translatorsRouter);
app.use('/editors', editorsRouter);
app.use('/copy', copyRouter);
app.use('/virtual', virtualRouter);
app.use('/dataentry', dataentryRouter);
app.use('/projectmanagers', projectmanagersRouter);
app.use('/tech', techRouter);
app.use('/accountants', accountantsRouter);
app.use('/financial', financialRouter);
app.use('/tax', taxRouter);
app.use('/financialmodelers', financialmodelersRouter);
//END FOLDER MIDDLEWARES

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

//module.exports = app;
module.exports = {app: app, server: server};
