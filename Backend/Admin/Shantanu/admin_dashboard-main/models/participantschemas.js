const mongoose = require('mongoose')

const participantsSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    address: String,
    phone: String,
    DOB: String,
    event: String,
    Identity: String,
    categoryid: String,
    event_date: String
});

module.exports = mongoose.model('participantschemas', participantsSchema)