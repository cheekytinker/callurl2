import { describe, it, beforeEach } from 'mocha';
import MyService from './../src/myService';

let myService = null;
describe('constructor injection', () => {
  beforeEach(() => {
    const mockRepository = {
      find() {

      },
    };
    myService = new MyService({
      repository: mockRepository,
    });
  });

  it('allows dependency to be passed in constuctor', () => {
    myService.getAll();
  });
});
