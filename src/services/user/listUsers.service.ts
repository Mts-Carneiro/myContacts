import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUsersReturn } from "../../interface/user.interfaces";
import {returnMultpleuserScherma} from '../../schemas/user.schema'

const listUsersService = async (): Promise<IUsersReturn> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser: Array<User> = await userRepository.find({
        relations: {
            contacts: true
        }
    })

    const returnUsers = returnMultpleuserScherma.parse(findUser)

    return returnUsers
}

export default listUsersService