const expandButtons = document.querySelectorAll('.collapsible');
expandButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        const note = button.closest('.note');
        expandNote(note);
    });
});
function expandNote(note){
    const noteExpandText = note.querySelector('.note-expand-text');
    const caret = note.querySelector('.caret');
    if(noteExpandText.style.maxHeight){
        noteExpandText.style.maxHeight = null;
        caret.style.transform = 'rotate(0deg)';
    } else{
        noteExpandText.style.maxHeight = noteExpandText.scrollHeight + 'px';
        caret.style.transform = 'rotate(180deg)';
    }
}