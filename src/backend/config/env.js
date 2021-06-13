module.exports = {
    MONGO_URI: "mongodb+srv://root:3IziS8WSjAPXiE2Q@ilearn.vnhaj.mongodb.net/ilearn?retryWrites=true&w=majority",
    JWT_TIMEOUT_DURATION: "1d",
    JWT_SECRET: "ZQXj<#$?>p-9=55V",
    ZOOM_API_URI: 'https://api.zoom.us/v2',
    ZOOM_AUTH_URI: 'https://zoom.us/oauth/token',
    PAGE_SIZE: 20,
    ZOOM_AUTH: {
        DEV: {
            CLIENT_ID: "0IZXDRSjRqi8N1HnRX233g",
            CLIENT_SECRET: "lumoStoPqLmx1qzFmxeINJtgNskA4SyJ",
            REDIRECT: "https://marketplace.zoom.us/docs/oauth/callback/success"
        },
        PROD: {
            CLIENT_ID: "iui08Y6kR8G5HvrZn9m9A",
            CLIENT_SECRET: "G2D2s5hcLJ2ZB9SYw7UFYEZCnkhSmN2c",
            REDIRECT: "https://marketplace.zoom.us/docs/oauth/callback/success"
        }
    }
}