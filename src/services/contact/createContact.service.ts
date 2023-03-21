import { IContact, IContactReturn } from '../../interface/contact.interface'
import {returnedcontactScherma} from '../../schemas/contact.schema'
import { AppDataSource } from '../../data-source'
import { Contact } from '../../entities'
import { Repository } from 'typeorm'


const createContactService =async (contactData: IContact): Promise<IContactReturn> => {
    const userRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact: Contact = userRepository.create(contactData)
    
    await userRepository.save(contact)

    const newUser = returnedcontactScherma.parse(contact)

    return newUser
}

export default createContactService