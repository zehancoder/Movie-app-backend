const express = require('express');
const { authController, loginUserController } = require('../controllers/auth.controller');
const authRouter =  express.Router();

authRouter.post('/register', authController);
authRouter.post('/login', loginUserController);

module.exports = authRouter;