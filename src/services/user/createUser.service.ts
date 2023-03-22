import { IUser, IUserReturn } from '../../interface/user.interfaces'
import {returnedUserScherma} from '../../schemas/user.schema'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { Repository } from 'typeorm'


const createUserService =async (userData: IUser): Promise<IUserReturn> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User = userRepository.create(userData)
    
    await userRepository.save(user)

    const getUser = userRepository.findOne({
        where:{
            id: user.id
        },
        relations:{
            contacts:true
        }
        
    })

    const newUser = returnedUserScherma.parse(getUser)

    return newUser
}

export default createUserService