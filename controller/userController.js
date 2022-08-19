const userService = require('../services/userService')

exports.createUser = async (req, res) => {
    const userCreated = await userService.createUser(req.body)

    if(userCreated.error) {
        res.status(userCreated.status).json({message: "That user already exists!"})
    }

    res.json(userCreated)
}

exports.deleteUser = async (req, res) => {
    const userDeleted = await userService.deleteUser(req.params.id) 

    if(!userDeleted) {
        res.status(404).json({error: "User not found!"})
    }

    res.json(userDeleted)
}

exports.getUser = async (req, res) => {
    const retrievedUser = await userService.getUser(req.params.id)

    if(!retrievedUser) {
        res.status(404).json({error: "User not found!"})
    }

    res.json(retrievedUser)
}

exports.updateUser = async (req, res) => {
    const userUpdated = await userService.updateUser(req.params.id, req.body)

    if(!userUpdated) {
        res.status(404).json({error: "User not found!"})
    }

    res.json(userUpdated)
}