import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser"); 
// const { router } = require("./routes/routes.js");

 
// import routes
import Router from "./routes/routes.js";

const app = express()

// handling CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", 
               "*");
    res.header("Access-Control-Allow-Methods", 
               'GET,POST,DELETE,PUT');
    res.header("Access-Control-Allow-Headers", 
               "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())

// app.use('/auth',rou)

app.use(Router)

app.get('/hi', (req,res) => {
    res.json({ message: "Welcome to application." });
});

// app.use("/api/", router);

const port = 3000

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}.`);
})