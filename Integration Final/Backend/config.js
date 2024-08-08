const mongoose = require('mongoose');

const connect = mongoose.connect("mongodb://localhost:27017/UserLogin", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(() => {
    console.log("Database connected successfully");
})
.catch((err) => {
    console.error("Database connection error:", err);
});

const LoginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collectionUsers = mongoose.model("collectionUsers", LoginSchema);

module.exports = collectionUsers;
