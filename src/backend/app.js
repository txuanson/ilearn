const express = require('express');
const { join } = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const { STATUS_CODE } = require('./helpers/response');
const { errorHandler } = require('./helpers/utils');
const indexRouter = require('./routes/index');
const mongoose = require('mongoose');
const { MONGO_URI, STATIC_PATH } = require('./configs/env');
const fs = require('fs-extra');

fs.ensureDirSync(`${STATIC_PATH}/storage`);

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', () => console.log('Database connection failed'));
db.once('open', async () => {
    console.log("Database connection established...");
});

const app = express();

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "iLearn API",
            version: "1.0.0",
            description: "Online learning platform with Zoom intergrated",
        },
        servers: [{
            url: "https://ilearn-19clc3.herokuapp.com"
        }, {
            url: "http://localhost:3000",
        }],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        },
        security: [{
            bearerAuth: []
        }]
    },
    apis: ["./routes/**/*.js"],
};

const specs = swaggerJsDoc(options);


app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", false);

    // Pass to next layer of middleware
    next();
});

 const allowlist = [
    'http://localhost:3000',
     'https://ilearn-two.vercel.app'
 ];
 const corsOptionsDelegate = function (req, callback) {
     var corsOptions;
     if (allowlist.indexOf(req.header("Origin")) !== -1) {
         corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
     } else {
         corsOptions = { origin: false }; // disable CORS for this request
     }
     callback(null, corsOptions); // callback expects two parameters: error and options
 };
 app.use(cors(corsOptionsDelegate));

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 - no route found!
app.use((req, res, next) => {
    res.status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({
            message: "Unable to find requested resources!"
        });
});

// catch error
app.use(errorHandler);

module.exports = app;
