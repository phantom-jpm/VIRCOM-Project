const mongoose = require('mongoose')


const Prize = new mongoose.Schema({
    PrizeId: {
     type: String
    },
    PrizeName: {
     type: String
    },
    PrizeCreatedOn: {
     type: String
    },
    PrizeModifiedOn: {
     type: String
    }
 })
 
 module.exports = mongoose.model('Prizes',Prize)