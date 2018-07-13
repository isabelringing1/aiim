const express = require('express');
global.jQuery = require('jquery'); 
const nodemon = require('nodemon');
var path = require("path");

const app = express();

app.use(express.static(__dirname + "/"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/chapter-1.html'));
});

app.get('/chapter-1', (req, res) => {
    res.sendFile(path.join(__dirname, '/chapter-1.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/chapters', (req, res) => {
    res.sendFile(path.join(__dirname, '/chapters.html'));
});

app.get('/latest', (req, res) => {
    res.sendFile(path.join(__dirname, '/chapter-1.html'));
});

// Start the server
const port = 3500;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

