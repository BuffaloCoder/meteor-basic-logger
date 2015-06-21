Package.describe({
  name: 'thename:logger',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Basic logging utility for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('logger.js');
  api.addFiles('loggerClientSetup.js');
  api.addFiles('loggerServerSetup.js');
  api.export('BaseLogger'); // handed to both in case of further modification
  // log seems to be better suited towards client, while Logger will seem more familiar to long time coders
  api.export('Logger', 'server');
  api.export('log', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('thename:logger');
  api.addFiles('logger-tests.js');
});
