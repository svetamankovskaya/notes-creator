const express = require('express');
var cors = require('cors');
const router = express.Router();
router.use(cors())

readNotes = ()=>{
    const fs = require('fs');
    var notes = JSON.parse(fs.readFileSync('notes.json'));
    fs.closeSync(2);
    return notes;
}

writeInfo = (info)=>{
    const fs = require('fs');
    fs.writeFileSync('notes.json', JSON.stringify(info))
    fs.closeSync(2);
}

saveNote = (note)=> {
    var notes = readNotes();
    var savedNote = notes.find(n => n.id === note.id);
    var noteForSave;
    if(savedNote){
        savedNote.title = note.title;
        savedNote.text = note.text;
        savedNote.hashtags = note.hashtags;
        noteForSave = savedNote;
    }else{
        var maxId = notes.length > 0 ? Math.max(...notes.map(x => x.id)) : 0;
        note.id = maxId + 1;
        notes.push(note);
        noteForSave = note;
    }
        writeInfo(notes);
        return noteForSave;
}

deleteNote = (noteId)=>{
    var notes = readNotes();
    var note = notes.find(note => note.id == noteId)
    if(note){
        var noteIndex = notes.indexOf(note);
        notes.splice(noteIndex, 1);
    }
    writeInfo(notes);
}

findNote = (id)=>{
    return readNotes().find(note => note.id == id);
}

router.get('/', (req, res, next)=>{
    res.status(200).json({
        notes: readNotes()
    })
})

router.post('/', (req, res, next)=>{
    var note = saveNote(req.body);
    res.status(200).json(note)
}, )

router.get('/:id', (req, res, next)=>{
    res.status(200).json({
        note: findNote(req.params.id)
    })
})

router.delete('/:id', (req, res, next)=>{
    deleteNote(req.params.id)

    res.status(200).json({
        message: 'Note deleted'
    })
})


module.exports = router