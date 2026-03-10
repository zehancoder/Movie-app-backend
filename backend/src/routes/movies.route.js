const express = require('express');
const { movieController } = require('../controllers/movie.controller');
const userIdentifyMiddleWare = require('../middlewares/userIdentify.middleware');
const movieRouter = express.Router();
movieRouter.post('/create/movie', userIdentifyMiddleWare, movieController);

module.exports = movieRouter;