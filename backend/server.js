const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config(); // Load environment variables from .env file

const contactRoutes = require('./routes/contactRoutes');
const earlyAccessRoutes = require('./routes/earlyAccessRoutes'); // Import the book routes
const loginRoutes= require('./routes/loginRoutes');// login routes
const signupRoutes= require('./routes/signupRoutes'); //signup routes
const blogRoutes = require('./routes/blogRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Enable CORS to allow requests from the frontend
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: false }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { // Use the MONGODB_URI from the .env file
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log('MongoDB connection error:', error));

// Routes
app.use('/api', contactRoutes);
app.use('/api', earlyAccessRoutes); // Use the book routes
app.use('/api',loginRoutes); // using the signup routes
app.use('/api',signupRoutes); // using the login routes
app.use('/api',blogRoutes);
app.use('/api',chatbotRoutes);


// Root Route
app.get('/', (req, res) => {
  res.send("Server is running!!");
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
