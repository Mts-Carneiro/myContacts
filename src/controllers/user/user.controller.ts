import {Request, Response} from 'express'
import {IUser} from '../../interface/user.interfaces'
import createUserService from '../../services/user/createUser.service'


const createUserController =async (req: Request, res:Response) => {
    const userData: IUser = req.body

    const newUser = await createUserService(userData)

    return res.status(201).json(newUser)
}

const updateUserController =async (req: Request, res:Response) => {
    
}

const listUsersController =async (req: Request, res:Response) => {
    
}

const retriveUsersController =async (req: Request, res:Response) => {
    
}

const deleteUserController =async (req: Request, res:Response) => {
    
}

export { createUserController, updateUserController, listUsersController, retriveUsersController, deleteUserController}