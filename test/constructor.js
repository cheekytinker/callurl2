import { describe, it } from 'mocha';
import sinon from 'sinon';
import MyService from './../src/myService';


describe('constructor injection', () => {
  it('allows dependency' +
    ' to be passed in constuctor', () => {
    let myService = null;
    const repositoryInterface = {
      find() {
        return [];
      },
    };
    const mockRepository = sinon.mock(repositoryInterface);
    mockRepository.expects('find').once().returns([]);
    myService = new MyService({
      repository: mockRepository.object,
    });
    myService.getAll();
    mockRepository.verify();
  });
});
