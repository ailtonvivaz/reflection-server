var express = require('express');
const mongoose = require('mongoose');

var app = express();
mongoose.Promise = Promise

const PORT = process.env.PORT || 5000;
const DB_URI = 'mongodb://mongo:27017/reflection-database';

app.get('/', function (req, res) {
    res.send('Hello World!');
});

const run = async () => {
    await mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    app.listen(PORT, function () {
        console.log(`Example app listening on port ${PORT}!`);
    });
}

run();

