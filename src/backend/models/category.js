const mongoose = require('mongoose');
const Course = require('./course');
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

categorySchema.pre('remove', (next) => {
    console.log('Prehook course:');
    Course.updateMany({ category: { $in: this._id } }, { $pull: { category: this._id } })
})

module.exports = mongoose.model('Category', categorySchema);