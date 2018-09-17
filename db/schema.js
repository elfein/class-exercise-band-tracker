const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GigSchema = new Schema({
    venue: String,
    city: String,
    date: String,
    price: Number
})

const BandSchema = new Schema({
    name: String,
    genre: String,
    gigs: [GigSchema]
})

const UserSchema = new Schema({
    username: String,
    city: String,
    bands: [BandSchema]
})

const GigModel = mongoose.model('Gig', GigSchema)
const BandModel = mongoose.model('Band', BandSchema)
const UserModel = mongoose.model('User', UserSchema)

module.exports = { Gig: GigModel, Band: BandModel, User: UserModel }