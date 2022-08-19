const User = require('../models/userModel')
const { ObjectId } = require('mongodb')

exports.createUser = async (userInfo) => {
    const { userEmail } = userInfo
    const charCount = 0
    const user = await User.findOne({userEmail: userEmail})

    if(user) {
        return {error: "User already exists!", status: 400}
    }

    const newUser = new User({
        userEmail,
        charCount
    })


    return await newUser.save()
}

exports.getUser = async (userId) => {
    const returnedUser = await User.findById(new ObjectId(userId))

    if(!returnedUser) {
        console.log("User not found!")
    }

    return returnedUser
}

exports.deleteUser = async (userId) => {
    const deletedUser = await User.findByIdAndDelete(new ObjectId(userId))

    if(!deletedUser) {
        console.log("User not found!")
    }

    return deletedUser
}

exports.updateUser = async (userId, updates) => {
    const updatedUser = await User.findByIdAndUpdate(new ObjectId(userId), updates)

    if(!updatedUser) {
        console.log("User not found!")
    }

    return updatedUser
}