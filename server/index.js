const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
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
  console.log("Database created!");
  db = dbo.db('imagemonitor');
  db.createCollection("activity", function (err, res) {
    if (err) throw err;
    console.log("Collection created!");
  });
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes);

app.listen(3000, () => {
  console.log("listening on port 3000");
})
