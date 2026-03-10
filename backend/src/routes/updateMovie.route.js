const express = require('express');
const updateMovieRouter = express.Router();
const userIdentifyMiddleWare = require('../middlewares/userIdentify.middleware');
const updateMovieController = require('../controllers/updateMovie.controller');

updateMovieRouter.patch('/movies/update/:movieId', userIdentifyMiddleWare, updateMovieController);

module.exports = updateMovieRouter;