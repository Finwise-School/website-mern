const mongoose = require('mongoose');

const chatbotSchema = new mongoose.Schema({
    name: String,
    email: String,
    query: String,
  });

module.exports = mongoose.model('Chatbot', chatbotSchema);