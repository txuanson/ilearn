const rateLimit = require('express-rate-limit');

module.exports = (time, counter, msg) => rateLimit({
    windowMs: time * 1000,
    max: counter,
    message: msg
})