# Callista
![Callista](https://media.discordapp.net/attachments/790866153316679680/816180373535981609/20210302-1055182-unscreen.gif)

Callista is the next generation of **terminal** tool kits for your use!

## Why Callista?
Callista is just made for easy *first-hand* development, it reduces your projects weight be it big or small, **Callista** just makes things easy, with its in-built powerful library!
Why it extends over others:
1. Callista uses its own modules, bringing more rigidity in development.
2. Makes the whole project light-weight.
3. Offers you libraries for commercial software development.
4. Provides flexibility instead of tough paradigms.

# Libraries Provided

## Beautify

**The Beautify** library innumerates modules that *beautify* the terminal, in other words, **terminal styling**.

### Spinner
The spinner inside of the beautify library provides a animated spinner useful for showing **loading** ups!
A pretty basic example
```js
const {Beautify} = require("callista");

var spinner = new Beautify.spinner({
  text: "Something",
  color: "magenta"
}).start();
setTimeout(()=>{
  spinner.succeed();
}, 1000)
```
**All Spinner Methods**
*Part of the `new Beautify.spinner` class*
``.start()`` -> Starts the initial spinner. Timeout interval is `300` by default.
``.succeed()`` -> Shows that the spinner succeeded, i.e., stops the spinner and indicates success with a tick mark. *Takes in parameters(optional) as text*
``.fail()`` -> Shows that the task indicated by the spinner failed, i.e., stops the spinner and indicates failure with a cross mark. *Takes in parameters(optional) as text*

### Table
The Beautify library provides the freedom to make *tables* in your terminal!

A pretty basic example
```js
var {Beautify, Logger} = require('callista');
const table = new Beautify.table("Tables");
table.setHeading("","Name","Gender").addRow('1','Micheal','Male').addRow('2',"Maria",'Female');
Logger.write(table.toString());

```
**Alignments**
Beautify.table.toCentre()  For centre allignment

## Color
This module provides of colors which can be used on terminal text.

A pretty basic example

```js
var {Color} = require("callista");
console.log(Color.red("Hey I\'m red!"));
// Colored output, in console.
```
**Colors provided by this module!**
`red`
`magenta`
`blue`
`black`
`green`
`blue`
`grey`
`white`
`yellow`
`brightRed`
`brightGreen`
`brightYellow`
`brightBlue`
`brightMagenta`
`brightCyan`
`brightWhite`
*Use `bg` for colors but in __background__*

**Stlyes**
The **Colors** library also provides of different style functions!
`reset`
`bold`
`dim`
`italic`
`underline`
`inverse`
`hidden`
`strikethrough`

*Random and Rainbow are also functions of this library!*

## Logging
This library provides of *logging* functions to log console outputs into a `.log` file or set **levels** for logs!

A pretty basic example
```js
var {Logger} = require("callista");
Logger.level.warn("This is a console warning!"); // sends a warning to the console
Logger.write("I'm writing this to the default callista log file"); // writes this into callista.log and the terminal
// or use the simple log method
Logger.log("ok") // does not write into a log file!
Logger.write("I'm writting in my own lovely file!","awesomeness") // writes to awesomeness.log
```
**Logger.level Functions**
`trace(text)`
`debug(text)`
`info(text)`
`warn(text)`
`error(text)`

*You can set logger level using the level.setLevel() method or to set the default level -> level.setDefaultLevel() method*
**The different Levels are...**
1. Silent(5)
2. Warn(3)
3. info(2)
4. error(4)
5. trace(0)
6. debug(1)
*Numbers in bracket indicate the level!*
