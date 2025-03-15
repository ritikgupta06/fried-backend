class ApiResponce {
  constructor(data, message) {
    this.statusCode = statusCode;
    this.success = statusCode < 400;
    this.data = data;
    this.message = message;
  }
}
