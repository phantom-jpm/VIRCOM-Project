const mongoose = require('mongoose')

const Categories = new mongoose.Schema({
    CategoryId: {
    type: String
    },
    CategoryName: {
    type: String
    },
    CategoryDes: {
    type: String
    },
    CategoryCreatedOn: {
    type: String
    },
    CategoryModifiedOn: {
    type: String
    }
})
module.exports = mongoose.model('Categories',Categories)
