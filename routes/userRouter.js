const { getUser, updateUser, deleteUser, createUser } = require('../controller/userController')
const authMiddleware = require('../middleware/auth')
const corsMiddleware = require('../middleware/cors')

const router = require('express').Router()
router.use(authMiddleware)
router.use(corsMiddleware)

router.get('/:id', getUser)
router.post('/', createUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

module.exports = router