const express = require('express');

const app = express();
const port = process.env.PORT;
const path = require('path');

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})
