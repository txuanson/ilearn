const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    name: String,
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String,
        default: ""
    },
    content: String,
    cover: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    public: {
        type: Boolean,
        default: true
    },
    view: {
        type: Number,
        default: 0
    },
    subscriber: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Account'
        }
    ],
    pending: [
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
            reason: {
                type: String,
                default: ""
            }
        }
    ],
    sections: [{
        section: {
            type: mongoose.Schema.Types.ObjectId,
            refPath: 'sections.section_type'
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