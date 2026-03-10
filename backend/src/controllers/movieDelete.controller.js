const movieModel = require("../models/movies.model");

const movieDeleteController = async (req, res) => {
    const uesrRole = req.userData.role;
    if (!uesrRole) {
        return res.status(403).json({
            message: "Only admin can delete movies"
        });
    }
    const movieId = req.params.movieId;
    let movie;
    try {
        movie = await movieModel.findById(movieId)
    } catch (error) {
        return res.status(404).json({
            message: "this movie not found"
        })
    }
    if(!movie){
        return res.status(200).json({
            message: 'this movie is already deleted'
        })
    }
    const deletedMovie = await movieModel.findByIdAndDelete(movieId);
    res.status(200).json({
        message: "Movies delete success",
        deletedMovie
    });
}
module.exports = movieDeleteController;