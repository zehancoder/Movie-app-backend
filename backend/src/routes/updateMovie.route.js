const express = require('express');
const userIdentifyMiddleWare = require('../middlewares/userIdentify.middleware');
const updateMovieRouter = express.Router();

updateMovieRouter.patch('/update/:movieId', userIdentifyMiddleWare, updateMovieController);

module.exports = updateMovieRouter;