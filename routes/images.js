const express = require('express');
const imageRoutes = express.Router();
const Image = require('../models/images');

// GET images
imageRoutes.get('/images', function(req, res, next) {
    Image.find(function (err, images) {
        if (err) return next(err);
        res.json(images);
    });
});

// ADD image
imageRoutes.post('/image', function (req, res, next) {
    const newImage = new Image(req.body);
    const uploadImage = req.files.uploadImage;
    newImage.save((err, image) => {
        if (err)
        {
            res.json({msg: 'Failed to add image to gallery'});
        } else {
            uploadImage.mv('/src/assets/img/');
            res.json({msg: 'Image added to gallery'});
        }}
    )
});

// DELETE image
imageRoutes.post('/image/:id', function (req, res, next) {
    Image.remove({_id: req.params.id}, function (err, result){
        if (err)
        {
            res.json(err);
        } else {
            res.json(result);
        }}
    );
});

/*
    image.save()
        .then(item => {
            res.status(200).json({'image': 'Image added successfully'});
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
        */

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