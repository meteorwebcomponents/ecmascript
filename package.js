Package.describe({
  name: 'mwc:ecmascript',
  version: '1.0.4',
  summary: 'es6 support for polymer.',
  git: 'https://github.com/meteorwebcomponents/ecmascript',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.imply('mwc:compiler@1.1.15');
  api.use("babel-compiler@5.8.24_1");
  api.use("underscore");
  api.addFiles(['ecmascript.js'],'server');
  api.export('MWCEcma','server');
});

Npm.depends({
  "mkdirp":"0.5.1"
});


