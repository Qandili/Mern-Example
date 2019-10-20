const router = require('express').Router();
let User = require('../models/user.model');
//the find method is a mongoDB method that returns a promiss so the result are returned in Json format
//
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// endPoint of a post request to register a new user
router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
// to export the router
module.exports = router;