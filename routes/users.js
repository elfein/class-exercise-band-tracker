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
    res.render('users/index', { users })
  })
})

// NEW, render new form
router.get('/new', (req, res) => {
  res.render('users/new')
})

// SHOW, show one
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
    .then((user) => {
      res.render('users/show', { user }) // render('users/show', { user })
    })
})

// CREATE
router.post('/', (req, res) => {
  // const newUser = new User(req.body)
  // newUser.save()
  User.create(req.body)
  .then((user) => {
    res.redirect(`/users/${user._id}`)
  })
})

// EDIT, render edit form
router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id)
  .then((user) => {
  res.render('users/edit', { user })
  })
})

// UPDATE
router.put('/:id', (req, res) => {
  // const newUser = new User(req.body)
  // newUser.save()
  User.findByIdAndUpdate(req.params.id, req.body)
  .then((user) => {
    res.redirect(`/users/${user._id}`)
  })
})

// DELETE
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/users')
    })
})

module.exports = router;