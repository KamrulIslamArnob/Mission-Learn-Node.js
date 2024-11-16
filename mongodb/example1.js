require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { password } = require('../node-core/url_module');

// Create app
const app = express();

// Middleware
app.use(bodyParser.json());

// Get port
const port = process.env.PORT || 3000;

// Get DB URL
const dbUrl = process.env.MONGO_URL;

// Connect to MongoDB
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB: ', err);
});


// Create a schema for users
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
});

// Create a model for users

const User = mongoose.model('User', userSchema);

// Create a new user

app.post('/users', async (req, res) => {
    const { name, age, email, password } = req.body;

    // Basic Validation (Optional but recommended)
    if (!name || !age || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user object
        const user = new User({
            name,
            age,
            email,
            password: hashedPassword  // Make sure your model has 'password' instead of 'hashedPassword'
        });

        // Save the user to the database
        const result = await user.save();
        res.status(201).json(result);  // Return created status with user data

    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).json({ message: 'Server Error', error: err });
    }
});


// Get all users

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();

        // Remove password from response
        // users.forEach(user => {
        //     user.password = "********";
        // });
        res.send(users);
    } catch (err) {
        res.status(500).send (err);
    }
})



// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
