import { ConfCrypt } from './config/ConfCrypt';
export declare class Encryptor {
    private confCrypt;
    private readonly ALGO;
    constructor(confCrypt?: ConfCrypt);
    encrypt(str: string): string;
    decrypt(encryptedStr: string): string;
    static hash(str: string): string;
    static randomString(): string;
    static newUuid(): string;
}
