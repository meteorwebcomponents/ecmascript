var fs = Npm.require("fs"),
  path = Npm.require("path"),
  mkdirp = Npm.require('mkdirp');

function MWC_Ecma(s){
  this.settings = s || {};
}
function _babel(js){
  var babelOptions = Babel.getDefaultOptions();
  var opt = MWCEcma.settings;
  babelOptions = _.extend(babelOptions,opt.babel);
  var ret = "";
  if(!opt.limit || (js.length < 100*1000 && js.indexOf('skip_mwc_ecmascript') == -1)){
    ret = Babel.compile(js, babelOptions).code;
  }
  else{
    ret = js;
  }
  if(opt.log){
    var d = new Date();
    var n = d.toTimeString();
    if(!opt.logFile){
      var dir = ".mwclogs"
      mkdirp.sync(dir);
      opt.logFile =  dir+"/ecmascript.txt";
    }
    fs.appendFileSync(opt.logFile,"\n\n\nECMA\n"+n+ "\n\n\n" +ret);
  }
  return ret;
}

function _eachScript(html){
  var re = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
  var result = html.replace(re, function replace(match,content) { 
    var ret = '<script>'+_babel(content)+'</script>';

    return ret; 
  });

  return result;
}

function _eachBody(html){
  var re = /<body\b[^>]*>([\s\S]*?)<\/body>/gm;
  var result = html.replace(re, function replace(match) { 
    return _eachScript(match); 
  });
  return result;
}

function _eachHead(html){
  var re = /<head\b[^>]*>([\s\S]*?)<\/head>/gm;
  var result = html.replace(re, function replace(match) { 
    return _eachScript(match); 
  });
  return result;
}

function _compile(html){
  var ret =  _eachScript(html);
  return '<!-- ECMA COMPILED -->' +ret;
}

MWC_Ecma.prototype.compile =function(html,opt){
  _.extend(this.settings , opt);
  return _compile(html,opt);
}

MWC_Ecma.prototype.babel = function(js,opt){
  _.extend(this.settings , opt);
  return _babel(js);
}
var MWCOpt={
  babel:{
    sourceMap : false,
    ast : false
  },
  limit:true,
  log:false
}
MWCEcma = new MWC_Ecma(MWCOpt);
MWCEcmascript = function(html,opt){
  return MWCEcma.compile(html,opt);
}
