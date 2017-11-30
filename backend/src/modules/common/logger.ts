/*
 * Wrapper class to log messages. Should use other logger libraries
 */
export class Logger {

    classname: string;

    constructor(classname: string) {
        this.classname = classname;
    }
    async info(message: string) {
        await console.log(`[${new Date()}] [INFO] [${this.classname}] : ${message}`);
    }

    async debug(message: string) {
        await console.log(`[${new Date()}] [DEBUG] [${this.classname}] : ${message}`);
    }

    async warn(message: string) {
        await console.log(`[${new Date()}] [WARN] [${this.classname}] : ${message}`);
    }

    async error(message: string) {
        await console.log(`[${new Date()}] [ERROR] [${this.classname}] : ${message}`);
    }
}