import ErrorResponse from "./errorResponse";
import { chain } from "lodash";

const errorHandler = err => {
    let error = { ...err };

    console.log(err.name)

    error.message = err.message;

    // Log to console for dev
    console.log(JSON.stringify(error, null, 2).red);

    // Mongoose bad ObjectID
    if (err.name === "CastError") {
        const message = `Resource not found`;
        error = new ErrorResponse(message, 404);
    }

    // Mongoose duplicate key
    if (err.code === 11000) {
        const message = `Duplicate field value entered`;
        error = new ErrorResponse(message, 400);
    }

    // Mongoose validation error
    if (err.name === "ValidationError") {
        const message = chain(err.errors)
            .values()
            .map(({ message }) => ` ${message}`)
            .value();

        error = new ErrorResponse(message, 400);
    }

    return error.message || "Server Error"
};

export default errorHandler;
