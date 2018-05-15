const express = require('express');
global.jQuery = require('jquery'); 
const popper = require('popper.js');
const nodemon = require('nodemon');
const Typed = require('typed.js');

const app = express();

app.use(express.static(__dirname + "/"));

app.get('/', (req, res) => {
    res.sendFile('/Users/isabellee/robots/index.html');
});

// Start the server
const port = 3500;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

