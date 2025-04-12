// Express starts here : 
const http = require("http");
const fs = require("fs");
const express = require("express");

const app = express();

app.get('/', (req, res) => {
    return res.send("Hello From About page");
})

app.listen(8000, () => {
    console.log("Server started on port 8000");
});