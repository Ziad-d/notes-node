const fs = require('fs')

var addNote = (title, body) => {
    var notes = []
    var note = {
        title,
        body
    }

    try {   // fetch any existing notes
        var notesString = fs.readFileSync('notes-data.json')    // could throw an error that there are no data
        notes = JSON.parse(notesString) // could throw a typing error
    } catch (e) {

    }

    var duplicateNotes = notes.filter((note) => {   // check for duplicates
        note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push(note)
        fs.writeFileSync('notes-data.json', JSON.stringify(notes))  // save the data to the file
    }
}

var getAll = () => {
    console.log('Getting all notes')
}
var getNote = (title) => {
    console.log('Getting note', title)
}
var deleteNote = (title) => {
    console.log('Deleting note', title)
}

module.exports = {
    addNote,
    getAll,
    getNote,
    deleteNote
}