import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-js/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | post-author-container', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PostAuthorContainer />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <PostAuthorContainer>
        template block text
      </PostAuthorContainer>
    `);

    assert.dom().hasText('template block text');
  });
});
