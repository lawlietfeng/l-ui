import { createTest, destroyVM } from '../util';
import LmLoading from 'packages/lm-loading';

describe('LmLoading', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(LmLoading, true);
    expect(vm.$el).to.exist;
  });
});

