const mongoose = require('mongoose');

const zoomSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    zoomUserId: {
        type: String,
        required: true
    },
    zoomRefreshToken: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Zoom', zoomSchema);