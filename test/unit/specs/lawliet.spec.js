import { createTest, destroyVM } from '../util';
import Lawliet from 'packages/lawliet';

describe('Lawliet', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Lawliet, true);
    expect(vm.$el).to.exist;
  });
});

