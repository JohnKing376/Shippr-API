import express  from "express";
import {createUser, getUserById, deleteOne, updateUser, getAllUsers} from '../controllers/users_controller.js'

const router = express.Router();

/**
 * User Routes
 */

router.post('/create', createUser)
router.patch('/update/:id', updateUser)
router.get('/get-one/:id', getUserById)
router.get('/getAll', getAllUsers)
router.post('/delete/:id', deleteOne)

export default router