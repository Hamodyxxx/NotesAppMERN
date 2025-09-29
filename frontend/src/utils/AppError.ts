interface AppErrorProps<T> {
    message?:string,
    options?: ErrorOptions
    extraDetails?: T
}

export default class AppError<T> extends Error {
    extraDetails: T | undefined;
    constructor({
        message,
        options,
        extraDetails
    }: AppErrorProps<T> = {} ){ 
        super(message, options) 
        if(extraDetails) this.extraDetails = extraDetails;
    }
}