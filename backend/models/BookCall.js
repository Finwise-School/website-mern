const mongoose = require('mongoose');

const bookCallSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('BookCall', bookCallSchema);
