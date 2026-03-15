const authModel = require("../models/auth.model");

const userDeleteController = async (req, res) => {
    const userRole = req.userData.role;
    if (userRole !== 'admin') {
        res.status(400).json({
            message: "Only admin can change data"
        });
        return;
    }
    const deleteUserId = req.params.userId;
    const deleteduser = await authModel.findByIdAndDelete(deleteUserId);
    res.status(200).json({
        message: "Successfuly delete",
        deleteduser
    });
};
module.exports = userDeleteController;