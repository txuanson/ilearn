const jwt = require("jsonwebtoken");
const { Unauthorized, Forbidden } = require("../helpers/response");
const { asyncCatch } = require("../helpers/utils");
const { JWT_SECRET } = require('../configs/env');
const Account = require('../models/Account');

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
		const user_data = await Account.findById(decodedData._id, "_id username email role banned").lean().exec()
		if(!user_data) throw new Unauthorized("Unauthorized!");
		if(user_data.banned > Date.now()) throw new Forbidden(`You have been banned until ${user_data.banned}`);
		req.user_data = user_data;
	}
	next();
});