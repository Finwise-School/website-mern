const mongoose = require('mongoose');

//Temporary Data Schema
const blogSchema = new mongoose.Schema({
    Heading: {
        type: String,
        // required: true
    },
    Content: {
        type: String,
    }
});

module.exports = mongoose.model('blogs', blogSchema);