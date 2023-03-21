import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { Contact } from "../../entities";
import { returnedcontactScherma } from "../../schemas/contact.schema";
import { IContactUpdate } from "../../interface/contact.interface";


const updateContactService =async (newContactData: IContactUpdate ,contactId:string) => {
    
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const oldContact = await contactRepository.findOneBy({
        id: contactId
    })

    const contact = contactRepository.create({
        ...oldContact,
        ...newContactData
    })

    await contactRepository.save(contact)
    
    const returnContact = returnedcontactScherma.parse(contact)

    return returnContact
}

export default updateContactService