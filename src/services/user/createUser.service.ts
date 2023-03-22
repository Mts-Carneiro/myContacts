import { IUser, IUserCreateReturn } from '../../interface/user.interfaces'
import {returnCreateUser} from '../../schemas/user.schema'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { Repository } from 'typeorm'


const createUserService =async (userData: IUser): Promise<IUserCreateReturn> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User = userRepository.create(userData)
    
    await userRepository.save(user)

    const newUser = returnCreateUser.parse(user)

    return newUser
}

export default createUserService