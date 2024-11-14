const {readFile, writeFile} = require('./node-core/filesystem');
const server = require('./node-core/http_module');
const filePath = require('./node-core/path_module');
// read file
// readFile('./node-core/example.txt');


// write to a file

// writeFile('./node-core/example.txt', 'Hello, Node.js!');


// read file after writing to it

// readFile('./node-core/example.txt');

// http module
// server.listen(3000,()=>{
//     console.log(`Server running on port http://localhost:3000`);
// })


// path module
console.log(filePath);