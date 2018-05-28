const express = require('express');
require('./models/user')
require('./services/passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookiesSession = require('cookie-session');
const passport = require('passport');

const app = express();

app.use(
    cookiesSession({
        maxAge: 30 * 24 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);