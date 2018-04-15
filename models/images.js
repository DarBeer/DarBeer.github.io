const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    heading: String,
    description: String,
    urlImage: String,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Image', ImageSchema);