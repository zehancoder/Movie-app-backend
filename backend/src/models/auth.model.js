const mongoose = require('mongoose');
const authSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is require'],
        unique: [true, 'This username exist']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'This email is already exist']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    }
});
const authModel = mongoose.model('authentication', authSchema);
module.exports = authModel;