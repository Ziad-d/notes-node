const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes')

const argv = yargs.argv;
// var command = process.argv[2];  // grabing the third argument wrote in the command line
var command = argv._[0];    // grabing the third argument wrote in the command line using yargs
console.log(`Command: ${command}`)
// console.log('Process', process.argv);  // showing the arguments wrote in the command line
console.log('Yargs', argv);  // showing the arguments wrote in the command line using yargs

if (command === 'add') {    // using this argument to write to the command
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'delete') {
    notes.deleteNote(argv.title)
} else {
    console.log('Command not recognized')
}