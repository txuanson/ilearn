const mongoose = require('mongoose');
const { TEMP_DURATION } = require('../configs/env');

const storageSchema = new mongoose.Schema({
    path: {
        type: String,
        unique: true
    },
    create_at: {
        type: Date,
        // expires in 3 days
        default: Date.now() + TEMP_DURATION*24*60*60*1000 // in milisecond
    }
});

module.exports = mongoose.model('Storage', storageSchema);