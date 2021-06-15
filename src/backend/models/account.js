const mongoose = require('mongoose');
const { User, Tutor, Admin } = require('../configs/role');
const Course = require('./course');

const accountSchema = new mongoose.Schema({
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
    role:{
        type: Number,
        enum: [User, Tutor, Admin],
        default: User
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
    },
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
            unique: true
        }
    ]
})

accountSchema.pre('remove', (next)=>{
    console.log('Account prehook:')
    Course.remove({tutorId: this._id}).exec;
    next();
})

module.exports = mongoose.model('Account', accountSchema);