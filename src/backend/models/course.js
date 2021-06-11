const mongoose = require('mongoose');


const courseSchema = mongoose.Schema({
    name: String,
    _uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: String,
    userLimit: Number,
    cover: String,
    category: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            unique: true
        }
    ],
    subscribe: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                unique: true
            },
            status: Boolean
        }
    ],
    section: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Section',
            unique: true
        }
    ]
})

module.exports = mongoose.model('Course', courseSchema);