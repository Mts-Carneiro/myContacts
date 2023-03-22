"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user/user.controller");
const ensureDetailIsValid_middleware_1 = __importDefault(require("../middleware/ensureDetailIsValid.middleware"));
const ensureUserExist_middleware_1 = __importDefault(require("../middleware/ensureUserExist.middleware"));
const ensureUUIDIsValid_middleware_1 = __importDefault(require("../middleware/ensureUUIDIsValid.middleware"));
const user_schema_1 = require("../schemas/user.schema");
const userRoutes = (0, express_1.Router)();
userRoutes.post('', (0, ensureDetailIsValid_middleware_1.default)(user_schema_1.userSchema), user_controller_1.createUserController);
userRoutes.get('', user_controller_1.listUsersController);
userRoutes.get('/:id', ensureUUIDIsValid_middleware_1.default, ensureUserExist_middleware_1.default, user_controller_1.retriveUsersController);
userRoutes.patch('/:id', ensureUUIDIsValid_middleware_1.default, (0, ensureDetailIsValid_middleware_1.default)(user_schema_1.userUpdateScherma), ensureUserExist_middleware_1.default, user_controller_1.updateUserController);
userRoutes.delete('/:id', ensureUUIDIsValid_middleware_1.default, ensureUserExist_middleware_1.default, user_controller_1.deleteUserController);
exports.default = userRoutes;
