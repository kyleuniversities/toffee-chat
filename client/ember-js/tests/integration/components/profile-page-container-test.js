import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-js/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | profile-page-container', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ProfilePageContainer />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ProfilePageContainer>
        template block text
      </ProfilePageContainer>
    `);

    assert.dom().hasText('template block text');
  });
});
