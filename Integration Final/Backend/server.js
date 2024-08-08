const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const collectionUsers = require('./config'); // Import the collectionUsers model

const app = express();
const port = 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//check-up backend code
app.get('/',(req,res)=>{
  res.send("Server is running!!");
})

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
