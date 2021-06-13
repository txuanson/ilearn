const mongoose = require('mongoose');
const Section = require('./section');

const courseSchema = mongoose.Schema({
    name: String,
    tutorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: String,
    user_limit: Number,
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
    ]
},
    { timestamps: true }
)

courseSchema.pre('deleteOne', (next) => {
    console.log('Prehook course:');
    Section.deleteMany({ course_id: this._id });
})

module.exports = mongoose.model('Course', courseSchema);