// Express is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.
// Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.  


// import express 
const express = require('express');

// create an express app
const app = express();


// define a route with GET method
app.get('/', (req, res) => {
    //send a raw text response
    res.send('Hello World');
});


//define another route with GET method
app.get('/api', (req, res) => {
    //send a JSON response with a message
    res.status(200).send({ message: 'Welcome to the API' });
});


// define a route with POST method

app.post('/api', (req, res) => {
    //send a JSON response with a message
    res.status(200).send({ message: 'POST request received' });
});



// start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
