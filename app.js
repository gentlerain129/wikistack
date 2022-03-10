const express = require('express');
const app = express();
const { db, Page, User } = require('./models');

db.authenticate()
    .then(() => {
        console.log('connected to the database');
    })
const initSync = async () => {
    await db.sync({ force: true });
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
}


initSync();

