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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContactController = exports.retriveContactsController = exports.listContactsController = exports.updateContactController = exports.createContactController = void 0;
const createContact_service_1 = __importDefault(require("../../services/contact/createContact.service"));
const listAllContacts_service_1 = __importDefault(require("../../services/contact/listAllContacts.service"));
const retriveContact_service_1 = __importDefault(require("../../services/contact/retriveContact.service"));
const updateContact_service_1 = __importDefault(require("../../services/contact/updateContact.service"));
const deleteContact_service_1 = __importDefault(require("../../services/contact/deleteContact.service"));
const createContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactData = req.body;
    const newContact = yield (0, createContact_service_1.default)(contactData);
    return res.status(201).json(newContact);
});
exports.createContactController = createContactController;
const updateContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = req.params.id;
    const newContactData = req.body;
    const contactUpdated = yield (0, updateContact_service_1.default)(newContactData, contactId);
    return res.status(200).json(contactUpdated);
});
exports.updateContactController = updateContactController;
const listContactsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield (0, listAllContacts_service_1.default)();
    return res.status(200).json(contacts);
});
exports.listContactsController = listContactsController;
const retriveContactsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = req.params.id;
    const contact = yield (0, retriveContact_service_1.default)(contactId);
    return res.status(200).json(contact);
});
exports.retriveContactsController = retriveContactsController;
const deleteContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = req.params.id;
    yield (0, deleteContact_service_1.default)(contactId);
    return res.status(204).send();
});
exports.deleteContactController = deleteContactController;
