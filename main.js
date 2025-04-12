// // node js revision from scratch
// console.log("Hello World!")

// // npm => node package manager
// // npm init -y => create package.json file
// // npm install express => install express package
// // npm install express --save => save express package to package.json file

// const math = require('./math');
// // Modules in nodejs : 


// console.log(math);

// // building http servers with core nodejs without express: 

// const http = require("http");
// const fs = require ("fs");

// handler function to handle incoming requests
// and building a log that will log the time of the request
// and the request url
// const myServer = http.createServer((req, res) => {
//     const log = `${Date.now()} : ${req.url} New Req Recieved \n`;
//     fs.appendFile('log.txt', log, (err,data) => {
//         switch(req.url) {
//             case "/":
//             if(req.method === 'GET') res.end("HomePage");

//             case "/signup":
//             if(req.method === 'GET') res.end("This is SignUp form");
//             else if (req.method === "POST") {
//                 // DB Query
//                 res.end("Success");
//             }
//             default:
//                 res.end("404 Not Found");
//                 break;
//         }
//     });

// });

// myServer.listen(8000, () => {
//     console.log("server started");
// });


// URL 
//https://sahil-suman.vercel.app/

//Protocol : https => hypertext transfer protocol 
//Domain Name : User Friendly Name of IP Address
// Path : /sahil-suman => path to the resource 
// Nested Path : /sahil-suman/projects => path to the resource
//Query Parameters : ?id=123 => key value pair to send data to the server

// HTTP REQUESTS :
// GET : to get data from the server => https://youtube.com/search
// POST : to send data to the server => https://youtube.com/upload
// PUT : to update data on the server => https://youtube.com/update
// DELETE : to delete data from the server => https://youtube.com/delete
// PATCH : to update data on the server => https://youtube.com/patch    

// difference between Post and Put :
// Post is used to create a new resource on the server
// Put is used to update an existing resource on the server

// EXPRESS JS :
// Express is a web framework for Node.js
// It is used to build web applications and APIs
// It is built on top of Node.js and provides a simple and easy to use API.