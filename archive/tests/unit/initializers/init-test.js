import InitInitializer from 'feed-app/initializers/init';
import { module, test } from 'qunit';
import Application from '@ember/application';
import { run } from '@ember/runloop';

let application;

module('Unit | Initializer | init', {
  beforeEach() {
    run(function() {
      application = Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  InitInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
