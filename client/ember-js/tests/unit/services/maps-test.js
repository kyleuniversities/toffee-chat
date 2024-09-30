import { module, test } from 'qunit';
import { setupTest } from 'ember-js/tests/helpers';

module('Unit | Service | maps', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:maps');
    assert.ok(service);
  });
});
