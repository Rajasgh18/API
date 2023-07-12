const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const Model = new Schema({
    title: String,
    description:String,
}, {timestamps: true});

module.exports = model('Models', Model);