const express = require('express');
const router = express.Router();
const FormSubmission = require('../models/RequestEarlyAccess');

// POST endpoint to handle form submissions
router.post('/request-early-access', async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const newSubmission = new FormSubmission({
      name,
      email,
      phone,
    });

    // Save to the database
    await newSubmission.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
