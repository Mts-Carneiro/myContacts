import { userSchema, returnedUserScherma, returnMultpleuserScherma, userUpdateScherma } from "../schemas/user.schema";
import { z } from 'zod'
import { DeepPartial } from "typeorm";


type IUser = z.infer<typeof userSchema>
type IUserReturn = z.infer<typeof returnedUserScherma>
type IUsersReturn = z.infer<typeof returnMultpleuserScherma>
type IUserUpdate = DeepPartial<IUser>

export {
    IUser, IUserReturn, IUserUpdate, IUsersReturn
}