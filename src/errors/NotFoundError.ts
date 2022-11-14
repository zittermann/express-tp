export default class NotFoundError extends Error {
  constructor(message: any) {
    super(message)
    this.name = "NotFoundError"
  }
}