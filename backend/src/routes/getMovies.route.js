const express = require('express');
const userIdentifyMiddleWare = require('../middlewares/userIdentify.middleware');
const movieGeetingController = require('../controllers/getMovie.controller');
const getMovieRouter = express.Router();
getMovieRouter.get('/get/movies', userIdentifyMiddleWare, movieGeetingController);

module.exports = getMovieRouter;