export default class MyService {
  constructor({ repository }) {
    this.repository = repository;
  }
  getAll() {
    return this.repository.find();
  }
}
