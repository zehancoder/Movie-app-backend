const jwt = require('jsonwebtoken');
const authModel = require('../models/auth.model');
const userIdentifyMiddleWare = async (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(406).json({
            message: "Unautorize user"
        });
    }
    let id;
    try {
        id = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        return res.status(401).json({
            message: "This token is not valid"
        });
    }
    const userData = await authModel.findById(id.id);
    if (!userData) {
        return res.status(404).json({
            message: "user not found"
        });
    }
    req.userData = userData;
    next()
}
module.exports = userIdentifyMiddleWare;