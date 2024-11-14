// the http module provides the ability to create and manage
// http servers and clients in node.js

const http = require('http');
const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello, Node.js!');
})



module.exports = server;