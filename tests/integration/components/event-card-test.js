import { module, /* test , */ skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | event card', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{event-card}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#event-card}}
        template block text
      {{/event-card}}
    `);

    assert.dom('*').hasText('template block text');
  });
});
