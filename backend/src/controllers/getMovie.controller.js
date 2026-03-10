const movieModel = require("../models/movies.model");

const movieGeetingController = async (req, res) => {
    const userRole = req.userData.role;
    if (userRole !== 'admin') {
        return res.status(403).json({
            message: "Only admin can access movies data"
        });
    }
    const movies = await movieModel.find();
    res.status(200).json({
        message: "Movie fetch success",
        movies
    })
}
module.exports = movieGeetingController;