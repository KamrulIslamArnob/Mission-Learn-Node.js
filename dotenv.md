# dotenv

Using `dotenv` in Node.js project helps you manage environment variables in a `.env` file. These variable are often used to store sensitive information like API keys, database credentials or configeration options that vary across environments.

## Installation & Setup

1. First, install `dotenv` package via npm:

```bash
npm install dotenv
```

2. Create a `.env` file like the following example:

```md
DB_HOST=localhost
DB_USER=myUser
DB_PASSWORD=myPassword
API_KEY=my-api-key
PORT=3000
```

**Make sure to never commit the `.env` file to your version control (e.g., Git). So, add this file in .gitignore like below:**

```bash
# . . . other file & folder names

#ignore the .env file
.env
```


## Usage

At very top of your `index.js` file, require and configure `dotenv`:

```bash

// app.js
require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();

// Access the variables
const port = process.env.PORT || 3000; // Default to 3000 if not defined in .env
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

console.log(`Connecting to database at ${dbHost}...`);
console.log(`Using API key: ${process.env.API_KEY}`);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

```


