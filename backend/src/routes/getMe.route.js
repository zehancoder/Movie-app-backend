const express = require('express');
const userIdentifyMiddleWare = require('../middlewares/userIdentify.middleware');
const getMeController = require('../controllers/getMe.controller');
const getMeRouter = express();
getMeRouter.get('/get-me', userIdentifyMiddleWare, getMeController  );
module.exports= getMeRouter