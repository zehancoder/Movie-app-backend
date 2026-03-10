const updateMovieController = async (req, res) => {
    const userRole = req.userData.role;
    if (userRole !== 'admin') {
        return res.status(403).json({
            message: "only admin can update movies"
        })
    }
    const movieId = req.params.movieId;
}