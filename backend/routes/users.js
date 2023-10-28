import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController'
const router = express.Router()

//update user
router.put("/:id", updateUser)

//delete user
router.delete("/:id", deleteUser)

//get single user
router.get("/:id", getSingleUser)

//get all user
router.get("/", getAllUser)

export default router