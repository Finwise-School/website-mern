const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Logins = require('../models/Users'); 

// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await Logins.findOne({ username });
        if (!user) {
            return res.status(400).json('Username not found.');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            res.status(200).json('Login successful');
        } else {
            res.status(400).json('Wrong password.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json('An error occurred during login.');
    }
});

module.exports = router;
