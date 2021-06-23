const mongoose = require('mongoose');

const sectionSubDoc = mongoose.Schema({
    section_id: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'section_type'
    },
    section_type: {
        type: String,
        required: true,
        enum: ['Section', 'Quiz']
    }
}, { _id: false })

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
            ref: 'Account'
        }
    ],
    queue: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Account'
        }
    ],
    banned: [
        {
            account_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Account'
            },
            reason: String
        }
    ],
    section: [sectionSubDoc]
},
    { timestamps: true }
)

module.exports = mongoose.model('Course', courseSchema);