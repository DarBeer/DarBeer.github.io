const express = require('express');
const imageRoutes = express.Router();
const Image = require('../models/images');

// ADD IMAGE
imageRoutes.route('/add').post(function (req, res) {
    const image = new Image(req.body);
    image.save()
        .then(item => {
            res.status(200).json({'coin': 'Coin added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// GET IMAGES
imageRoutes.get('/', function(req, res, next) {
    Image.find(function (err, images) {
        if (err) return next(err);
        res.json(images);
    });
});

imageRoutes.route('/').get(function (req, res) {
    Image.find(function (err, coins){
        if(err){
            console.log(err);
        }
        else {
            res.json(coins);
        }
    });
});

module.exports = imageRoutes;