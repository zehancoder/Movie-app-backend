const likeModel = require("../models/like.model");
const movieModel = require("../models/movies.model");

const likeController = async (req, res) => {
  const userId = req.userData._id;
  const movieId = req.params.id;

  if (!userId) {
    res.status(409).json({
      message: "unauthorize user",
    });
    return;
  }
  const alreadyExist = await likeModel.findOne({
    userId,
    movieId,
  });
  if (alreadyExist) {
    const deletes = await likeModel.findOneAndDelete({ movieId: movieId, userId });
    return res.status(200).json({
      message: "Successfuly Dislike",
      deletes,
    });
  }
  const likeMovie = await likeModel.create({
    userId,
    movieId: movieId,
  });
  res.status(201).json({
    message: "You like",
    likeMovie,
  });
};
module.exports = likeController;
