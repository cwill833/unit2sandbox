const mongoose = require('mongoose')

const Schema = mongoose.Schema

const portfolioSchema = new Schema({
    name: String,
    date: {
        type: Date,
        default: Date.now
    },
    risk: String,
    timeF: String,
    inv: Number

}, {
    timestamps: true
})

module.exports = mongoose.model('Portfolio', portfolioSchema)