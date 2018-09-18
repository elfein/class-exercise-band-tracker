var express = require('express');
// very important to mergeParams!!!
var router = express.Router({ mergeParams: true });
const { User } = require('../db/schema')

// INDEX, SHOW ALL
router.get('/', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            res.render('bands/index', { 
                userId: req.params.userId,
                bands: user.bands 
            })
        })
        .catch(error => {
            console.log(error)
        })
})

// NEW, RENDER NEW FORM


// SHOW, SHOW ONE
router.get('/:id', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            res.send(user.bands.id(req.params.id))
        })
})


// EDIT, RENDER EDIT FORM


// CREATE


// UPDATE


// DELETE


module.exports = router;