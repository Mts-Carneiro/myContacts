"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnedUserScherma = exports.returnMultpleuserScherma = exports.userUpdateScherma = exports.userSchema = void 0;
const zod_1 = require("zod");
const contact_schema_1 = require("./contact.schema");
const userSchema = zod_1.z.object({
    name: zod_1.z.string().min(3).max(120),
    email: zod_1.z.string().email(),
    phone: zod_1.z.number()
});
exports.userSchema = userSchema;
const userUpdateScherma = userSchema.partial();
exports.userUpdateScherma = userUpdateScherma;
const returnedUserScherma = userSchema.extend({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    phone: zod_1.z.number(),
    createdAt: zod_1.z.date(),
    contacts: contact_schema_1.returnedcontactScherma.nullish().array()
});
exports.returnedUserScherma = returnedUserScherma;
const returnMultpleuserScherma = returnedUserScherma.array();
exports.returnMultpleuserScherma = returnMultpleuserScherma;
