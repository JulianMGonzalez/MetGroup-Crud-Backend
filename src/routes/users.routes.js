import { Router } from 'express'
import { getUsers, createUser, getUserById, updateUser, deleteUser, loginUser } from '../controllers/userController.js'

const router = Router()

router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)
router.post('/login', loginUser)

export default router