import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-js/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | field-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<FieldCard />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <FieldCard>
        template block text
      </FieldCard>
    `);

    assert.dom().hasText('template block text');
  });
});
