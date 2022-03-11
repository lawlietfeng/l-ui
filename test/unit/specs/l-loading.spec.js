import { createTest, destroyVM } from '../util';
import LLoading from 'packages/l-loading';

describe('LLoading', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(LLoading, true);
    expect(vm.$el).to.exist;
  });
});

