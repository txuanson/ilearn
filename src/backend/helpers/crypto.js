const bcrypt = require('bcrypt');
const config = require('../configs/env');
const jwt = require('jsonwebtoken');

const hashPassword = (password) =>{
    const round = 10;
    const salt = bcrypt.genSaltSync(round);
    return bcrypt.hashSync(password, salt);
}

const comparePassword = (plainTextPassword, hash) => {
    return bcrypt.compareSync(plainTextPassword, hash);
}

const signJwtData = ({_id}) =>{
    const jwtPayload = {
        _id
    };

    const jwtData = {
        expiresIn: config.JWT_TIMEOUT_DURATION
    };

    const jwtSecret = config.JWT_SECRET;

    const token = jwt.sign(jwtPayload, jwtSecret, jwtData);
    return token;
}

module.exports = {
    hashPassword,
    comparePassword,
    signJwtData
}