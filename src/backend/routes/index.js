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
const tutorRoute = require('./tutor');
const userRoute = require('./user');

const profileRoute = require('./profile');
const courseRoute = require('./course');
const categoryRoute = require('./category');

const authMiddleware = require('../middlewares/auth.middleware');
const userMiddleware = require('../middlewares/user.middleware');
const tutorMiddleware = require('../middlewares/tutor.middleware');

router.use('/auth', authRoute);
router.use('/admin', adminRoute);
router.use('/tutor', tutorMiddleware, tutorRoute);
router.use('/user', userMiddleware, userRoute);

router.use('/course', courseRoute);
router.use('/category', categoryRoute);
router.use('/profile', profileRoute);

//test
const { asyncCatch } = require('../helpers/utils');
const { zoomInitialize, zoomCreateMeeting, zoomDeleteMeeting, zoomEditMeeting } = require('../services/zoom.service');
router.get('/', authMiddleware, asyncCatch(async (req, res, next) => {
    // const meeting = await zoomCreateMeeting(req.user_data._id, {
    //     topic: "Buổi học test trên iLearn",
    //     duration: 45,
    //     start_time: "2021-06-18T14-23-30"
    // });
    // res.send(meeting);
    
    // const meeting = await zoomEditMeeting(req.user_data._id, 86953860559, {
    //     topic: "Buổi học test trên iLearn 111111111",
    //     duration: 30,
    //     start_time: "2021-06-18T14-23-30"
    // });
    // res.send(meeting);

    await zoomDeleteMeeting(req.user_data._id, 86953860559);
    res.send("Success!");
}))

module.exports = router;
