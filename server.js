

//use ES6 module syntax
import HTTP from 'http';
const server = HTTP.createServer((req , res) =>{
    res.writeHead(200,{ 'Content-Type': 'text/plain'});
    res.end("Welcome to professor backend server");
});
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
console.log(`Server is running on http://${host}:${port}`);
server.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
});

// //use CommonJS module syntax

// const http = require('http');
// const server = http.createServer((req , res) =>{
//     res.writeHead(200,{ 'Content-Type': 'text/plain'});
//     res.end("Welcome to professor backend server");
// });
// const port = process.env.PORT || 3000;
// const host = process.env.HOST || 'localhost';
// console.log(`Server is running on http://${host}:${port}`);
// server.listen(port,() =>{
//     console.log(`Server is running on port ${port}`);
// });