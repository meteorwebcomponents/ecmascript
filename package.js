var fs = Npm.require('fs');
var path = Npm.require('path');
var _ = Npm.require('underscore');

Package.describe({
  name: 'mwc:ecmascript',
  version: '1.0.9',
  summary: "es6 support for polymer.",
  git: "https://github.com/meteorwebcomponents/ecmascript",
  documentation: "README.md"
});

Package.registerBuildPlugin({
  name: "initializing-ecma",
  use: [
    'underscore@1.0.4'
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
  api.use("babel-compiler@5.8.24_1");
  api.use("underscore@1.0.4");
});

Npm.depends({
  "mkdirp":"0.5.1"
});


