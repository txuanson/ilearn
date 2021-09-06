const mongoose = require('mongoose');
const { User, Tutor, Admin } = require('../configs/role');

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
    role: {
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
        default: 'storage/default_avatar.svg'
    },
    history: [{
        course_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        },
        section_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Section'
        }
    }]
    // ,
    // courses: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Course'
    //     }
    // ]
}, { timestamp: true })

module.exports = mongoose.model('Account', accountSchema);