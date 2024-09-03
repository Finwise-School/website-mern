const express = require('express');
const router = express.Router();
const chatbotSchema = require('../models/chatbotSchema'); 

router.post('/chatbot', async (req, res) => {
    try {
      const { name, email, query } = req.body;
      const newChatbotEntry = new chatbotSchema({ name, email, query });
      await newChatbotEntry.save();
      res.status(201).json({ message: 'Form data saved successfully!' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ message: 'Error saving data.' });
    }
  });

  module.exports = router;