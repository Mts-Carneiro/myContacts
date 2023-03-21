import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../erros";
import { Contact } from "../entities";


const ensureContactExist =async (req:Request, res:Response, next:NextFunction):Promise<void> => {
    

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact = await contactRepository.findOneBy({
        id: req.params.id
    })

    if(!contact){
        throw new AppError("Contact does not exist", 404)
    }

    return next()
}


export default ensureContactExist