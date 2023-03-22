"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_controller_1 = require("../controllers/contacts/contact.controller");
const ensureContactExist_middleware_1 = __importDefault(require("../middleware/ensureContactExist.middleware"));
const ensureDetailIsValid_middleware_1 = __importDefault(require("../middleware/ensureDetailIsValid.middleware"));
const ensureUUIDIsValid_middleware_1 = __importDefault(require("../middleware/ensureUUIDIsValid.middleware"));
const contact_schema_1 = require("../schemas/contact.schema");
const contactsRoutes = (0, express_1.Router)();
contactsRoutes.post('', (0, ensureDetailIsValid_middleware_1.default)(contact_schema_1.contactSchema), contact_controller_1.createContactController);
contactsRoutes.get('', contact_controller_1.listContactsController);
contactsRoutes.get('/:id', ensureUUIDIsValid_middleware_1.default, ensureContactExist_middleware_1.default, contact_controller_1.retriveContactsController);
contactsRoutes.patch('/:id', ensureUUIDIsValid_middleware_1.default, (0, ensureDetailIsValid_middleware_1.default)(contact_schema_1.contactUpdateScherma), ensureContactExist_middleware_1.default, contact_controller_1.updateContactController);
contactsRoutes.delete('/:id', ensureUUIDIsValid_middleware_1.default, ensureContactExist_middleware_1.default, contact_controller_1.deleteContactController);
exports.default = contactsRoutes;
