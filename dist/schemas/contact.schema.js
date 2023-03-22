"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnedcontactScherma = exports.returnMultplecontactScherma = exports.contactUpdateScherma = exports.contactSchema = void 0;
const zod_1 = require("zod");
const contactSchema = zod_1.z.object({
    name: zod_1.z.string().min(3).max(120),
    email: zod_1.z.string().email(),
    phone: zod_1.z.number(),
    user: zod_1.z.any()
});
exports.contactSchema = contactSchema;
const contactUpdateScherma = contactSchema.partial();
exports.contactUpdateScherma = contactUpdateScherma;
const returnedcontactScherma = contactSchema.extend({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    phone: zod_1.z.number(),
    createdAt: zod_1.z.date()
});
exports.returnedcontactScherma = returnedcontactScherma;
const returnMultplecontactScherma = returnedcontactScherma.array();
exports.returnMultplecontactScherma = returnMultplecontactScherma;
