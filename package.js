Package.describe({
  name: 'mwc:ecmascript',
  version: '0.0.5',
  summary: 'es6 support for polymer.',
  git: 'https://github.com/meteorwebcomponents/ecmascript',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('mwc:compiler@1.1.10');
  api.versionsFrom('1.0');
  api.addFiles(['ecmascript.js'],'server');
  api.export('MWCEcma','server');
});

Npm.depends({
  'babel-core':'6.5.1',
  'babel-preset-es2015':'6.5.0'
});

