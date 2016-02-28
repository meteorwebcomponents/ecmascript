var path = Npm.require('path');
var fs = Npm.require('fs');

var mwcFilePath = path.resolve('client/compiler.mwc.json');
if(mwcFilePath){
  var mwcFile = JSON.parse(fs.readFileSync(mwcFilePath, 'utf8'));
  var ecma = {"compileFunction":"MWCEcmascript"};

  if(!mwcFile.extensions["mwc:ecmascript@1.0.6"]){
    mwcFile.extensions["mwc:ecmascript@1.0.6"] = ecma;
    fs.writeFileSync(mwcFilePath,JSON.stringify(mwcFile,null,4));
  }
}else{
  console.log('mwc file not found');
}


