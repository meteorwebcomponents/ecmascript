var path = Npm.require('path');
var fs = Npm.require('fs');
var ver = "1.0.11";
var rewrite = false;
var mwcFilePath = path.resolve('client/compiler.mwc.json');
if(canProceed() && fs.existsSync(mwcFilePath)) {
  var mwcFile = JSON.parse(fs.readFileSync(mwcFilePath, 'utf8'));
  var ecma = {"compileFunction":"MWCEcmascript"};
  if(!mwcFile.hasOwnProperty("extensions")){
    mwcFile.extensions = {};
  }
  var ecmaKey;
  _.each(mwcFile.extensions,function(v,k){
    if(k.indexOf("mwc:ecmascript") > -1){
      ecmaKey = k;
      return;
    }
  });
  if(ecmaKey){
    var prevVer = ecmaKey.split("@")[1];
    if(prevVer != ver){
      var extData = rewrite ? ecma :  mwcFile.extensions[ecmaKey]
      mwcFile.extensions["mwc:ecmascript@"+ver] = extData;
      mwcFile.extensions = _.omit(mwcFile.extensions,ecmaKey);
      fs.writeFileSync(mwcFilePath,JSON.stringify(mwcFile,null,4));
    }

  }
  else {
    console.log("\n => adding mwc:ecmascript to compiler.mwc.json")
    mwcFile.extensions["mwc:ecmascript@"+ver] = ecma;
    fs.writeFileSync(mwcFilePath,JSON.stringify(mwcFile,null,4));
  }
}else{
  //console.log('mwc file not found');
}

function canProceed() {
  var unAcceptableCommands = {'add':1,'test-packages': 1, 'publish': 1};
  if(process.argv.length > 2) {
    var command = process.argv[2];
    if(unAcceptableCommands[command]) {
      return false;
    }
  }

  return true;
}
function update(){
  var commands = {"update":1,"add":1};
  if(process.argv.length > 2){
    var command = process.argv[2];
    if(commands[command]){
      return true
    }
  }
  return false;
}
