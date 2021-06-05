import express, { json, urlencoded, static } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { STATUS_CODE } from './helpers/response';
import { errorHandler } from './helpers/utils';
import indexRouter from './routes/index';

const app = express();

app.use((req, res, next) => {
    // Website you wish to allow to connect
    // res.setHeader("Access-Control-Allow-Origin", "*");

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

// const allowlist = [

// ];
// const corsOptionsDelegate = function (req, callback) {
//     var corsOptions;
//     if (allowlist.indexOf(req.header("Origin")) !== -1) {
//         corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
//     } else {
//         corsOptions = { origin: false }; // disable CORS for this request
//     }
//     callback(null, corsOptions); // callback expects two parameters: error and options
// };
// app.use(cors(corsOptionsDelegate));

app.use(helmet());
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(static(join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404
app.use((req, res, next) => {
    res.status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({
            message: "Unable to find requested resources!"
        });
});

// catch error
app.use(errorHandler);

export default app;
