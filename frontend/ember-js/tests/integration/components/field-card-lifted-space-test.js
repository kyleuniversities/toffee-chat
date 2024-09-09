import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-js/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | field-card-lifted-space', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<FieldCardLiftedSpace />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <FieldCardLiftedSpace>
        template block text
      </FieldCardLiftedSpace>
    `);

    assert.dom().hasText('template block text');
  });
});
