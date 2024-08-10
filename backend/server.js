const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');
const bookRoutes = require('./routes/bookRoutes'); // Import the book routes
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors()); // Enable CORS to allow requests from the frontend
app.use(express.json()); // Parse incoming JSON requests

// Use the routes
app.use('/api', contactRoutes);
app.use('/api', bookRoutes); // Use the book routes

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { // Use the MONGODB_URI from the .env file
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log('MongoDB connection error:', error));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
