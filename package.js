Package.describe({
  name: 'mwc:ecmascript',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/meteorwebcomponents/ecmascript',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('underscore');
  api.versionsFrom('1.0');
  api.addFiles(['ecmascript.js'],'server');
  api.export('MWCEcma','server');
});

Npm.depends({
  'babel-core':'6.5.1',
  'babel-preset-es2015':'6.5.0'
});
Package.onTest(function(api) {
  api.use('underscore');
  api.use('tinytest');
  api.use('mwc:ecmascript');
  api.addFiles('ecmascript-tests.js');
});
