const { asyncCatch } = require('../../helpers/utils');
const Course = require('../../models/Course');

const createCourse = asyncCatch(async (req, res, next) => {
    
})

module.exports = {
    create: createCourse,
}