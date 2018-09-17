// 2. then we went here and made actual instances of data in the database... we tested using compass

// needs program mongoose
const mongoose = require('mongoose')
// needs to connect mongoose to our database
mongoose.connect('mongodb://localhost/band-tracker', { useNewUrlParser: true })

const Schema = require('./schema')

// const User = Schema.User
// const Band = Schema.Band
// const Gig = Schema.Gig

const { User, Band, Gig } = Schema

// console.log(User)


//can single line these things for ease
const monday = new Gig({ venue: 'PCM', city: 'Atlanta', date: 'Monday', price: 3.50 })

const nickle = new Band({ name: 'NickelBack', genre: 'Awesome', gigs: [monday] })

const mancy = new User({ username: 'Mancy', city: 'Atlanta', bands: [nickle] })

const nancy = new User({ username: 'Nancy', city: 'Hotlanta', bands: [nickle] })

User.deleteMany()
    .then(() => {
        // MUST REMEMBER RETURN BECAUSE MULTI PROMISES ARE WEIRD
        return User.insertMany([mancy, nancy])
    })
    .then(() => {
        console.log('done seeding!')
        // same as db.close if we had defined 'db'
        mongoose.connection.close()
    })