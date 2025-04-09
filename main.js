// // node js revision from scratch
// console.log("Hello World!")

// // npm => node package manager
// // npm init -y => create package.json file
// // npm install express => install express package
// // npm install express --save => save express package to package.json file

// const math = require('./math');
// // Modules in nodejs : 


// console.log(math);

// building http servers with core nodejs without express: 

const http = require("http");
const fs = require ("fs");

// handler function to handle incoming requests
// and building a log that will log the time of the request
// and the request url
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} : ${req.url} New Req Recieved \n`;
    fs.appendFile('log.txt', log, (err,data) => {
        switch(req.url) {
            case "/": res.end("Ram Ram ji from Server");
        }
        
    });
});

myServer.listen(8000, () => {
    console.log("server started");
});

