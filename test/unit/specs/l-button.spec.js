import { createTest, destroyVM } from '../util';
import LButton from 'packages/l-button';

describe('LButton', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(LButton, true);
    expect(vm.$el).to.exist;
  });
});

