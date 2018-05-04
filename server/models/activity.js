let dbUtils = require('../utils/mongoUtils');

dbUtils.makeConnection();

module.exports.getActivities = (name, callback) => {
  dbUtils.getDb().collection('activity').find({
    name: name
  }).project({
    _id: 0
  }).toArray(function (err, array) {
    callback(array);
  })
}

module.exports.getActivitiesPaginated = (name, count, callback) => {
  dbUtils.getDb().collection('activity').find({
    name: name
  }).project({
    _id: 0
  }).skip(count).limit(10).toArray(function (err, array) {
    callback(array);
  })
}

module.exports.getCount = (name,callback) => {
  dbUtils.getDb().collection('activity').find({
    name: name
  }).count(function (err, num) {
    callback(num);
  });
}

module.exports.addActivity = (name, activityItem, callback) => {
  activityItem.name = name;
  dbUtils.getDb().collection('activity').insertOne(activityItem, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });
}
