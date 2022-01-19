//setup dev env
let isDev = false;
if (process.env.NODE_ENV === 'development') {
    isDev = true;
}
//dependencies
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

//express setup
const port = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//mongoose setup
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;

// create routes
app.use('/', require('./routes'));

if (!isDev) {
    console.log("PRODUCTION ENV")
    app.use(express.static(path.join(__dirname + '/client')));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + '/client/index.html'));
    });
}

//start server
// connection.once("open", () => {
//     app.listen(port, function () {
//         console.log("App listening on PORT " + port);
//     });
// })

module.exports = app;

if (require.main === module) {
    app.listen(port, () => {
        console.log(`App listening on port: ${port}`)
    })
}