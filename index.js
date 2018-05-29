const express = require('express');
global.jQuery = require('jquery'); 
const popper = require('popper.js');
const nodemon = require('nodemon');
const Typed = require('typed.js');

const app = express();

app.use(express.static(__dirname + "/"));

app.get('/', (req, res) => {
    res.sendFile('/Users/isabellee/aiim/index.html');
});

app.get('/chapter-1', (req, res) => {
    res.sendFile('/Users/isabellee/aiim/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile('/Users/isabellee/aiim/about.html');
});

app.get('/chapters', (req, res) => {
    res.sendFile('/Users/isabellee/aiim/chapters.html');
});

// Start the server
const port = 3500;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

