const mongoose = require('mongoose');
const Course = require('./course');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: 'Chào mừng đến trang cá nhân trên iLearn của tôi!'
    },
    avatar: {
        type: String,
        default: null
    },
    cover: {
        type: String,
        default: null
    }
})

// userSchema.pre('remove', (next)=>{
//     Course.remove({tutorId: this._id}).exec;
//     Course.updateMany({},{})
//     next();
// })

module.exports = mongoose.model('User', userSchema);