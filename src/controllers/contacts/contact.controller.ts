import {Request, Response} from 'express'
import createContactService from '../../services/contact/createContact.service'
import { IContact } from '../../interface/contact.interface'
import listAllContactsService from '../../services/contact/listAllContacts.service'
import retriveContactService from '../../services/contact/retriveContact.service'
import updateContactService from '../../services/contact/updateContact.service'
import deleteContactService from '../../services/contact/deleteContact.service'


const createContactController =async (req: Request, res:Response) => {
    const contactData: IContact = req.body

    const newContact = await createContactService(contactData)

    return res.status(201).json(newContact)
}

const updateContactController =async (req: Request, res:Response) => {
    const contactId = req.params.id
    const newContactData = req.body

    const contactUpdated = await updateContactService(newContactData, contactId)

    return res.status(200).json(contactUpdated)
}

const listContactsController =async (req: Request, res:Response) => {
    const contacts = await listAllContactsService()

    return res.status(200).json(contacts)
}

const retriveContactsController =async (req: Request, res:Response) => {
    const contactId:string = req.params.id

    const contact = await retriveContactService(contactId)

    return res.status(200).json(contact)
}

const deleteContactController =async (req: Request, res:Response) => {
    const contactId: string = req.params.id

    await deleteContactService(contactId)

    return res.status(204).send()
}

export { createContactController, updateContactController, listContactsController, retriveContactsController, deleteContactController}