const fs = require('fs');

//fs.write('./file.txt', 'Hello, world!', (err) => {


//   Architecture of Node.js
// client makes a request to server; requests get into event queue' 
// then these requests picked up by event loop;
// blocking operations = synchronous operations; non-blocking operations = asynchronous operations;
// if non blocking operations, then response is sent to the user; if blocking operations, then response is not sent to the user;
// if blocking operations, then this operation goes to thread pool;
// thread pool is a pool of threads that are used to perform blocking operations in Node.js;
// a thread is assigned to every blocking operation; once the operation is completed, the response is sent to user and the thread is released back to the thread pool;

// Sync : Blocking request; the code will not execute until the file is written
fs.writeFileSync("./test.txt", "Ram Ram");

// Async : Non-blocking request; the code will execute without waiting for the file to be written
fs.writeFile("./test.txt", "Ram Ram", (err) => {})

// blocking operation:
// read contact.txt file

const result = fs.readFileSync("contact.txt", "utf-8");
console.log(result);