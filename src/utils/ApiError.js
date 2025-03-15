class ApiError extends Error {
  constructor(
    statuscode = 500,
    message = "An unknown error occurred",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statuscode = statuscode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors; // Fix here, it was `this.errors = this.errors`
    this.stack = stack;

    if (!stack) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
