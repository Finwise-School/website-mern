const express = require('express');
const router = express.Router();
const blogs = require('../models/blogsSchema');

// POST route to handle contact form submission
router.get('/blogs', async (req, res) => {
    blogs
    .find()
    .sort({_id: -1})
    .then((sData) => {
        console.log(sData.length);
        res.send(sData);
    })
    .catch((err) => {
        console.log(err);
    });      
  });
  
  module.exports = router;