const express = require('express');

require('dotenv').config();

const db = require('./configs/mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('./configs/passport-local-strategy');
const JWTStrategy = require('./configs/passport-jwt-strategy');
const PORT = 5000;

const coreConfigs = {
    origin: 'http://localhost:5173',
  credentials: true, 
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const app = express();

app.use(cors(coreConfigs));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());

app.use('/', require('./routes'));

app.listen(5000, (err) => {
    if (err) {
        console.log(`error in starting server ${err}`);
        db.close();
        return;
    }

    console.log(`server is up add runnig at ${PORT}`);
})