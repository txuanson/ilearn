const express = require('express');
const router = express.Router();

/**
 * @openapi
 * tags:
 * - name: auth
 *   description: Authenticate user credentials sent to iLearn 
 * - name: admin
 *   description: Administrator based api
 */

const authRoute = require('./auth');
const adminRoute = require('./admin');
const { asyncCatch } = require('../helpers/utils');
const { zoomInitialize, zoomCreateMeeting } = require('../services/zoom');

router.use('/auth', authRoute);
router.use('/admin', adminRoute);

router.get('/', asyncCatch(async(req, res, next)=>{
    const meeting = await zoomCreateMeeting("60c3c88b03bb263030129673", {
        topic: "Buổi học test trên iLearn",
        duration: 45,
        start_time: "2021-06-13T14-23-30"
    });
    res.send(meeting);
}))

module.exports = router;
