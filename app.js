 //const getNotes = require('./notes.js');

 //const fs = require('fs');
 //fs.appendFileSync('notes.txt', ' vroom');

 //const sum = add(4, -2)
 //console.log(sum);

 /*const msg = getNotes()

 console.log(msg)
 */
 /*install color module to print text in color specified
 use--> npm install colors
 then define the colors
 */
 const colors = require('colors')
 const validator = require('validator')
 const getNotes = require('./notes.js')

 const msg = getNotes()
 console.log(msg)

 //isEmail: checks the valid email address

 //isURL : checks for the valid url
 console.log(validator.isURL(('https://www.npmjs.com/package/validator')))

 console.log('success'.green.bold); // outputs green text