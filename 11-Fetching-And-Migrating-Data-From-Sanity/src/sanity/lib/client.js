"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var next_sanity_1 = require("next-sanity");
var env_1 = require("../env");
exports.client = (0, next_sanity_1.createClient)({
    projectId: env_1.projectId,
    dataset: env_1.dataset,
    apiVersion: env_1.apiVersion,
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_SECRET_TOKEN,
});
