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
        enum: ['Current', 'Started', 'Ended'] 
    },
    content: String,
    storage: [{
        type: String
    }],
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
        default: true
    }
},
    { timestamps: true }
)

sectionSchema.pre('/^delete/', async (next) =>{
    console.log('Prehook delete section:');
    await removeUnusedFile(this.storage);
})

module.exports = mongoose.model('Section', sectionSchema);