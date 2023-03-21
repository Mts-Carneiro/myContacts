import { Router } from "express";
import {createContactController, updateContactController, listContactsController, retriveContactsController, deleteContactController} from "../controllers/contacts/contact.controller"
import ensureContactExist from "../middleware/ensureContactExist.middleware";
import ensureDataIsValidMiddleware from "../middleware/ensureDetailIsValid.middleware";
import ensureUUIDIsValid from "../middleware/ensureUUIDIsValid.middleware";
import { contactSchema, contactUpdateScherma,  } from "../schemas/contact.schema";

const contactsRoutes = Router()

contactsRoutes.post('', ensureDataIsValidMiddleware(contactSchema), createContactController)
contactsRoutes.get('', listContactsController)
contactsRoutes.get('/:id', ensureUUIDIsValid, ensureContactExist, retriveContactsController)
contactsRoutes.patch('/:id', ensureUUIDIsValid, ensureDataIsValidMiddleware(contactUpdateScherma), ensureContactExist, updateContactController)
contactsRoutes.delete('/:id', ensureUUIDIsValid, ensureContactExist, deleteContactController)


export default contactsRoutes