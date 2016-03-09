# mwc:ecmascript

es6 transpiler for scripts inside the polymer import files 

extension for [mwc:compiler](https://github.com/meteorwebcomponents/compiler)

refer https://github.com/meteorwebcomponents/extensions for more details.

## Why?

Polymer components may contain es6 scripts inside html files. The default ecmascript package only transpiles script inside files with .js extension. `mwc:ecmascript` helps you here.

##Settings

### Default Settings

``` json

{
  "root" : ".polymer",

  "append": [
    "index.html"
  ],

  "import": [

    "bower_components/polymer/polymer.html"

  ], 
  "extensions": {
    "mwc:ecmascript@1.0.10": {
      "babel":{
        "sourceMap" : false,
        "ast" : false,
        "externalHelpers" : true
      },
      "limit":true,
      "log":false,
      "compileFunction": "MWCEcmascript"
    }
  }
}


```

1. babel

  Default : 
  
  ``` js
  
  {
      sourceMap : false,
      ast : false,
      externalHelpers : true
  }
  
  ```
  Pass custom settings to babel. Refer http://babeljs.io/docs/usage/options/

2. limit 

  Default : `true`
  
  A 100kB size limit is set by default for faster build time. It avoids bigger files like polymer.js and webcomponents.js which works fine without transpiling as of now.  

3. compileFunction

  Default : `"MWCEcmascript"`
  
  MWCEcmascript is the default compile function. You do not need to change that.

4. log

  Default : `false`
  
  Log processed scripts to .mwclogs/ecmascript.txt.
  
5. skip_mwc_ecmascript

  You can skip a script by adding the line `/*skip_mwc_ecmascript*/` anywhere in the script.

###Note

Use `es5-shim` for older browsers. You still have to use the mdg `ecmascript` package for other files.

### Usage

`meteor add mwc:compiler`  `meteor add mwc:ecmascript` and you are good to go.


