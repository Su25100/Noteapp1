 const chalk = require('chalk')
 const validator = require('validator')
 const getNotes = require('./notes.js')
 const yargs = require('yargs')
 const { describe } = require('yargs')

 //create add command
 yargs.command({
         command: 'add',
         describe: 'adding a note',
         handler: function() {
             console.log('adding a new node!')
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