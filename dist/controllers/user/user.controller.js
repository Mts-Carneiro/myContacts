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
exports.deleteUserController = exports.retriveUsersController = exports.listUsersController = exports.updateUserController = exports.createUserController = void 0;
const createUser_service_1 = __importDefault(require("../../services/user/createUser.service"));
const deleteUser_service_1 = __importDefault(require("../../services/user/deleteUser.service"));
const listUsers_service_1 = __importDefault(require("../../services/user/listUsers.service"));
const retriverUser_service_1 = __importDefault(require("../../services/user/retriverUser.service"));
const updateUser_service_1 = __importDefault(require("../../services/user/updateUser.service"));
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const newUser = yield (0, createUser_service_1.default)(userData);
    return res.status(201).json(newUser);
});
exports.createUserController = createUserController;
const listUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, listUsers_service_1.default)();
    return res.status(200).json(users);
});
exports.listUsersController = listUsersController;
const retriveUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const user = yield (0, retriverUser_service_1.default)(userId);
    return res.status(200).json(user);
});
exports.retriveUsersController = retriveUsersController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const newUserData = req.body;
    const userUpdated = yield (0, updateUser_service_1.default)(newUserData, userId);
    res.status(200).json(userUpdated);
});
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    yield (0, deleteUser_service_1.default)(userId);
    return res.status(204).send();
});
exports.deleteUserController = deleteUserController;
