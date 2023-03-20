import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUser, IUserReturn, IUserUpdate } from "../../interface/user.interfaces";
import { returnedUserScherma } from "../../schemas/user.schema";


const updateUserService =async (newUserData:IUserUpdate, userId:string): Promise<IUserReturn> => {
    const userRepository = AppDataSource.getRepository(User)

    const oldUser = await userRepository.findOneBy({
        id: userId
    })

    const user = userRepository.create({
        ...oldUser,
        ...newUserData
    })

    await userRepository.save(user)

    const returnUser = returnedUserScherma.parse(user)

    return returnUser
}

export default updateUserService