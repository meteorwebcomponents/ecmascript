var path = Npm.require('path');
var fs = Npm.require('fs');

var mwcFilePath = path.resolve('client/compiler.mwc.json');

if(canProceed() && !fs.existsSync(mwcFilePath)) {

  console.log("adding mwc:ecmascript to compilermwc.json")
  var mwcFile = JSON.parse(fs.readFileSync(mwcFilePath, 'utf8'));
  var ecma = {"compileFunction":"MWCEcmascript"};

  if(!mwcFile.extensions["mwc:ecmascript@1.0.6"]){
    mwcFile.extensions["mwc:ecmascript@1.0.6"] = ecma;
    fs.writeFileSync(mwcFilePath,JSON.stringify(mwcFile,null,4));
  }
}else{
  //console.log('mwc file not found');
}

function canProceed() {
  var unAcceptableCommands = {'test-packages': 1, 'publish': 1};
  if(process.argv.length > 2) {
    var command = process.argv[2];
    if(unAcceptableCommands[command]) {
      return false;
    }
  }


