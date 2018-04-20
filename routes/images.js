const express = require('express');
const imageRoutes = express.Router();
const Image = require('../models/images');
const multer  = require('multer');
//const upload = multer({dest: './src/assets/img/'});

// GET images
imageRoutes.get('/images', function(req, res, next) {
    Image.find(function (err, images) {
        if (err) return next(err);
        res.json(images);
    });
});

// ADD image data
imageRoutes.post('/image', function (req, res, next) {
    const newImage = new Image(req.body);
    newImage.save((err, image) => {
        if (err)
        {
            res.json({msg: 'Failed to add image data to gallery'});
        } else {
            res.json({msg: 'Image data added to gallery'});
            //res.json(image);
        }}
    );
});

// UPLOAD image
const storage = multer.diskStorage({ // Multer settings
    destination: function (req, file, cb) { // folder for image
        cb(null, './src/assets/img/');
    },
    filename: function (req, file, cb) { // save original name of image
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage
    }).single('galleryImage'); // input name attr

imageRoutes.post('/upload', function(req, res) {
    upload(req,res,function(err){
        console.log(req.file);
        if(err){
            res.json({msg: 'Failed to add image file to gallery'});
            return;
        }
        res.json({msg: 'Image file added to gallery'});
    });
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

module.exports = imageRoutes;