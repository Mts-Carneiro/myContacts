import { Router } from "express";
import {createContactController, updateContactController, listContactsController, retriveContactsController, deleteContactController} from "../controllers/contacts/contact.controller"

const contactsRoutes = Router()

contactsRoutes.post('', createContactController)
contactsRoutes.get('', listContactsController)
contactsRoutes.get('/:id', retriveContactsController)
contactsRoutes.patch('/:id', updateContactController)
contactsRoutes.delete('/:id', deleteContactController)


export default contactsRoutes