import { INVALID_INPUT, OPERATION_FAILED } from "./consts.js";
import { lstat } from 'fs/promises';
import { join, isAbsolute } from 'path';

export const validateArgumentsCount = (actual, expected) => {
    if (actual !== expected) {
        throw new Error(INVALID_INPUT);
    }
};

export const validateIsDirectory = async path => {
    const isDirectory = (await lstat(path)).isDirectory();

    if (!isDirectory) 
        throw new Error(OPERATION_FAILED);
};

export const validateIsFile = async path => {
    const isFile = (await lstat(path)).isFile();

    if (!isFile) 
        throw new Error(OPERATION_FAILED);
};

export const toAbsolute = path => {
    return isAbsolute(path) ? path : join(process.cwd(), path);
};