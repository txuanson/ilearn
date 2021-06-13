const mongoose = require('mongoose');

const zoomSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true
    },
    zoom_user_id: {
        type: String,
        required: true,
        unique: true
    },
    zoom_refresh_token: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Zoom', zoomSchema);