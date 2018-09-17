var express = require('express');
var router = express.Router();
const { User } = require('../db/schema')

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// INDEX, show all
router.get('/', (req, res) => {
  User.find()
  .then((users) => {
    res.send(users)
  })
})

// SHOW, show one

// NEW, render new form

// CREATE

// EDIT, render edit form

// UPDATE

// DELETE

module.exports = router;
