const express = require('express');
const router = express.Router();
const BookCall = require('../models/BookCall'); // Import the model

// Route to handle book a call form submission
router.post('/book', async (req, res) => {
  try {
    const { name, email, phone, date, time } = req.body;

    const newBookCall = new BookCall({
      name,
      email,
      phone,
      date,
      time,
    });

    await newBookCall.save();
    res.status(201).json({ message: 'Call booked successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

module.exports = router;
