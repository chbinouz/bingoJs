var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var bodyParser = require('body-parser');
const calendarRouter = express.Router();



var url = "mongodb://localhost:27017/";



MongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    }
  
    var dbo = db.db("Pi");
  

    var c =''
    var g=''
    calendarRouter.route('/idConnected').post((req, res, next) =>{
        c=JSON.stringify(req.body) 
        d=JSON.parse(c)
       // numb = d._id.match(/\d/g);
        //numb = numb.join("");
        g=d._id 
    })

    
    calendarRouter.route('/GetData').post((req, res, next) =>{
        dbo.collection('ScheduleData').find({}).toArray(function (err, cus) {
            for (var i = 0; i < cus.length; i++) {
                var sdate = new Date(cus[i].StartTime);
                var edate = new Date(cus[i].EndTime);
                cus[i].StartTime = (new Date(+sdate - (sdate.getTimezoneOffset() * 60000)));
                cus[i].EndTime = (new Date(+edate - (edate.getTimezoneOffset() * 60000)));
                console.log(cus[i].Idcncte)
                
            }
            res.send(cus.filter((na) =>
            na.Idcncte==g
          ))
            
            
        });
    })
   
    
    calendarRouter.route('/BatchData').post((req, res, next) =>{

        
        var eventData = [];
        if (req.body.action === "insert" || (req.body.action === "batch" && req.body.added.length > 0)) {
            (req.body.action === "insert") ? eventData.push(req.body.value) : eventData = req.body.added;
            for (var a = 0; a < eventData.length; a++) {
                eventData[a].StartTime = new Date(eventData[a].StartTime);
                eventData[a].EndTime = new Date(eventData[a].EndTime);
                eventData[a].Idcncte=g;
               //console.log(eventData[a])

                dbo.collection('ScheduleData').insertOne(eventData[a]);
            }
        }
        if (req.body.action === "update" || (req.body.action === "batch" && req.body.changed.length > 0)) {
            (req.body.action === "update") ? eventData.push(req.body.value) : eventData = req.body.changed;
            for (var b = 0; b < eventData.length; b++) {
                delete eventData[b]._id;
                eventData[b].StartTime = new Date(eventData[b].StartTime);
                eventData[b].EndTime = new Date(eventData[b].EndTime);
                dbo.collection('ScheduleData').updateOne({ "Id": eventData[b].Id }, { $set: eventData[b] });
            }
        }
        if (req.body.action === "remove" || (req.body.action === "batch" && req.body.deleted.length > 0)) {
            (req.body.action === "remove") ? eventData.push({ Id: req.body.key }) : eventData = req.body.deleted;
            for (var c = 0; c < eventData.length; c++) {
                dbo.collection('ScheduleData').deleteOne({ "Id": eventData[c].Id });
            }
        }
        res.send(req.body);
    });

    
  

    

});
module.exports=calendarRouter;
