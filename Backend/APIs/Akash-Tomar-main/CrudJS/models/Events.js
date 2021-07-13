const mongoose = require('mongoose')


const Events = new mongoose.Schema({
    EventId: {
    type: String
    },
    EventCategoryId: {
    type: String
    },
    EventName: {
    type: String
    },
    EventDes: {
    type: String
    },
    EventDate: {
    type: Date
    },
    NoOfParticipants: {
    type: String
    },
    NoOfWinners: {
    type: String
    },
    EventCreatedOn: {
    type: String
    },
    EventModifiedOn : {
    type: String
    }
})


module.exports = mongoose.model('Events',Events)