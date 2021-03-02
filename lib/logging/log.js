'use-strict';
const fs = require("fs");
var chalk = require('chalk')
var timestamp = require('time-stamp');
/**
 * Log data to json file.
 * @param {string} data Data to be logged.
 * @param {string} file Custom file name.
 */
 function getTimestamp() {
   return '[' + (timestamp('HH:mm:ss')) + ']';
 }
 var time = getTimestamp();
 function Log(data){
   console.log(chalk.green(data));
 }
function Write(data, file) {
  let filename = file +".log"
  if (!filename) {
    filename = "logger.log";
  }
    const filetext = `${time} ${data}`;
  fs.stat(filename, function(err, stat) {
    if(err == null) {
      console.log(chalk.green(data));
      const filetxt = `\n\n ${time} ${data}`
      fs.appendFile(
        filename,
        filetxt,
        function (error) {
          if (error) {
            console.log(error);
          }
        },
        () => {}
      );

    } else if(err.code === 'ENOENT') {
console.log(chalk.green(data));
      fs.writeFile(
        filename,
        filetext,
        function (error) {
          if (error) {
            console.log(error);
          }
        },
        () => {}
      );
    } else {
        console.log(chalk.red('Apparent error', err.code));
    }
});

}

module.exports = Write;
module.exports = Log;
