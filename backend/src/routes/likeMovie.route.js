const express = require('express');
const userIdentifyMiddleWare = require('../middlewares/userIdentify.middleware');
const likeController = require('../controllers/like.controller');
const likeRouter = express();
likeRouter.post('/movie/like/:id', userIdentifyMiddleWare, likeController);
module.exports = likeRouter;