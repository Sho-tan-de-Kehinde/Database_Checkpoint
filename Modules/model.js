
// Creation of Person Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const profileSchema = new Schema({
    Name:{
        type: String,
        require: true
    },
    Age:{
        type: Number,
        require: true
    },
    favoriteFood:{
        type: String,
        require: true
    },
}, {timestamps: true});
 
const Profile = mongoose.model('profile', profileSchema)

module.exports = Profile