import { Router } from "express";
import {createUserController, updateUserController, listUsersController, retriveUsersController, deleteUserController} from "../controllers/user/user.controller"
import ensureDataIsValidMiddleware from "../middleware/ensureDetailIsValid.middleware";
import ensureUserExist from "../middleware/ensureUserExist.middleware";
import ensureUUIDIsValid from "../middleware/ensureUUIDIsValid.middleware";
import { userSchema, userUpdateScherma } from "../schemas/user.schema";

const userRoutes = Router()

userRoutes.post('', ensureDataIsValidMiddleware(userSchema), createUserController)
userRoutes.get('', listUsersController)
userRoutes.get('/:id', ensureUUIDIsValid, ensureUserExist, retriveUsersController)
userRoutes.patch('/:id', ensureUUIDIsValid, ensureDataIsValidMiddleware(userUpdateScherma), ensureUserExist, updateUserController)
userRoutes.delete('/:id', ensureUUIDIsValid, ensureUserExist, deleteUserController)


export default userRoutes