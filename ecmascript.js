var fs = Npm.require("fs"),
  path = Npm.require("path"),
  babel = Npm.require('babel-core'),
  babelJSPreset = Npm.require('babel-preset-es2015');


function MWC_Ecma(s){
  this.settings = s;
  this.publicFolder = path.resolve("./public");
}
function _babel(js,opt){
  return babel.transform(js,opt.babel);
}

function _eachScript(html,opt){
  var re = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
  return html.replace(re, '<script>'+_babel('$1',opt).code+'</script>');
}

function _eachBody(html,opt){
  var re = /<body\b[^>]*>([\s\S]*?)<\/body>/gm;
  return html.replace(re, _eachScript('$&',opt));
}

function _eachHead(html,opt){
  var re = /<head\b[^>]*>([\s\S]*?)<\/head>/gm;
  return html.replace(re, _eachScript('$&',opt));
}

function _compile(html,opt){
  var ret =  _eachBody(_eachHead(html,opt),opt);
  return '<!-- ECMA COMPILED -->' +ret;
}

MWC_Ecma.prototype.compile =function(html){
  return _compile(html,this.settings)
}

MWC_Ecma.prototype.babel = function(js){
  return _babel(js,this.settings);
}
var MWCOpt = {}
MWCOpt.babel = {
  presets:[babelJSPreset],
  compact:true
}
MWCEcma = new MWC_Ecma(MWCOpt);
