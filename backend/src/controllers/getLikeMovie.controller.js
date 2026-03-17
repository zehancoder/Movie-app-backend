const likeModel = require("../models/like.model");

const getLikeMovieController = async (req, res) => {
    const userData = req.userData;
    
    if(!userData){
        return res.status(401).json({
            message: "Unautorized user"
        });
    }    
    // if(userData.role !== 'admin'){
    //     return res.status(400).json({
    //         message: "only admin can view"
    //     })
    // }
    const likeMovies = await likeModel.find({userId:userData.id});
    res.status(200).json({
        message: 'Successfully getting data',
        data: likeMovies
    })
}
module.exports = getLikeMovieController;