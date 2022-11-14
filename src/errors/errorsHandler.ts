export default class DeactivatedUserError extends Error {
    constructor(message: any) {
        super(message)
        this.message = message;
    };
}