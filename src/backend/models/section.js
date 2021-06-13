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
    status: {
        type: String,
        enum: ['Upcoming', 'Started', 'Ended'] 
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
    }
},
    { timestamps: true }
)

sectionSchema.pre('remove', next => {
    // remove associated zoom meeting
    next();
})

sectionSchema.pre('update', next =>{
    // update associated zoom meeting
    next();
})

module.exports = mongoose.model('Section', sectionSchema);