import { INVALID_INPUT, OPERATION_FAILED } from "./consts.js";

export const validateArgumentsCount = (actual, expected) => {
    if (actual !== expected) {
        throw new Error(INVALID_INPUT);
    }
};

export const validateIsDirectory = async path => {
    const isDirectory = await (await lstat(path)).isDirectory();

    if (!isDirectory) 
        throw new Error(OPERATION_FAILED);
};