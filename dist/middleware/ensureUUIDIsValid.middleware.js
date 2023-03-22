"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
const erros_1 = require("../erros");
const ensureUUIDIsValid = (req, res, next) => {
    const uuid = validator_1.default.isUUID(req.params.id);
    if (!uuid) {
        throw new erros_1.AppError("enter a valid UUID", 400);
    }
    return next();
};
exports.default = ensureUUIDIsValid;
