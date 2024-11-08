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
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('notes');
    noteWrapper.append(noteDiv);
    return noteDiv;
}
function addNote(notesDiv){
    const note = document.createElement('div');
    note.classList.add('note');
    addNoteMainText(note);
    notesDiv.append(note);
}
function addNoteMainText(note){
    const noteMainTextDiv = document.createElement('div');
    noteMainTextDiv.classList.add('note-main-text');
    addNoteMainTextTextarea(noteMainTextDiv);
    addCollapsibleButton(noteMainTextDiv);
    note.append(noteMainTextDiv);
}
function addNoteMainTextTextarea(noteMainTextDiv){
    const noteMainTextInput = document.createElement('textarea');
    noteMainTextInput.classList.add('note-main-text-textarea');
    noteMainTextInput.setAttribute('placeholder', 'Note...');
    noteMainTextDiv.append(noteMainTextInput);
}
function addCollapsibleButton(noteMainTextDiv){
    const collapsibleButton = document.createElement('button');
    collapsibleButton.classList.add('collapsible');
    collapsibleButton.classList.add('note-button');
    addCaret(collapsibleButton);
    noteMainTextDiv.append(collapsibleButton);
}
function addCaret(collapsibleButton){
    const caretDiv = document.createElement('div');
    caretDiv.classList.add('caret');
    collapsibleButton.append(caretDiv);
}