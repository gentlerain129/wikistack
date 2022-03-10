const express = require('express');
const app = express();
const { db } = require('./models');

db.authenticate()
    .then(() => {
        console.log('connected to the database');
    })


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

