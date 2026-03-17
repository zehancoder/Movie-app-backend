const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is require'],
        default: ''
    },
    poster_path: {
        type: String,
        required: [true, 'images is require']
    },
    trailer_youtube_link: {
        type: String,
        required: [true, 'youtube link is required']
    },
    description: {
        type: String,
        required: [true, 'description is require'],
        default: ''
    },
    release_date: {
        type: String,
        required: [true, 'release date is require']
    },
    genre: {
        type: String,
        required: [true, 'genre is require'],
        default: ''
    },
    category: {
        type:String,
        required: [true, 'category is required']
    },
    vote_average: {
        type: String,
        required: [true, 'rating is require'],
    }
});
const movieModel = mongoose.model('movies', movieSchema);
module.exports = movieModel;