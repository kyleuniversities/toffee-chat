'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    apollo: {
      include: ['apollo-link-batch-http'],
      exclude: ['graphql-tag'],
    },
  });

  return app.toTree();
};
