export default class MyService {
  constructor({ repository }) {
    this.repository = repository;
    this.x = 0;
  }
  getAll() {
    return this.repository.find();
  }
  getX() {
    return this.x;
  }
  setX(x) {
    this.x = x;
  }
}
