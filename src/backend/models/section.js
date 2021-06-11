const mongoose = require('mongoose');


const sectionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: String,
    joinUrl: String,
    startUrl: String,
    meetingOption:{
        meetingId: {
            type: String,
            required: true
        },
        
    }

})