const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const collectionUsers = require('../models/Users'); 

// Signup Route
router.post('/signup', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const existingUser = await collectionUsers.findOne({ username });
    if (existingUser) {
      return res.status(400).json('User already exists. Try a different username.');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new collectionUsers({ username, password: hashedPassword, email });
    await newUser.save();
    res.status(200).json('Signup successful');
  } catch (error) {
    console.error(error);
    res.status(500).json('An error occurred during signup.');
  }
});

module.exports = router;
