const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userEmail: String,
    charCount: Number,
})

const User = mongoose.model('users', userSchema)

module.exports = User;