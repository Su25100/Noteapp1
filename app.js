 const chalk = require('chalk')
 const validator = require('validator')
 const getNotes = require('./notes.js')

 const msg = getNotes()
 console.log(msg)

 const greenmsg = chalk.blue.inverse.bold('Success!')
 console.log(greenmsg)

 console.log(process.argv[0]) //argv is argument vector which is  used to store the values like array