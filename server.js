const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    index = require('./routes/index'),
    images = require('./routes/images'),
    port = process.env.PORT || 80,
    app = express();

// MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:31047766@ds123029.mlab.com:23029/diplom').then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

// View Engine
app.set('views', path.join(__dirname, 'dist'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'src')));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use('/', index);
app.use('/images', images);

// Listen to port
app.listen(port, function(){
    console.log('Listening on port ' + port);
});