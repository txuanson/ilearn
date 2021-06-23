const mongoose = require('mongoose');
const { Tutor } = require('../configs/role');
const Account = require('./Account');

const zoomSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
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

zoomSchema.pre('save', async (next) => {
    console.log('Zoom save pre hook!');
    await Account.updateOne({ _id: this.user_id }, { role: Tutor });
})

module.exports = mongoose.model('Zoom', zoomSchema);