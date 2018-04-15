const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Image = require('../models/images');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
    Image.find(function (err, images) {
        if (err) return next(err);
        res.json(images);
    });
});

module.exports = router;