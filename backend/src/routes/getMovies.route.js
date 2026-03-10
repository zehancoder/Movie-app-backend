const express = require('express');
const getMovieRouter = express.Router();
const userIdentifyMiddleWare = require('../middlewares/userIdentify.middleware');
const movieGeetingController = require('../controllers/getMovie.controller');
getMovieRouter.get('/get/movies', userIdentifyMiddleWare, movieGeetingController);

module.exports = getMovieRouter;