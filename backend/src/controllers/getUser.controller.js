const authModel = require("../models/auth.model");

const userGettingController = async (req, res) => {
    const userRole = req.userData.role;
    if (userRole !== 'admin') {
        return res.status(403).json({
            message: 'Only admin can access data'
        });
    }
    const users = await authModel.find()
    res.status(200).json({
        message: "user geeting success",
        users
    });
}
module.exports = userGettingController;