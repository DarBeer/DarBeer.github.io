/**
 * Created by ki979 on 11.04.2018.
 */


//mongoClient = require("mongodb").MongoClient,
//url = "mongodb://admin:31047766@ds123029.mlab.com:23029/diplom"

const mongoDB = 'mongodb://admin:31047766@ds123029.mlab.com:23029/diplom',
    mongoose = require('mongoose'),
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));


mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


/*
db.collection('images').find().toArray(function(err, results) {
    console.log(results)
    // send HTML file populated with quotes here
});
*/

//db.close();

/*
mongoClient.connect(url, (err, client) => {

    if (err) return console.log(err);
    db = client.db('diplom');

    client.close();

});
*/