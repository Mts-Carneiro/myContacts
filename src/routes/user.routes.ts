import { Router } from "express";
import {createUserController, updateUserController, listUsersController, retriveUsersController, deleteUserController} from "../controllers/user/user.controller"

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', listUsersController)
userRoutes.get('/:id', retriveUsersController)
userRoutes.patch('/:id', updateUserController)
userRoutes.delete('/:id', deleteUserController)


export default userRoutes