import express  from "express";
import {createUser, getUserById, deleteOne, updateUser, getAllUsers} from '../controllers/users_controller.js'
import {createUserValidator, updateUserValidator} from "../utils/validator/user_validator_schema.js";
import {checkSchema} from "express-validator";

const router = express.Router();

/**
 * User Routes
 */

router.post('/create', checkSchema(createUserValidator), createUser)
router.patch('/update/:id', checkSchema(updateUserValidator), updateUser)
router.get('/get-one/:id', getUserById)
router.get('/getAll', getAllUsers)
router.post('/delete/:id', deleteOne)

export default router