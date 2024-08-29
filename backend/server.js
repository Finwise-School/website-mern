const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config(); // Load environment variables from .env file

const contactRoutes = require('./routes/contactRoutes');
const bookRoutes = require('./routes/bookRoutes'); // Import the book routes
const collectionUsers = require('./config'); // Import the collectionUsers model

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
app.use('/api', bookRoutes); // Use the book routes
<<<<<<< Updated upstream
=======
app.use('/api',loginRoutes); // using the signup routes
app.use('/api',signupRoutes); // using the login routes

>>>>>>> Stashed changes

// Root Route
app.get('/', (req, res) => {
  res.send("Server is running!!");
});

// Signup Route
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await collectionUsers.findOne({ username });
    if (existingUser) {
      return res.status(400).json('User already exists. Try a different username.');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new collectionUsers({ username, password: hashedPassword });
    await newUser.save();
    res.status(200).json('Signup successful');
  } catch (error) {
    console.error(error);
    res.status(500).json('An error occurred during signup.');
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await collectionUsers.findOne({ username });
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
