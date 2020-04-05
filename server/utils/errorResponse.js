class ErrorResponse extends Error {
    constructor(message, statusCode) {
        super();
        this.statusCode = statusCode;
    }
}

export default ErrorResponse;
