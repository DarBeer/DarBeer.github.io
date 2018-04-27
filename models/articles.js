const mongoose = require('mongoose');
const ArticleSchema = mongoose.Schema;

// Define collection and schema for Items
const Article = new ArticleSchema({
    heading: String,
    description: String,
    urlImage: String,
    text: String,
    date: String
},{
    collection: 'articles'
});

module.exports = mongoose.model('Article', Article);