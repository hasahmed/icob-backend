import { ConfMailer } from './config/ConfMailer';
import { Encryptor } from './Encryptor';
export interface MailOptions {
    to: string | string[];
    subject: string;
    html: string;
}
export declare class MailHandler {
    private confMailer;
    private crydec;
    private transporter;
    constructor(confMailer?: ConfMailer, crydec?: Encryptor);
    sendMail(mailOptions: Object): void;
}
