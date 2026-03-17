const mongoose = require('mongoose');
const likeSchema= new mongoose.Schema({
    movieId: {
        type: String,
        ref: 'movie',
        required: [true, 'Movie Id is required']
    },
    userId: {
        type: String,
        ref: 'user',
        required: [true, 'user id is required']
    }
});
likeSchema.index({movieId: 1, userId: 1}, {unique: true})
const likeModel = mongoose.model('likeMovies', likeSchema);
module.exports = likeModel;