const fs = require('fs')

var fetchNotes = () => {
    try {   // fetch any existing notes
        var notesString = fs.readFileSync('notes-data.json')    // read notes from the file    // could throw an error that there are no data
        return JSON.parse(notesString)  // return the notes objectified  // return to the calling function  // could throw a typing error
    } catch (e) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))  // save the data to the file
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }

    var duplicateNotes = notes.filter((note) => note.title === title)   // checking for duplicates, return the notes with the same title

    if (duplicateNotes.length === 0) {  // check if theres no duplicates
        notes.push(note)
        saveNotes(notes);

        return note;    // returned to whoever call the function
    }
}

var getAll = () => {
    console.log('Getting all notes')
}
var getNote = (title) => {
    console.log('Getting note', title)
}
var deleteNote = (title) => {
    var notes = fetchNotes();
    var filterd = notes.filter((note) => note.title !== title)  // return all notes with the title different from the one entered
    saveNotes(filterd)

    return notes.length !== filterd.length
}

module.exports = {
    addNote,
    getAll,
    getNote,
    deleteNote
}