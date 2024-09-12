import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-js/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | site-right-body', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SiteRightBody />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <SiteRightBody>
        template block text
      </SiteRightBody>
    `);

    assert.dom().hasText('template block text');
  });
});
