const mongoose = require('mongoose');

const requestEarlyAccessRecords = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Invalid email address'],
  },
  phone: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('FormSubmission', requestEarlyAccessRecords);
