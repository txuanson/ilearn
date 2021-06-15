const { BadReqest } = require("../../helpers/response");
const { asyncCatch } = require("../../helpers/utils");
const { zoomInitialize } = require("../../services/zoom.service");
const accountUpgradeValidator = require("../../validators/accountUpgrade.validator");
const Zoom = require('../../models/zoom');
const Account = require('../../models/account');
const { Tutor } = require("../../configs/role");

const upgradeAccount = asyncCatch(async (req, res, next) => {
    const user_id = req.userData._id;

    const { error, value } = accountUpgradeValidator.validate(req.body);
    if (error)
        throw new BadReqest(error.message);

    const zoom = await zoomInitialize(user_id, value.access_code);
    await Zoom.create(zoom);
    await Account.updateOne({_id: user_id}, {role: Tutor});
    
    res.send("Success!");
});

module.exports = {
    upgrade: upgradeAccount
}