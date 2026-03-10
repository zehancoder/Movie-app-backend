const express = require('express');
const userIdentifyMiddleWare = require('../middlewares/userIdentify.middleware');
const userGettingController = require('../controllers/getUser.controller');
const getUserRouter = express.Router();
getUserRouter.get('/get/users', userIdentifyMiddleWare, userGettingController);

module.exports = getUserRouter;