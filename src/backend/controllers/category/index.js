const { asyncCatch } = require('../../helpers/utils');
const Course = require('../../models/course');

const createCourse = asyncCatch(async (req, res, next) => {
    
})

module.exports = {
    create: createCourse,
}