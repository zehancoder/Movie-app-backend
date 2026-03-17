const movieModel = require("../models/movies.model");

const updateMovieController = async (req, res) => {
    const userRole = req.userData.role;
    if (userRole !== 'admin') {
        return res.status(403).json({
            message: "only admin can update movies"
        })
    }
    const movieId = req.params.movieId;
    const isMovieExist = await movieModel.findById(movieId);
    if (!isMovieExist) {
        return res.status(404).json({
            message: "This movie does not exist"
        });
    }
    const { title, img_url, description, release_date, genre, category, trailer_youtube_link } = req.body;
    const updatedMovie = await movieModel.findByIdAndUpdate(movieId, { title, img_url, description, release_date, genre, category, trailer_youtube_link });
    res.status(200).json({
        message: "Successfully Updated",
        updatedMovie
    });
}
module.exports = updateMovieController