const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST route to handle contact form submission
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Create a new Contact document
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    // Save the document to the database
    await newContact.save();

    // Send a success response
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: 'An error occurred while submitting the form' });
  }
});

module.exports = router;
