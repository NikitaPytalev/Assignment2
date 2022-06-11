import { INVALID_INPUT } from "./consts.js";

export const validateArgumentsCount = (actual, expected) => {
    if (actual !== expected) {
        throw new Error(INVALID_INPUT);
    }
};