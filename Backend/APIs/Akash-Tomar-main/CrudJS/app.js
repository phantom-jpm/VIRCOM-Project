const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser: true,
    useUnifiedTopology: true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
const categ = require('./routes/categories')
const winners = require('./routes/winners')
const Prizes = require('./routes/prizes')
const Events = require('./routes/Events')
app.use('/organisers',alienRouter)
app.use('/categories',categ)
app.use('/winners',winners)
app.use('/prizes',Prizes)
app.use('/events',Events)

app.listen(9000, () => {
    console.log('Server started')
})