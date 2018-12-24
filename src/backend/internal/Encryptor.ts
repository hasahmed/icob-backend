import * as crypto from 'crypto';
import { ConfCrypt } from './config/conf-crypt';
import * as uuidv4 from 'uuid/v4';



export class Encryptor {
	private readonly ALGO = 'aes-256-cbc';

	constructor(
		private confCrypt: ConfCrypt = new ConfCrypt()
	) {}


	public encrypt(str: string): string {
		const cipher = crypto.createCipher(this.ALGO, this.confCrypt.secret);
		const enc = cipher.update(str, 'utf8', 'hex') + cipher.final('hex'); 
		return enc;
	}
	public decrypt(encryptedStr: string): string {
		const decipher = crypto.createDecipher(this.ALGO, this.confCrypt.secret);
		const dec = decipher.update(encryptedStr, 'hex', 'utf8') + decipher.final();
		return dec;
		// return this.cryptInst.decrypt(str);
	}
	/**
	 * Preforms a one way hash on the given string
	 * @param str The string to hash
	 */
	public static hash(str: string): string {
		return crypto.createHash('sha512').update(str).digest('hex');
	}
	public static randomString(): string {
		return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	}
	public static newUuid(): string {
		return uuidv4();
	}
}
