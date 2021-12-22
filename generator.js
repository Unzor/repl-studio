var int = 0;
var array = [];
//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = __dirname;
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
      int = int + 1;
        // Do whatever you want to do with the file
        if (file.split('.').pop() == "js" && file.split('.').shift() !== "generator.js"){
        array.push(fs.readFileSync(file).toString() + '\n\n');
        }
        if (int == files.length){
          fs.writeFileSync("repl-studio-api.js", array.join('\n'));
        }
    });
});