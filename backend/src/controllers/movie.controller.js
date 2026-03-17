const jwt = require('jsonwebtoken');
const authModel = require('../models/auth.model');
const movieModel = require('../models/movies.model');
const movieController = async (req, res) => {
    
    const userRole = req.userData.role;
    if (userRole !== 'admin') {
        return res.status(403).json({
            message: 'Only admin can change data'
        });
    }
    const { title, poster_path, description, release_date, genre, category, trailer_youtube_link, vote_average } = req.body;
    if (title === '' || poster_path === '' || description === '' || release_date === "" || genre === "" || category === '' || trailer_youtube_link === '') {
        return res.status(406).json({
            message: "Please add " + (title === '' && 'title' || poster_path === '' && 'img_url' || description === '' && 'description' || release_date === '' && 'release_date' || genre === '' && 'genre' || category === '' && 'category' || trailer_youtube_link === '' && 'trailer_youtube_link') + 'for create new movie'
        });
    }
    const newMovie = await movieModel.create({
        title,  poster_path, description, release_date, category, genre, trailer_youtube_link, vote_average
    });
    res.status(200).json({
        message: "Successsfully created " + title + 'movie',
        newMovie
    });
}
module.exports = {
    movieController
}