import { CustomError } from "./custom-error";
export declare class DatabaseConnectionError extends CustomError {
    reasons: string;
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
