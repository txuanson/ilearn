const express = require('express');
const router = express.Router();

/**
 * @openapi
 * tags:
 * - name: auth
 *   description: Authenticate user credentials sent to iLearn 
 * - name: admin
 *   description: Administrator api
 * - name: tutor
 *   description: Teacher api
 * - name: user
 *   description: User api
 * - name: public
 *   description: Public api
 */

const authRoute = require('./auth');
const adminRoute = require('./admin');
const userRoute = require('./user');
const courseRoute = require('./course');
const authMiddleware = require('../middlewares/auth.middleware');
const userMiddleware = require('../middlewares/user.middleware');

router.use('/auth', authRoute);
router.use('/admin', adminRoute);
router.use('/user', authMiddleware, userMiddleware, userRoute);

router.use('/course', authMiddleware, courseRoute);

//test
const { asyncCatch } = require('../helpers/utils');
const { zoomInitialize, zoomCreateMeeting } = require('../services/zoom.service');
router.get('/', asyncCatch(async(req, res, next)=>{
    const meeting = await zoomCreateMeeting("60c61e35a8b01c45a0bb1a67", {
        topic: "Buổi học test trên iLearn",
        duration: 45,
        start_time: "2021-06-13T14-23-30"
    });
    res.send(meeting);
}))

module.exports = router;
