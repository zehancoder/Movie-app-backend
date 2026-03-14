const getMeController = async (req, res) => {
    const user = req.userData;
    if(!user){
        return res.status(404).json({
            message: "user not found"
        });

    }
    res.status(200).json({
        message: "Your data",
        user: {
            email: user.email,
            username: user.username,
            id: user._id,
            rele: user.role
        }
    });
}
module.exports = getMeController;