const mongoose = require('mongoose');
const Section = require('./section');

const courseSchema = mongoose.Schema({
    name: String,
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: String,
    user_limit: Number,
    cover: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        default: null
    },
    public: {
        type: Boolean,
        default: true
    },
    subscriber: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            unique: true
        }
    ],
    queue: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            unique: true
        }
    ]
},
    { timestamps: true }
)

courseSchema.pre('deleteOne', (next) => {
    console.log('Prehook course:');
    Section.deleteMany({ course_id: this._id });
})

module.exports = mongoose.model('Course', courseSchema);