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

app.get('/chapter-2', (req, res) => {
    res.sendFile(path.join(__dirname, '/chapter-2.html'));
});

app.get('/chapter-3', (req, res) => {
    res.sendFile(path.join(__dirname, '/chapter-3.html'));
});

app.get('/chapter-4', (req, res) => {
    res.sendFile(path.join(__dirname, '/chapter-4.html'));
});

app.get('/chapter-5', (req, res) => {
    res.sendFile(path.join(__dirname, '/chapter-5.html'));
});

app.get('/chapter-6', (req, res) => {
    res.sendFile(path.join(__dirname, '/chapter-6.html'));
});

app.get('/chapter-7', (req, res) => {
    res.sendFile(path.join(__dirname, '/chapter-7.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/chapters', (req, res) => {
    res.sendFile(path.join(__dirname, '/chapters.html'));
});

app.get('/latest', (req, res) => {
    res.sendFile(path.join(__dirname, '/chapter-7.html'));
});

// Start the server
const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

