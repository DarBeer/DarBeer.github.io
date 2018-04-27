const express = require('express');
const articleRoutes = express.Router();
const Article = require('../models/articles');
const multer  = require('multer');

// GET images
articleRoutes.route('/').get(function(req, res, next) {
    Article.find(function (err, articles) {
        if (err) return next(err);
        res.json(articles);
    });
});

// ADD image data
articleRoutes.route('/add').post((req, res) => {
    const newArticle = new Article(req.body);
    newArticle.save((err, article) => {
        if (err) {
            res.json({msg: 'Failed to add article data to gallery'});
        } else {
            res.json({msg: 'Article data added to gallery'});
            //res.json(image);
        }}
    );
});

// UPLOAD image
const storage = multer.diskStorage({ // Multer settings
    destination: function (req, file, cb) { // folder for image
        cb(null, './src/assets/img/articles/');
    },
    filename: function (req, file, cb) { // save original name of article
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage
}).single('articleImage'); // input name attr

articleRoutes.route('/upload').post((req, res) => {
    upload(req,res,(err) => {
        console.log(req.file);
        if(err){
            res.json({msg: 'Failed to add article file to gallery'});
            return;
        }
        res.json({msg: 'Article file added to gallery'});
    });
});

// EDIT image
articleRoutes.route('/edit/:id').get((req, res) => {
    let id = req.params.id;
    Article.findById(id, (err, article) => {
        res.json(article)
    })
});

// UPDATE image
articleRoutes.route('/update/:id').post((req, res) => {
    Article.findById(req.params.id, (err, article) => {
        if (!article)
            return next(new Error(err));
        else {
            article.heading = req.body.heading;
            article.description = req.body.description;
            article.imageUrl = req.body.imageUrl;
            article.text = req.body.text;

            article.save()
                .then(
                    article => res.json(article)
                )
                .catch(
                    err => res.status(400).send(err)
                )
        }
    })
});

// DELETE image
articleRoutes.route('/delete/:id').get((req, res) => {
    Article.findByIdAndRemove({_id: req.params.id}, (err, article) => {
        if (err) {
            res.json(err);
        } else {
            res.json(article);
        }}
    );
});

module.exports = articleRoutes;