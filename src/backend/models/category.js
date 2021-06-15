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
    console.log('Prehook category:');
    Course.updateMany({ category: { $in: this._id } }, { category: null })
})

module.exports = mongoose.model('Category', categorySchema);