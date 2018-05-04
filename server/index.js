const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/imagemonitor";
var db;
MongoClient.connect(url, function (err, dbo) {
  if (err) throw err;
  db = dbo.db('imagemonitor');
  db.createCollection("activity", function (err, res) {
    if (err) throw err;
    console.log("Collection created!");
  });
});
console.log("Database created!");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', (req, res) => {
  res.json({
    "message": "Server Works!"
  });
})
app.get('/api/:id/getActivities', (req, res, next) => {
  db.collection('activity').find({name:req.params.id}).project({
    _id: 0
  }).toArray(function (err, array) {
    console.log(array);
    res.send(array);
  })
})
app.post('/api/:id/addActivity', (req, res, next) => {
  req.body.name = req.params.id;
  db.collection('activity').insertOne(req.body, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });
  console.log(req.params.id);
  console.log(JSON.stringify(req.body));
})
app.listen(3000, () => {
  console.log("listening on port 3000");
})

