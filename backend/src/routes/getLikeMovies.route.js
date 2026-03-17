const express = require('express');
const userIdentifyMiddleWare = require('../middlewares/userIdentify.middleware');
const getLikeMovieController = require('../controllers/getLikeMovie.controller');
const getLikeMovieRouter = express.Router();
getLikeMovieRouter.get('/like/movies', userIdentifyMiddleWare, getLikeMovieController);
module.exports = getLikeMovieRouter;