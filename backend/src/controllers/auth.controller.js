const authModel = require("../models/auth.model");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const authController = async (req, res) => {
    const { username, email, password } = req.body;
    const isUserExist = await authModel.findOne({
        $or: [
            { username },
            { email }
        ]
    });
    if (isUserExist) {
        return res.status(409).json({
            message: "user already exist with this " + (isUserExist.email === email ? 'Email' : 'Username')
        })
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = await authModel.create({
        username,
        email,
        password: hashPassword
    });
    const token = jwt.sign({
        id: newUser._id
    }, process.env.JWT_SECRET);
    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
    });

    res.status(201).json({
        message: "You Register successfully",
        newUser,
        token
    });

}
const loginUserController = async (req, res) => {
    const { email, password } = req.body;
    const isUserNotExist = await authModel.findOne({
        email
    });
    if (!isUserNotExist) {
        res.status(404).json({
            message: "user not found with this email"
        });
    }
    const isPasswordMatch = await bcrypt.compare(password, isUserNotExist.password);
    if (!isPasswordMatch) {
        return res.status(400).json({
            message: "You entered wrong password"
        });
    }
    const token = jwt.sign({
        id: isUserNotExist._id
    }, process.env.JWT_SECRET);
    res.cookie('token', token)
    res.status(200).json({
        message: "Successfully login",
        isUserNotExist,
        token
    })
}

module.exports = {
    authController,
    loginUserController
}