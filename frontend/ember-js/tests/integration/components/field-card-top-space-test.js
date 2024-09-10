import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-js/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | field-card-top-space', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<FieldCardTopSpace />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <FieldCardTopSpace>
        template block text
      </FieldCardTopSpace>
    `);

    assert.dom().hasText('template block text');
  });
});
