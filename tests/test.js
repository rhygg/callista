const {Logger, Color, Beautify} = require('../callista.js');
Logger.write("This was written in the terminal", "red");
Logger.level.warn("Yay!");
Logger.level.warn(Color.random("something"))
console.log(Color.red("Hey I\'m red!"));
console.log(Color.underline("okie"))
var table = new Beautify.table('A Title')
table
  .setHeading('', 'Name', 'Age')
  .addRow(1, 'Bob', 52)
  .addRow(2, 'John', 34)
  .addRow(3, 'Jim', 83)

console.log(table.toString())
