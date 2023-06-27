const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes')

const titleOptions = {
        describe: 'Title of note',
        demand: true,
        alias: 't'
}

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
    title: titleOptions
})
.command('delete', 'Delete a note', {
    title: titleOptions
})
.help()
.argv;
// var command = process.argv[2];  // grabing the third argument wrote in the command line
var command = argv._[0];    // grabing the third argument wrote in the command line using yargs
console.log(`Command: ${command}`)
// console.log('Process', process.argv);  // showing the arguments wrote in the command line
console.log('Yargs', argv);  // showing the arguments wrote in the command line using yargs

if (command === 'add') {    // using this argument to write to the command
    var note = notes.addNote(argv.title, argv.body);    // store the result of calling the function addNote
    if (note) {
        console.log("Note Created!")
        notes.logNote(note)
    } else {
        console.log("NOTE TITLE TAKEN!");
    }

} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`)
    allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log("Note Read!")
        notes.logNote(note)
    } else {
        console.log("NOTE NOT FOUND!");
    }

} else if (command === 'delete') {
    var noteDeleted = notes.deleteNote(argv.title)
    var message = noteDeleted ? 'Note Deleted' : 'NOTE NOT FOUND!'
    console.log(message)

} else {
    console.log('Command not recognized')
}