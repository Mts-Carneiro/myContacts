"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
require("reflect-metadata");
const erros_1 = require("./erros");
const contacts_routes_1 = __importDefault(require("./routes/contacts.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/user', user_routes_1.default);
app.use('/contact', contacts_routes_1.default);
app.use(erros_1.handleErrors);
exports.default = app;