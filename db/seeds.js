// needs program mongoose
const mongoose = require('mongoose')
// needs to connect mongoose to our database
mongoose.connect('mongodb://localhost/band-tracker')

const Schema = require('./schema')

// const User = Schema.User
// const Band = Schema.Band
// const Gig = Schema.Gig

const { User, Band, Gig } = Schema

// console.log(User)

const monday = new Gig({
    venue: 'PCM',
    city: 'Atlanta',
    date: 'Monday',
    price: 3.50
})

const nickle = new Band({
    name: 'NickelBack',
    genre: 'Awesome',
    gigs: [monday]
})

const daniel = new User({
    username: 'Mancy',
    city: 'Atlanta',
    bands: [nickle]
})

daniel.save()
    .then(data => {
        console.log(data)
        console.log('done seeding!')
        // same as db.close if we had defined 'db'
        mongoose.connection.close()
    })