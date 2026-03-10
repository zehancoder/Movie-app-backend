const express = require('express')
const getUserRouter = express.Router();
getUserRouter.get('/users', userGettingController);

module.exports = getUserRouter;