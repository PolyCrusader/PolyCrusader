const mongoose = require('mongoose');

const actionSchema = new mongoose.Schema({
    Description: {
        type: String,
        required: true
    }
});

const categorySchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Actions: [actionSchema]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
