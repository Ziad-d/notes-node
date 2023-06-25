const fs = require('fs')

var originalNote = {
    title: 'Some title',
    body: 'Some body'
}

var originalNoteString = JSON.stringify(originalNote)   // convert object into a JSON string
fs.writeFileSync('notes.json', originalNoteString)  // write to a file as a JSON string

var noteString = fs.readFileSync('notes.json') // read from the file the JSON string we convert
var note = JSON.parse(noteString)   // convert the JSON string to object

console.log(typeof note)
console.log(note.title)