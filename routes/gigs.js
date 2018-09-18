var express = require('express');
var router = express.Router({ mergeParams: true });
const { User } = require('../db/schema')

// INDEX
router.get('/', (req, res) => {
    User.findById(req.params.userId)
    .then((user) => {
        // clean this up with consts
        res.send(user.bands.id(req.params.bandId).gigs)
    })
})

// NEW

// SHOW
router.get('/:id', (req, res) => {
    User.findById(req.params.userId)
    .then((user) => {
        // clean this up with consts
        res.send(user.bands.id(req.params.bandId).gigs.id(req.params.id))
    })
})

// EDIT

// CREATE

// UPDATE

// DELETE

module.exports = router