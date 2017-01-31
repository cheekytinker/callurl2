import { describe, it } from 'mocha';
import sinon from 'sinon';
import MyService from './../src/myService';
import { expect } from 'chai';

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
  it('returns an instance not a singleton', () => {
    const repositoryInterface = {
      find() {
        return [];
      },
    };
    const myService = new MyService({
      repository: repositoryInterface,
    });
    const myService2 = new MyService({
      repository: repositoryInterface,
    });
    myService.setX(45);
    expect(myService2.getX()).not.to.equal(myService.getX());
  });
});
