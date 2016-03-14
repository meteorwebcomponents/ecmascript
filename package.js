var fs = Npm.require('fs');
var path = Npm.require('path');
var _ = Npm.require('underscore');

Package.describe({
  name: 'mwc:ecmascript',
  version: '1.0.13',
  summary: "es6 support for polymer.",
  git: "https://github.com/meteorwebcomponents/ecmascript",
  documentation: "README.md"
});

Package.registerBuildPlugin({
  name: "initializing-ecma",
  use: [
    'underscore'
  ],
  sources: [
    'plugin/ecmascript.js'
  ],
  npmDependencies: {
    'mkdirp': '0.5.0'
  }
});


Package.on_use(function(api) {
  api.add_files("ecmascript.js", ["server"]);
  api.export('MWCEcma',['server']);
  api.export('MWCEcmascript',['server']);
  api.use("babel-compiler@5.8.24_1 || 6.5.0-beta.12");
  api.use("underscore@1.0.4 || 1.0.5-beta.12");
});

Npm.depends({
  "mkdirp":"0.5.1"
});


