const jwt = require("jsonwebtoken");
const { Unauthorized } = require("../helpers/response");
const { asyncCatch } = require("../helpers/utils");
const { JWT_SECRET } = require('../configs/env');
module.exports = asyncCatch(async (req, res, next) => {
    const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token) {
		let userData = {};
		jwt.verify(token, JWT_SECRET, (err, decoded) => {
			if (err) throw new Unauthorized("Error when decoding token");
			if (!decoded)
				throw new Unauthorized("Invalid token!");
			else
				userData = decoded;
		});
		
	}
	next();
});