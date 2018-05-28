const mongoose = require('mongoose');
const { Schema } = mongoose;
const keys = require('../config/keys');

const userSchema = new Schema({
    googleId: String,
});

mongoose.model('users', userSchema)
mongoose.connect(keys.devUserDB)
