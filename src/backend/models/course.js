const mongoose = require('mongoose');
const Section = require('./section');
const { removeUnusedFile } = require('../helpers/utils');

const courseSchema = mongoose.Schema({
    name: String,
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: String,
    storage: [{
        type: String
    }],
    cover: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    public: {
        type: Boolean,
        default: true
    },
    subscriber: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    queue: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    section: [{
        section_id: {
            type: mongoose.Schema.Types.ObjectId,
            refPath: 'section_type'
        },
        section_type: {
            type: String,
            required: true,
            enum: ['Section', 'Quiz']
        }
    }]
},
    { timestamps: true }
)

module.exports = mongoose.model('Course', courseSchema);