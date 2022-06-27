 const chalk = require('chalk')
 const validator = require('validator')
 const getNotes = require('./notes.js')
 const yargs = require('yargs')
 const { describe, demandOption } = require('yargs')

 //create add command
 yargs.command({
     command: 'add',
     describe: 'adding a note',
     builder: {
         title: {
             describe: 'Note title',
             demandOption: true,
             type: 'string'
         }
     },
     body: {

         describe: 'Note body',
         demandOption: true,
         type: 'string'
     },

     handler: function(argv) {
         console.log('Title: ' + argv.title)
         console.log('Body: ' + argv.body)

     }
 })

 //create a command
 yargs.command({
         command: 'remove',
         describe: 'remove note',
         handler: function() {
             console.log('removing a note!')

         }

     })
     //create a reading note
 yargs.command({
         command: 'read',
         descibe: 'reading note',
         handler: function() {
             console.log('read a note!!')
         }
     })
     //create listing note
 yargs.command({
         command: 'List',
         descibe: 'listing note',

         handler: function() {
             console.log('listing out all notes!!')
         }
     })
     //add,remove,read,list

 console.log(yargs.argv)