const { BadReqest } = require("../../helpers/response");
const { asyncCatch, removeUnusedFile, removeTempFlag, filterImageUrl, translateRole } = require("../../helpers/utils");
const { zoomInitialize } = require("../../services/zoom.service");
const accountUpgradeValidator = require("../../validators/accountUpgrade.validator");
const Zoom = require('../../models/Zoom');
const Account = require('../../models/Account');
const { v4: uuidv4 } = require('uuid');
const { Tutor } = require("../../configs/role");
const profileEditValidator = require("../../validators/profileEdit.validator");
const { STATIC_PATH, HOST, DEFAULT_AVA } = require("../../configs/env");
const compress = require("../../helpers/compress");

const upgradeAccount = asyncCatch(async (req, res, next) => {
    const user_id = req.user_data._id;

    const { error, value } = accountUpgradeValidator.validate(req.body);
    if (error)
        throw new BadReqest(error.message);

    const zoom = await zoomInitialize(user_id, value.access_code);
    await Zoom.create(zoom);
    await Account.updateOne({ _id: user_id }, { role: Tutor });

    res.send("Success!");
});

const getMinProfile = asyncCatch(async(req, res, next) =>{
    const profile = await Account.findById(req.user_data._id)
    .select("name username role avatar")
    .lean()
    res.send(profile)
})

const getProfile = asyncCatch(async (req, res, next) => {
    const profile = await Account.findById(req.params.user_id,
        "_id name role username bio avatar").lean();
    if (req.user_data && req.user_data._id.equals(profile._id)) {
        const user_data = {};
        user_data.zoom = await Zoom.exists({ user_id: profile._id })

        profile.user_data = user_data;
    }
    res.send(profile);
})

const editProfile = asyncCatch(async (req, res, next) => {
    const { error, value } = profileEditValidator.validate(req.body);
    if (error)
        throw new BadReqest(error.message);

    const profile = await Account.findById(req.user_data._id).lean().exec();

    const old_img = filterImageUrl(profile.bio);
    const new_img = filterImageUrl(value.bio);

    const img_to_del = old_img.filter(e => !new_img.includes(e));
    const img_to_update = new_img.filter(e => !old_img.includes(e));

    await removeUnusedFile(img_to_del);
    await removeTempFlag(img_to_update);

    await Account.updateOne({ _id: req.user_data._id }, value);

    res.send("Success!");
})

const updateAvatar = asyncCatch(async (req, res, next) => {
    if (!req.file) throw new BadReqest('Avatar required!');

    const user_info = await Account.findById(req.user_data._id, "avatar");

    // course cover img process
    const filename = `storage/${uuidv4()}.jpeg`;
    const filepath = `${STATIC_PATH}/${filename}`;
    await compress(req.file.buffer, filepath).catch(err => {
        console.log(err);
        throw err;
    });

    if (user_info.avatar != DEFAULT_AVA)
        removeUnusedFile([user_info.avatar]);

    await Account.updateOne({ _id: req.user_data._id }, { avatar: filename }).exec();

    res.send("Success!");
})

module.exports = {
    upgrade: upgradeAccount,
    getProfile,
    getMinProfile,
    editProfile,
    updateAvatar
}