const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CategorySchema = new Schema({
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
});


const Category = mongoose.model('category',CategorySchema);

module.exports = Category;