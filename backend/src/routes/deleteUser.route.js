const express = require('express');
const userIdentifyMiddleWare = require('../middlewares/userIdentify.middleware');
const userDeleteController = require('../controllers/userDelete.controller');
const deleteUserRouter = express.Router();
deleteUserRouter.delete('/users/delete/:userId', userIdentifyMiddleWare, userDeleteController)
module.exports = deleteUserRouter;