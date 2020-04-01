const express = require("express");
const mongoose = require("mongoose");
const dbUri = require('./config/keys').MONGOURI
const app = express();

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
    .then(() => console.log('Mongodb Connected'))
    .catch(err => console.log(err, 'Connection error'));


//Middleware
app.use('/api/items', items);


app.listen(port, () => {
    console.log('server is running...');

});