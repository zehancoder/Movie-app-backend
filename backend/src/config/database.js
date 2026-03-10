const mongoose = require('mongoose');
const connectToDB = () => {
    mongoose.connect(process.env.MONGO_URI).then((res) => {
        console.log('server connect');
        
    })
}
module.exports= connectToDB;