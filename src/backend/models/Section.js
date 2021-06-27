const mongoose = require('mongoose');


const sectionSchema = mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    content: String,
    join_url: String,
    start_url: String,
    meeting_id: {
        type: String,
        required: true
    },
    start_time: {
        type: Date,
        default: Date.now
    },
    duration: {
        type: Number,
        default: 45
    },
    visible: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('Section', sectionSchema);