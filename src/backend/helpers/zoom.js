  
const Zoom = require("../../model/Zoom.model");
const { ZoomAuth } = require('../../config/auth');
const { default: axios } = require("axios");
const { ZoomApiBaseUri } = require("../../config");
module.exports.ZoomInitialize = async (UserId, AccessCode) => {
    const options = {
        method: 'POST',
        url: `https://zoom.us/oauth/token?grant_type=authorization_code&code=${AccessCode}&redirect_uri=${ZoomAuth.ZoomRedirectUri}`,
        headers: {
            Authorization: 'Basic ' + Buffer.from(ZoomAuth.ZoomClientId + ':' + ZoomAuth.ZoomClientSecret).toString('base64')
        }
    }
    const res = await axios(options)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
            throw new Error(err);
        });

    const ZoomUserInfo = await axios({
        method: 'GET',
        url: `${ZoomApiBaseUri}/users/me`,
        headers: {
            Authorization: 'Bearer ' + res.access_token
        }
    }).then(res => res.data)
        .catch(err => {
            console.log(err);
            throw new Error(err);
        })
    await Zoom.create({
        UserId: UserId,
        ZoomUserId: ZoomUserInfo.id,
        ZoomRefreshToken: res.refresh_token
    })
}

module.exports.ZoomGetToken = async (UserId) => {
    const token = await Zoom.findByPk(UserId);

    const options = {
        method: 'POST',
        url: `${ZoomAuth.ZoomAuthBaseUrl}?grant_type=refresh_token&refresh_token=${token.ZoomRefreshToken}`,
        headers: {
            Authorization: 'Basic ' + Buffer.from(ZoomAuth.ZoomClientId + ':' + ZoomAuth.ZoomClientSecret).toString('base64')
        }
    }
    const res = await axios(options)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
            throw new Error(err);
        });
    Zoom.update({ ZoomRefreshToken: res.refresh_token }, {
        where: {
            UserId: UserId
        }
    })
    return res.access_token;

}

module.exports.ZoomCreateMeeting = async (UserId, Options = {
    topic: "Buổi học trực tuyến trên iLearn",
    type: 2,
    duration: 45,
    start_time
}) => {
    const token = await this.ZoomGetToken(UserId);
    const user = await Zoom.findByPk(UserId);
    const res = await axios({
        method: 'POST',
        url: `${ZoomApiBaseUri}/users/${user.ZoomUserId}/meetings`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            topic: Options.topic,
            type: Options.type,
            start_time: Options.start_time,
            settings: {
                host_video: true,
                auto_recording: "local",
                waiting_room: true,
            }
        }
    }).then(res => res.data)
        .catch(err => {
            throw new Error(err)
        })
    return {
        JoinUrl: res.join_url,
        StartUrl: res.start_url,
        MeetingId: res.id
    };
}

module.exports.ZoomDeleteMeeting = async (UserId, MeetingId) => {
    const token = await this.ZoomGetToken(UserId);
    const user = await Zoom.findByPk(UserId);
    const res = await axios({
        method: 'DELETE',
        url: `${ZoomApiBaseUri}/meetings/${MeetingId}?`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    ).then(res => {
        if (res.status == 204) return true;
        return false;
    })
        .catch(err => {
            console.log(err);
            return false;
        });
    return res;
}