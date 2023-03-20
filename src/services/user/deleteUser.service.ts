import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";


const deleteUserService =async (userId:string) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id: userId
    })

    await userRepository.remove(user!)
}


export default deleteUserService