const {readFile, writeFile} = require('./node-core/filesystem');


// read file
readFile('./node-core/example.txt');


// write to a file

writeFile('./node-core/example.txt', 'Hello, Node.js!');


// read file after writing to it

readFile('./node-core/example.txt');