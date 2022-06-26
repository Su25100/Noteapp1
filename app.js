 const chalk = require('chalk')
 const validator = require('validator')
 const getNotes = require('./notes.js')

 /*
 const msg = getNotes()
 console.log(msg)

 const greenmsg = chalk.blue.inverse.bold('Success!')
 console.log(greenmsg)
*/

 const command = process.argv[2] //argv is argument vector which is  used to store the values like array
 console.log(process.argv) //to display the title writen with node app.js --title='thisis...'

 if (command === 'add') {
     console.log("adding notes..")
 } else if (command === 'remove') {
     console.log("removing notes..")
 }