const express = require('express');
const userIdentifyMiddleWare = require('../middlewares/userIdentify.middleware');
const movieDeleteController = require('../controllers/movieDelete.controller');
const movieDeleteRouter = express();
movieDeleteRouter.delete('/movies/delete/:movieId', userIdentifyMiddleWare, movieDeleteController);
module.exports = movieDeleteRouter;