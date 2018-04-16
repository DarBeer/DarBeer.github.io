const express = require('express');
const imageRoutes = express.Router();
const Image = require('../models/images');

// ADD image
imageRoutes.route('/').post(function (req, res) {
    const image = new Image(req.body);
    image.save()
        .then(item => {
            res.status(200).json({'image': 'Image added successfully'});
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

// GET images
imageRoutes.get('/', function(req, res, next) {
    Image.find(function (err, images) {
        if (err) return next(err);
        res.json(images);
    });
});
/*
imageRoutes.route('/').get(function (req, res) {
    Image.find(function (err, images){
        if(err){
            console.log(err);
        }
        else {
            res.json(images);
        }
    });
});
*/

module.exports = imageRoutes;