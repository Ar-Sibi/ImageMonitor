let db = null;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/imagemonitor"
module.exports.makeConnection = () => {
  MongoClient.connect(url, function (err, dbo) {
    if (err) throw err;
    db = dbo.db('imagemonitor');
  })
};

module.exports.getDb = () => {
  return db
};
