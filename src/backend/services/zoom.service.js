const Zoom = require("../models/Zoom");
const zoomEnv = require('../configs/env').ZOOM_AUTH.PROD;
const { default: axios } = require("axios");
const { ZOOM_API_URI, ZOOM_AUTH_URI } = require('../configs/env');
module.exports.zoomInitialize = async (user_id, access_code) => {
    const options = {
        method: 'POST',
        url: `${ZOOM_AUTH_URI}?grant_type=authorization_code&code=${access_code}&redirect_uri=${zoomEnv.REDIRECT}`,
        headers: {
            Authorization: 'Basic ' + Buffer.from(zoomEnv.CLIENT_ID + ':' + zoomEnv.CLIENT_SECRET).toString('base64')
        }
    }
    const res = await axios(options)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            throw new Error(err);
        });

    const zoomUserInfo = await axios({
        method: 'GET',
        url: `${ZOOM_API_URI}/users/me`,
        headers: {
            Authorization: 'Bearer ' + res.access_token
        }
    }).then(res => res.data)
        .catch(err => {
            throw new Error(err);
        })
    return {
        user_id: user_id,
        zoom_user_id: zoomUserInfo.id,
        zoom_refresh_token: res.refresh_token
    }
}

module.exports.zoomGetToken = async (user_id) => {
    const token = await Zoom.findOne({ user_id: user_id }).exec();
    const options = {
        method: 'POST',
        url: `${ZOOM_AUTH_URI}?grant_type=refresh_token&refresh_token=${token.zoom_refresh_token}`,
        headers: {
            Authorization: 'Basic ' + Buffer.from(zoomEnv.CLIENT_ID + ':' + zoomEnv.CLIENT_SECRET).toString('base64')
        }
    }
    const res = await axios(options)
        .then(res => res.data)
        .catch(err => {
            throw new Error(err);
        });
    await Zoom.updateOne({ user_id: user_id }, { zoom_refresh_token: res.refresh_token }).exec();
    return res.access_token;
}

module.exports.zoomCreateMeeting = async (user_id, options = {
    topic: "Buổi học trực tuyến trên iLearn",
    duration: 45,
    start_time
}) => {
    const token = await this.zoomGetToken(user_id);
    const user = await Zoom.findOne({ user_id: user_id });
    const res = await axios({
        method: 'POST',
        url: `${ZOOM_API_URI}/users/${user.zoom_user_id}/meetings`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            topic: options.topic,
            type: 2,
            duration: options.duration,
            start_time: options.start_time,
            settings: {
                host_video: true,
                waiting_room: true
            }
        }
    }).then(res => res.data)
        .catch(err => {
            throw new Error(err)
        })
    return {
        join_url: res.join_url,
        start_url: res.start_url,
        meeting_id: res.id
    };
}

module.exports.zoomDeleteMeeting = async (user_id, meeting_id) => {
    const token = await this.zoomGetToken(user_id);
    // const user = await Zoom.findOne({ user_id: user_id });
    const res = await axios({
        method: 'DELETE',
        url: `${ZOOM_API_URI}/meetings/${meeting_id}?`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    ).then(res => {
        if (res.status == 204) return true;
        return false;
    })
        .catch(err => {
            console.error(err);
            return false;
        });
    return res;
}

module.exports.zoomEditMeeting = async (user_id, meeting_id, options = {
    topic: "Buổi học trực tuyến trên iLearn",
    duration: 45,
    start_time
}) => {
    const token = await this.zoomGetToken(user_id);

    const res = await axios({
        method: 'PATCH',
        url: `${ZOOM_API_URI}/meetings/${meeting_id}`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            topic: options.topic,
            type: 2,
            duration: options.duration,
            start_time: options.start_time
        }
    }).then(res => {
        if (res.status == 204) return true;
        return false;
    }).catch(err =>{
        console.error(err);
        return false;
    });

    return res;
}