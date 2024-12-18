// const {readFile, writeFile} = require('./node-core/filesystem');
// const server = require('./node-core/http_module');
// const filePath = require('./node-core/path_module');
// const myUrl = require('./node-core/url_module');
// // const expressServer = require('./express/express_framework');  
// const mongoDBExample1 = require('./mongodb/example1');  
// const dotenv = require('dotenv');


// // load env variables
// dotenv.config();

// // get port from env or use 3000
// // const port = process.env.PORT || 3000; 

// // read file
// // readFile('./node-core/example.txt');


// // write to a file

// // writeFile('./node-core/example.txt', 'Hello, Node.js!');


// // read file after writing to it

// // readFile('./node-core/example.txt');

// // http module
// // server.listen(3000,()=>{
// //     console.log(`Server running on port http://localhost:3000`);
// // })


// // path module
// // console.log(filePath);



// // url module
// // console.log(myUrl.href);
// // console.log(myUrl.toString());
// // console.log(myUrl.host);
// // console.log(myUrl.hostname);
// // console.log(myUrl.pathname);


require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');  // Import bcrypt
const bodyParser = require('body-parser');

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
        // Hash password with 10 rounds of salt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user object
        const user = new User({
            name,
            age,
            email,
            password: hashedPassword  // Store hashed password
        });

        // Save the user to the database
        const result = await user.save();
        res.status(201).json(result);  // Return created status with user data

    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).json({ message: 'Server Error', error: err.message || err });
    }
});

// Get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();

        // Remove password from the response
        users.forEach(user => {
            user.password = "********"; // Prevent sending password in response
        });

        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err.message || err });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
