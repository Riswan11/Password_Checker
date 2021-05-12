const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 2000;

//Get the data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs')

//load all the html,css and javacript files from the public folder.
app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
    res.render('home')
})





app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})