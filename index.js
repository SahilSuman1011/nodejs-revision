// // Express starts here : 
// const http = require("http");
// const fs = require("fs");
// const express = require("express");

// const app = express();

// app.get('/', (req, res) => {
//     return res.send("Hello From About page");
// })

// app.listen(8000, () => {
//     console.log("Server started on port 8000");
// });

//CREATING REST API:

const express = require("express");
const users = require("./MOCK_DATA 2.json")
const app = express();
const PORT = 8000;

//Routes
app.get("/api/users", (req, res) => {
    const body = req.body;
    console.log("Body:", body);
    return res.json(users);
})

app.get("/users", (req,res) => {
    const html = `
    <ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})


//Middlewares

app.use(express.urlencoded({extended: false}))
app.use((res, req, next) => {
    console.log("Hello from middleware");
    next();
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

