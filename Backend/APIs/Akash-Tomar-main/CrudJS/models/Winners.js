const mongoose = require('mongoose')


const Winners = new mongoose.Schema({
    WinnersId: {
        type: String
    },
    WinnersName: {
        type: String
    },
    PrizeAmount: {
        type: String
    },
    WinnersCreatedOn: {
        type: String
    },
    WinnersModifiedOn: {
        type: String
    }
})

module.exports = mongoose.model('Winners',Winners)