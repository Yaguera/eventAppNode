const express = require('express')
const ejs = require('ejs');
const mongoose = require('mongoose')

require('dotenv').config();

// Initialize the application
const app = express();



mongoose
    .connect(process.env.DB_URL)
    .then((result) =>{
        console.log('Connected to MongoDB');
        // start the server
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        });
    })
    .catch((err) => {
        console.error('Could not connect to MongoDB', err);
    });

// routing path
app.get('/',(req, res) => {
    res.send('Hello, World!');
});

app.set('view engine', 'ejs');
