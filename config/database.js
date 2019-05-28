const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/testaroo", {useNewUrlParser: true})

const db = mongoose.connection

db.on('connected', ()=>{
    console.log('Houston we have lift off')
})