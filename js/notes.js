const buttons = document.querySelectorAll('.new-note-button');
buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        const noteWrapper = button.closest('.note-wrapper');
        let notesDiv;
        if(!hasNotes(noteWrapper)){
            notesDiv = createNotesDiv(noteWrapper);
        }else{
            notesDiv = noteWrapper.querySelector('.notes'); 
        }
        addNote(notesDiv);
    })
});


function hasNotes(noteWrapper) {
    let has = false;
    Array.from(noteWrapper.children).forEach(child => {
        if (child.classList.contains('notes')) {
            has = true;
        }
    });
    return has;
}
function createNotesDiv(noteWrapper){
    console.log('creating notesDiv')
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('notes');
    noteWrapper.append(noteDiv);
    return noteDiv;
}
function addNote(notesDiv){
    const note = document.createElement('div');
    note.classList.add('note');
    notesDiv.append(note);
}