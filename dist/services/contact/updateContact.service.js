"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
const contact_schema_1 = require("../../schemas/contact.schema");
const updateContactService = (newContactData, contactId) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(entities_1.Contact);
    const oldContact = yield contactRepository.findOneBy({
        id: contactId
    });
    const contact = contactRepository.create(Object.assign(Object.assign({}, oldContact), newContactData));
    yield contactRepository.save(contact);
    const returnContact = contact_schema_1.returnedcontactScherma.parse(contact);
    return returnContact;
});
exports.default = updateContactService;
