import {Request, Response} from 'express'
import {IUser, IUserUpdate} from '../../interface/user.interfaces'
import createUserService from '../../services/user/createUser.service'
import deleteUserService from '../../services/user/deleteUser.service'
import listUsersService from '../../services/user/listUsers.service'
import retriverUserService from '../../services/user/retriverUser.service'
import updateUserService from '../../services/user/updateUser.service'


const createUserController =async (req: Request, res:Response) => {
    const userData: IUser = req.body

    const newUser = await createUserService(userData)

    return res.status(201).json(newUser)
}

const listUsersController =async (req: Request, res:Response) => {
    const users = await listUsersService()

    return res.status(200).json(users)
}

const retriveUsersController =async (req: Request, res:Response) => {
    const userId:string = req.params.id

    const user =await retriverUserService(userId)

    return res.status(200).json(user)
}

const updateUserController =async (req: Request, res:Response) => {
    const userId: string = req.params.id

    const newUserData: IUserUpdate = req.body

    const userUpdated: IUser = await updateUserService(newUserData, userId)

    res.status(200).json(userUpdated)
}

const deleteUserController =async (req: Request, res:Response) => {
    const userId: string = req.params.id

    await deleteUserService(userId)

    return res.status(204).send()
}

export { createUserController, updateUserController, listUsersController, retriveUsersController, deleteUserController}