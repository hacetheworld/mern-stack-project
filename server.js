const express = require("express");
const mongoose = require("mongoose");
const dbUri = require('./config/keys').MONGOURI
const app = express();
const path = require('path');
//Default Port
const port = process.env.PORT || 5000

// Routes
const items = require('./routes/api/items');

//BodyParse Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect To MongoDB
mongoose
    .connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .catch(err => console.log(err, 'Connection error'));



//Add heders
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER,Origin, X-Requested-With, Content-Type, Accept");
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        return res.status(200).json({});
    }
    next();
});

//Middleware
app.use('/api/items', items);

// SERVE Static
if (process.env.NODE_ENV === 'production') {
    // Set static folder

    app.use("*", (req, res) => {
        res.send(path.join(__dirname, "client", "build", "index.html"));
    });

}



app.listen(port);