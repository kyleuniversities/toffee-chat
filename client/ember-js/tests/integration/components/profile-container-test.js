import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-js/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | profile-container', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ProfileContainer />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ProfileContainer>
        template block text
      </ProfileContainer>
    `);

    assert.dom().hasText('template block text');
  });
});
