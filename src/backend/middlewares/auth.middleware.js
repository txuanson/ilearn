const jwt = require("jsonwebtoken");
const { Unauthorized } = require("../helpers/response");
const { asyncCatch } = require("../helpers/utils");
const { JWT_SECRET } = require('../configs/env');
const Account = require('../models/account');

module.exports = asyncCatch(async (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	
	if (token) {
		let decodedData = {};
		jwt.verify(token, JWT_SECRET, (err, decoded) => {
			if (err) throw new Unauthorized("Error when decoding token");
			if (!decoded)
				throw new Unauthorized("Invalid token!");
			else
				decodedData = decoded;
		});
		const userData = await Account.findById(decodedData._id, "_id username email role").exec()
		if(!userData) throw new Unauthorized("Unauthorized!");
		req.userData = userData;
	}
	next();
});