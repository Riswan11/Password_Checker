const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 2000;


app.get('/', (req, res) => {
    res.send('Welcome to the page')
})





app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})