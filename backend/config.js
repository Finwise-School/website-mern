const mongoose = require('mongoose');


const LoginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true
    }
});

const collectionUsers = mongoose.model("collectionUsers", LoginSchema);

module.exports = collectionUsers;
