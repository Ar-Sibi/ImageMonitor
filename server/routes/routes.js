const routes = require('express').Router();
const activity = require('../models/activity');

routes.get('/', (req, res) => {
  res.json({
    "message": "Server Works!"
  });
})

routes.get('/api/:id/getActivities', (req, res, next) => {
  activity.getActivities(req.params.id,function(array){res.send(array);});
})

routes.post('/api/:id/addActivity', (req, res, next) => {
  req.body.name = req.params.id;
  activity.addActivity(
      req.params.id,
      req.body,
      function(){});
})

module.exports = routes;
