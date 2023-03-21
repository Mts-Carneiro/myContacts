import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { Contact } from "../../entities";
import { returnedcontactScherma } from "../../schemas/contact.schema";


const retriveContactService =async (contactId:string) => {
    
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const findContact = await contactRepository.findOneBy({
        id: contactId
    })
    
    const returnContact = returnedcontactScherma.parse(findContact)

    return returnContact
}

export default retriveContactService