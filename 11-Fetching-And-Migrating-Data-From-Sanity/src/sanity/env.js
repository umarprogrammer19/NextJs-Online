"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectId = exports.dataset = exports.apiVersion = void 0;
exports.apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-29';
exports.dataset = assertValue(process.env.NEXT_PUBLIC_SANITY_DATASET, 'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
exports.projectId = assertValue(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
function assertValue(v, errorMessage) {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}
