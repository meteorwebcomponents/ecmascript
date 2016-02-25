Package.describe({
  name: 'mwc:ecmascript',
  version: '1.0.4',
  summary: 'es6 support for polymer.',
  git: 'https://github.com/meteorwebcomponents/ecmascript',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.imply('mwc:compiler@1.1.14');
  api.use('babel-compiler',['server']);
  api.use('underscore',['server']);
  api.addFiles(['ecmascript.js'],'server');
  api.export('MWCEcma','server');
});

Npm.depends({
  "mkdirp":"0.5.1"
});


