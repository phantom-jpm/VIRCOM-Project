const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AddressSchema = new Schema({
    location: {
        type: String,
    },
    email: {
        type: String,
        
    },
    phone:{
        type: String,
    }
    
});


const Address = mongoose.model('address',AddressSchema);

module.exports = Address;