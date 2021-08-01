const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    create_at: {
        type: Date,
        default: Date.now()
    }
})

const commentSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    },
    section_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section',
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    reply: [
        replySchema
    ],
    create_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Comment', commentSchema);